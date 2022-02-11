import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstartpVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstartpVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
