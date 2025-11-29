import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import DigimonPage from '../pages/DigimonPage.vue'
import { useAuthStore } from '../stores/auth.store'

const routes = [
  { path: '/', component: LoginPage },
  { path: '/digimon', component: DigimonPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (!auth.user && to.path !== '/') return '/'
})

export default router
