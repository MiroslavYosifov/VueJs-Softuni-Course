import axios from 'axios';

const axiosAuth = {
    createProject: async function (formData) {
        return await axios.post('/project/add', formData);
    },
}

export default axiosAuth;