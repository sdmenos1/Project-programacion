import dotenv from "dotenv"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Cargar variables de entorno desde la raíz del proyecto
const projectRoot = join(__dirname, "..", "..")
dotenv.config({ path: join(projectRoot, ".env") })

console.log("🔧 Cargando variables de entorno desde:", join(projectRoot, ".env"))

// Función para obtener variables de entorno con valores por defecto
function getEnvVar(name: string, defaultValue?: string): string {
  const value = process.env[name] || defaultValue
  console.log(`📋 ${name}:`, value ? "✅ SET" : "❌ NOT SET")

  if (!value) {
    throw new Error(`❌ Variable de entorno ${name} no está definida`)
  }
  return value
}

// Configuración de la base de datos
export const DB_CONFIG = {
  host: getEnvVar("DB_HOST", "localhost"),
  port: Number.parseInt(getEnvVar("DB_PORT", "5432")),
  database: getEnvVar("DB_NAME", "kali_club"),
  user: getEnvVar("DB_USER", "postgres"),
  password: getEnvVar("DB_PASSWORD"),
}

export const JWT_SECRET = getEnvVar("JWT_SECRET", "default-secret")

console.log("🎯 Configuración final:", {
  ...DB_CONFIG,
  password: "***HIDDEN***",
})
