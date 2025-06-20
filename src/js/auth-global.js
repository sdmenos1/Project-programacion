// Sistema de autenticación global con CSS puro
console.log("Auth script loaded")

// Variables globales
let authState = {
  isAuthenticated: false,
  user: null,
  token: null,
}

// Funciones de autenticación
function getAuthState() {
  const token = localStorage.getItem("auth_token")
  const userStr = localStorage.getItem("auth_user")

  if (token && userStr) {
    try {
      const user = JSON.parse(userStr)
      authState = { isAuthenticated: true, user, token }
      return authState
    } catch (error) {
      clearAuth()
      return { isAuthenticated: false, user: null, token: null }
    }
  }

  authState = { isAuthenticated: false, user: null, token: null }
  return authState
}

function clearAuth() {
  localStorage.removeItem("auth_token")
  localStorage.removeItem("auth_user")
  authState = { isAuthenticated: false, user: null, token: null }
  updateAuthUI()
}

function updateAuthUI() {
  const authButtons = document.getElementById("auth-buttons")
  const userMenu = document.getElementById("user-menu")

  if (authState.isAuthenticated && authState.user) {
    if (authButtons) authButtons.classList.add("hidden")
    if (userMenu) userMenu.classList.remove("hidden")

    // Actualizar información del usuario
    const userName = document.getElementById("user-name")
    const userEmail = document.getElementById("user-email")

    if (userName) userName.textContent = `${authState.user.firstName} ${authState.user.lastName}`
    if (userEmail) userEmail.textContent = authState.user.email
  } else {
    if (authButtons) authButtons.classList.remove("hidden")
    if (userMenu) userMenu.classList.add("hidden")
  }
}

// Funciones del modal
function showAuthModal() {
  console.log("Showing auth modal")
  const modal = document.getElementById("auth-modal")
  if (modal) {
    modal.classList.remove("hidden")
    modal.classList.add("show")
    document.body.style.overflow = "hidden"
  } else {
    console.error("Auth modal not found")
  }
}

function closeAuthModal() {
  console.log("Closing auth modal")
  const modal = document.getElementById("auth-modal")
  if (modal) {
    modal.classList.add("hidden")
    modal.classList.remove("show")
    document.body.style.overflow = ""
  }
}

function showLoginForm() {
  console.log("Showing login form")
  showAuthModal()
  const loginForm = document.getElementById("login-form")
  const registerForm = document.getElementById("register-form")

  if (loginForm) loginForm.classList.remove("hidden")
  if (registerForm) registerForm.classList.add("hidden")
}

function showRegisterForm() {
  console.log("Showing register form")
  showAuthModal()
  const loginForm = document.getElementById("login-form")
  const registerForm = document.getElementById("register-form")

  if (loginForm) loginForm.classList.add("hidden")
  if (registerForm) registerForm.classList.remove("hidden")
}

// Manejar login
async function handleLogin(event) {
  event.preventDefault()
  console.log("Handling login")

  const formData = new FormData(event.target)
  const email = formData.get("email")
  const password = formData.get("password")

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()
    console.log("Login response:", data)

    if (data.success) {
      localStorage.setItem("auth_token", data.token)
      localStorage.setItem("auth_user", JSON.stringify(data.user))
      authState = { isAuthenticated: true, user: data.user, token: data.token }

      closeAuthModal()
      updateAuthUI()
      alert("¡Bienvenido!")
    } else {
      alert(data.error || "Error al iniciar sesión")
    }
  } catch (error) {
    console.error("Login error:", error)
    alert("Error de conexión")
  }
}

// Manejar registro
async function handleRegister(event) {
  event.preventDefault()
  console.log("Handling register")

  const formData = new FormData(event.target)
  const userData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    dateOfBirth: formData.get("dateOfBirth"),
    gender: formData.get("gender"),
  }

  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })

    const data = await response.json()
    console.log("Register response:", data)

    if (data.success) {
      localStorage.setItem("auth_token", data.token)
      localStorage.setItem("auth_user", JSON.stringify(data.user))
      authState = { isAuthenticated: true, user: data.user, token: data.token }

      closeAuthModal()
      updateAuthUI()
      alert("¡Cuenta creada exitosamente!")
    } else {
      alert(data.error || "Error al crear cuenta")
    }
  } catch (error) {
    console.error("Register error:", error)
    alert("Error de conexión")
  }
}

// Logout
async function logout() {
  console.log("Logging out")

  if (authState.token) {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${authState.token}` },
      })
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  clearAuth()
  alert("Sesión cerrada")
}

// Verificar si está autenticado
function isAuthenticated() {
  getAuthState()
  return authState.isAuthenticated
}

// Requerir autenticación
function requireAuth(callback, message = "Debes iniciar sesión para continuar") {
  if (isAuthenticated()) {
    callback()
  } else {
    alert(message)
    showLoginForm()
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing auth")
  getAuthState()
  updateAuthUI()

  // Cerrar modal al hacer clic fuera
  const modal = document.getElementById("auth-modal")
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeAuthModal()
      }
    })
  }
})

// Exponer funciones globalmente
window.showLoginForm = showLoginForm
window.showRegisterForm = showRegisterForm
window.closeAuthModal = closeAuthModal
window.handleLogin = handleLogin
window.handleRegister = handleRegister
window.logout = logout
window.isAuthenticated = isAuthenticated
window.requireAuth = requireAuth
