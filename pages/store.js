import {createStore} from "redux";
import Cookies from "js-cookie";

const initialState = {
    token: Cookies.get('token'),
    user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
    role: Cookies.get('role')
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN' || 'REGISTER':
            Cookies.set('token', action.payload.token);
            Cookies.set('user', JSON.stringify(action.payload.user));
            Cookies.set('role', action.payload.user.role);
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                role: action.payload.user.role
            };
        case 'UPDATE':
            Cookies.set('token', action.payload.token);
            Cookies.set('user', JSON.stringify(action.payload.user));
            Cookies.set('role', action.payload.user.role);
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                role: action.payload.user.role
            };
        case 'LOGOUT':
            Cookies.remove('token');
            Cookies.remove('user');
            Cookies.remove('role');
            return {
                ...state,
                token: null,
                user: null,
                role: null
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;