import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: Home
  },
  {
    path: '/products',
    name: 'productsPage',
    component: () => import('@/views/ProductsPage.vue'), 
  },
  {
    path: '/about',
    name: 'aboutPage',
    component: () => import('@/views/AboutPage.vue'), 
  }  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
