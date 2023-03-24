import api from '.';

const path = '/author';


const getAllAuthors = params => {
    return api.get('/authors', { params });
}

const getAuthor = id => {
    return api.get(`${path}/${id}`);
}

const getAuthorBooks = id => {
    return api.get(`${path}/${id}/books`);
}



export default {
    getAllAuthors,
    getAuthor,
    getAuthorBooks,
}