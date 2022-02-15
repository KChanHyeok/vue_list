import homeRouter from '../pages/home/homeRouter.vue'
import home from '../pages/home/home.vue'


const homes = [{
    path: '/home',
    component: homeRouter,
    children: [
      {
        path: '',
        component: home
      }
  ]
}, ]

export default homes
