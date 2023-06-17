"use strict";
exports.id = 768;
exports.ids = [768];
exports.modules = {

/***/ 866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8682);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const path = "/quote";
const getAllQuotes = ()=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get("/quotes");
};
const getRandomQuote = ()=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${path}/random`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getAllQuotes,
    getRandomQuote
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

/***/ }),

/***/ 4028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const QuoteCard = ({ quote })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "box shadow-sm bg-light text-muted",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mt-1 d-flex align-items-center gap-2 fs-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-quote-right fa2 text-primary",
                            style: {
                                transform: "translateY(-0.5rem)"
                            }
                        }),
                        quote?.body,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            style: {
                                transform: "translateY(0.5rem)"
                            },
                            className: "fas fa-quote-left fa2 text-primary"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            alt: "quote-author",
                            className: "rounded-circle",
                            width: "30",
                            src: quote?.author?.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + quote.author?.image.path : "/images/placeholders/placeholder.jpg"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                            className: "fs-6",
                            children: quote?.author?.name
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuoteCard);


/***/ })

};
;