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
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollmagic */ "./node_modules/react-scrollmagic/dist/index.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\y_koma\\Desktop\\pim\\pages\\gallery.jsx";







var __N_SSG = true;
function gallery(_ref) {
  var _this = this;

  var gallery = _ref.gallery;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_nav_nav__WEBPACK_IMPORTED_MODULE_3__.Nav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__.Controller, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_scrollmagic__WEBPACK_IMPORTED_MODULE_4__.Scene, {
        vertical: false,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          children: "sss"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
      className: "gallery",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
        className: "image_list",
        children: gallery.map(function (gallery) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_hoverLink_hoverLink__WEBPACK_IMPORTED_MODULE_2__.HoverLink, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/gallery/".concat(gallery.id),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                className: "image_item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: gallery.photo.url,
                    alt: gallery.title,
                    width: gallery.photo.width,
                    height: gallery.photo.height
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 9
              }, _this)
            }, gallery.id, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS5mMDhmMWZhMmYyNWFkNGM5ODE3Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRWUsU0FBU00sT0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhBLE9BQVcsUUFBWEEsT0FBVztBQUM1QyxzQkFDQztBQUFBLDRCQUNDLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLDhEQUFDLHlEQUFEO0FBQUEsNkJBQ0MsOERBQUMsb0RBQUQ7QUFBTyxnQkFBUSxFQUFFLEtBQWpCO0FBQUEsK0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBUUM7QUFBTSxlQUFTLEVBQUMsU0FBaEI7QUFBQSw2QkFDQztBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGtCQUNFQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDRCxPQUFEO0FBQUEsOEJBQ1osOERBQUMsc0VBQUQ7QUFBQSxtQ0FDQyw4REFBQyxrREFBRDtBQUFNLGtCQUFJLHFCQUFjQSxPQUFPLENBQUNFLEVBQXRCLENBQVY7QUFBQSxxQ0FDQztBQUFHLHlCQUFTLEVBQUMsWUFBYjtBQUFBLHVDQUNDO0FBQUEseUNBQ0MsOERBQUMsbURBQUQ7QUFDQyx1QkFBRyxFQUFFRixPQUFPLENBQUNHLEtBQVIsQ0FBY0MsR0FEcEI7QUFFQyx1QkFBRyxFQUFFSixPQUFPLENBQUNLLEtBRmQ7QUFHQyx5QkFBSyxFQUFFTCxPQUFPLENBQUNHLEtBQVIsQ0FBY0csS0FIdEI7QUFJQywwQkFBTSxFQUFFTixPQUFPLENBQUNHLEtBQVIsQ0FBY0k7QUFKdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsZUFBMkNQLE9BQU8sQ0FBQ0UsRUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFk7QUFBQSxTQUFaO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRDtBQUFBLGtCQUREO0FBK0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IEhvdmVyTGluayB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hvdmVyTGluay9ob3ZlckxpbmtcIjtcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2L25hdlwiO1xyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vbGliL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyLCBTY2VuZSB9IGZyb20gXCJyZWFjdC1zY3JvbGxtYWdpY1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FsbGVyeSh7IGdhbGxlcnkgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8TmF2IC8+XHJcblx0XHRcdDxDb250cm9sbGVyPlxyXG5cdFx0XHRcdDxTY2VuZSB2ZXJ0aWNhbD17ZmFsc2V9PlxyXG5cdFx0XHRcdFx0PGRpdj5zc3M8L2Rpdj5cclxuXHRcdFx0XHQ8L1NjZW5lPlxyXG5cdFx0XHQ8L0NvbnRyb2xsZXI+XHJcblxyXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+XHJcblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImltYWdlX2xpc3RcIj5cclxuXHRcdFx0XHRcdHtnYWxsZXJ5Lm1hcCgoZ2FsbGVyeSkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8SG92ZXJMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvZ2FsbGVyeS8ke2dhbGxlcnkuaWR9YH0ga2V5PXtnYWxsZXJ5LmlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImltYWdlX2l0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtnYWxsZXJ5LnBob3RvLnVybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD17Z2FsbGVyeS50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXtnYWxsZXJ5LnBob3RvLndpZHRofVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXtnYWxsZXJ5LnBob3RvLmhlaWdodH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9Ib3Zlckxpbms+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L21haW4+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LmdldCh7IGVuZHBvaW50OiBcImdhbGxlcnlcIiB9KTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGdhbGxlcnk6IGRhdGEuY29udGVudHMsXHJcblx0XHR9LFxyXG5cdH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJIb3ZlckxpbmsiLCJOYXYiLCJDb250cm9sbGVyIiwiU2NlbmUiLCJnYWxsZXJ5IiwibWFwIiwiaWQiLCJwaG90byIsInVybCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9