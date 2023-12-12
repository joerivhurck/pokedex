import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details/:name',
    name: 'pokemonDetails',
    component: () => import('@/views/detailsVieuw.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
