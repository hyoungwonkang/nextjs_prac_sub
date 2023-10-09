"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_context_cartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/context/cartContext */ \"./components/context/cartContext.js\");\n/* harmony import */ var _data_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/items */ \"./data/items.js\");\n\nvar _s = $RefreshSig$();\n\n\n// eslint-disable-next-line no-unused-vars\n\nconsole.log(_data_items__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nfunction getFullItem(id) {\n    const idx = _data_items__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findIndex((item)=>item.id === id);\n    return _data_items__WEBPACK_IMPORTED_MODULE_3__[\"default\"][idx];\n}\nfunction Cart() {\n    _s();\n    const { items  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_cartContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const total = Object.keys(items).map((id)=>{\n        console.log(getFullItem(id));\n        getFullItem(id).price * items[id];\n    }).reduce((x, y)=>x + y, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold\",\n                children: [\n                    \" Total: $\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [].map((param)=>/*#__PURE__*/ {\n                    let { item , amount  } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"x\",\n                            amount,\n                            \" \",\n                            item.name,\n                            \" ($\",\n                            amount * item.price,\n                            \")\"\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Cart, \"rJqdXWcK+J1DNZMA7+YqMqgizNU=\");\n_c = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBbUM7QUFDaUM7QUFDcEUsMENBQTBDO0FBQ1Q7QUFDakNHLFFBQVFDLEdBQUcsQ0FBQ0YsbURBQUlBO0FBQ2hCLFNBQVNHLFlBQVlDLEVBQUUsRUFBRTtJQUN2QixNQUFNQyxNQUFNTCw2REFBYyxDQUFDLENBQUNPLE9BQVNBLEtBQUtILEVBQUUsS0FBS0E7SUFDakQsT0FBT0osbURBQUksQ0FBQ0ssSUFBSTtBQUNsQjtBQUNBLFNBQVNHLE9BQU87O0lBQ2QsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR1gsaURBQVVBLENBQUNDLHVFQUFtQkE7SUFDaEQsTUFBTVcsUUFBUUMsT0FBT0MsSUFBSSxDQUFDSCxPQUN2QkksR0FBRyxDQUFDLENBQUNULEtBQU87UUFDWEgsUUFBUUMsR0FBRyxDQUFDQyxZQUFZQztRQUN4QkQsWUFBWUMsSUFBSVUsS0FBSyxHQUFHTCxLQUFLLENBQUNMLEdBQUc7SUFDbkMsR0FDQ1csTUFBTSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELElBQUlDLEdBQUc7SUFDM0IscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7O29CQUFvQjtvQkFBa0M7Ozs7Ozs7MEJBQ3BFLDhEQUFDRjswQkFDRSxFQUVBLENBQUNMLEdBQUcsQ0FBQyx1QkFDSjt3QkFESyxFQUFFTixLQUFJLEVBQUVjLE9BQU0sRUFBRTsyQkFDckIsOERBQUNIOzs0QkFBa0I7NEJBQ2ZHOzRCQUFPOzRCQUFFZCxLQUFLZSxJQUFJOzRCQUFDOzRCQUFJRCxTQUFTZCxLQUFLTyxLQUFLOzRCQUFDOzt1QkFEckNQLEtBQUtILEVBQUU7Ozs7O2dCQUVaOzs7Ozs7Ozs7Ozs7QUFLZjtHQXRCU0k7S0FBQUE7QUF3QlQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcz9mNDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaG9wcGluZ0NhcnRDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHQvY2FydENvbnRleHRcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGEvaXRlbXNcIjtcbmNvbnNvbGUubG9nKGRhdGEpO1xuZnVuY3Rpb24gZ2V0RnVsbEl0ZW0oaWQpIHtcbiAgY29uc3QgaWR4ID0gZGF0YS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgcmV0dXJuIGRhdGFbaWR4XTtcbn1cbmZ1bmN0aW9uIENhcnQoKSB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IHVzZUNvbnRleHQoU2hvcHBpbmdDYXJ0Q29udGV4dCk7XG4gIGNvbnN0IHRvdGFsID0gT2JqZWN0LmtleXMoaXRlbXMpXG4gICAgLm1hcCgoaWQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGdldEZ1bGxJdGVtKGlkKSk7XG4gICAgICBnZXRGdWxsSXRlbShpZCkucHJpY2UgKiBpdGVtc1tpZF07XG4gICAgfSlcbiAgICAucmVkdWNlKCh4LCB5KSA9PiB4ICsgeSwgMCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPiBUb3RhbDogJHsvKiBUbyBiZSBpbXBsZW1lbnRlZCAqL30gPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtbXG4gICAgICAgICAgLyogVG8gYmUgaW1wbGVtZW50ZWQgKi9cbiAgICAgICAgXS5tYXAoKHsgaXRlbSwgYW1vdW50IH0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICB4e2Ftb3VudH0ge2l0ZW0ubmFtZX0gKCR7YW1vdW50ICogaXRlbS5wcmljZX0pXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlNob3BwaW5nQ2FydENvbnRleHQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldEZ1bGxJdGVtIiwiaWQiLCJpZHgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiQ2FydCIsIml0ZW1zIiwidG90YWwiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicHJpY2UiLCJyZWR1Y2UiLCJ4IiwieSIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwiYW1vdW50IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cart.js\n"));

/***/ })

});