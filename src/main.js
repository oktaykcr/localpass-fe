import Vue from 'vue'
import './plugins/vuetify'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store/store'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

Vue.use(VueResource)

Vue.config.productionTip = false
Vue.http.options.root = 'http://localhost:8082/api/v1'

Vue.http.interceptors.push(function(request, next) {
  const login = request.url.includes("password")
  const logout = request.url.includes("logout")

  if(login) {
    request.headers.set('Authorization', store.getters.token)
    request.headers.set('Accept', 'application/json')
  }

  if(logout) {
    request.headers.delete('Authorization', store.getters.token)
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
