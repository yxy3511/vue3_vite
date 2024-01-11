import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'productsList' }
    },
    {
      path: '/productsList',
      name: 'productsList',
      component: () => import('../views/products/list.vue')
    }
  ]
})

export default router
