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

const facebookLogin = (data) => {
    return api.post('auth/facebook', data);
}

const googleLogin = (data) => {
    return api.post('auth/google', data);
}


const editProfile = (data) => {
    return api.post('edit-profile', data);
}

const editProfileImage = (data) => {
    return api.post('edit-profile-image', data);
}

const getUserBooks = page => {
    console.log('page', page)
    return api.get(`my-library?page=${page}`);
}

const checkLibraryForBook = (bookId) => {
    return api.get(`check-library-for-book/${bookId}`);
}

const updateLibrary = (bookId) => {
    return api.post(`update-library/${bookId}`);
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
    facebookLogin,
    editProfile,
    editProfileImage,
    forgetPassword,
    resetPassword,
    googleLogin,
    getUserBooks,
    checkLibraryForBook,
    updateLibrary
}