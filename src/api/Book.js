import api from '.';

const path = '/book';


const getAllBooks = params => {
    return api.get(path+'s', { params });
}

const getBook = id => {
    return api.get(`${path}/show/${id}`);
}

const createBook = data => {
    return api.post(path, data);
}

const updateBook = (id, data) => {
    return api.put(`${path}/update/${id}`, data);
}

const deleteBook = id => {
    return api.delete(`${path}/delete/${id}`);
}

export default {
    getAllBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
}