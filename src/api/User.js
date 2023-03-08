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

export default {
    login,
    register: register,
    getRole: getRole,
    logout: logout
}