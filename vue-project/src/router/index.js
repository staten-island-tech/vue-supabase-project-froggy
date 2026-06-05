import { createRouter, createWebHistory } from 'vue-router'
import follows from '@/views/follows.vue'
import UserAccount from '@/views/UserAccount.vue'
import createaccount from '@/views/createaccount.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/1',
      name: 'follows',
      component: follows,
    },
    {
      path: '/2',
      name: 'useracc',
      component: UserAccount,
    },
    {
      path: '/3',
      name: 'createacc',
      component: createaccount,
    },
  ],
})

export default router
