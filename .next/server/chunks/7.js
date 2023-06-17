"use strict";
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 7631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8682);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const path = "/book";
const getAllBooks = (params)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(path + "s", {
        params
    });
};
const getBook = (id)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${path}/show/${id}`);
};
const getLatestBooks = ()=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${path}/latest`);
};
const getMostReadBooks = ()=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${path}/most-read`);
};
const downloadBook = (id)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${path}/download/${id}`);
};
const searchBooks = (search)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/search`, {
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

/***/ }),

/***/ 5123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const breakPoints = {
    320: {
        slidesPerView: 2,
        spaceBetween: 10
    },
    480: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    640: {
        slidesPerView: 3,
        spaceBetween: 10
    },
    800: {
        slidesPerView: 4,
        spaceBetween: 10
    },
    1250: {
        slidesPerView: 6,
        spaceBetween: 10
    },
    1500: {
        slidesPerView: 7,
        spaceBetween: 10
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (breakPoints);


/***/ }),

/***/ 3133:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var _assets_utils_SwiperBreakPoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5123);
/* harmony import */ var _BookCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9382);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _BookCard__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _BookCard__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const BookSwiper = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: _assets_utils_SwiperBreakPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        children: props.books && props.books.map((book, index)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    book: book
                }, props.swiperKey + book.id)
            }, index + props.swiperKey + book.id);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookSwiper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;