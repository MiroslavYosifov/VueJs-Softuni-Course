const state = {
    isLoading: false
}

const getters = {
    getLoading (state) {
        return state.isLoading;
    },
}

const mutations = {
    updateLoadingStatus (state) {
        state.isLoading = !state.isLoading;
    },
}

const actions = {
    async changeLoadingStatus ({commit}) {
        commit('updateLoadingStatus');
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}