import { query, transaction} from "./database"

export interface EventReservation {
  id: string
  userId: string
  eventId: string
  ticketType: "general" | "vip" | "premium"
  quantity: number
  totalAmount: number
  status: "pending" | "confirmed" | "cancelled"
  paymentStatus: "pending" | "paid" | "failed"
  reservationCode: string
  specialRequests?: string
  createdAt: string
}

export interface TableReservation {
  id: string
  userId: string
  reservationDate: string
  reservationTime: string
  guestCount: number
  tableType: "regular" | "vip" | "premium" | "private"
  tablePrice: number
  services: string[]
  servicesPrice: number
  totalAmount: number
  status: "pending" | "confirmed" | "cancelled"
  specialOccasion?: string
  specialRequests?: string
  reservationCode: string
  createdAt: string
}

export interface CreateEventReservationData {
  userId: string
  eventId: string
  ticketType: "general" | "vip" | "premium"
  quantity: number
  specialRequests?: string
}

export interface CreateTableReservationData {
  userId: string
  reservationDate: string
  reservationTime: string
  guestCount: number
  tableType: "regular" | "vip" | "premium" | "private"
  services: string[]
  specialOccasion?: string
  specialRequests?: string
}

// Crear reserva de evento
export async function createEventReservation(data: CreateEventReservationData): Promise<EventReservation> {
  const { userId, eventId, ticketType, quantity, specialRequests } = data

  return await transaction(async (client) => {
    // Obtener información del evento
    const eventResult = await client.query(
      "SELECT price, capacity, tickets_sold FROM events WHERE id = $1 AND is_active = true",
      [eventId],
    )

    if (eventResult.rows.length === 0) {
      throw new Error("Evento no encontrado")
    }

    const event = eventResult.rows[0]
    const availableTickets = event.capacity - event.tickets_sold

    if (availableTickets < quantity) {
      throw new Error("No hay suficientes entradas disponibles")
    }

    // Calcular precio según tipo de entrada
    let ticketPrice = event.price
    if (ticketType === "vip") ticketPrice *= 1.5
    if (ticketType === "premium") ticketPrice *= 2

    const totalAmount = ticketPrice * quantity

    // Crear reserva
    const reservationResult = await client.query(
      `INSERT INTO event_reservations (user_id, event_id, ticket_type, quantity, total_amount, special_requests)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, reservation_code, created_at`,
      [userId, eventId, ticketType, quantity, totalAmount, specialRequests],
    )

    // Actualizar tickets vendidos
    await client.query("UPDATE events SET tickets_sold = tickets_sold + $1 WHERE id = $2", [quantity, eventId])

    const reservation = reservationResult.rows[0]

    return {
      id: reservation.id,
      userId,
      eventId,
      ticketType,
      quantity,
      totalAmount,
      status: "pending",
      paymentStatus: "pending",
      reservationCode: reservation.reservation_code,
      specialRequests,
      createdAt: reservation.created_at,
    }
  })
}

// Crear reserva de mesa
export async function createTableReservation(data: CreateTableReservationData): Promise<TableReservation> {
  const {
    userId,
    reservationDate,
    reservationTime,
    guestCount,
    tableType,
    services,
    specialOccasion,
    specialRequests,
  } = data

  // Precios base por tipo de mesa
  const tablePrices = {
    regular: 50,
    vip: 150,
    premium: 300,
    private: 500,
  }

  // Precios de servicios adicionales
  const servicePrices: { [key: string]: number } = {
    "bottle-service": 200,
    "birthday-package": 100,
    photographer: 150,
    "vip-transport": 80,
  }

  const tablePrice = tablePrices[tableType]
  const servicesPrice = services.reduce((total, service) => total + (servicePrices[service] || 0), 0)
  const totalAmount = tablePrice + servicesPrice

  const result = await query(
    `INSERT INTO table_reservations (
      user_id, reservation_date, reservation_time, guest_count, table_type, 
      table_price, services, services_price, total_amount, special_occasion, special_requests
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING id, reservation_code, created_at`,
    [
      userId,
      reservationDate,
      reservationTime,
      guestCount,
      tableType,
      tablePrice,
      services,
      servicesPrice,
      totalAmount,
      specialOccasion,
      specialRequests,
    ],
  )

  const reservation = result.rows[0]

  return {
    id: reservation.id,
    userId,
    reservationDate,
    reservationTime,
    guestCount,
    tableType,
    tablePrice,
    services,
    servicesPrice,
    totalAmount,
    status: "pending",
    specialOccasion,
    specialRequests,
    reservationCode: reservation.reservation_code,
    createdAt: reservation.created_at,
  }
}

// Obtener reservas de evento por usuario
export async function getUserEventReservations(userId: string): Promise<EventReservation[]> {
  const result = await query(
    `SELECT er.*, e.title as event_title, e.artist, e.event_date, e.event_time
     FROM event_reservations er
     JOIN events e ON er.event_id = e.id
     WHERE er.user_id = $1
     ORDER BY er.created_at DESC`,
    [userId],
  )

  return result.rows.map(mapDbEventReservation)
}

// Obtener reservas de mesa por usuario
export async function getUserTableReservations(userId: string): Promise<TableReservation[]> {
  const result = await query("SELECT * FROM table_reservations WHERE user_id = $1 ORDER BY created_at DESC", [userId])

  return result.rows.map(mapDbTableReservation)
}

// Confirmar reserva
export async function confirmReservation(reservationId: string, type: "event" | "table"): Promise<void> {
  const table = type === "event" ? "event_reservations" : "table_reservations"

  await query(`UPDATE ${table} SET status = 'confirmed', payment_status = 'paid' WHERE id = $1`, [reservationId])
}

// Cancelar reserva
export async function cancelReservation(reservationId: string, type: "event" | "table"): Promise<void> {
  if (type === "event") {
    await transaction(async (client) => {
      // Obtener información de la reserva
      const reservationResult = await client.query("SELECT event_id, quantity FROM event_reservations WHERE id = $1", [
        reservationId,
      ])

      if (reservationResult.rows.length > 0) {
        const { event_id, quantity } = reservationResult.rows[0]

        // Devolver tickets al evento
        await client.query("UPDATE events SET tickets_sold = tickets_sold - $1 WHERE id = $2", [quantity, event_id])
      }

      // Cancelar reserva
      await client.query("UPDATE event_reservations SET status = 'cancelled' WHERE id = $1", [reservationId])
    })
  } else {
    await query("UPDATE table_reservations SET status = 'cancelled' WHERE id = $1", [reservationId])
  }
}

// Funciones auxiliares
function mapDbEventReservation(row: any): EventReservation {
  return {
    id: row.id,
    userId: row.user_id,
    eventId: row.event_id,
    ticketType: row.ticket_type,
    quantity: row.quantity,
    totalAmount: Number.parseFloat(row.total_amount),
    status: row.status,
    paymentStatus: row.payment_status,
    reservationCode: row.reservation_code,
    specialRequests: row.special_requests,
    createdAt: row.created_at,
  }
}

function mapDbTableReservation(row: any): TableReservation {
  return {
    id: row.id,
    userId: row.user_id,
    reservationDate: row.reservation_date,
    reservationTime: row.reservation_time,
    guestCount: row.guest_count,
    tableType: row.table_type,
    tablePrice: Number.parseFloat(row.table_price),
    services: row.services || [],
    servicesPrice: Number.parseFloat(row.services_price),
    totalAmount: Number.parseFloat(row.total_amount),
    status: row.status,
    specialOccasion: row.special_occasion,
    specialRequests: row.special_requests,
    reservationCode: row.reservation_code,
    createdAt: row.created_at,
  }
}
