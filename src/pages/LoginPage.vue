<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth.store'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const successMessage = ref('')

const auth = useAuthStore()
const router = useRouter()

const doLogin = async () => {
  const ok = await auth.login(email.value, password.value)

  if (ok) {
    successMessage.value = 'Inicio de sesión exitoso 🎉'

    setTimeout(() => {
      router.push('/digimon')
    }, 1200) // 1.2 segundos antes de redirigir
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Iniciar Sesión</h1>

      <input type="email" v-model="email" placeholder="Correo" class="login-input" />

      <input type="password" v-model="password" placeholder="Contraseña" class="login-input" />

      <button class="login-btn" @click="doLogin">Ingresar</button>

      <!-- Error -->
      <p v-if="auth.error" class="error-msg">Credenciales incorrectas</p>

      <!-- Éxito -->
      <p v-if="successMessage" class="success-msg">
        {{ successMessage }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.success-msg {
  margin-top: 15px;
  color: #2e7d32;
  font-weight: bold;
  font-size: 15px;
}
</style>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1e88e5, #42a5f5);
  font-family: 'Segoe UI', sans-serif;
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 14px;
  width: 350px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h1 {
  margin-bottom: 25px;
  font-size: 28px;
  font-weight: bold;
  color: #1e88e5;
  letter-spacing: 1px;
}

.login-input {
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  font-size: 15px;
  transition: 0.2s;
}

.login-input:focus {
  border-color: #1e88e5;
  outline: none;
  box-shadow: 0 0 4px rgba(30, 136, 229, 0.4);
}

.login-btn {
  width: 100%;
  padding: 12px;
  background: #1e88e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.login-btn:hover {
  background: #1565c0;
}

.error-msg {
  margin-top: 15px;
  color: #d32f2f;
  font-weight: bold;
}
</style>
