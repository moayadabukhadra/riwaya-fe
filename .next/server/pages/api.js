"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

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

/***/ }),

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [192], () => (__webpack_exec__(8682)));
module.exports = __webpack_exports__;

})();