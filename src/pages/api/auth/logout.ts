import type { APIRoute } from "astro"
import { logoutUser } from "../../../lib/auth"

export const POST: APIRoute = async ({ request }) => {
  try {
    const authHeader = request.headers.get("Authorization")
    const token = authHeader?.replace("Bearer ", "")

    if (!token) {
      return new Response(JSON.stringify({ error: "Token requerido" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      })
    }

    await logoutUser(token)

    return new Response(JSON.stringify({ success: true, message: "Sesión cerrada exitosamente" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || "Error interno del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
