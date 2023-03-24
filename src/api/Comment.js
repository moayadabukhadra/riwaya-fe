import api from '.';

const path = '/comment';

const addComment = (bookId, comment) => {
    return api.post(`${path}/add/${bookId}`, comment);
}

export default {
    addComment,
}

