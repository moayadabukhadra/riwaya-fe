import api from '.';

const path = '/authors';


const getAllAuthors = params => {
    return api.get(path, { params });
}

export default {
    getAllAuthors,
}