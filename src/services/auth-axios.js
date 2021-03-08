import axios from 'axios';

const axiosAuth = {
    signin: async function (formData) {
        return await axios.post('/auth/login', formData);
    },
    signup: async function (formData) {
        return await axios.post('/auth/registration', formData);
    },
}

export default axiosAuth;