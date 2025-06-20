import { Pool } from "pg"

// Configuración directa sin variables de entorno (temporal para debugging)
const DB_CONFIG_DIRECT = {
  host: "localhost",
  port: 5432,
  database: "kali_club",
  user: "postgres",
  password: "Sdmenos456*", // Tu contraseña directa
  ssl: false,
  connectionTimeoutMillis: 5000,
}

console.log("🔧 Usando configuración directa:", {
  ...DB_CONFIG_DIRECT,
  password: "***HIDDEN***",
})

export const pool = new Pool(DB_CONFIG_DIRECT)

// Función para probar la conexión
export async function testConnection() {
  try {
    console.log("🔄 Intentando conectar a PostgreSQL...")
    const client = await pool.connect()
    console.log("✅ Conexión a PostgreSQL exitosa")

    const result = await client.query("SELECT NOW() as server_time, current_database() as db_name")
    console.log("🕐 Hora del servidor:", result.rows[0].server_time)
    console.log("🗄️ Base de datos:", result.rows[0].db_name)

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
