import imgeRouter from '../pages/img/imgRouter.vue'
import img from '../pages/img/img.vue'


const images = [{
    path: '/image',
    component: imgeRouter,
    children: [
      {
        path: '',
        component: img
      }
  ]
}, ]

export default images
