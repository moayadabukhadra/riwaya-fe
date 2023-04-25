import api from '.';

const login = data => {
    return api.post('login', data);
}
const register = data => {
    return api.post('/register', data);
}

const logout = () => {
    return api.post('/logout');
}

const getRole = () => {
    return api.post('user-role');
}

const getFavoriteBooks = (params) => {
    return api.get('favorite-books', {params});
}

const addFavoriteBook = (bookId) => {
    return api.post('add-book-favorite', {book: bookId});
}

const facebookLogin = () => {
    return api.get('auth/facebook');
}

const editProfile = (data) => {
    return api.post('edit-profile', data);
}

const forgetPassword = (data) => {
    return api.post('auth/forgot-password', data);
}

const resetPassword = (data) => {
    return api.post('auth/reset-password', data);
}
export default {
    login,
    register: register,
    getRole: getRole,
    logout: logout,
    getFavoriteBooks,
    addFavoriteBook,
    facebookLogin,
    editProfile,
    forgetPassword,
    resetPassword
}