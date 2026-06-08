import { createRouter, createWebHistory } from 'vue-router'
import follows from '@/views/follows.vue'
import UserAccount from '@/views/UserAccount.vue'
import grt from '@/views/grt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/1',
      name: 'follows',
      component: follows,
    },
    {
      path: '/',
      name: 'useracc',
      component: UserAccount,
    },
    {
      path: '/2',
      name: 'get',
      component: grt,
    },
  ],
})

export default router
