"use strict";
self["webpackHotUpdate_N_E"]("pages/gallery",{

/***/ "./pages/gallery.jsx":
/*!***************************!*\
  !*** ./pages/gallery.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ gallery; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_hoverLink_hoverLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hoverLink/hoverLink */ "./components/hoverLink/hoverLink.jsx");
/* harmony import */ var _components_nav_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav/nav */ "./components/nav/nav.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\y_koma\\Desktop\\pim\\pages\\gallery.jsx";






var __N_SSG = true;
function gallery(_ref) {
  var _this = this;

  var gallery = _ref.gallery;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_nav_nav__WEBPACK_IMPORTED_MODULE_3__.Nav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
      className: "gallery",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
        className: "image_list",
        children: gallery.map(function (gallery) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_hoverLink_hoverLink__WEBPACK_IMPORTED_MODULE_2__.HoverLink, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/gallery/".concat(gallery.id),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                className: "image_item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: gallery.photo.url,
                    alt: gallery.title,
                    width: gallery.photo.width,
                    height: gallery.photo.height
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 9
              }, _this)
            }, gallery.id, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS5mNGY2Y2ZkNDJhYjBjZDg0NzIwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR2UsU0FBU0ksT0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhBLE9BQVcsUUFBWEEsT0FBVztBQUM1QyxzQkFDQztBQUFBLDRCQUNDLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQU0sZUFBUyxFQUFDLFNBQWhCO0FBQUEsNkJBQ0M7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxrQkFDRUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQ0QsT0FBRDtBQUFBLDhCQUNaLDhEQUFDLHNFQUFEO0FBQUEsbUNBQ0MsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxxQkFBY0EsT0FBTyxDQUFDRSxFQUF0QixDQUFWO0FBQUEscUNBQ0M7QUFBRyx5QkFBUyxFQUFDLFlBQWI7QUFBQSx1Q0FDQztBQUFBLHlDQUNDLDhEQUFDLG1EQUFEO0FBQ0MsdUJBQUcsRUFBRUYsT0FBTyxDQUFDRyxLQUFSLENBQWNDLEdBRHBCO0FBRUMsdUJBQUcsRUFBRUosT0FBTyxDQUFDSyxLQUZkO0FBR0MseUJBQUssRUFBRUwsT0FBTyxDQUFDRyxLQUFSLENBQWNHLEtBSHRCO0FBSUMsMEJBQU0sRUFBRU4sT0FBTyxDQUFDRyxLQUFSLENBQWNJO0FBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELGVBQTJDUCxPQUFPLENBQUNFLEVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBWjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQSxrQkFERDtBQXlCQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYWxsZXJ5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBIb3ZlckxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob3ZlckxpbmsvaG92ZXJMaW5rXCI7XHJcbmltcG9ydCB7IE5hdiB9IGZyb20gXCIuLi9jb21wb25lbnRzL25hdi9uYXZcIjtcclxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2xpYi9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbGxlcnkoeyBnYWxsZXJ5IH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PE5hdiAvPlxyXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+XHJcblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImltYWdlX2xpc3RcIj5cclxuXHRcdFx0XHRcdHtnYWxsZXJ5Lm1hcCgoZ2FsbGVyeSkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8SG92ZXJMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvZ2FsbGVyeS8ke2dhbGxlcnkuaWR9YH0ga2V5PXtnYWxsZXJ5LmlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImltYWdlX2l0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtnYWxsZXJ5LnBob3RvLnVybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD17Z2FsbGVyeS50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXtnYWxsZXJ5LnBob3RvLndpZHRofVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXtnYWxsZXJ5LnBob3RvLmhlaWdodH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9Ib3Zlckxpbms+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L21haW4+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LmdldCh7IGVuZHBvaW50OiBcImdhbGxlcnlcIiB9KTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGdhbGxlcnk6IGRhdGEuY29udGVudHMsXHJcblx0XHR9LFxyXG5cdH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJIb3ZlckxpbmsiLCJOYXYiLCJnYWxsZXJ5IiwibWFwIiwiaWQiLCJwaG90byIsInVybCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9