import { createRouter, createWebHistory } from 'vue-router'
import createpin from '@/views/CreatePin.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

{
  path: '/CreatePin',
  name: 'CreatePin',
  component: createpin,
},
  ],
})

export default router
