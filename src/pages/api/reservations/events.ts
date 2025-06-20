import type { APIRoute } from "astro"
import { verifyToken } from "../../../lib/auth"
import { getUserEventReservations } from "../../../lib/reservations"

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

    const reservations = await getUserEventReservations(user.id)

    return new Response(JSON.stringify({ success: true, reservations }), {
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

// export const POST: APIRoute = async ({ request }) => {
//   try {
//     const authHeader = request.headers.get("Authorization")
//     const token = authHeader?.replace("Bearer ", "")

//     if (!token) {
//       return new Response(JSON.stringify({ error: "Token requerido" }), {
//         status: 401,
//         headers: { "Content-Type": "application/json" },
//       })
//     }

//     const user = await verifyToken(token)
//     if (!user) {
//       return new Response(JSON.stringify({ error: "Token inválido" }), {
//         status: 401,
//         headers: { "Content-Type": "application/json" },
//       })
//     }

//     const data = await request.json()
//     const { eventId, ticketType, quantity, specialRequests } = data

//     if (!eventId || !ticketType || !quantity) {
//       return new Response(JSON.stringify({ error: "Datos de reserva incompletos" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       })
//     }

//     const reservation = await createEventReservation({
//       userId: user.id,
//       eventId,
//       ticketType,
//       quantity: Number.parseInt(quantity),
//       specialRequests,
//     })

//     return new Response(JSON.stringify({ success: true, reservation }), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     })
//   } catch (error: any) {
//     return new Response(JSON.stringify({ error: error.message || "Error interno del servidor" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     })
//   }
// }
