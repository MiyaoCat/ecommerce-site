import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/pages/HomePage.vue';
import SignInPage from '../views/pages/SignInPage.vue';
import ProductPage from '../views/pages/ProductPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInPage,
    },    
    {
      path: '/product-page',
      name: 'product-page',
      component: ProductPage,
    },    
  ],
});

export default router;
