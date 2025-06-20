import type { APIRoute } from "astro"
import { testConnection, query } from "../../config/database-direct"

export const GET: APIRoute = async () => {
  console.log("🧪 Test DB API called")

  try {
    // Probar conexión
    const isConnected = await testConnection()

    if (!isConnected) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "No se pudo conectar a la base de datos",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Hacer una consulta simple
    const result = await query("SELECT NOW() as server_time, current_database() as database, version() as pg_version")

    return new Response(
      JSON.stringify({
        success: true,
        message: "Conexión exitosa",
        server_time: result.rows[0].server_time,
        database: result.rows[0].database,
        pg_version: result.rows[0].pg_version.split(" ")[0],
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error: any) {
    console.error("💥 Test DB error:", error)
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error de conexión: " + error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
