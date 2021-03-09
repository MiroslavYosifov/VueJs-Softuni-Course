import axios from 'axios';

const axiosAuth = {
    listProjects: async function () {
        return await axios.get('/project/list');
    },
    createProject: async function (formData) {
        console.log(formData);
        return await axios.post('/project/add', formData);
    },
}

export default axiosAuth;