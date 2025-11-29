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
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}
img {
  width: 120px;
}
</style>
