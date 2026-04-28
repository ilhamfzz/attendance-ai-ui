import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const name = ref(null)
  const username = ref(null)
  const role = ref(null)
  const avatar = ref(null)

  function login(userData) {
    token.value = userData.token
    name.value = userData.name
    username.value = userData.username
    role.value = userData.role
    avatar.value = userData.avatar
  }

  function logout() {
    token.value = null
    name.value = null
    username.value = null
    role.value = null
    avatar.value = null
  }

  return { token, name, username, role, avatar, login, logout }
})
