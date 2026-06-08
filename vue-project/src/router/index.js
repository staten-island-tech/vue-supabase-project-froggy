import { createRouter, createWebHistory } from 'vue-router'
import UserAccount from '@/views/UserAccount.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

{
  path: '/UserAccount',
  name: 'UserAccount',
  component: UserAccount,
},

{
  path: '/Cr',
  name: 'Us',
  component: CreatePost,
},
  ],
})

export default router
