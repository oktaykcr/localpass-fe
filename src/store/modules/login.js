import Vue from 'vue'
import router from "../../router"

const state = {
    token: null,
    username: null
};

const mutations = {
    authUser(state, authData) {
        state.token = authData.token
        state.username = authData.username
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
                var authData = {
                    token: response.headers.get('Authorization'),
                    username: response.headers.get('Username')
                }
                commit('authUser', authData)
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