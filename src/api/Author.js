import api from '.';

const path = '/author';


const getAllAuthors = params => {
    return api.get('/authors', { params });
}

const getAuthor = id => {
    return api.get(`${path}/${id}`);
}

const createAuthor = data => {
    return api.post(path, data);
}

const updateAuthor = (id, data) => {
    return api.post(`${path}/${id}`, data);
}

const deleteAuthor = id => {
    return api.delete(`${path}/${id}`);
}

export default {
    getAllAuthors,
    getAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor,
}