"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_app_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/app/globals.css */ \"./src/app/globals.css\");\n/* harmony import */ var _src_app_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_app_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ \"./pages/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst LoginPage = ()=>{\n    _s();\n    const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const loginHandler = ()=>{\n        if (username != undefined && password != undefined) {\n            setLoggedIn(true);\n            router.push(\"/home\");\n        } else {\n            alert(\"Invalid Username or Password\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sign-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login Page\"\n            }, void 0, false, {\n                fileName: \"/Users/jarenspitters/Downloads/CS4300/github/expenses-tracker/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Username\",\n                value: username,\n                onChange: (user)=>setUsername(user.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/jarenspitters/Downloads/CS4300/github/expenses-tracker/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                placeholder: \"Password\",\n                value: password,\n                onChange: (pass)=>setPassword(pass.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/jarenspitters/Downloads/CS4300/github/expenses-tracker/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: loginHandler,\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/jarenspitters/Downloads/CS4300/github/expenses-tracker/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jarenspitters/Downloads/CS4300/github/expenses-tracker/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"txBJlnkzYef4p0+RQ3Hm2M53xdU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUNSO0FBQ1g7QUFHckIsTUFBTUcsWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTVMsU0FBU1Isc0RBQVNBO0lBRXhCLE1BQU1TLGVBQWU7UUFDbkIsSUFBSUwsWUFBWU0sYUFBYUosWUFBWUksV0FBVztZQUNsRFAsWUFBWTtZQUNaSyxPQUFPRyxJQUFJLENBQUM7UUFDZCxPQUFPO1lBQ0xDLE1BQU07UUFDUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVk7OzBCQUNmLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBT0MsYUFBWTtnQkFBV0MsT0FBT2Y7Z0JBQVVnQixVQUFVLENBQUNDLE9BQVNoQixZQUFZZ0IsS0FBS0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MEJBQzVHLDhEQUFDSDtnQkFBTUMsTUFBSztnQkFBV0MsYUFBWTtnQkFBV0MsT0FBT2I7Z0JBQVVjLFVBQVUsQ0FBQ0csT0FBU2hCLFlBQVlnQixLQUFLRCxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFDaEgsOERBQUNLO2dCQUFPQyxTQUFTaEI7MEJBQWM7Ozs7Ozs7Ozs7OztBQUdyQztHQXZCTVI7O1FBSVdELGtEQUFTQTs7O0tBSnBCQztBQXlCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCAnLi4vc3JjL2FwcC9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtsb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGxvZ2luSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAodXNlcm5hbWUgIT0gdW5kZWZpbmVkICYmIHBhc3N3b3JkICE9IHVuZGVmaW5lZCkge1xuICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0ludmFsaWQgVXNlcm5hbWUgb3IgUGFzc3dvcmQnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic2lnbi1pblwiPlxuICAgICAgPGgxPkxvZ2luIFBhZ2U8L2gxPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyh1c2VyKSA9PiBzZXRVc2VybmFtZSh1c2VyLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhwYXNzKSA9PiBzZXRQYXNzd29yZChwYXNzLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2luSGFuZGxlcn0+TG9naW48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxvZ2luUGFnZSIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsImxvZ2luSGFuZGxlciIsInVuZGVmaW5lZCIsInB1c2giLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidXNlciIsInRhcmdldCIsInBhc3MiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});