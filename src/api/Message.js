import api from './index';

const path = '/message';

const sendMessage = data => {
    return api.post(`${path}/send`, data);
}

export default {
    sendMessage,
}