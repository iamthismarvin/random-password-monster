import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/pwa',
      name: 'pwa',
      component: () => import('@/views/PWAView.vue'),
    },
  ],
})

export default router
