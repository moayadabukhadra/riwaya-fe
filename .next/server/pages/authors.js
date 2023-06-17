(() => {
var exports = {};
exports.id = 2415;
exports.ids = [2415,4237];
exports.modules = {

/***/ 4893:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7182);
/* harmony import */ var private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__]);
private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/authors","pathname":"/authors","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({ ...options, userland: private_next_pages_authors_js__WEBPACK_IMPORTED_MODULE_2__ })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8682);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const path = "/author";
const getAllAuthors = (params)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get("/authors", {
        params
    });
};
const getAuthor = (id)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${path}/${id}`);
};
const getAuthorBooks = (id)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${path}/${id}/books`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getAllAuthors,
    getAuthor,
    getAuthorBooks
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 1246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _api_Author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5782);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7269);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AuthorCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9476);
/* harmony import */ var _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7033);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2905);
/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(159);
/* harmony import */ var _api_Quote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(866);
/* harmony import */ var _components_QuoteCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8184);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8638);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_Author__WEBPACK_IMPORTED_MODULE_1__, reactstrap__WEBPACK_IMPORTED_MODULE_3__, html_react_parser__WEBPACK_IMPORTED_MODULE_7__, _components_BookCard__WEBPACK_IMPORTED_MODULE_8__, _api_Quote__WEBPACK_IMPORTED_MODULE_9__]);
([_api_Author__WEBPACK_IMPORTED_MODULE_1__, reactstrap__WEBPACK_IMPORTED_MODULE_3__, html_react_parser__WEBPACK_IMPORTED_MODULE_7__, _components_BookCard__WEBPACK_IMPORTED_MODULE_8__, _api_Quote__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Authors = ()=>{
    const [authors, setAuthors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [pages, setPages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [selectedAuthor, setSelectedAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [selectedAuthorBooks, setSelectedAuthorBooks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [quote, setQuote] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useHistory)();
    const toggle = ()=>setModal(!modal);
    const [params, setParams] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        "with": "image",
        "paginate": "6"
    });
    const authorSelectedCallback = (author)=>{
        setSelectedAuthor(author);
        _api_Author__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getAuthorBooks(author?.id).then(({ data })=>{
            setSelectedAuthorBooks(data);
            setModal(true);
            history.push("?page=" + params.page + selectedAuthor ? "?author=" + author?.id : 0);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const author = window.location.href.split("=")[1];
        if (author) {
            _api_Author__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getAuthor(author).then(({ data })=>{
                setSelectedAuthor(data);
                setModal(true);
            });
            _api_Author__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getAuthorBooks(author).then(({ data })=>{
                setSelectedAuthorBooks(data);
                setModal(true);
            });
        }
        _api_Author__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getAllAuthors(params).then(({ data })=>{
            setAuthors(data.data);
            setPages(data.links);
            setLoading(false);
            setLoading(false);
        });
        _api_Quote__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getRandomQuote().then(({ data })=>{
            setQuote(data);
        });
    }, [
        params
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet_async__WEBPACK_IMPORTED_MODULE_11__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: selectedAuthor ? "تحميل وقرائة كتب " + selectedAuthor.name : " المؤلفين - رواية"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "اكتشف مجموعة من الأسماء البارزة في عالم الكتابة | استكشف أعمالهم الأدبية وسيرهم الذاتية"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LoadingScreen__WEBPACK_IMPORTED_MODULE_6__["default"], {
                loading: loading
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content row justify-content-center justify-content-md-around align-self-center",
                style: {
                    margin: "100px  auto",
                    alignSelf: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-3 row border-start",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white rounded-2 p-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-flex flex-column gap-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "position-relative d-flex align-items-center position-relative",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                className: "main-search-input",
                                                placeholder: "ابحث عن كتاب ,مؤلف , تصنيف..."
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            onClick: ()=>{
                                                setParams({
                                                    ...params,
                                                    page: 1,
                                                    query: document.querySelector(".main-search-input").value
                                                });
                                            },
                                            className: "btn btn-primary w-100 mt-3 my-3 text-white d-flex align-items-center justify-content-center gap-2 mt-auto",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-search"
                                                }),
                                                "بحث"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-none d-md-block",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_QuoteCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        quote: quote
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-9 row gap-1 justify-content-center",
                        children: [
                            authors && authors.map((author, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AuthorCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    callBack: authorSelectedCallback,
                                    author: author
                                }, index);
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                className: "col-12",
                                "aria-label": "...",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
                                    className: "pagination justify-content-center my-2",
                                    listClassName: "justify-content-center gap-1 flex-wrap",
                                    children: pages && pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.PaginationItem, {
                                            className: (!page.url ? "disabled" : "") + (page.active ? "active" : ""),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.PaginationLink, {
                                                className: "rounded-2",
                                                onClick: ()=>{
                                                    if (page.url) {
                                                        params.page = page.url.substring(page.url.lastIndexOf("=") + 1);
                                                        _api_Author__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getAllAuthors(params).then(({ data })=>{
                                                            setAuthors(data.data);
                                                            setPages(data.links);
                                                        });
                                                        history.push("?page=" + params.page + selectedAuthor ? "?author=" + selectedAuthor?.id : 0);
                                                    }
                                                },
                                                children: page.label.includes("next") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-angle-left"
                                                }) : page.label.includes("prev") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-angle-right"
                                                }) : page.label ?? page.label
                                            })
                                        }, page.label))
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Modal, {
                className: "modal-dialog-scrollable modal-lg",
                isOpen: modal,
                toggle: toggle,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {
                        className: "d-flex align-items-center justify-content-between w-100",
                        toggle: toggle,
                        children: selectedAuthor?.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {
                        className: "custom-scroll",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex align-items-start gap-2 flex-column",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "rounded-1 image-thumbnail",
                                        width: "150",
                                        src: selectedAuthor?.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + selectedAuthor.image.path : "/images/placeholders/placeholder.jpg",
                                        alt: selectedAuthor?.name
                                    }),
                                    selectedAuthor && (0,html_react_parser__WEBPACK_IMPORTED_MODULE_7__["default"])(selectedAuthor?.bio)
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "book-section-title mb-4",
                                            children: [
                                                "كتب ل",
                                                selectedAuthor?.name
                                            ]
                                        })
                                    }),
                                    selectedAuthorBooks && selectedAuthorBooks.map((book)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-6 col-md-4 col-lg-3 mb-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BookCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                book: book
                                            })
                                        });
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            color: "light",
                            onClick: toggle,
                            children: "الغاء"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authors);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 2947:
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8638:
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet-async");

/***/ }),

/***/ 4661:
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 2905:
/***/ ((module) => {

"use strict";
module.exports = import("html-react-parser");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 7269:
/***/ ((module) => {

"use strict";
module.exports = import("reactstrap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7812,9192,7033,159,8184,9476], () => (__webpack_exec__(4893)));
module.exports = __webpack_exports__;

})();