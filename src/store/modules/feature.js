const state = {
    isShowedFeatureAddForm: false
}

const getters = {
    featureInfo (state) {
        const feature = {
            isShowedFeatureAddForm: state.isShowedFeatureAddForm,
        }
        return feature;
    },
}

const mutations = {
    changeFeatureFormStatus (state) {
        state.isShowedFeatureAddForm = !state.isShowedFeatureAddForm
    },
}

const actions = {
    async showHideFeatureForm ({commit}) {
        commit('changeFeatureFormStatus');
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}