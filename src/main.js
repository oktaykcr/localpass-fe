import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

Vue.use(VueResource)
Vue.use(BootstrapVue)



Vue.config.productionTip = false
Vue.http.options.root = 'http://localhost:8082/api/v1/password'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
