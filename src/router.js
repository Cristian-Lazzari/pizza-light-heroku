import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import ChiSiamo from './pages/ChiSiamo.vue';
import Contatti from './pages/Contatti.vue';
import Menu from './pages/Menu.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/chi-siamo',
        name: 'chi-siamo',
        component: ChiSiamo,
      },
      {
        path: '/contatti',
        name: 'contatti',
        component: Contatti,
      },
      {
        path: '/menu',
        name: 'menu',
        component: Menu,
      },

    ]
  });
  
  export { router };