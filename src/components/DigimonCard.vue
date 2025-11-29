<template>
  <div class="card">
    <img :src="digimon.img" alt="" />
    <h3>{{ digimon.name }}</h3>
    <p>Nivel: {{ digimon.level }}</p>
  </div>
</template>

<script setup>
defineProps({
  digimon: Object,
})
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

img {
  width: 120px;
  height: 120px;
}

h3 {
  font-size: 20px;
  margin: 10px 0 5px 0;
  color: #333;
  font-weight: bold;
}

p {
  margin: 0;
  color: #666;
  font-size: 14px;
}
</style>
