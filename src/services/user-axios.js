import axios from 'axios';

const userAxios = {
    getUserInfo: async function (id) {
        return await axios.get(`/auth/userInfo/${id}`);
    },
}

export default userAxios;