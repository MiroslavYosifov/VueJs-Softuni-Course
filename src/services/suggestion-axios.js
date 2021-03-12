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
    changeSuggestionStatus: async function (id, data) {
        return await axios.put(`/suggestion/updatestatus/${id}`, data);
    },
    deleteSuggestion: async function (id) {
        return await axios.delete(`/suggestion/delete/${id}`);
    },
}

export default axiosSuggestion;