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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_ChatInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ChatInput */ \"./components/ChatInput.tsx\");\n/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Message */ \"./components/Message.tsx\");\n/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NavigationBar */ \"./components/NavigationBar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Chat() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const chatRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const messagesContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [userMessages, loading] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection)(userId && _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"users\").doc(userId).collection(\"messages\").orderBy(\"timestamp\", \"asc\"));\n    const [image] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection)(userId && _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"users\").doc(userId).collection(\"image\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        image.docs.map((doc)=>console.log(\"jowel\", image));\n    }, [\n        image\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setEmail(localStorage.getItem(\"email\"));\n        setUserId(localStorage.getItem(\"userId\"));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (messagesContainerRef.current) {\n            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;\n        }\n    }, [\n        userMessages\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var ref;\n        chatRef === null || chatRef === void 0 ? void 0 : (ref = chatRef.current) === null || ref === void 0 ? void 0 : ref.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    }, [\n        userId,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                className: \"justify-content-between p-3 border-bottom mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        md: 4,\n                        className: \"bg-dark\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"mt-5 text-light fw-bold\",\n                            children: \"Order History:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        md: 8,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                            fluid: true,\n                            className: \"d-flex flex-column flex-grow-1 mt-5\",\n                            children: email && userMessages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                                        className: \"justify-content-between p-3 border-bottom\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                                            className: \"d-flex align-items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"m-0\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: [\n                                                        \"#\",\n                                                        email\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"messages-container overflow-auto\",\n                                        style: {\n                                            maxHeight: \"400px\"\n                                        },\n                                        ref: messagesContainerRef,\n                                        children: userMessages === null || userMessages === void 0 ? void 0 : userMessages.docs.map((doc)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                message: doc.data().message,\n                                                timestamp: doc.data().timestamp,\n                                                user: doc.data().user,\n                                                image: image\n                                            }, doc.id, false, {\n                                                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 21\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        ref: chatRef,\n                                        className: \"pb-5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        chatRef: chatRef,\n                                        email: email,\n                                        userId: userId\n                                    }, void 0, false, {\n                                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/crescendo/Documents/business/philcardmpmain/pages/profile/index.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"ARIZUfm/UcH1iQCp63I/WT5oRxk=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection,\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBT0E7K0NBSkZGLElBQUk0QixFQUFFOzs7O3FEQU1iOzs7Ozs7a0RBR0osOERBQUNkO3dDQUFJUyxLQUFLNUI7d0NBQVNxQixXQUFVOzs7Ozs7a0RBRTdCLDhEQUFDN0IsNkRBQVNBO3dDQUFDUSxTQUFTQTt3Q0FBU0osT0FBT0E7d0NBQU9FLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkUsQ0FBQztHQXhGdUJIOztRQUtVUix5RUFBYUE7UUFRN0JBLHlFQUFhQTs7O0tBYlBRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGUvaW5kZXguanN4PzRhNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IENoYXRJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DaGF0SW5wdXRcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lc3NhZ2VcIjtcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdCgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBjaGF0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBtZXNzYWdlc0NvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3VzZXJNZXNzYWdlcywgbG9hZGluZ10gPSB1c2VDb2xsZWN0aW9uKFxuICAgIHVzZXJJZCAmJlxuICAgICAgZGJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxuICAgICAgICAuZG9jKHVzZXJJZClcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJtZXNzYWdlc1wiKVxuICAgICAgICAub3JkZXJCeShcInRpbWVzdGFtcFwiLCBcImFzY1wiKVxuICApO1xuICBjb25zdCBbaW1hZ2VdID0gdXNlQ29sbGVjdGlvbihcbiAgICB1c2VySWQgJiYgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyh1c2VySWQpLmNvbGxlY3Rpb24oXCJpbWFnZVwiKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW1hZ2UuZG9jcy5tYXAoKGRvYykgPT4gY29uc29sZS5sb2coXCJqb3dlbFwiLCBpbWFnZSkpO1xuICB9LCBbaW1hZ2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVtYWlsKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpO1xuICAgIHNldFVzZXJJZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtZXNzYWdlc0NvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICBtZXNzYWdlc0NvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbFRvcCA9XG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cbiAgfSwgW3VzZXJNZXNzYWdlc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hhdFJlZj8uY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgfSk7XG4gIH0sIFt1c2VySWQsIGxvYWRpbmddKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TmF2aWdhdGlvbkJhciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwLTMgYm9yZGVyLWJvdHRvbSBtdC01XCI+XG4gICAgICAgIDxDb2wgbWQ9ezR9IGNsYXNzTmFtZT1cImJnLWRhcmtcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LWxpZ2h0IGZ3LWJvbGRcIj5PcmRlciBIaXN0b3J5OjwvaDQ+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgbWQ9ezh9PlxuICAgICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtZ3Jvdy0xIG10LTVcIj5cbiAgICAgICAgICAgIHtlbWFpbCAmJiB1c2VyTWVzc2FnZXMgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW4gcC0zIGJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4je2VtYWlsfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlcy1jb250YWluZXIgb3ZlcmZsb3ctYXV0b1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IFwiNDAwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgcmVmPXttZXNzYWdlc0NvbnRhaW5lclJlZn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dXNlck1lc3NhZ2VzPy5kb2NzLm1hcCgoZG9jKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtkb2MuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17ZG9jLmRhdGEoKS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcD17ZG9jLmRhdGEoKS50aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgICAgICAgdXNlcj17ZG9jLmRhdGEoKS51c2VyfVxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2NoYXRSZWZ9IGNsYXNzTmFtZT1cInBiLTVcIiAvPlxuXG4gICAgICAgICAgICAgICAgPENoYXRJbnB1dCBjaGF0UmVmPXtjaGF0UmVmfSBlbWFpbD17ZW1haWx9IHVzZXJJZD17dXNlcklkfSAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUNvbGxlY3Rpb24iLCJkYiIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkNoYXRJbnB1dCIsIk1lc3NhZ2UiLCJOYXZpZ2F0aW9uQmFyIiwiQ2hhdCIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJjaGF0UmVmIiwibWVzc2FnZXNDb250YWluZXJSZWYiLCJ1c2VyTWVzc2FnZXMiLCJsb2FkaW5nIiwiY29sbGVjdGlvbiIsImRvYyIsIm9yZGVyQnkiLCJpbWFnZSIsImRvY3MiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZGl2IiwiYnIiLCJjbGFzc05hbWUiLCJtZCIsImg0IiwiZmx1aWQiLCJzdHJvbmciLCJzdHlsZSIsIm1heEhlaWdodCIsInJlZiIsIm1lc3NhZ2UiLCJkYXRhIiwidGltZXN0YW1wIiwidXNlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile/index.jsx\n"));

/***/ })

});