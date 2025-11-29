import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    error: false,
  }),

  actions: {
    async login(email, password) {
      try {
        const url = 'https://storedb-api.onrender.com/node-api/users/signin'

        const { data } = await axios.post(url, {
          email,
          password,
        })
        this.user = {
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        }

        this.token = data.token
        this.error = false

        return true
      } catch (err) {
        console.error('Error en login:', err)

        this.error = true
        this.user = null
        this.token = null
        return false
      }
    },

    logout() {
      this.user = null
      this.token = null
      this.error = false
    },
  },
})
