import type { APIRoute } from "astro"
import { verifyToken } from "../../../lib/auth"

export const GET: APIRoute = async ({ request }) => {
  try {
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

    return new Response(JSON.stringify({ success: true, user }), {
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
