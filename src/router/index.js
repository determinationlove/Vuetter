import { createRouter, createWebHistory } from 'vue-router'

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
    props: (route) => route.params
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

export default router
