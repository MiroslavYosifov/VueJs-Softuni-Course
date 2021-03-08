import axios from 'axios';

function axiosSetups () {

    axios.defaults.baseURL = 'http://localhost:3400/api';
    // axios.defaults.headers.common['Authorization'] = "something";
    // axios.defaults.headers.get['Accepts'] = "application/json";  

    axios.interceptors.request.use(config => {
      console.log('REQUEST', config);
      return config;
    }); 

    axios.interceptors.response.use(res => {
      console.log('REQUEST', res);
      return res;
    });
}

export default axiosSetups;
