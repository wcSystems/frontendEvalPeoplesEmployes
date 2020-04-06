import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/evaluar',
      name: 'evaluar',
      component: () => import('./views/Evaluar.vue'),
    },
    {
      path: '/resultados',
      name: 'resultados',
      component: () => import('./views/Resultados.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/Users.vue'),
    },
  ],
});
