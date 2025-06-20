import { query } from "./database"

export interface Drink {
  id: string
  name: string
  category: string
  description: string
  price: number
  alcoholPercentage: number
  ingredients: string[]
  imageUrl: string
  isPopular: boolean
  isAvailable: boolean
}

export interface DrinkOrder {
  id: string
  userId: string
  tableReservationId?: string
  totalAmount: number
  status: "pending" | "preparing" | "ready" | "delivered" | "cancelled"
  orderType: "table" | "bar"
  specialInstructions?: string
  items: DrinkOrderItem[]
  createdAt: string
}

export interface DrinkOrderItem {
  id: string
  drinkId: string
  drinkName: string
  quantity: number
  unitPrice: number
  subtotal: number
}

export interface CreateDrinkOrderData {
  userId: string
  tableReservationId?: string
  orderType: "table" | "bar"
  specialInstructions?: string
  items: {
    drinkId: string
    quantity: number
  }[]
}

// Obtener todas las bebidas
export async function getAllDrinks(): Promise<Drink[]> {
  const result = await query("SELECT * FROM drinks WHERE is_available = true ORDER BY category, name")

  return result.rows.map(mapDbDrink)
}

// Obtener bebidas por categoría
export async function getDrinksByCategory(category: string): Promise<Drink[]> {
  const result = await query("SELECT * FROM drinks WHERE category = $1 AND is_available = true ORDER BY name", [
    category,
  ])

  return result.rows.map(mapDbDrink)
}

// Obtener bebidas populares
export async function getPopularDrinks(): Promise<Drink[]> {
  const result = await query("SELECT * FROM drinks WHERE is_popular = true AND is_available = true ORDER BY name")

  return result.rows.map(mapDbDrink)
}

// Obtener bebida por ID
export async function getDrinkById(id: string): Promise<Drink | null> {
  const result = await query("SELECT * FROM drinks WHERE id = $1 AND is_available = true", [id])

  if (result.rows.length === 0) {
    return null
  }

  return mapDbDrink(result.rows[0])
}

// Crear orden de bebidas
export async function createDrinkOrder(data: CreateDrinkOrderData): Promise<DrinkOrder> {
  const { userId, tableReservationId, orderType, specialInstructions, items } = data

  // Obtener información de las bebidas
  const drinkIds = items.map((item) => item.drinkId)
  const drinksResult = await query("SELECT id, name, price FROM drinks WHERE id = ANY($1) AND is_available = true", [
    drinkIds,
  ])

  const drinks = new Map(drinksResult.rows.map((drink) => [drink.id, drink]))

  // Calcular total
  let totalAmount = 0
  const orderItems: DrinkOrderItem[] = []

  for (const item of items) {
    const drink = drinks.get(item.drinkId)
    if (!drink) {
      throw new Error(`Bebida no encontrada: ${item.drinkId}`)
    }

    const subtotal = drink.price * item.quantity
    totalAmount += subtotal

    orderItems.push({
      id: "", // Se asignará después
      drinkId: item.drinkId,
      drinkName: drink.name,
      quantity: item.quantity,
      unitPrice: drink.price,
      subtotal,
    })
  }

  // Crear orden
  const orderResult = await query(
    `INSERT INTO drink_orders (user_id, table_reservation_id, total_amount, order_type, special_instructions)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, created_at`,
    [userId, tableReservationId, totalAmount, orderType, specialInstructions],
  )

  const orderId = orderResult.rows[0].id
  const createdAt = orderResult.rows[0].created_at

  // Crear items de la orden
  for (const item of orderItems) {
    const itemResult = await query(
      `INSERT INTO drink_order_items (order_id, drink_id, quantity, unit_price, subtotal)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id`,
      [orderId, item.drinkId, item.quantity, item.unitPrice, item.subtotal],
    )

    item.id = itemResult.rows[0].id
  }

  return {
    id: orderId,
    userId,
    tableReservationId,
    totalAmount,
    status: "pending",
    orderType,
    specialInstructions,
    items: orderItems,
    createdAt,
  }
}

// Obtener órdenes de usuario
export async function getUserDrinkOrders(userId: string): Promise<DrinkOrder[]> {
  const ordersResult = await query("SELECT * FROM drink_orders WHERE user_id = $1 ORDER BY created_at DESC", [userId])

  const orders: DrinkOrder[] = []

  for (const orderRow of ordersResult.rows) {
    const itemsResult = await query(
      `SELECT doi.*, d.name as drink_name
       FROM drink_order_items doi
       JOIN drinks d ON doi.drink_id = d.id
       WHERE doi.order_id = $1`,
      [orderRow.id],
    )

    const items = itemsResult.rows.map(mapDbDrinkOrderItem)

    orders.push({
      id: orderRow.id,
      userId: orderRow.user_id,
      tableReservationId: orderRow.table_reservation_id,
      totalAmount: Number.parseFloat(orderRow.total_amount),
      status: orderRow.status,
      orderType: orderRow.order_type,
      specialInstructions: orderRow.special_instructions,
      items,
      createdAt: orderRow.created_at,
    })
  }

  return orders
}

// Actualizar estado de orden
export async function updateOrderStatus(orderId: string, status: DrinkOrder["status"]): Promise<void> {
  await query("UPDATE drink_orders SET status = $1 WHERE id = $2", [status, orderId])
}

// Funciones auxiliares
function mapDbDrink(row: any): Drink {
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    description: row.description,
    price: Number.parseFloat(row.price),
    alcoholPercentage: Number.parseFloat(row.alcohol_percentage),
    ingredients: row.ingredients || [],
    imageUrl: row.image_url,
    isPopular: row.is_popular,
    isAvailable: row.is_available,
  }
}

function mapDbDrinkOrderItem(row: any): DrinkOrderItem {
  return {
    id: row.id,
    drinkId: row.drink_id,
    drinkName: row.drink_name,
    quantity: row.quantity,
    unitPrice: Number.parseFloat(row.unit_price),
    subtotal: Number.parseFloat(row.subtotal),
  }
}
