import type { APIRoute } from "astro"
import { verifyToken } from "../../../lib/auth"
import { createDrinkOrder, getUserDrinkOrders } from "../../../lib/drinks"

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

    const orders = await getUserDrinkOrders(user.id)

    return new Response(JSON.stringify({ success: true, orders }), {
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

export const POST: APIRoute = async ({ request }) => {
  try {
    const authHeader = request.headers.get("Authorization")
    const token = authHeader?.replace("Bearer ", "")

    if (!token) {
      return new Response(JSON.stringify({ error: "Debes iniciar sesión para ordenar bebidas" }), {
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

    const data = await request.json()
    const { tableReservationId, orderType, specialInstructions, items } = data

    if (!items || items.length === 0) {
      return new Response(JSON.stringify({ error: "Debes agregar al menos una bebida" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const order = await createDrinkOrder({
      userId: user.id,
      tableReservationId,
      orderType: orderType || "bar",
      specialInstructions,
      items,
    })

    return new Response(JSON.stringify({ success: true, order }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || "Error interno del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
