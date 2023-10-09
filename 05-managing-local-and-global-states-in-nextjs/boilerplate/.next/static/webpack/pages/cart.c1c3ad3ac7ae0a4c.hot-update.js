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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_context_cartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/context/cartContext */ \"./components/context/cartContext.js\");\n/* harmony import */ var _data_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/items */ \"./data/items.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction getFullItem(id) {\n    const idx = _data_items__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findIndex((item)=>item.id === id);\n    return _data_items__WEBPACK_IMPORTED_MODULE_3__[\"default\"][idx];\n}\nfunction Cart() {\n    _s();\n    const { items  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_cartContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const total = Object.keys(items).map((id)=>getFullItem(id).price * items[id]).reduce((x, y)=>x + y, 0);\n    const amounts = Object.keys(items).map((id)=>{\n        const item = getFullItem(id);\n        return {\n            item,\n            amount: items[id]\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold\",\n                children: [\n                    \" Total: $\",\n                    total,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: amounts.map((param)=>/*#__PURE__*/ {\n                    let { item , amount  } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"x\",\n                            amount,\n                            \" \",\n                            item.name,\n                            \" ($\",\n                            amount * item.price,\n                            \")\"\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Cart, \"rJqdXWcK+J1DNZMA7+YqMqgizNU=\");\n_c = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBbUM7QUFDaUM7QUFDbkM7QUFFakMsU0FBU0csWUFBWUMsRUFBRSxFQUFFO0lBQ3ZCLE1BQU1DLE1BQU1ILDZEQUFjLENBQUMsQ0FBQ0ssT0FBU0EsS0FBS0gsRUFBRSxLQUFLQTtJQUNqRCxPQUFPRixtREFBSSxDQUFDRyxJQUFJO0FBQ2xCO0FBQ0EsU0FBU0csT0FBTzs7SUFDZCxNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ0MsdUVBQW1CQTtJQUNoRCxNQUFNUyxRQUFRQyxPQUFPQyxJQUFJLENBQUNILE9BQ3ZCSSxHQUFHLENBQUMsQ0FBQ1QsS0FBT0QsWUFBWUMsSUFBSVUsS0FBSyxHQUFHTCxLQUFLLENBQUNMLEdBQUcsRUFDN0NXLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxJQUFJQyxHQUFHO0lBRTNCLE1BQU1DLFVBQVVQLE9BQU9DLElBQUksQ0FBQ0gsT0FBT0ksR0FBRyxDQUFDLENBQUNULEtBQU87UUFDN0MsTUFBTUcsT0FBT0osWUFBWUM7UUFDekIsT0FBTztZQUFFRztZQUFNWSxRQUFRVixLQUFLLENBQUNMLEdBQUc7UUFBQztJQUNuQztJQUVBLHFCQUNFLDhEQUFDZ0I7OzBCQUNDLDhEQUFDQztnQkFBR0MsV0FBVTs7b0JBQW9CO29CQUFVWjtvQkFBTTs7Ozs7OzswQkFDbEQsOERBQUNVOzBCQUNFRixRQUFRTCxHQUFHLENBQUMsdUJBQ1g7d0JBRFksRUFBRU4sS0FBSSxFQUFFWSxPQUFNLEVBQUU7MkJBQzVCLDhEQUFDQzs7NEJBQWtCOzRCQUNmRDs0QkFBTzs0QkFBRVosS0FBS2dCLElBQUk7NEJBQUM7NEJBQUlKLFNBQVNaLEtBQUtPLEtBQUs7NEJBQUM7O3VCQURyQ1AsS0FBS0gsRUFBRTs7Ozs7Z0JBRVo7Ozs7Ozs7Ozs7OztBQUtmO0dBdkJTSTtLQUFBQTtBQXlCVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJ0LmpzP2Y0NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNob3BwaW5nQ2FydENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dC9jYXJ0Q29udGV4dFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGEvaXRlbXNcIjtcblxuZnVuY3Rpb24gZ2V0RnVsbEl0ZW0oaWQpIHtcbiAgY29uc3QgaWR4ID0gZGF0YS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgcmV0dXJuIGRhdGFbaWR4XTtcbn1cbmZ1bmN0aW9uIENhcnQoKSB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IHVzZUNvbnRleHQoU2hvcHBpbmdDYXJ0Q29udGV4dCk7XG4gIGNvbnN0IHRvdGFsID0gT2JqZWN0LmtleXMoaXRlbXMpXG4gICAgLm1hcCgoaWQpID0+IGdldEZ1bGxJdGVtKGlkKS5wcmljZSAqIGl0ZW1zW2lkXSlcbiAgICAucmVkdWNlKCh4LCB5KSA9PiB4ICsgeSwgMCk7XG5cbiAgY29uc3QgYW1vdW50cyA9IE9iamVjdC5rZXlzKGl0ZW1zKS5tYXAoKGlkKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGdldEZ1bGxJdGVtKGlkKTtcbiAgICByZXR1cm4geyBpdGVtLCBhbW91bnQ6IGl0ZW1zW2lkXSB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj4gVG90YWw6ICR7dG90YWx9IDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICB7YW1vdW50cy5tYXAoKHsgaXRlbSwgYW1vdW50IH0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICB4e2Ftb3VudH0ge2l0ZW0ubmFtZX0gKCR7YW1vdW50ICogaXRlbS5wcmljZX0pXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlNob3BwaW5nQ2FydENvbnRleHQiLCJkYXRhIiwiZ2V0RnVsbEl0ZW0iLCJpZCIsImlkeCIsImZpbmRJbmRleCIsIml0ZW0iLCJDYXJ0IiwiaXRlbXMiLCJ0b3RhbCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJwcmljZSIsInJlZHVjZSIsIngiLCJ5IiwiYW1vdW50cyIsImFtb3VudCIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cart.js\n"));

/***/ })

});