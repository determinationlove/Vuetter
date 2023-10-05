import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from '../views/HelloWorld.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    component: HelloWorld
  },
  {
    path: "/home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

export default router
