import { createRouter, createWebHistory } from 'vue-router'
import UserAccount from '@/views/UserAccount.vue'
import grt from '@/views/grt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/2',
      name: 'CreatePost',
      component: CreatePost,
    },
    {
      path: '/3',
      name: 'UserAccount',
      component: UserAccount,
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
