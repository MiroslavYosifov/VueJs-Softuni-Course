const state = {
    isShowedIssueAddForm: false
}

const getters = {
    issueInfo (state) {
        const issue = {
            isShowedIssueAddForm: state.isShowedIssueAddForm,
        }
        return issue;
    },
}

const mutations = {
    changeIssueFormStatus (state) {
        state.isShowedIssueAddForm = !state.isShowedIssueAddForm
    },
}

const actions = {
    async showHideIssueForm ({commit}) {
        commit('changeIssueFormStatus');
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}