import { createRouter, createWebHistory } from 'vue-router'
import follows from '@/views/follows.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/1',
      name: 'follows',
      component: follows,
    },
  ],
})

export default router
