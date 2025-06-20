import { Pool } from "pg"

import { DB_CONFIG } from "../config/env"

console.log("🔧 Configurando conexión a PostgreSQL...")

export const pool = new Pool(DB_CONFIG)

// Función para probar la conexión
export async function testConnection() {
  try {
    const client = await pool.connect()
    console.log("✅ Conexión a PostgreSQL exitosa")
    const result = await client.query("SELECT NOW() as server_time, version() as pg_version")
    console.log("🕐 Hora del servidor:", result.rows[0].server_time)
    console.log("🗄️ Versión PostgreSQL:", result.rows[0].pg_version.split(" ")[0])
    client.release()
    return true
  } catch (error) {
    console.error("❌ Error de conexión a PostgreSQL:", error)
    return false
  }
}

// Función helper para queries
export async function query(text: string, params?: any[]) {
  try {
    const result = await pool.query(text, params)
    return result
  } catch (error) {
    console.error("❌ Error en query:", error)
    throw error
  }
}

// Probar conexión al inicializar
testConnection().catch(console.error)
