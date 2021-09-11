import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Dashboard from '../components/Dashboard'
import Login from '../components/loginForm'
import Signup from '../components/SignupForm'
import helloworld from '../components/HelloWorld'
import cards from '../components/cards'
import name from '../components/name'
import details from '../components/Details'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/details',
    name: 'Details',
    component: details
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: helloworld
  },
  {
    path: '/cards',
    name: 'cards',
    component: cards
  },
  {
    path: '/name',
    name: 'name',
    component: name
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
