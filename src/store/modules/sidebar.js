const state = {
    isShowedSidebar: true
}

const getters = {
    sidebarInfo (state) {
        const sidebar = {
            isShowedSidebar: state.isShowedSidebar,
        }
        return sidebar;
    },
}

const mutations = {
    changeSideBarStatus(state) {
        state.isShowedSidebar = !state.isShowedSidebar
    },
}

const actions = {
    async showHideSidebar ({commit}) {
        commit('changeSideBarStatus');
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}