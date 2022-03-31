import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/infocup',
    name: 'infocup',
    component: () => import('@/views/InfoCupView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/complain',
    name: 'complain',
    component: () => import('@/views/ComplainView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
