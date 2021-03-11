import axios from 'axios';

const issueAxios = {
    getIssue: async function (id) {
        return await axios.get(`/issue/get/${id}`);
    },
    listIssues: async function () {
        return await axios.get('/issue/list');
    },
    createIssue: async function (formData) {
        return await axios.post('/issue/add', formData);
    },
    deleteIssue: async function (id) {
        return await axios.delete(`/issue/delete/${id}`);
    },
}

export default issueAxios;