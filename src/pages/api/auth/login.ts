import type { APIRoute } from "astro"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { query, testConnection } from "../../../config/database-direct"

export const POST: APIRoute = async ({ request }) => {
  console.log("🚀 Login API called")

  try {
    // Probar conexión primero
    const isConnected = await testConnection()
    if (!isConnected) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Error de conexión a la base de datos",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const data = await request.json()
    console.log("👤 Login attempt for:", data.email)

    const { email, password } = data

    if (!email || !password) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email y contraseña son requeridos",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Buscar usuario
    console.log("🔍 Buscando usuario en la base de datos...")
    const result = await query(
      "SELECT id, username, email, password_hash, first_name, last_name, phone, date_of_birth, gender, is_vip FROM users WHERE email = $1",
      [email],
    )

    if (result.rows.length === 0) {
      console.log("❌ Usuario no encontrado")
      return new Response(
        JSON.stringify({
          success: false,
          error: "Credenciales inválidas",
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const user = result.rows[0]
    console.log("✅ Usuario encontrado:", user.username)

    // Verificar contraseña
    console.log("🔐 Verificando contraseña...")
    const isValidPassword = await bcrypt.compare(password, user.password_hash)

    if (!isValidPassword) {
      console.log("❌ Contraseña incorrecta")
      return new Response(
        JSON.stringify({
          success: false,
          error: "Credenciales inválidas",
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    console.log("✅ Contraseña correcta")

    // Crear token JWT (usando secreto hardcodeado temporalmente)
    const token = jwt.sign({ userId: user.id, email: user.email }, "kali-club-super-secret-key-2024", {
      expiresIn: "7d",
    })

    // Crear sesión
    await query("INSERT INTO user_sessions (user_id, token, expires_at) VALUES ($1, $2, $3)", [
      user.id,
      token,
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    ])

    console.log("🎉 Login exitoso para:", user.username)

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
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error: any) {
    console.error("💥 Login error:", error)
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error interno del servidor: " + error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
