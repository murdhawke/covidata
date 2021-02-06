import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import Axios from 'axios'
import 'boxicons'

Vue.config.productionTip = false
Vue.use(Axios)

import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax, {
    // options here
    colors: {
      primary:'#2584e2',
      success:'rgb(23, 201, 100)',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark:'rgb(36, 33, 69)'
    }
  })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
