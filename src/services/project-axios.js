import axios from 'axios';

const axiosAuth = {
    getProject: async function (id) {
        return await axios.get(`/project/get/${id}`);
    },
    listProjects: async function () {
        return await axios.get('/project/list');
    },
    createProject: async function (formData) {
        console.log(formData);
        return await axios.post('/project/add', formData);
    },
    deleteProject: async function (id) {
        return await axios.delete(`/project/delete/${id}`);
    },
}

export default axiosAuth;