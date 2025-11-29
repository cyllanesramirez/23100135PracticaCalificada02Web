<template>
  <MainLayout>
    <div class="home-container">
      <h1>Bienvenido</h1>
      <router-link class="btn" to="/digimon">Ver Digimon</router-link>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
</script>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 80px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
  color: #1e88e5;
}

.btn {
  display: inline-block;
  margin-top: 25px;
  padding: 12px 25px;
  background: #1e88e5;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: 0.2s;
}

.btn:hover {
  background: #1565c0;
}
</style>
