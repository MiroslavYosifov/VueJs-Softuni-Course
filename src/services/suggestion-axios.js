import axios from 'axios';

const axiosSuggestion = {
    getSuggestion: async function (id) {
        return await axios.get(`/suggestion/get/${id}`);
    },
    listSuggestion: async function () {
        return await axios.get('/suggestion/list');
    },
    createSuggestion: async function (formData) {
        return await axios.post('/suggestion/add', formData);
    },
}

export default axiosSuggestion;