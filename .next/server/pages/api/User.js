"use strict";
(() => {
var exports = {};
exports.id = 882;
exports.ids = [882];
exports.modules = {

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 9042:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const login = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("login", data);
};
const register = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/register", data);
};
const logout = ()=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/logout");
};
const getRole = ()=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("user-role");
};
const facebookLogin = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("auth/facebook", data);
};
const googleLogin = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("auth/google", data);
};
const editProfile = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("edit-profile", data);
};
const editProfileImage = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("edit-profile-image", data);
};
const getUserBooks = (page)=>{
    console.log("page", page);
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`my-library?page=${page}`);
};
const checkLibraryForBook = (bookId)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`check-library-for-book/${bookId}`);
};
const updateLibrary = (bookId)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`update-library/${bookId}`);
};
const forgetPassword = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("auth/forgot-password", data);
};
const resetPassword = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("auth/reset-password", data);
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [950], () => (__webpack_exec__(9042)));
module.exports = __webpack_exports__;

})();