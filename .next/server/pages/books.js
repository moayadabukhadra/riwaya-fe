(() => {
var exports = {};
exports.id = 4672;
exports.ids = [4672];
exports.modules = {

/***/ 966:
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
/* harmony import */ var private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(969);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__]);
private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/books","pathname":"/books","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({ ...options, userland: private_next_pages_books_js__WEBPACK_IMPORTED_MODULE_2__ })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 4072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8682);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const path = "/category";
const getAllCategories = (params)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get("categories", {
        params
    });
};
const getCategory = (id)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${path}/${id}`);
};
const createCategory = (data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post(path, data);
};
const updateCategory = (id, data)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${path}/${id}`, data);
};
const deleteCategory = (id)=>{
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].delete(`${path}/${id}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 969:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _api_Book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7631);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7269);
/* harmony import */ var _api_Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4072);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BookSwiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6664);
/* harmony import */ var _components_BookDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2829);
/* harmony import */ var _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7033);
/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(159);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_Book__WEBPACK_IMPORTED_MODULE_1__, reactstrap__WEBPACK_IMPORTED_MODULE_3__, _api_Category__WEBPACK_IMPORTED_MODULE_4__, _components_BookSwiper__WEBPACK_IMPORTED_MODULE_6__, _components_BookDetails__WEBPACK_IMPORTED_MODULE_7__, _components_BookCard__WEBPACK_IMPORTED_MODULE_9__]);
([_api_Book__WEBPACK_IMPORTED_MODULE_1__, reactstrap__WEBPACK_IMPORTED_MODULE_3__, _api_Category__WEBPACK_IMPORTED_MODULE_4__, _components_BookSwiper__WEBPACK_IMPORTED_MODULE_6__, _components_BookDetails__WEBPACK_IMPORTED_MODULE_7__, _components_BookCard__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Books = ()=>{
    const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [pages, setPages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [selectedBook, setSelectedBook] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [relatedBooks, setRelatedBooks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [params, setParams] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        "with": "author,category,image",
        "paginate": "18"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setLoading(true);
        const id = window.location.search.split("=")[1];
        if (id) {
            params.selected_book = id;
            _api_Book__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getBook(id).then(({ data })=>{
                setSelectedBook(data);
            });
        }
        _api_Category__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getAllCategories().then(({ data })=>{
            setCategories(data.map((category)=>{
                return {
                    value: category.id,
                    label: category.name
                };
            }));
        });
        _api_Book__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getAllBooks(params).then(({ data })=>{
            setBooks(data.books);
            setRelatedBooks(data.related_books);
            setPages(data.books.links);
            setLoading(false);
        });
    }, [
        params
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_10__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: selectedBook ? "كتاب " + selectedBook.title : selectedCategory ? "تحميل وقرائة كتب " + selectedCategory : "تصفح وحمّل مجموعة واسعة من الكتب باللغة العربية وغيرها | اعثر على قراءتك التالية"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: selectedBook ? "كتاب " + selectedBook.title : selectedCategory ? "تحميل وقرائة كتب " + selectedCategory : "تصفح وحمّل مجموعة واسعة من الكتب باللغة العربية وغيرها | اعثر على قراءتك التالية"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: selectedBook ? selectedBook.description : "تصفح وحمّل مجموعة واسعة من الكتب باللغة العربية وغيرها | اعثر على قراءتك التالية"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: selectedBook?.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + selectedBook?.image.path : "/images/library.jpg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: `https://riwaya-jo.site/books/?book=${selectedBook?.id}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: selectedBook ? "كتاب " + selectedBook.title + " للكاتب " + selectedBook.author.name + " تصنيف " + selectedBook.category.name + " تحميل وقرائة الكتاب pdf " : " المعاصرة، استكشف مجموعة واسعة من الأنواع الأدبية واعثر على قراءتك التالية المثيرة. تصفح وابحث وانغمس في العالم الأدبي الغني للكتب باللغة العربي"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
                loading: loading
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
                fluid: true,
                className: "content row mx-0 justify-content-md-around justify-content-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-3 row mb-5",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " bg-light shadow rounded-2 p-3",
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
                                    className: "book-section-title mb-4 ",
                                    children: "التصنيفات"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "list-unstyled categories-list custom-scroll",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "d-flex align-items-center gap-2 p-2 cursor-pointer  border-bottom d-flex align-items-center justify-content-between",
                                            onClick: ()=>{
                                                setParams({
                                                    ...params,
                                                    category: null
                                                });
                                            },
                                            children: "جميع التصنيفات"
                                        }),
                                        categories && categories.map((category)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                onClick: ()=>{
                                                    setParams({
                                                        ...params,
                                                        category: category.value
                                                    });
                                                    setSelectedCategory(category.label);
                                                },
                                                className: `d-flex align-items-center gap-2 p-2 cursor-pointer  border-bottom d-flex align-items-center justify-content-between ` + {
                                                    "active": params.category === category.value
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: category.label
                                                })
                                            }, category.value);
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-9",
                        children: [
                            selectedBook && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BookDetails__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                book: selectedBook
                            }),
                            relatedBooks && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "book-section-title mb-4",
                                children: [
                                    "كتب أخرى ل",
                                    selectedBook?.author.name
                                ]
                            }),
                            relatedBooks && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                                className: "mb-5 justify-content-between",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BookSwiper__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    books: relatedBooks,
                                    swiperKey: "related"
                                }, "related")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                                className: "mb-5 justify-content-ؤثىفثق",
                                children: books?.data && books?.data.map((book)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-6 col-md-4 col-lg-3 col-xl-2 mb-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BookCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                            book: book
                                        }, book.id)
                                    });
                                }, [])
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                className: "",
                                "aria-label": "...",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
                                    className: "pagination justify-content-center my-2",
                                    listClassName: "justify-content-center gap-1  flex-wrap",
                                    children: pages && pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.PaginationItem, {
                                            className: (!page.url ? "disabled" : "") + (page.active ? "active" : ""),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.PaginationLink, {
                                                className: "rounded-2 d-flex align-items-center justify-content-center gap-1 flex-grow-1",
                                                onClick: ()=>{
                                                    if (page.url) {
                                                        params.page = page.url.substring(page.url.lastIndexOf("=") + 1);
                                                        _api_Book__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getAllBooks(params).then(({ data })=>{
                                                            setBooks(data.books);
                                                            setRelatedBooks(data.related_books);
                                                            setPages(data.books.links);
                                                        });
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
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Books);

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

/***/ 2791:
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

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

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7812,9192,7521,7033,159,6664,2829], () => (__webpack_exec__(966)));
module.exports = __webpack_exports__;

})();