import { createRouter, createWebHistory } from 'vue-router'
import UserAccount from '@/views/UserAccount.vue'
import CreatePost from '@/views/CreatePost.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'useracc',
      component: UserAccount,
    },
    {
      path: '/2',
      name: 'create',
      component: CreatePost,
    },
  ],
})

export default router
