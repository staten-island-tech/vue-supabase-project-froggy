import { createRouter, createWebHistory } from 'vue-router'
import CreatePost from '../../views/CreatePost.vue'
import UserAccount from '../../views/UserAccount.vue'
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
      name: 'Account',
      component: UserAccount,
    },
  ],
})

export default router
