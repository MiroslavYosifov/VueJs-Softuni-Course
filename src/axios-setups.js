import axios from 'axios';
import { store } from './store/store';

function axiosSetups () {

    axios.defaults.baseURL = 'http://localhost:3400/api';
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
    // axios.defaults.headers.get['Accepts'] = "application/json";  

    axios.interceptors.request.use(config => {
      console.log('REQUEST', config);
      store.dispatch('changeLoadingStatus');
      return config;
    }); 

    axios.interceptors.response.use(res => {
      console.log('RESPONSE', res);
      store.dispatch('changeLoadingStatus');
      return res;
    });
}

export default axiosSetups;
