import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from "../views/Profile.vue"
import FromView from "../views/FromView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        layout: 'Main'
      }
    },
    {
      path:'/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path:'/form',
      name: 'form',
      component: FromView,
      meta:{
        layout: 'Default'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
