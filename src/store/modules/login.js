import Vue from 'vue'
import router from "../../router"

const state = {
    token: null,
    username: null
};

const mutations = {
    authUser(state, token) {
        state.token = token
    },
    clearAuthData(state) {
        state.token = null
        state.username = null
    }
};

const actions = {
    register({ commit, dispatch }, user) {
        Vue.http.post("user/register", user).then(
            response => {
                router.replace('/login')
            }, error => {
                dispatch('enableError', "Registration Failed")
            }
        )
    },
    login({ commit, dispatch }, user) {
        Vue.http.post("user/login", {}, {params: {username: user.username, password: user.password}}).then(
            response => {
                commit('authUser', response.headers.get('Authorization'))
                router.replace('/password')
            }, error => {
                dispatch('enableError', "Authentication Failed")
            }
        )
    },
    logout({ commit }) {
        commit('clearAuthData')
        router.replace('/')
    }
};

const getters = {
    username(state) {
        return state.username
    },
    isAuthenticated(state) {
        return state.token != null
    },
    token(state) {
        return state.token
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}