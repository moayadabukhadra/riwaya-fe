"use strict";
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 7521:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8682);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const login = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("login", data);
};
const register = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("/register", data);
};
const logout = ()=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("/logout");
};
const getRole = ()=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("user-role");
};
const facebookLogin = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("auth/facebook", data);
};
const googleLogin = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("auth/google", data);
};
const editProfile = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("edit-profile", data);
};
const editProfileImage = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("edit-profile-image", data);
};
const getUserBooks = (page)=>{
    console.log("page", page);
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(`my-library?page=${page}`);
};
const checkLibraryForBook = (bookId)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(`check-library-for-book/${bookId}`);
};
const updateLibrary = (bookId)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post(`update-library/${bookId}`);
};
const forgetPassword = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("auth/forgot-password", data);
};
const resetPassword = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post("auth/reset-password", data);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8682:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9192);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _src_store__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _src_store__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const service = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: process.env.API_URL || "https://riwaya.rf.gd/api"
});
service.interceptors.request.use((config)=>{
    const token = _src_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().token;
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (service);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;