import Vue from 'vue'
import Router from 'vue-router'

import store from './store/store'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Password from './views/Password'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/password',
      name: 'password',
      component: Password,
      beforeEnter(to, from, next) {
        if(store.getters.token) {
          next()
        } else {
          next('/')
        }
      }

    }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('disableError')
  next()
})

export default router