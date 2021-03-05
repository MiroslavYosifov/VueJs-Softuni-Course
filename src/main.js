import { createApp } from 'vue';
import App from './App.vue';
// import Vuelidate from 'vuelidate';
import router from './router.js';

const app = createApp(App);

// app.use(Vuelidate);
app.use(router);
app.config.productionTip = false;

app.mount('#app');
