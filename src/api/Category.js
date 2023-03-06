import api from '.';

const path = '/category';


const getAllCategories = params => {
    return api.get('categories', { params });
}

const getCategory = id => {
    return api.get(`${path}/${id}`);
}

const createCategory = data => {
    return api.post(path, data);
}

const updateCategory = (id, data) => {
    return api.post(`${path}/${id}`, data);
}

const deleteCategory = id => {
    return api.delete(`${path}/${id}`);
}


export default {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
}