"use strict";
exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 9382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7269);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_2__]);
reactstrap__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const BookCard = (props)=>{
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).ready(function() {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(".book-card").on("mouseover", function() {
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).removeClass("text-truncate");
        });
    });
    const book = props.book;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        onMouseEnter: ()=>{},
        href: "/books/?book=" + book.id,
        className: "mb-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "card text-white card-has-bg click-col",
            style: {
                backgroundImage: `url(${book.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + book.image.path : "/images/placeholders/placeholder.jpg"})`
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card-img-overlay d-flex flex-column",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card-body",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "card-title book-title mt-0 fs-6 text-truncate",
                                style: {
                                    whiteSpace: "nowrap"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-white text-decoration-none ",
                                    children: book.title
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                                color: "primary fw-normal",
                                className: "mb-3",
                                children: book.category?.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card-footer p-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "/authors?author=" + book.author.id,
                            className: "d-flex gap-1 align-items-center text-decoration-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "mr-3 rounded-circle",
                                    src: book.author.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + book.author.image.path : "/images/placeholders/placeholder.jpg",
                                    alt: "author-img",
                                    style: {
                                        maxWidth: "50px"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "media-body",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "my-0 text-white d-block",
                                        children: book.author?.name
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;