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
        state.isShowedSidebar = !state.isShowedSidebar;
        if(!state.isShowedSidebar) {
            document.documentElement.style.setProperty("--sidebar-width", "20em");
        } 
        else {
            document.documentElement.style.setProperty("--sidebar-width", "0em");
        }
        
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