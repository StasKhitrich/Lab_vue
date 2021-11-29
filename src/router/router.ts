import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue';
import Products from '@/pages/Products.vue';
import About from '@/pages/About.vue';
import Error from '@/pages/Page404.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/:catchAll(.*)',
    component: Error
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.Base_URL),
  linkActiveClass: 'active'
})

export default router;
