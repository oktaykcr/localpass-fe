const state = {
    success: false,
    text: '',
    timeout: 5000
};

const mutations = {
    ENABLE_SUCCESS_MESSAGE(state, text) {
        state.success = true
        state.text = text
    },
    DISABLE_SUCCESS_MESSAGE(state) {
        state.success = false
        state.text = ''
    },
    SUCCESS_TIMEOUT(state) {
        setTimeout(() => {
            state.success = false
            state.text = ''
        }, state.timeout);
    }
};

const actions = {
    enableSuccessMessage({commit}, text) {
        commit('ENABLE_SUCCESS_MESSAGE', text)
        commit('SUCCESS_TIMEOUT')
    },
    disableSuccessMessage({ commit }) {
        commit('DISABLE_SUCCESS_MESSAGE')
    }
};

const getters = {
    success(state) {
        return state.success
    },
    text(state) {
        return state.text
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
