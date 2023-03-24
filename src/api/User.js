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

const getFavoriteBooks = () => {
    return api.get('favorite-books');
}

const addFavoriteBook = (bookId) => {
    return api.post('add-book-favorite', {book: bookId});
}

const facebookLogin = () => {
    return api.get('auth/facebook');
}

export default {
    login,
    register: register,
    getRole: getRole,
    logout: logout,
    getFavoriteBooks,
    addFavoriteBook,
    facebookLogin
}