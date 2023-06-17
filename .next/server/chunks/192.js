"use strict";
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 9192:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    token: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("token"),
    user: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("user") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("user")) : null,
    role: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("role")
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "LOGIN" || 0:
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("token", action.payload.token);
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("user", JSON.stringify(action.payload.user));
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("role", action.payload.user.role);
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                role: action.payload.user.role
            };
        case "UPDATE":
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("token", action.payload.token);
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("user", JSON.stringify(action.payload.user));
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("role", action.payload.user.role);
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                role: action.payload.user.role
            };
        case "LOGOUT":
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("token");
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("user");
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("role");
            return {
                ...state,
                token: null,
                user: null,
                role: null
            };
        default:
            return state;
    }
};
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;