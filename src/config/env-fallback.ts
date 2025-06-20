// ⚠️ SOLO PARA PRUEBAS - NO USAR EN PRODUCCIÓN
console.log("🚨 Usando configuración de fallback (hardcodeada)")

export const DB_CONFIG = {
  host: "localhost",
  port: 5432,
  database: "kali_club",
  user: "postgres",
  password: "Sdmenos456*", // ⚠️ Tu contraseña hardcodeada temporalmente
}

export const JWT_SECRET = "kali-club-super-secret-key-2024"

console.log("🎯 Configuración hardcodeada cargada:", {
  ...DB_CONFIG,
  password: "***HIDDEN***",
})
