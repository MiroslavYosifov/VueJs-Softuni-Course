import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './modules/auth';
import issue from './modules/issue';
import suggestion from './modules/suggestion';

export const store = new Vuex.Store({
    state: {

    },
    getters: {
      
    },
    mutations: {
       
    },
    actions: {
       
    },
    modules: {
        auth,
        issue,
        suggestion
    }
});
