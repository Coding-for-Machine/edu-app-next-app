export async function loginUser(email: string, password: string, rememberMe: boolean) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would validate credentials against a backend
  if (email === "demo@example.com" && password === "password") {
    // Store user session
    localStorage.setItem("user", JSON.stringify({ email, name: "Demo User" }))
    return { success: true }
  }

  // For demo purposes, we'll accept any credentials
  localStorage.setItem("user", JSON.stringify({ email, name: email.split("@")[0] }))
  return { success: true }
}

export async function registerUser(name: string, email: string, password: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real app, this would create a user account in the backend
  // For demo purposes, we'll just return success
  return { success: true }
}

export async function logoutUser() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Clear user session
  localStorage.removeItem("user")
  return { success: true }
}

export async function fetchUserProfile() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 800))

  // In a real app, this would fetch the user profile from the backend
  return {
    name: "Alisher Isaev",
    email: "alisher@example.com",
    phone: "+998 90 123 45 67",
    bio: "Web dasturlash bo'yicha o'quvchi. HTML, CSS va JavaScript texnologiyalarini o'rganmoqdaman.",
    location: "Toshkent, O'zbekiston",
    website: "https://alisher.dev",
    avatar: "/placeholder.svg?height=200&width=200",
  }
}

export async function updateUserProfile(userData: any) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1200))

  // In a real app, this would update the user profile in the backend
  return { success: true, user: userData }
}

export async function resetPassword(email: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would send a password reset email
  return { success: true }
}

export async function changePassword(currentPassword: string, newPassword: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would change the user's password in the backend
  return { success: true }
}

export function getCurrentUser() {
  // In a real app with server-side rendering, this would be different
  if (typeof window !== "undefined") {
    const userJson = localStorage.getItem("user")
    if (userJson) {
      return JSON.parse(userJson)
    }
  }
  return null
}

export function isAuthenticated() {
  return !!getCurrentUser()
}
