import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './modules/auth';
import issue from './modules/issue';
import suggestion from './modules/suggestion';
import feature from './modules/feature';
import sidebar from './modules/sidebar';
import spinner from './modules/spinner';

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
        feature,
        issue,
        suggestion,
        sidebar,
        spinner
    }
});
