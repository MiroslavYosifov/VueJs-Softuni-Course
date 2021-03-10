import axios from 'axios';

const axiosAuth = {
    getFeature: async function (id) {
        return await axios.get(`/feature/get/${id}`);
    },
    listFeatures: async function () {
        return await axios.get('/project/list');
    },
    createFeature: async function (formData) {
        return await axios.post('/feature/add', formData);
    },
}

export default axiosAuth;