import axios from 'axios';

const noteAxios = {
    listNotes: async function () {
        return await axios.get('/note/list');
    },
    createNote: async function (formData) {
        return await axios.post('/note/add', formData);
    },
    deleteNote: async function (id) {
        return await axios.delete(`/note/delete/${id}`);
    },
}

export default noteAxios;