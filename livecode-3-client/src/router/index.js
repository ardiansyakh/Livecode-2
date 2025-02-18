import Vue from 'vue'
import VueRouter from 'vue-router'
import Animals from '../views/Animals.vue'
import Favorites from '../views/Favorites.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'listAnimals',
    component: Animals
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/login',
    name: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
