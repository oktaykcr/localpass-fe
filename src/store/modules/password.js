const state = {
    searchInputValue: "",
    password: {},
    passwordList: [],
    isDialogOpen: false
};

const mutations = {
    HANDLE_SEARCHED_INPUT(state, searchedValue) {
        state.searchInputValue = searchedValue;
    },
    SET_PASSWORD_LIST(state, passwordArray) {
        state.passwordList = passwordArray
    },
    ADD_TO_PASSWORD_LIST(state, passwordObject) {
        state.passwordList.push(passwordObject)
    },
    SET_PASSWORD(state, passwordObject) {
        state.password = passwordObject;
    },
    RESET_PASSWORD(state) {
        state.password = {};
    },
    DELETE_PASSWORD(state, passwordObject) {
        const index = state.passwordList.indexOf(passwordObject)
        state.passwordList.splice(index, 1)
    },
    SHOW_DIALOG(state, value) {
        state.isDialogOpen = value
    }
};

const actions = {
    handleSearchInputValue({ commit, state }, searchedValue) {
        commit('HANDLE_SEARCHED_INPUT', searchedValue)
        return state.searchInputValue
    },
    setPasswordList({commit, state}, passwordArray) {
        commit('SET_PASSWORD_LIST', passwordArray)
        return state.passwordList
    },
    setPassword({ commit, state }, passwordObject) {
        commit('SET_PASSWORD', passwordObject)
        return state.password
    },
    resetPassword({ commit, state }) {
        commit('RESET_PASSWORD')
        return state.password
    },
    deletePassword({ commit }, passwordObject) {
        commit('DELETE_PASSWORD', passwordObject)
        return true
    },
    addToPasswordList({ commit }, passwordObject) {
        commit('ADD_TO_PASSWORD_LIST', passwordObject)
    },
    showDialog({ commit }, value) {
        commit('SHOW_DIALOG', value)
    }
};

const getters = {
    getSearchInputValue(state) {
        return state.searchInputValue
    },
    getPassword(state) {
        return state.password
    },
    getPasswordList(state) {
        return state.passwordList
    },
    isDialogOpen(state) {
        return state.isDialogOpen
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}