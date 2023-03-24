import api from '.';

const path = '/book';


const getAllBooks = params => {
    return api.get(path+'s', { params });
}

const getBook = id => {
    return api.get(`${path}/show/${id}`);
}

const getLatestBooks = () => {
    return api.get(`${path}/latest`);
}

const getMostReadBooks = () => {
    return api.get(`${path}/most-read`);
}

export default {
    getAllBooks,
    getBook,
    getLatestBooks,
    getMostReadBooks
}