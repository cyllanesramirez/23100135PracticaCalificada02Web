<template>
  <div class="login-box">
    <h2>Iniciar Sesión</h2>

    <input v-model="email" placeholder="Correo" />
    <input v-model="password" type="password" placeholder="Contraseña" />

    <button @click="loginUser">Ingresar</button>

    <p class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth.store'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')

const auth = useAuthStore()
const router = useRouter()

const loginUser = async () => {
  const ok = await auth.login(email.value, password.value)
  if (ok) router.push('/digimon')
  else error.value = 'Credenciales incorrectas'
}
</script>

<style scoped>
.login-box {
  width: 300px;
  margin: 100px auto;
  text-align: center;
}
.error {
  color: red;
}
</style>
