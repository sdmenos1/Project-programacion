import type { APIRoute } from "astro"

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      success: true,
      message: "API funcionando correctamente",
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  )
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json()
    return new Response(
      JSON.stringify({
        success: true,
        message: "POST funcionando",
        received: data,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error procesando POST",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
