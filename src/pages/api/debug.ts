import type { APIRoute } from "astro"
import { testConnection } from "../../lib/database"
import { DB_CONFIG, JWT_SECRET } from "../../config/env"

export const GET: APIRoute = async () => {
  try {
    // Verificar configuración
    const envCheck = {
      DB_HOST: DB_CONFIG.host,
      DB_PORT: DB_CONFIG.port,
      DB_NAME: DB_CONFIG.database,
      DB_USER: DB_CONFIG.user,
      DB_PASSWORD: DB_CONFIG.password ? "✅ SET" : "❌ NO SET",
      JWT_SECRET: JWT_SECRET ? "✅ SET" : "❌ NO SET",
    }

    // Probar conexión
    const connectionTest = await testConnection()

    return new Response(
      JSON.stringify({
        success: true,
        environment: envCheck,
        database_connection: connectionTest ? "✅ CONNECTED" : "❌ FAILED",
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

