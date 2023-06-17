"use strict";
exports.id = 588;
exports.ids = [588];
exports.modules = {

/***/ 7588:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9192);
/* harmony import */ var _common_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8009);
/* harmony import */ var _common_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4673);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6368);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_store__WEBPACK_IMPORTED_MODULE_4__, _common_NavBar__WEBPACK_IMPORTED_MODULE_5__]);
([_src_store__WEBPACK_IMPORTED_MODULE_4__, _common_NavBar__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Layout = ({ children })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const user = _src_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getState().user;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_7___default())("1d2155e8f9d2d65bf322", {
            cluster: "ap2",
            encrypted: true
        });
        const channel = pusher.subscribe("comments." + user?.id);
        channel.bind("App\\Events\\NewComment", function(data) {
        // Handle toast notification
        });
        return ()=>{
            // Unsubscribe from Pusher channel on component unmount
            pusher.unsubscribe("comments." + user?.id);
        };
    }, [
        user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        dir: "rtl",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
            store: _src_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "main-content",
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;