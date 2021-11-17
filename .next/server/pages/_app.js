(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./loadable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoverClick": () => (/* binding */ HoverClick),
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_locomotive_scroll_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/locomotive-scroll.css */ "./styles/locomotive-scroll.css");
/* harmony import */ var _styles_locomotive_scroll_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_locomotive_scroll_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\y_koma\\Desktop\\pim\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Cursor = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "components_Cursor_Cursor_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Cursor/Cursor */ "./components/Cursor/Cursor.jsx")).then(mod => mod.Cursor), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/Cursor/Cursor */ "./components/Cursor/Cursor.jsx")],
    modules: ["_app.jsx -> " + "../components/Cursor/Cursor"]
  }
});






const HoverClick = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createContext();
function App({
  Component,
  pageProps
}) {
  const {
    0: hover,
    1: setHover
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const value = {
    hover,
    setHover
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HoverClick.Provider, {
      value: value,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Cursor, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "bg_noise"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/locomotive-scroll.css":
/*!**************************************!*\
  !*** ./styles/locomotive-scroll.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvX2FwcC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubm9TU1IgPSBub1NTUjtcbmV4cG9ydHMuZGVmYXVsdCA9IGR5bmFtaWM7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9sb2FkYWJsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgaXNTZXJ2ZXJTaWRlID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBub1NTUihMb2FkYWJsZUluaXRpYWxpemVyLCBsb2FkYWJsZU9wdGlvbnMpIHtcbiAgICAvLyBSZW1vdmluZyB3ZWJwYWNrIGFuZCBtb2R1bGVzIG1lYW5zIHJlYWN0LWxvYWRhYmxlIHdvbid0IHRyeSBwcmVsb2FkaW5nXG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrO1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlcztcbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IHJlYWN0LWxvYWRhYmxlIGZyb20gaW5pdGlhbGl6aW5nIG9uIHRoZSBzZXJ2ZXJcbiAgICBpZiAoIWlzU2VydmVyU2lkZSkge1xuICAgICAgICByZXR1cm4gTG9hZGFibGVJbml0aWFsaXplcihsb2FkYWJsZU9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25zdCBMb2FkaW5nID0gbG9hZGFibGVPcHRpb25zLmxvYWRpbmc7XG4gICAgLy8gVGhpcyB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlciBzaWRlXG4gICAgcmV0dXJuICgpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywge1xuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBwYXN0RGVsYXk6IGZhbHNlLFxuICAgICAgICAgICAgdGltZWRPdXQ6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgO1xufVxuZnVuY3Rpb24gZHluYW1pYyhkeW5hbWljT3B0aW9ucywgb3B0aW9ucykge1xuICAgIGxldCBsb2FkYWJsZUZuID0gX2xvYWRhYmxlLmRlZmF1bHQ7XG4gICAgbGV0IGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbiAgICAgICAgbG9hZGluZzogKHsgZXJyb3IgLCBpc0xvYWRpbmcgLCBwYXN0RGVsYXkgIH0pPT57XG4gICAgICAgICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXJyb3IubWVzc2FnZSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIGVycm9yLnN0YWNrKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkga2VwdCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSBzb21lb25lIGlzIHBhc3NpbmcgaW4gYSBwcm9taXNlIGFzIGZpcnN0IGFyZ3VtZW50XG4gICAgLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICAgIGlmIChkeW5hbWljT3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpPT5keW5hbWljT3B0aW9uc1xuICAgICAgICA7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5keW5hbWljT3B0aW9uc1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGNvbnN0IHN1c3BlbnNlT3B0aW9ucyA9IGxvYWRhYmxlT3B0aW9ucztcbiAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTKSB7XG4gICAgICAgIC8vIEVycm9yIGlmIHJlYWN0IHJvb3QgaXMgbm90IGVuYWJsZWQgYW5kIGBzdXNwZW5zZWAgb3B0aW9uIGlzIHNldCB0byB0cnVlXG4gICAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX1JFQUNUX1JPT1QgJiYgc3VzcGVuc2VPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBhZGQgZXJyb3IgZG9jIHdoZW4gdGhpcyBmZWF0dXJlIGlzIHN0YWJsZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN1c3BlbnNlIG9wdGlvbiB1c2FnZSBpbiBuZXh0L2R5bmFtaWMuIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1keW5hbWljLXN1c3BlbnNlYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICByZXR1cm4gbG9hZGFibGVGbihzdXNwZW5zZU9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuICAgIGlmIChsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkXG4gICAgICAgIH07XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQ7XG4gICAgfVxuICAgIC8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KVxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmICghbG9hZGFibGVPcHRpb25zLnNzcikge1xuICAgICAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRhYmxlRm4obG9hZGFibGVPcHRpb25zKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pYy5qcy5tYXAiLCJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmNvbnN0IEN1cnNvciA9IGR5bmFtaWMoXHJcblx0KCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9DdXJzb3IvQ3Vyc29yXCIpLnRoZW4oKG1vZCkgPT4gbW9kLkN1cnNvciksXHJcblx0eyBzc3I6IGZhbHNlIH1cclxuKTtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9sb2NvbW90aXZlLXNjcm9sbC5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuZXhwb3J0IGNvbnN0IEhvdmVyQ2xpY2sgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcblx0Y29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IHZhbHVlID0ge1xyXG5cdFx0aG92ZXIsXHJcblx0XHRzZXRIb3ZlcixcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SG92ZXJDbGljay5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG5cdFx0XHRcdDxDdXJzb3IgLz5cclxuXHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbiAvPlxyXG5cdFx0XHRcdFx0PGxpbmtcclxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheStTQzp3Z2h0QDQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFwiXHJcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZ19ub2lzZVwiPjwvZGl2PlxyXG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuXHRcdFx0PC9Ib3ZlckNsaWNrLlByb3ZpZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbG9hZGFibGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJub1NTUiIsImRlZmF1bHQiLCJkeW5hbWljIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfbG9hZGFibGUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWNPcHRpb25zIiwib3B0aW9ucyIsImxvYWRhYmxlRm4iLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwic3VzcGVuc2VPcHRpb25zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTIiwiX19ORVhUX1JFQUNUX1JPT1QiLCJzdXNwZW5zZSIsIkVycm9yIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJDdXJzb3IiLCJ0aGVuIiwibW9kIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJIb3ZlckNsaWNrIiwiY3JlYXRlQ29udGV4dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImhvdmVyIiwic2V0SG92ZXIiXSwic291cmNlUm9vdCI6IiJ9