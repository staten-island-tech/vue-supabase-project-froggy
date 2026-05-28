import { createRouter, createWebHistory } from 'vue-router'
import profiles from '@/views/profiles.vue'
import post from '@/views/post.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/1',
      name: 'profiles',
      component: profiles,
    },
    {
      path: '/2',
      name: 'post',
      component: post,
    },
  ],
})

export default router
