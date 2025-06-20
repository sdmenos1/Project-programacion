import type { APIRoute } from "astro"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { Pool } from "pg"

// Configuración de la base de datos
const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: Number.parseInt(process.env.DB_PORT || "5432"),
  database: process.env.DB_NAME || "kali_club",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
})

export const POST: APIRoute = async ({ request }) => {
  console.log("Register API called")

  try {
    const data = await request.json()
    console.log("Register data received:", data)

    // Validar datos requeridos
    const { username, email, password, firstName, lastName } = data

    if (!username || !email || !password || !firstName || !lastName) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Todos los campos requeridos deben ser completados",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email inválido",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Validar contraseña
    if (password.length < 6) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "La contraseña debe tener al menos 6 caracteres",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Verificar si el usuario ya existe
    const existingUser = await pool.query("SELECT id FROM users WHERE email = $1 OR username = $2", [email, username])

    if (existingUser.rows.length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "El email o nombre de usuario ya existe",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10)

    // Crear usuario
    const result = await pool.query(
      `INSERT INTO users (username, email, password_hash, first_name, last_name, phone, date_of_birth, gender, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
       RETURNING id, username, email, first_name, last_name, phone, date_of_birth, gender, is_vip, created_at`,
      [
        username,
        email,
        hashedPassword,
        firstName,
        lastName,
        data.phone || null,
        data.dateOfBirth || null,
        data.gender || null,
      ],
    )

    const user = result.rows[0]

    // Crear token JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || "default-secret", {
      expiresIn: "7d",
    })

    // Crear sesión
    await pool.query("INSERT INTO user_sessions (user_id, token, expires_at) VALUES ($1, $2, $3)", [
      user.id,
      token,
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    ])

    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          phone: user.phone,
          dateOfBirth: user.date_of_birth,
          gender: user.gender,
          isVip: user.is_vip,
        },
        token,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error: any) {
    console.error("Register error:", error)
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Error interno del servidor",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
