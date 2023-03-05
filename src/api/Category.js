import api from '.';

const path = '/categories';


const getAllCategories = params => {
    return api.get(path, { params });
}

export default {
    getAllCategories,
}