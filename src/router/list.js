import ListRouter from '../pages/lists/ListRouter.vue'
import List from '../pages/lists/List.vue'
import ListCreate from '../pages/lists/ListCreate.vue'
import ListInfo from '../pages/lists/ListInfo.vue'
import ListUpdate from '../pages/lists/ListUpdate.vue'

const lists = [{
    path: '/',
    component: ListRouter,
    children: [
      {
        path: '',
        component: List 
      }, {
        path: '/listcreate',
        component: ListCreate
      }, {
        path: '/listinfo/:id',
        name: 'listinfo',
        component: ListInfo
      }, {
        path: '/listupdate/:id',
        name: 'listupdate',
        component: ListUpdate
    }
  ]
}, ]

export default lists
