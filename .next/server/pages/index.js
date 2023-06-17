"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,4237];
exports.modules = {

/***/ 9763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__]);
private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({ ...options, userland: private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_2__ })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 6616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7269);
/* harmony import */ var _components_BookSwiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_Book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7631);
/* harmony import */ var _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7033);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_Quote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(866);
/* harmony import */ var _components_QuoteCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8184);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8638);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_1__, _components_BookSwiper__WEBPACK_IMPORTED_MODULE_2__, _api_Book__WEBPACK_IMPORTED_MODULE_4__, _api_Quote__WEBPACK_IMPORTED_MODULE_7__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_1__, _components_BookSwiper__WEBPACK_IMPORTED_MODULE_2__, _api_Book__WEBPACK_IMPORTED_MODULE_4__, _api_Quote__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Index = ()=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [mostReadBooks, setMostReadBooks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [latestBooks, setLatestBooks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [quote, setQuote] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setLoading(true);
        _api_Book__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getMostReadBooks().then(({ data })=>{
            setMostReadBooks(data);
        });
        _api_Book__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getLatestBooks().then(({ data })=>{
            setLatestBooks(data);
            setLoading(false);
        });
        _api_Quote__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getRandomQuote().then(({ data })=>{
            setQuote(data);
        });
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).ready(function() {
            if (window.scrollY < 10) {
                jquery__WEBPACK_IMPORTED_MODULE_6___default()(".riwaya-nav").removeClass("bg-white").addClass("transparent-nav");
            }
            jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).scroll(function() {
                if (jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).scrollTop() < 10) {
                    jquery__WEBPACK_IMPORTED_MODULE_6___default()(".riwaya-nav").removeClass("bg-white").addClass("transparent-nav");
                }
                if (jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).scrollTop() > 10) {
                    jquery__WEBPACK_IMPORTED_MODULE_6___default()(".riwaya-nav").removeClass("transparent-nav").addClass("bg-white");
                }
            });
        });
    }, []);
    const handleSearch = (e)=>{
        e.preventDefault();
        setLoading(true);
        const search = e.target.search.value;
        _api_Book__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.searchBooks(search).then(({ data })=>{
            history.push({
                pathname: "/search",
                state: {
                    data: data
                }
            });
        }).catch((error)=>{
            setLoading(false);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet_async__WEBPACK_IMPORTED_MODULE_10__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "تصفح وحمّل مجموعة واسعة من الكتب باللغة العربية وغيرها | اعثر على قراءتك التالية"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: " المعاصرة، استكشف مجموعة واسعة من الأنواع الأدبية واعثر على قراءتك التالية المثيرة. تصفح وابحث وانغمس في العالم الأدبي الغني للكتب باللغة العربي"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LoadingScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
                loading: loading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "header",
                style: {
                    backgroundImage: `url(/images/library.jpg)`,
                    backgroundRepeat: "repeat-x"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSearch,
                    className: "header-content",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "search-bar d-flex flex-column",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "fs-3 mb-2 w-100 header-quote",
                                children: "أندر من الكتاب الجيد، القارئ الجيد."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: "search-bar position-relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "btn btn-primary  d-flex align-items-center h-100 justify-content-center position-absolute top-50 start-0 translate-middle-y",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-search text-white"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        name: "search",
                                        type: "text",
                                        className: "form-control py-2",
                                        placeholder: "ابحث عن كتاب او مؤلف...."
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row justify-content-center bg-light rounded-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "/books",
                                className: "fs-1 col-4 d-flex align-items-center justify-content-center flex-column gap-3 border-start  page-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        id: "section-icon",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "icon icon-tabler icon-tabler-book-2",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "2",
                                        stroke: "#2c3e50",
                                        fill: "#be123c",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                stroke: "none",
                                                d: "M0 0h24v24H0z",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M19 16h-12a2 2 0 0 0 -2 2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M9 8h6"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-muted",
                                        children: "الكتب"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "/authors",
                                className: "fs-1 col-4 d-flex align-items-center justify-content-center flex-column page-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        id: "section-icon",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "section-icon icon icon-tabler icon-tabler-users",
                                        viewBox: "0 0 24 24",
                                        stroke: "#2c3e50",
                                        fill: "#be123c",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                stroke: "none",
                                                d: "M0 0h24v24H0z",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                cx: "9",
                                                cy: "7",
                                                r: "4"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M16 3.13a4 4 0 0 1 0 7.75"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M21 21v-2a4 4 0 0 0 -3 -3.85"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-muted",
                                        children: "المؤلفين"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "/quotes",
                                className: "fs-1 col-4 d-flex align-items-center justify-content-center flex-column gap-3 border-end page-section",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        id: "section-icon",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "#be123c",
                                        stroke: "#2c3e50",
                                        className: "bi bi-quote section-icon",
                                        viewBox: "0 0 14 14",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-muted",
                                        children: "الاقتباسات"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "book-section-title mb-4",
                        children: "احدث الكتب"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: "mb-5 justify-content-between",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BookSwiper__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            books: latestBooks,
                            swiperKey: "latest"
                        }, "latest")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_QuoteCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        quote: quote
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "book-section-title mb-4",
                        children: "الكتب الاكثر تحميلا"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: "mb-5 justify-content-between",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BookSwiper__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            books: mostReadBooks,
                            swiperKey: "most_selling"
                        }, "most_selling")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8638:
/***/ ((module) => {

module.exports = require("react-helmet-async");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("react-router-dom");

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

/***/ }),

/***/ 7269:
/***/ ((module) => {

module.exports = import("reactstrap");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7812,9192,7033,159,8184,6664], () => (__webpack_exec__(9763)));
module.exports = __webpack_exports__;

})();