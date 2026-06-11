import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
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
=======
import CreatePost from '@/views/CreatePost.vue'
import UserAccount from '@/views/UserAccount.vue'
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
>>>>>>> 07e195ad4ea7474681bfe1ce23c19d1a765dcee8
  ],
})

export default router
