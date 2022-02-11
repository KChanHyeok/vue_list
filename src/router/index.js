import Vue from 'vue'
import VueRouter from 'vue-router'
import list from './list'

Vue.use(VueRouter)

const routes = {
  mode: 'history',
  routes: [
    ...list
  ]
}

let router = new VueRouter(routes)

export default router