"use client"

interface User {
  id: string
  username: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: string
  gender?: string
  avatarUrl?: string
  isVip: boolean
  memberSince: string
  lastLogin?: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

class AuthStore {
  private state: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
  }

  private listeners: Array<(state: AuthState) => void> = []

  constructor() {
    // Cargar estado desde localStorage al inicializar
    if (typeof window !== "undefined") {
      this.loadFromStorage()
    }
  }

  // Suscribirse a cambios de estado
  subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  // Notificar cambios a los suscriptores
  private notify() {
    this.listeners.forEach((listener) => listener(this.state))
  }

  // Obtener estado actual
  getState(): AuthState {
    return { ...this.state }
  }

  // Cargar estado desde localStorage
  private loadFromStorage() {
    try {
      const token = localStorage.getItem("auth_token")
      const userStr = localStorage.getItem("auth_user")

      if (token && userStr) {
        const user = JSON.parse(userStr)
        this.state = {
          user,
          token,
          isAuthenticated: true,
        }
        this.notify()
      }
    } catch (error) {
      console.error("Error loading auth state:", error)
      this.clearStorage()
    }
  }

  // Guardar estado en localStorage
  private saveToStorage() {
    if (this.state.token && this.state.user) {
      localStorage.setItem("auth_token", this.state.token)
      localStorage.setItem("auth_user", JSON.stringify(this.state.user))
    } else {
      this.clearStorage()
    }
  }

  // Limpiar localStorage
  private clearStorage() {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("auth_user")
  }

  // Login
  async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.success) {
        this.state = {
          user: data.user,
          token: data.token,
          isAuthenticated: true,
        }
        this.saveToStorage()
        this.notify()
        return { success: true }
      } else {
        return { success: false, error: data.error }
      }
    } catch (error) {
      return { success: false, error: "Error de conexión" }
    }
  }

  // Register
  async register(userData: {
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
    dateOfBirth?: string
    gender?: string
  }): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      const data = await response.json()

      if (data.success) {
        this.state = {
          user: data.user,
          token: data.token,
          isAuthenticated: true,
        }
        this.saveToStorage()
        this.notify()
        return { success: true }
      } else {
        return { success: false, error: data.error }
      }
    } catch (error) {
      return { success: false, error: "Error de conexión" }
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      if (this.state.token) {
        await fetch("/api/auth/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
        })
      }
    } catch (error) {
      console.error("Error during logout:", error)
    } finally {
      this.state = {
        user: null,
        token: null,
        isAuthenticated: false,
      }
      this.clearStorage()
      this.notify()
    }
  }

  // Verificar token
  async verifyToken(): Promise<boolean> {
    if (!this.state.token) return false

    try {
      const response = await fetch("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })

      const data = await response.json()

      if (data.success) {
        this.state.user = data.user
        this.notify()
        return true
      } else {
        this.logout()
        return false
      }
    } catch (error) {
      this.logout()
      return false
    }
  }

  // Obtener headers de autorización
  getAuthHeaders(): HeadersInit {
    return this.state.token
      ? {
          Authorization: `Bearer ${this.state.token}`,
          "Content-Type": "application/json",
        }
      : {
          "Content-Type": "application/json",
        }
  }

  // Hacer petición autenticada
  async authenticatedFetch(url: string, options: RequestInit = {}): Promise<Response> {
    const headers = {
      ...this.getAuthHeaders(),
      ...options.headers,
    }

    return fetch(url, {
      ...options,
      headers,
    })
  }
}

// Instancia global del store
export const authStore = new AuthStore()

// Hook para usar en componentes
export function useAuth() {
  return authStore
}
