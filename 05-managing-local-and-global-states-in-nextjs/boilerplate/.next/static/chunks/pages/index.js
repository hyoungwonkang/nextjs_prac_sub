/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fhyoungwon-kang%2Fnext-book%2Fpractical-next.js%2F05-managing-local-and-global-states-in-nextjs%2Fboilerplate%2Fpages%2Findex.js&page=%2F!":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fhyoungwon-kang%2Fnext-book%2Fpractical-next.js%2F05-managing-local-and-global-states-in-nextjs%2Fboilerplate%2Fpages%2Findex.js&page=%2F! ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmh5b3VuZ3dvbi1rYW5nJTJGbmV4dC1ib29rJTJGcHJhY3RpY2FsLW5leHQuanMlMkYwNS1tYW5hZ2luZy1sb2NhbC1hbmQtZ2xvYmFsLXN0YXRlcy1pbi1uZXh0anMlMkZib2lsZXJwbGF0ZSUyRnBhZ2VzJTJGaW5kZXguanMmcGFnZT0lMkYhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsMENBQWtCO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz80ZGJjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fhyoungwon-kang%2Fnext-book%2Fpractical-next.js%2F05-managing-local-and-global-states-in-nextjs%2Fboilerplate%2Fpages%2Findex.js&page=%2F!\n"));

/***/ }),

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_cartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/cartContext */ \"./components/context/cartContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n// eslint-disable-next-line no-unused-vars\nfunction ProductCard(param) {\n    let { id , name , price , picture  } = param;\n    _s();\n    const { setItems , items  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_cartContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    var _items_id;\n    const productAmount = (_items_id = items === null || items === void 0 ? void 0 : items[id]) !== null && _items_id !== void 0 ? _items_id : 0;\n    const handleAmount = (action)=>{\n        if (action === \"increment\") {\n            const newItemAmount = id in items ? items[id] + 1 : 1;\n            setItems({\n                ...items,\n                [id]: newItemAmount\n            });\n        }\n        if (action === \"decrement\") {\n            if ((items === null || items === void 0 ? void 0 : items[id]) > 0) {\n                setItems({\n                    ...items,\n                    [id]: items[id] - 1\n                });\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-200 p-6 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative 100% h-40 m-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: picture,\n                    alt: name,\n                    className: \"object-cover\"\n                }, void 0, false, {\n                    fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/components/ProductCard.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/components/ProductCard.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold text-l\",\n                        children: [\n                            \" \",\n                            name,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/components/ProductCard.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold text-l text-gray-500\",\n                        children: [\n                            \" $\",\n                            price,\n                            \" per kg \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/components/ProductCard.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/components/ProductCard.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-4 w-2/4 m-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"pl-2 pr-2 bg-red-400 text-white rounded-md\",\n                        disabled: productAmount === 0,\n                        onClick: ()=>handleAmount(\"decrement\"),\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/components/ProductCard.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/components/ProductCard.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"pl-2 pr-2 bg-green-400 text-white rounded-md\",\n                        onClick: ()=>handleAmount(\"increment\"),\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/components/ProductCard.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/components/ProductCard.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/components/ProductCard.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductCard, \"OHlpGkvpsF2Xdcx5cTMwG4sWSNI=\");\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFtQztBQUNxQjtBQUV4RCwwQ0FBMEM7QUFDMUMsU0FBU0UsWUFBWSxLQUE0QixFQUFFO1FBQTlCLEVBQUVDLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRSxHQUE1Qjs7SUFDbkIsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRSxHQUFHUixpREFBVUEsQ0FBQ0MsNERBQW1CQTtRQUNwQ087SUFBdEIsTUFBTUMsZ0JBQWdCRCxDQUFBQSxZQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLEtBQU8sQ0FBQ0wsR0FBRyxjQUFYSyx1QkFBQUEsWUFBZSxDQUFDO0lBQ3RDLE1BQU1FLGVBQWUsQ0FBQ0MsU0FBVztRQUMvQixJQUFJQSxXQUFXLGFBQWE7WUFDMUIsTUFBTUMsZ0JBQWdCVCxNQUFNSyxRQUFRQSxLQUFLLENBQUNMLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDckRJLFNBQVM7Z0JBQUUsR0FBR0MsS0FBSztnQkFBRSxDQUFDTCxHQUFHLEVBQUVTO1lBQWM7UUFDM0MsQ0FBQztRQUNELElBQUlELFdBQVcsYUFBYTtZQUMxQixJQUFJSCxDQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLEtBQU8sQ0FBQ0wsR0FBRyxJQUFHLEdBQUc7Z0JBQ25CSSxTQUFTO29CQUFFLEdBQUdDLEtBQUs7b0JBQUUsQ0FBQ0wsR0FBRyxFQUFFSyxLQUFLLENBQUNMLEdBQUcsR0FBRztnQkFBRTtZQUMzQyxDQUFDO1FBQ0gsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlDLEtBQUtWO29CQUFTVyxLQUFLYjtvQkFBTVUsV0FBVTs7Ozs7Ozs7Ozs7MEJBRTFDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFBbUI7NEJBQUVWOzRCQUFLOzs7Ozs7O2tDQUN6Qyw4REFBQ1M7d0JBQUlDLFdBQVU7OzRCQUFpQzs0QkFBR1Q7NEJBQU07Ozs7Ozs7Ozs7Ozs7MEJBRTNELDhEQUFDUTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUNDSixXQUFVO3dCQUNWSyxVQUFVVixrQkFBa0I7d0JBQzVCVyxTQUFTLElBQU1WLGFBQWE7a0NBQzdCOzs7Ozs7a0NBR0QsOERBQUNHOzs7OztrQ0FDRCw4REFBQ0s7d0JBQ0NKLFdBQVU7d0JBQ1ZNLFNBQVMsSUFBTVYsYUFBYTtrQ0FDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBMUNTUjtLQUFBQTtBQTRDVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzP2M5YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNob3BwaW5nQ2FydENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9jYXJ0Q29udGV4dFwiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgaWQsIG5hbWUsIHByaWNlLCBwaWN0dXJlIH0pIHtcbiAgY29uc3QgeyBzZXRJdGVtcywgaXRlbXMgfSA9IHVzZUNvbnRleHQoU2hvcHBpbmdDYXJ0Q29udGV4dCk7XG4gIGNvbnN0IHByb2R1Y3RBbW91bnQgPSBpdGVtcz8uW2lkXSA/PyAwO1xuICBjb25zdCBoYW5kbGVBbW91bnQgPSAoYWN0aW9uKSA9PiB7XG4gICAgaWYgKGFjdGlvbiA9PT0gXCJpbmNyZW1lbnRcIikge1xuICAgICAgY29uc3QgbmV3SXRlbUFtb3VudCA9IGlkIGluIGl0ZW1zID8gaXRlbXNbaWRdICsgMSA6IDE7XG4gICAgICBzZXRJdGVtcyh7IC4uLml0ZW1zLCBbaWRdOiBuZXdJdGVtQW1vdW50IH0pO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uID09PSBcImRlY3JlbWVudFwiKSB7XG4gICAgICBpZiAoaXRlbXM/LltpZF0gPiAwKSB7XG4gICAgICAgIHNldEl0ZW1zKHsgLi4uaXRlbXMsIFtpZF06IGl0ZW1zW2lkXSAtIDEgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTYgcm91bmRlZC1tZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSAxMDAlIGgtNDAgbS1hdXRvXCI+XG4gICAgICAgIDxpbWcgc3JjPXtwaWN0dXJlfSBhbHQ9e25hbWV9IGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxcIj4ge25hbWV9IDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWwgdGV4dC1ncmF5LTUwMFwiPiAke3ByaWNlfSBwZXIga2cgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtNCB3LTIvNCBtLWF1dG9cIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgcHItMiBiZy1yZWQtNDAwIHRleHQtd2hpdGUgcm91bmRlZC1tZFwiXG4gICAgICAgICAgZGlzYWJsZWQ9e3Byb2R1Y3RBbW91bnQgPT09IDB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQW1vdW50KFwiZGVjcmVtZW50XCIpfVxuICAgICAgICA+XG4gICAgICAgICAgLVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdj57LyogVG8gYmUgaW1wbGVtZW50ZWQgKi99PC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwbC0yIHByLTIgYmctZ3JlZW4tNDAwIHRleHQtd2hpdGUgcm91bmRlZC1tZFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQW1vdW50KFwiaW5jcmVtZW50XCIpfVxuICAgICAgICA+XG4gICAgICAgICAgK1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiU2hvcHBpbmdDYXJ0Q29udGV4dCIsIlByb2R1Y3RDYXJkIiwiaWQiLCJuYW1lIiwicHJpY2UiLCJwaWN0dXJlIiwic2V0SXRlbXMiLCJpdGVtcyIsInByb2R1Y3RBbW91bnQiLCJoYW5kbGVBbW91bnQiLCJhY3Rpb24iLCJuZXdJdGVtQW1vdW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductCard.js\n"));

/***/ }),

/***/ "./data/items.js":
/*!***********************!*\
  !*** ./data/items.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    {\n        id: \"7109-a115\",\n        name: \"Broccoli\",\n        picture: \"https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c\",\n        price: 2\n    },\n    {\n        id: \"9126-b921\",\n        name: \"Onions\",\n        picture: \"https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31\",\n        price: 1.5\n    },\n    {\n        id: \"4192-p192\",\n        name: \"Cauliflower\",\n        picture: \"https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80\",\n        price: 2.5\n    },\n    {\n        id: \"8321-k532\",\n        name: \"Carrots\",\n        picture: \"https://images.unsplash.com/photo-1582515073490-39981397c445\",\n        price: 3.5\n    }\n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2l0ZW1zLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZTtJQUNiO1FBQ0VBLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtDQUNELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9pdGVtcy5qcz8zYmI2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIGlkOiBcIjcxMDktYTExNVwiLFxuICAgIG5hbWU6IFwiQnJvY2NvbGlcIixcbiAgICBwaWN0dXJlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg0MjcwMzU0OTQ5LWMyNmIwZDViNGEwY1wiLFxuICAgIHByaWNlOiAyLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiOTEyNi1iOTIxXCIsXG4gICAgbmFtZTogXCJPbmlvbnNcIixcbiAgICBwaWN0dXJlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4OTc3OTU2ODEyLWNkM2RiYWRhYWYzMVwiLFxuICAgIHByaWNlOiAxLjUsXG4gIH0sXG4gIHtcbiAgICBpZDogXCI0MTkyLXAxOTJcIixcbiAgICBuYW1lOiBcIkNhdWxpZmxvd2VyXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxMzc0Mzk4MzMwMy1iM2U4OWY4YTJiODBcIixcbiAgICBwcmljZTogMi41LFxuICB9LFxuICB7XG4gICAgaWQ6IFwiODMyMS1rNTMyXCIsXG4gICAgbmFtZTogXCJDYXJyb3RzXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MjUxNTA3MzQ5MC0zOTk4MTM5N2M0NDVcIixcbiAgICBwcmljZTogMy41LFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJpZCIsIm5hbWUiLCJwaWN0dXJlIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/items.js\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProductCard */ \"./components/ProductCard.js\");\n/* harmony import */ var _data_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/items */ \"./data/items.js\");\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-4 gap-4\",\n        children: _data_items__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                ...product\n            }, product.id, false, {\n                fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQW9EO0FBQ2Y7QUFFckMsU0FBU0UsT0FBTztJQUNkLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaSCx1REFBWSxDQUFDLENBQUNLLHdCQUNiLDhEQUFDTiwrREFBV0E7Z0JBQW1CLEdBQUdNLE9BQU87ZUFBdkJBLFFBQVFDLEVBQUU7Ozs7Ozs7Ozs7QUFJcEM7S0FSU0w7QUFVVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi9kYXRhL2l0ZW1zXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHsuLi5wcm9kdWN0fSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUHJvZHVjdENhcmQiLCJwcm9kdWN0cyIsIkhvbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fhyoungwon-kang%2Fnext-book%2Fpractical-next.js%2F05-managing-local-and-global-states-in-nextjs%2Fboilerplate%2Fpages%2Findex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);