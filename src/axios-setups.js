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

    axios.interceptors.response.use( res => {

      console.log('RESPONSE', res);
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
      store.dispatch('changeLoadingStatus');
      return res;
      
    }, function (error) {
      store.dispatch('changeLoadingStatus');
      return Promise.reject(error.response.data);
    });
}

export default axiosSetups;
