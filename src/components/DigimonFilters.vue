<template>
  <div class="filters">
    <input v-model="name" placeholder="Filtrar por nombre" @input="emitFilters" />

    <select v-model="level" @change="emitFilters">
      <option value="">Todos los niveles</option>
      <option v-for="l in levels" :key="l" :value="l">{{ l }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['changeFilters'])

const name = ref('')
const level = ref('')

const levels = ['In Training', 'Rookie', 'Champion', 'Ultimate', 'Mega', 'Fresh']

const emitFilters = () => {
  emit('changeFilters', {
    name: name.value,
    level: level.value,
  })
}
</script>

<style scoped>
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
