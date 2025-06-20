import type { APIRoute } from "astro"
import { getAllDrinks, getDrinksByCategory, getPopularDrinks } from "../../../lib/drinks"

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url)
    const category = url.searchParams.get("category")
    const popular = url.searchParams.get("popular")

    let drinks

    if (popular === "true") {
      drinks = await getPopularDrinks()
    } else if (category) {
      drinks = await getDrinksByCategory(category)
    } else {
      drinks = await getAllDrinks()
    }

    return new Response(JSON.stringify({ success: true, drinks }), {
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
