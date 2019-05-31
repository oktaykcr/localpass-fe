import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchInputValue: "",
    password:{}
  },
  mutations: {
    handleSearchInput(state, searchedValue) {
      state.searchInputValue = searchedValue;
    },

    SET_PASSWORD (state, passwordObject) {
      state.password = passwordObject;
    },

    RESET_PASSWORD (state) {
      state.password = {};
    }

  },
  actions: {
    setPassword ({commit, state}, passwordObject) {
      commit('SET_PASSWORD', passwordObject)
      return state.password;
    },
    resetPassword ({commit, state}) {
      commit('RESET_PASSWORD')
      return state.password;
    }
  }
})
