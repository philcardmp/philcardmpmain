"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./pages/profile/index.jsx":
/*!*********************************!*\
  !*** ./pages/profile/index.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_ChatInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ChatInput */ \"./components/ChatInput.tsx\");\n/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Message */ \"./components/Message.tsx\");\n/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NavigationBar */ \"./components/NavigationBar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import {\n//   StarBorderOutlined as StarBorderOutlinedIcon,\n//   InfoOutlined as InfoOutlinedIcon,\n// } from \"@mui/icons-material\";\n\n\n\nfunction Chat() {\n    _s();\n    const image = localStorage.getItem(\"picture\") || \"/user.jpeg\";\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const chatRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [userMessages, loading] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection)(userId && _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"users\").doc(userId).collection(\"messages\").orderBy(\"timestamp\", \"asc\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setEmail(localStorage.getItem(\"email\"));\n        setUserId(localStorage.getItem(\"userId\"));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var ref;\n        chatRef === null || chatRef === void 0 ? void 0 : (ref = chatRef.current) === null || ref === void 0 ? void 0 : ref.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    }, [\n        userId,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                className: \"justify-content-between p-3 border-bottom mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        md: 4,\n                        className: \"bg-dark\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                src: image,\n                                alt: \"\",\n                                rounded: true,\n                                height: 50,\n                                className: \"mr-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"text-light mt-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: email\n                                }, void 0, false, {\n                                    fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        md: 8,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                            fluid: true,\n                            className: \"d-flex flex-column flex-grow-1 mt-5\",\n                            children: email && userMessages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                                        className: \"justify-content-between p-3 border-bottom\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                                                className: \"d-flex align-items-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                    className: \"m-0\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: [\n                                                            \"#\",\n                                                            email\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"d-flex align-items-center font-size-14\",\n                                                    children: \"Details\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex-grow-1 overflow-auto\",\n                                        children: userMessages === null || userMessages === void 0 ? void 0 : userMessages.docs.map((doc)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                message: doc.data().message,\n                                                timestamp: doc.data().timestamp,\n                                                user: doc.data().user\n                                            }, doc.id, false, {\n                                                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 21\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        ref: chatRef,\n                                        className: \"pb-5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        chatRef: chatRef,\n                                        email: email,\n                                        userId: userId\n                                    }, void 0, false, {\n                                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"4POAm16g2tA8IFMlZBmaZPKyXjM=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEyRDtBQUNpQjtBQUN4QztBQUNrQjtBQUN0RCxXQUFXO0FBQ1gsa0RBQWtEO0FBQ2xELHNDQUFzQztBQUN0QyxnQ0FBZ0M7QUFDbUI7QUFDSjtBQUNZO0FBRTVDLFNBQVNhLE9BQU87O0lBQzdCLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQyxjQUFjO0lBQ2pELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNnQixRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNa0IsVUFBVW5CLDZDQUFNQSxDQUFDLElBQUk7SUFDM0IsTUFBTSxDQUFDb0IsY0FBY0MsUUFBUSxHQUFHbkIsNkVBQWFBLENBQzNDZSxVQUNFYixvREFDYSxDQUFDLFNBQ1htQixHQUFHLENBQUNOLFFBQ0pLLFVBQVUsQ0FBQyxZQUNYRSxPQUFPLENBQUMsYUFBYTtJQUc1QnpCLGdEQUFTQSxDQUFDLElBQU07UUFDZGlCLFNBQVNILGFBQWFDLE9BQU8sQ0FBQztRQUM5QkksVUFBVUwsYUFBYUMsT0FBTyxDQUFDO0lBQ2pDLEdBQUcsRUFBRTtJQUVMZixnREFBU0EsQ0FBQyxJQUFNO1lBQ2RvQjtRQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLE1BQUFBLFFBQVNNLE9BQU8sY0FBaEJOLGlCQUFBQSxLQUFBQSxJQUFBQSxJQUFrQk8sZUFBZTtZQUMvQkMsVUFBVTtRQUNaO0lBQ0YsR0FBRztRQUFDVjtRQUFRSTtLQUFRO0lBRXBCLHFCQUNFLDhEQUFDTzs7MEJBQ0MsOERBQUNsQixpRUFBYUE7Ozs7OzBCQUNkLDhEQUFDbUI7Ozs7OzBCQUNELDhEQUFDQTs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ3ZCLGdEQUFHQTtnQkFBQ3dCLFdBQVU7O2tDQUNiLDhEQUFDdkIsZ0RBQUdBO3dCQUFDd0IsSUFBSTt3QkFBR0QsV0FBVTs7MENBQ3BCLDhEQUFDRTtnQ0FBTUMsS0FBS3JCO2dDQUFPc0IsS0FBSTtnQ0FBR0MsT0FBTztnQ0FBQ0MsUUFBUTtnQ0FBSU4sV0FBVTs7Ozs7OzBDQUN4RCw4REFBQ087Z0NBQUdQLFdBQVU7MENBQ1osNEVBQUNROzhDQUFRdkI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtiLDhEQUFDUixnREFBR0E7d0JBQUN3QixJQUFJO2tDQUNQLDRFQUFDMUIsc0RBQVNBOzRCQUFDa0MsS0FBSzs0QkFBQ1QsV0FBVTtzQ0FDeEJmLFNBQVNLLDhCQUNSOztrREFDRSw4REFBQ2QsZ0RBQUdBO3dDQUFDd0IsV0FBVTs7MERBQ2IsOERBQUN2QixnREFBR0E7Z0RBQUN1QixXQUFVOzBEQUNiLDRFQUFDTztvREFBR1AsV0FBVTs4REFDWiw0RUFBQ1E7OzREQUFPOzREQUFFdkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQUtkLDhEQUFDUixnREFBR0E7MERBQ0YsNEVBQUNpQztvREFBRVYsV0FBVTs4REFBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQU0xRCw4REFBQ0Y7d0NBQUlFLFdBQVU7a0RBQ1pWLHlCQUFBQSwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBY3FCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNuQixvQkFDdkIsOERBQUNkLDJEQUFPQTtnREFFTmtDLFNBQVNwQixJQUFJcUIsSUFBSSxHQUFHRCxPQUFPO2dEQUMzQkUsV0FBV3RCLElBQUlxQixJQUFJLEdBQUdDLFNBQVM7Z0RBQy9CQyxNQUFNdkIsSUFBSXFCLElBQUksR0FBR0UsSUFBSTsrQ0FIaEJ2QixJQUFJd0IsRUFBRTs7OztxREFLYjs7Ozs7O2tEQUdKLDhEQUFDbkI7d0NBQUlvQixLQUFLN0I7d0NBQVNXLFdBQVU7Ozs7OztrREFFN0IsOERBQUN0Qiw2REFBU0E7d0NBQUNXLFNBQVNBO3dDQUFTSixPQUFPQTt3Q0FBT0UsUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuRSxDQUFDO0dBaEZ1Qk47O1FBS1VULHlFQUFhQTs7O0tBTHZCUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlL2luZGV4LmpzeD80YTYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24sIHVzZURvY3VtZW50IH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG4vLyBpbXBvcnQge1xuLy8gICBTdGFyQm9yZGVyT3V0bGluZWQgYXMgU3RhckJvcmRlck91dGxpbmVkSWNvbixcbi8vICAgSW5mb091dGxpbmVkIGFzIEluZm9PdXRsaW5lZEljb24sXG4vLyB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XG5pbXBvcnQgQ2hhdElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NoYXRJbnB1dFwiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZVwiO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0KCkge1xuICBjb25zdCBpbWFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGljdHVyZVwiKSB8fCBcIi91c2VyLmpwZWdcIjtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBjaGF0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbdXNlck1lc3NhZ2VzLCBsb2FkaW5nXSA9IHVzZUNvbGxlY3Rpb24oXG4gICAgdXNlcklkICYmXG4gICAgICBkYlxuICAgICAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXG4gICAgICAgIC5kb2ModXNlcklkKVxuICAgICAgICAuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpXG4gICAgICAgIC5vcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiYXNjXCIpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFbWFpbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpKTtcbiAgICBzZXRVc2VySWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGF0UmVmPy5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfSwgW3VzZXJJZCwgbG9hZGluZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuIHAtMyBib3JkZXItYm90dG9tIG10LTVcIj5cbiAgICAgICAgPENvbCBtZD17NH0gY2xhc3NOYW1lPVwiYmctZGFya1wiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJcIiByb3VuZGVkIGhlaWdodD17NTB9IGNsYXNzTmFtZT1cIm1yLTNcIiAvPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0IG10LTVcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+e2VtYWlsfTwvc3Ryb25nPlxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgey8qIDxTdGFyQm9yZGVyT3V0bGluZWRJY29uIGNsYXNzTmFtZT1cIm1sLTJcIiAvPiAqL31cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPENvbCBtZD17OH0+XG4gICAgICAgICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1ncm93LTEgbXQtNVwiPlxuICAgICAgICAgICAge2VtYWlsICYmIHVzZXJNZXNzYWdlcyAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwLTMgYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiN7ZW1haWx9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8U3RhckJvcmRlck91dGxpbmVkSWNvbiBjbGFzc05hbWU9XCJtbC0yXCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmb250LXNpemUtMTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMSBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICB7dXNlck1lc3NhZ2VzPy5kb2NzLm1hcCgoZG9jKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtkb2MuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17ZG9jLmRhdGEoKS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcD17ZG9jLmRhdGEoKS50aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgICAgICAgdXNlcj17ZG9jLmRhdGEoKS51c2VyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17Y2hhdFJlZn0gY2xhc3NOYW1lPVwicGItNVwiIC8+XG5cbiAgICAgICAgICAgICAgICA8Q2hhdElucHV0IGNoYXRSZWY9e2NoYXRSZWZ9IGVtYWlsPXtlbWFpbH0gdXNlcklkPXt1c2VySWR9IC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlQ29sbGVjdGlvbiIsInVzZURvY3VtZW50IiwiZGIiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJDaGF0SW5wdXQiLCJNZXNzYWdlIiwiTmF2aWdhdGlvbkJhciIsIkNoYXQiLCJpbWFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlbWFpbCIsInNldEVtYWlsIiwidXNlcklkIiwic2V0VXNlcklkIiwiY2hhdFJlZiIsInVzZXJNZXNzYWdlcyIsImxvYWRpbmciLCJjb2xsZWN0aW9uIiwiZG9jIiwib3JkZXJCeSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZGl2IiwiYnIiLCJjbGFzc05hbWUiLCJtZCIsIkltYWdlIiwic3JjIiwiYWx0Iiwicm91bmRlZCIsImhlaWdodCIsImg0Iiwic3Ryb25nIiwiZmx1aWQiLCJwIiwiZG9jcyIsIm1hcCIsIm1lc3NhZ2UiLCJkYXRhIiwidGltZXN0YW1wIiwidXNlciIsImlkIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile/index.jsx\n"));

/***/ })

});