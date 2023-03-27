import api from '.';

const path = '/quote';

const getQuote = () => {
    return api.get(path);
}

const getRandomQuote = () => {
    return api.get(`${path}/random`);
}

export default {
    getQuote,
    getRandomQuote,
}