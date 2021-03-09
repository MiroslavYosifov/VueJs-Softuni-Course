import Vue from 'vue';
import Vuex from 'vuex';

import axiosAuth from '../services/auth-axios'; 
import { router } from  '../router';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        authToken: null,
        userId: null,
        username: null,
    },
    getters: {
        isAuthenticated (state) {
            return state.authToken !== null;
        },
        getAuthToken (state) {
            return state.authToken;
        },
        userInfo (state) {
            const user = {
                userId: state.userId,
                username: state.username
            }
            return user;
        }
    },
    mutations: {
        authUser (state, userData) {
            state.authToken = userData.authToken;
            state.userId = userData.userId;
            state.username = userData.username;
        },
        clearAuthData (state) {
            state.authToken = null;
            state.userId = null;
            state.username = null;
        }
    },
    actions: {
        async setLogoutTimer ({commit}, expirationTime) {
            setTimeout(() => {
                commit('clearAuthData');
                localStorage.removeItem('authToken');
                localStorage.removeItem('expiresIn');
                localStorage.removeItem('userId');
                localStorage.removeItem('username');
            }, Number(expirationTime) * 1000);
        },
        async checkIsTokenExpired ({commit}) {
            const authToken = localStorage.getItem('authToken');
            if(!authToken) return;
            const expirationDate = localStorage.getItem('expiresIn');
            const userId = localStorage.getItem('userId');
            const username = localStorage.getItem('username');
            const currentDate = new Date();
            if(currentDate <= expirationDate) {
                return;
            }
            commit('authUser', {
                authToken: authToken,
                userId: userId,
                username: username
            })
        },
        async signup ({commit, dispatch}, authData) {
            try {
                const res = await axiosAuth.signup(authData);
                commit('authUser', {
                    authToken: res.data.authToken,
                    userId: res.data.userId,
                    username: res.data.name
                });
                const currentDate = new Date();
                const expirationDate = new Date(currentDate.getTime() + Number(res.data.expiresIn) * 1000);
                localStorage.setItem('authToken', res.data.authToken);
                localStorage.setItem('expiresIn', expirationDate);
                localStorage.setItem('userId', res.data.userId);
                localStorage.setItem('username', res.data.name);
                dispatch('setLogoutTimer', res.data.expiresIn);
            } catch (error) {
               console.log(error);
            }
        },
        async signin ({commit, dispatch}, authData) {
            try {
                console.log(commit);
                const res = await axiosAuth.signin(authData);
                console.log(res);
                commit('authUser', {
                    authToken: res.data.authToken,
                    userId: res.data.userId,
                    username: res.data.name
                });
                const currentDate = new Date();
                const expirationDate = new Date(currentDate.getTime() + Number(res.data.expiresIn) * 1000);
                localStorage.setItem('authToken', res.data.authToken);
                localStorage.setItem('expiresIn', expirationDate);
                localStorage.setItem('userId', res.data.userId);
                localStorage.setItem('username', res.data.name);
                dispatch('setLogoutTimer', res.data.expiresIn);
            } catch (error) {
              console.log(error);
            }
        },
        async logout ({commit}) {
            commit('clearAuthData');
            localStorage.removeItem('authToken');
            localStorage.removeItem('expiresIn');
            localStorage.removeItem('userId');
            localStorage.removeItem('username');
            router.replace('/signin');
        }
    }
});