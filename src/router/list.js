import ListRouter from '../pages/lists/ListRouter.vue'
import List from '../pages/lists/List.vue'
import ListCreate from '../pages/lists/ListCreate.vue'
import ListInfo from '../pages/lists/ListInfo.vue'
import ListUpdate from '../pages/lists/ListUpdate.vue'

const lists = [{
    path: '/list',
    component: ListRouter,
    children: [
      {
        path: '',
        component: List 
      }, {
        path: '/list/listcreate',
        component: ListCreate
      }, {
        path: '/list/listinfo/:id',
        name: 'listinfo',
        component: ListInfo
      }, {
        path: '/list/listupdate/:id',
        name: 'listupdate',
        component: ListUpdate
    }
  ]
}, ]

export default lists
