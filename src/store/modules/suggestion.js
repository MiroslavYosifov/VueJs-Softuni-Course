const state = {
    isShowedSuggestionAddForm: false
}

const getters = {
    suggestionInfo (state) {
        const suggestion = {
            isShowedSuggestionAddForm: state.isShowedSuggestionAddForm,
        }
        return suggestion;
    },
}

const mutations = {
    changeSuggestionFormStatus (state) {
        state.isShowedSuggestionAddForm = !state.isShowedSuggestionAddForm;
    },
}

const actions = {
    async showHideSuggestionForm ({commit}) {
        commit('changeSuggestionFormStatus');
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}