<template>
  <div class="layout">
    <header>
      <h2>Digimon App</h2>
      <button @click="logout">Cerrar sesión</button>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth.store'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const logout = () => {
  auth.logout()
  router.push('/')
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #e5e5e5;
}
</style>
