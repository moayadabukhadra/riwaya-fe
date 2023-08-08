import api from './index';

const path = '/quote';

const getAllQuotes = () => {
    return api.get('/quotes');
}

const getRandomQuote = () => {
    return api.get(`${path}/random`);
}

export default {
    getAllQuotes,
    getRandomQuote,
}