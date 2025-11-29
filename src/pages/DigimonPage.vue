<template>
  <MainLayout>
    <h1>Listado de Digimons</h1>

    <DigimonFilters @changeFilters="filtrar" />

    <div class="grid">
      <DigimonCard v-for="d in filtrados" :key="d.name" :digimon="d" />
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import api from '../services/api'
import MainLayout from '../layouts/MainLayout.vue'
import DigimonCard from '../components/DigimonCard.vue'
import DigimonFilters from '../components/DigimonFilters.vue'

const lista = ref([])
const filtros = ref({ name: '', level: '' })

const cargarDigimon = async () => {
  const r = await api.get('/digimon')
  lista.value = r.data
}

const filtrar = (f) => {
  filtros.value = f
}

const filtrados = computed(() => {
  return lista.value.filter((d) => {
    const matchName = d.name.toLowerCase().includes(filtros.value.name.toLowerCase())
    const matchLevel = filtros.value.level ? d.level === filtros.value.level : true
    return matchName && matchLevel
  })
})

onMounted(() => cargarDigimon())
</script>

<style scoped>
h1 {
  font-size: 36px;
  margin-bottom: 25px;
  color: #333;
  font-weight: 800;
  letter-spacing: 1px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 25px;
  margin-top: 15px;
}
</style>
