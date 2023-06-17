"use strict";
(() => {
var exports = {};
exports.id = 78;
exports.ids = [78];
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

/***/ 4679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const path = "/book";
const getAllBooks = (params)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(path + "s", {
        params
    });
};
const getBook = (id)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`${path}/show/${id}`);
};
const getLatestBooks = ()=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`${path}/latest`);
};
const getMostReadBooks = ()=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`${path}/most-read`);
};
const downloadBook = (id)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`${path}/download/${id}`);
};
const searchBooks = (search)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/search`, {
        params: {
            search
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getAllBooks,
    getBook,
    getLatestBooks,
    getMostReadBooks,
    downloadBook,
    searchBooks
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
var __webpack_exports__ = __webpack_require__.X(0, [950], () => (__webpack_exec__(4679)));
module.exports = __webpack_exports__;

})();