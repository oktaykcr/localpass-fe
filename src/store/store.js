import Vue from 'vue'
import Vuex from 'vuex'

import Login from './modules/login'
import Password from './modules/password'
import GlobalError from './modules/globalError'
import SuccessMessage from './modules/successMessage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Login,
    Password,
    GlobalError,
    SuccessMessage
  }
})
