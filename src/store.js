import { createStore} from "redux";

const initialState = {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
            }
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                user: null,
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;