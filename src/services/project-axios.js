import axios from 'axios';

const axiosAuth = {
    createProject: async function (formData) {
        console.log(formData);
        return await axios.post('/project/add', formData);
    },
}

export default axiosAuth;