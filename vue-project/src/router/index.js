import { createRouter, createWebHistory } from 'vue-router'
import UserAccount from '@/views/UserAccount.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'useracc',
      component: UserAccount,
    },
  
  ],
})

export default router
