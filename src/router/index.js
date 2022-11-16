import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PlayerView from '../views/PlayerView.vue'
import CareerView from '../views/CareerView.vue'
import CommunityView from '../views/CommunityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/player',
      name: 'player',
      component: PlayerView
    },
    {
      path: '/career',
      name: 'career',
      component: CareerView
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityView
    },

  ]
})

export default router
