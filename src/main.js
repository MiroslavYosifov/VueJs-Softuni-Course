import './assets/styles.css';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import axiosSetups from './axios-setups';

import App from './App.vue';
import { router } from './router';

//import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
Vue.config.productionTip = false;

axiosSetups();

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
