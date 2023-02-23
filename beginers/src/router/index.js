import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('../views/vModel.vue')
    },
    {
      path: '/for',
      name: 'for',
      component: () => import('../views/vFor.vue')
    },
    {
      path: '/vif',
      name: 'vif',
      component: () => import('../views/vIf.vue')
    },
    {
      path: '/comp',
      name: 'comp',
      component: () => import('../views/computed.vue')
    },
  ]
})

export default router
