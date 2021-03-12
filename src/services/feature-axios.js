import axios from 'axios';

const axiosAuth = {
    getFeature: async function (id) {
        return await axios.get(`/feature/get/${id}`);
    },
    listFeatures: async function () {
        return await axios.get('/feature/list');
    },
    createFeature: async function (formData) {
        return await axios.post('/feature/add', formData);
    },
    changeFeatureStatus: async function (id, data) {
        console.log(data);
        return await axios.put(`/feature/updatestatus/${id}`, data);
    },
    deleteFeature: async function (id) {
        return await axios.delete(`/feature/delete/${id}`);
    }, 
}

export default axiosAuth;