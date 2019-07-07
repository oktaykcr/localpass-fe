const state = {
    error: false,
    message: ''
};

const mutations = {
    enableError(state, message) {
        state.error = true
        state.message = message
    },
    disableError(state) {
        state.error = false,
        state.message = ''
    },
    errorTimeout(state) {
        setTimeout(() => {
            state.error = false
            state.message = ''
        }, 5000);
    }
};

const actions = {
    enableError({commit}, message) {
        commit('enableError', message)
        commit('errorTimeout')
    },
    disableError({commit}) {
        commit('disableError')
    }
};

const getters = {
    error(state) {
        return state.error
    },
    message(state) {
        return state.message
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
