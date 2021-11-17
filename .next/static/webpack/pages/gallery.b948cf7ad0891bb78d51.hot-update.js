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
          children: "aaaaaaa"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS5iOTQ4Y2Y3YWQwODkxYmI3OGQ1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRWUsU0FBU00sT0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhBLE9BQVcsUUFBWEEsT0FBVztBQUM1QyxzQkFDQztBQUFBLDRCQUNDLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLDhEQUFDLHlEQUFEO0FBQUEsNkJBQ0MsOERBQUMsb0RBQUQ7QUFBTyxnQkFBUSxFQUFFLEtBQWpCO0FBQUEsK0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBUUM7QUFBTSxlQUFTLEVBQUMsU0FBaEI7QUFBQSw2QkFDQztBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGtCQUNFQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDRCxPQUFEO0FBQUEsOEJBQ1osOERBQUMsc0VBQUQ7QUFBQSxtQ0FDQyw4REFBQyxrREFBRDtBQUFNLGtCQUFJLHFCQUFjQSxPQUFPLENBQUNFLEVBQXRCLENBQVY7QUFBQSxxQ0FDQztBQUFHLHlCQUFTLEVBQUMsWUFBYjtBQUFBLHVDQUNDO0FBQUEseUNBQ0MsOERBQUMsbURBQUQ7QUFDQyx1QkFBRyxFQUFFRixPQUFPLENBQUNHLEtBQVIsQ0FBY0MsR0FEcEI7QUFFQyx1QkFBRyxFQUFFSixPQUFPLENBQUNLLEtBRmQ7QUFHQyx5QkFBSyxFQUFFTCxPQUFPLENBQUNHLEtBQVIsQ0FBY0csS0FIdEI7QUFJQywwQkFBTSxFQUFFTixPQUFPLENBQUNHLEtBQVIsQ0FBY0k7QUFKdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsZUFBMkNQLE9BQU8sQ0FBQ0UsRUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFk7QUFBQSxTQUFaO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRDtBQUFBLGtCQUREO0FBK0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IEhvdmVyTGluayB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hvdmVyTGluay9ob3ZlckxpbmtcIjtcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2L25hdlwiO1xyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vbGliL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyLCBTY2VuZSB9IGZyb20gXCJyZWFjdC1zY3JvbGxtYWdpY1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FsbGVyeSh7IGdhbGxlcnkgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8TmF2IC8+XHJcblx0XHRcdDxDb250cm9sbGVyPlxyXG5cdFx0XHRcdDxTY2VuZSB2ZXJ0aWNhbD17ZmFsc2V9PlxyXG5cdFx0XHRcdFx0PGRpdj5hYWFhYWFhPC9kaXY+XHJcblx0XHRcdFx0PC9TY2VuZT5cclxuXHRcdFx0PC9Db250cm9sbGVyPlxyXG5cclxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiZ2FsbGVyeVwiPlxyXG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJpbWFnZV9saXN0XCI+XHJcblx0XHRcdFx0XHR7Z2FsbGVyeS5tYXAoKGdhbGxlcnkpID0+IChcclxuXHRcdFx0XHRcdFx0PEhvdmVyTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2dhbGxlcnkvJHtnYWxsZXJ5LmlkfWB9IGtleT17Z2FsbGVyeS5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpbWFnZV9pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17Z2FsbGVyeS5waG90by51cmx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e2dhbGxlcnkudGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17Z2FsbGVyeS5waG90by53aWR0aH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD17Z2FsbGVyeS5waG90by5oZWlnaHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvSG92ZXJMaW5rPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9tYWluPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGNsaWVudC5nZXQoeyBlbmRwb2ludDogXCJnYWxsZXJ5XCIgfSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRnYWxsZXJ5OiBkYXRhLmNvbnRlbnRzLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiSG92ZXJMaW5rIiwiTmF2IiwiQ29udHJvbGxlciIsIlNjZW5lIiwiZ2FsbGVyeSIsIm1hcCIsImlkIiwicGhvdG8iLCJ1cmwiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==