import api from '.';

const path = 'bookmark';

const getUserBookmarks = () => {
    return api.get('bookmarks');
}

const storeBookmark = data => {
    return api.post(`${path}/store/${data.bookId}/${data.bookmark_type}`)
}

const getBookmarkStatus = bookId => {
    return api.get(`${path}/status/${bookId}`)
}

export default {
    getUserBookmarks,
    storeBookmark,
    getBookmarkStatus,
}