import Vue from 'vue'
import VueRouter from 'vue-router'
import list from './list'
import home from './home'

Vue.use(VueRouter)

const routes = {
  mode: 'history',
  routes: [
    ...list,
    ...home
  ]
}

let router = new VueRouter(routes)

export default router