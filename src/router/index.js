import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/pages/HomePage.vue';
import SignInPage from '../views/pages/SignInPage.vue';

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
  ],
});

export default router;
