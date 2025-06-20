import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { query } from "./database"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"
const JWT_EXPIRES_IN = "7d"

export interface User {
  id: string
  username: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: string
  gender?: string
  avatarUrl?: string
  isVip: boolean
  memberSince: string
  lastLogin?: string
}

export interface RegisterData {
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: string
  gender?: string
}

export interface LoginData {
  email: string
  password: string
}

// Registrar usuario
export async function registerUser(userData: RegisterData): Promise<{ user: User; token: string }> {
  const { username, email, password, firstName, lastName, phone, dateOfBirth, gender } = userData

  // Verificar si el usuario ya existe
  const existingUser = await query("SELECT id FROM users WHERE email = $1 OR username = $2", [email, username])

  if (existingUser.rows.length > 0) {
    throw new Error("El usuario ya existe")
  }

  // Hash de la contraseña
  const passwordHash = await bcrypt.hash(password, 12)

  // Insertar usuario
  const result = await query(
    `INSERT INTO users (username, email, password_hash, first_name, last_name, phone, date_of_birth, gender)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING id, username, email, first_name, last_name, phone, date_of_birth, gender, is_vip, member_since`,
    [username, email, passwordHash, firstName, lastName, phone, dateOfBirth, gender],
  )

  const user = mapDbUserToUser(result.rows[0])
  const token = generateToken(user.id)

  // Crear sesión
  await createSession(user.id, token)

  return { user, token }
}

// Login de usuario
export async function loginUser(loginData: LoginData): Promise<{ user: User; token: string }> {
  const { email, password } = loginData

  // Buscar usuario
  const result = await query(
    `SELECT id, username, email, password_hash, first_name, last_name, phone, date_of_birth, gender, is_vip, member_since
     FROM users WHERE email = $1 AND is_active = true`,
    [email],
  )

  if (result.rows.length === 0) {
    throw new Error("Credenciales inválidas")
  }

  const dbUser = result.rows[0]

  // Verificar contraseña
  const isValidPassword = await bcrypt.compare(password, dbUser.password_hash)
  if (!isValidPassword) {
    throw new Error("Credenciales inválidas")
  }

  // Actualizar último login
  await query("UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = $1", [dbUser.id])

  const user = mapDbUserToUser(dbUser)
  const token = generateToken(user.id)

  // Crear sesión
  await createSession(user.id, token)

  return { user, token }
}

// Verificar token
export async function verifyToken(token: string): Promise<User | null> {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }

    // Verificar sesión en la base de datos
    const sessionResult = await query(
      "SELECT user_id FROM user_sessions WHERE session_token = $1 AND expires_at > CURRENT_TIMESTAMP",
      [token],
    )

    if (sessionResult.rows.length === 0) {
      return null
    }

    // Obtener usuario
    const userResult = await query(
      `SELECT id, username, email, first_name, last_name, phone, date_of_birth, gender, is_vip, member_since, last_login
       FROM users WHERE id = $1 AND is_active = true`,
      [decoded.userId],
    )

    if (userResult.rows.length === 0) {
      return null
    }

    return mapDbUserToUser(userResult.rows[0])
  } catch (error) {
    return null
  }
}

// Logout
export async function logoutUser(token: string): Promise<void> {
  await query("DELETE FROM user_sessions WHERE session_token = $1", [token])
}

// Funciones auxiliares
function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

async function createSession(userId: string, token: string): Promise<void> {
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7) // 7 días

  await query("INSERT INTO user_sessions (user_id, session_token, expires_at) VALUES ($1, $2, $3)", [
    userId,
    token,
    expiresAt,
  ])
}

function mapDbUserToUser(dbUser: any): User {
  return {
    id: dbUser.id,
    username: dbUser.username,
    email: dbUser.email,
    firstName: dbUser.first_name,
    lastName: dbUser.last_name,
    phone: dbUser.phone,
    dateOfBirth: dbUser.date_of_birth,
    gender: dbUser.gender,
    avatarUrl: dbUser.avatar_url,
    isVip: dbUser.is_vip,
    memberSince: dbUser.member_since,
    lastLogin: dbUser.last_login,
  }
}

// Middleware para verificar autenticación
export function requireAuth() {
  return async (request: Request) => {
    const authHeader = request.headers.get("Authorization")
    const token = authHeader?.replace("Bearer ", "")

    if (!token) {
      return new Response(JSON.stringify({ error: "Token requerido" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      })
    }

    const user = await verifyToken(token)
    if (!user) {
      return new Response(JSON.stringify({ error: "Token inválido" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      })
    }

    return user
  }
}
