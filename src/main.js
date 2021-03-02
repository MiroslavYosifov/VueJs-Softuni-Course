import Vue from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
Vue.config.productionTip = false

const router = createRouter({
  history: createWebHistory(),
  routes: []
});

new Vue({
  render: h => h(App),
}).$mount('#app')
