import axiosAuth from '../../services/auth-axios'; 
import { router } from  '../../router';

const state = {
    authToken: null,
    roles: [],
    userId: null,
    username: null,
    errorMessage: false
}

const getters = {
    isAuthenticated (state) {
        return state.authToken !== null;
    },
    getAuthToken (state) {
        return state.authToken;
    },
    getUserId (state) {
        return state.userId
    },
    authUserInfo (state) {
        const user = {
            isAuthenticated: state.authToken !== null,
            userId: state.userId,
            roles: state.roles,
            username: state.username,
        }
        return user;
    },
    getAuthErrors (state) {
        return state.errorMessage
    },
}

const mutations = {
    addErrorMessage(state, error) {
        state.errorMessage = error;
    },
    setErrorsToFalse (state) {
        state.errorMessage = false;
    },
    authUser (state, userData) {
        state.authToken = userData.authToken;
        state.roles = userData.userRoles;
        state.userId = userData.userId;
        state.username = userData.username;
    },
    clearAuthData (state) {
        state.authToken = null;
        state.roles = [];
        state.userId = null;
        state.username = null;
    }
}

const actions = {
    async clearErrors({commit}) {
        commit('setErrorsToFalse'); 
    },
    async setLogoutTimer ({commit}, expirationTime) {
        setTimeout(() => {
            commit('clearAuthData');
            localStorage.removeItem('authToken');
            localStorage.removeItem('expiresIn');
            localStorage.removeItem('userId');
            localStorage.removeItem('username');
            localStorage.removeItem('userRoles');
        }, Number(expirationTime) * 1000);
    },
    async checkIsTokenExpired ({commit}) {
        const authToken = localStorage.getItem('authToken');
        if(!authToken) return;
        const expirationDate = localStorage.getItem('expiresIn');
        const rolesToArray = localStorage.getItem('userRoles').split(',');
        const userRoles = rolesToArray;
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');
        const currentDate = new Date();
        if(currentDate <= expirationDate) {
            return;
        }
        commit('authUser', {
            authToken: authToken,
            userRoles: userRoles,
            userId: userId,
            username: username
        })
    },
    async signup ({commit, dispatch}, authData) {
        try {
            const res = await axiosAuth.signup(authData);
            commit('authUser', {
                authToken: res.data.authToken,
                userRoles: res.data.roles,
                userId: res.data.userId,
                username: res.data.name
            });
            const currentDate = new Date();
            const expirationDate = new Date(currentDate.getTime() + Number(res.data.expiresIn) * 1000);

            localStorage.setItem('authToken', res.data.authToken);
            localStorage.setItem('userRoles', res.data.roles.toString(','));
            localStorage.setItem('expiresIn', expirationDate);
            localStorage.setItem('userId', res.data.userId);
            localStorage.setItem('username', res.data.name);

            dispatch('setLogoutTimer', res.data.expiresIn);

            router.replace('/projects');

        } catch (error) {
            console.log(error);
            commit('addErrorMessage', error); 
        }
    },
    async signin ({commit, dispatch}, authData) {
        try {
            console.log(commit);
            const res = await axiosAuth.signin(authData);
            console.log(res);
            commit('authUser', {
                authToken: res.data.authToken,
                userRoles: res.data.roles,
                userId: res.data.userId,
                username: res.data.name
            });
            const currentDate = new Date();
            const expirationDate = new Date(currentDate.getTime() + Number(res.data.expiresIn) * 1000);

            localStorage.setItem('authToken', res.data.authToken);
            localStorage.setItem('userRoles', res.data.roles.toString(','));
            localStorage.setItem('expiresIn', expirationDate);
            localStorage.setItem('userId', res.data.userId);
            localStorage.setItem('username', res.data.name);

            dispatch('setLogoutTimer', res.data.expiresIn);

            router.replace('/projects');

        } catch (error) {
          console.log(error);
          commit('addErrorMessage', error); 
        }
    },
    async logout ({commit}) {
        commit('clearAuthData');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userRoles');
        localStorage.removeItem('expiresIn');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        //if sidebar is open when logout, should be setup on 0 width
        document.documentElement.style.setProperty("--sidebar-width", "0em");
        router.replace('/signin');
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}