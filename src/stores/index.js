import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      userid: localStorage.getItem('userid') || null,
      pagecode: null
    }
  }
})
