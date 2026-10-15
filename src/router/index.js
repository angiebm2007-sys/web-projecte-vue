import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/activitats',
      name: 'activitats',
      component: ActivitiesView,
    },
    {
      path: '/sobre-nosaltres',
      name: 'sobre-nosaltres',
      component: AboutView,
    },
  ],
})

export default router