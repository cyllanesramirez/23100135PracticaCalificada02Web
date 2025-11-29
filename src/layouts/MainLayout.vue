<template>
  <div class="layout">
    <header class="header">
      <h2 class="title">Digimon App</h2>
      <button class="logout-btn" @click="logout">Cerrar sesión</button>
    </header>

    <main class="content">
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
.layout {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f7f7f7;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: #1e88e5;
  color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.title {
  margin: 0;
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: bold;
}

.logout-btn {
  background: white;
  color: #1e88e5;
  border: none;
  padding: 8px 18px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.logout-btn:hover {
  background: #e3f2fd;
}

.content {
  padding: 30px 40px;
}
</style>
