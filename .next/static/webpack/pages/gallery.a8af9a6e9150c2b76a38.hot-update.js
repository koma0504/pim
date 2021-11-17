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
        duration: 600,
        pin: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS5hOGFmOWE2ZTkxNTBjMmI3NmEzOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRWUsU0FBU00sT0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhBLE9BQVcsUUFBWEEsT0FBVztBQUM1QyxzQkFDQztBQUFBLDRCQUNDLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLDhEQUFDLHlEQUFEO0FBQUEsNkJBQ0MsOERBQUMsb0RBQUQ7QUFBTyxnQkFBUSxFQUFFLEdBQWpCO0FBQXNCLFdBQUcsTUFBekI7QUFBQSwrQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFRQztBQUFNLGVBQVMsRUFBQyxTQUFoQjtBQUFBLDZCQUNDO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsa0JBQ0VBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNELE9BQUQ7QUFBQSw4QkFDWiw4REFBQyxzRUFBRDtBQUFBLG1DQUNDLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUkscUJBQWNBLE9BQU8sQ0FBQ0UsRUFBdEIsQ0FBVjtBQUFBLHFDQUNDO0FBQUcseUJBQVMsRUFBQyxZQUFiO0FBQUEsdUNBQ0M7QUFBQSx5Q0FDQyw4REFBQyxtREFBRDtBQUNDLHVCQUFHLEVBQUVGLE9BQU8sQ0FBQ0csS0FBUixDQUFjQyxHQURwQjtBQUVDLHVCQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssS0FGZDtBQUdDLHlCQUFLLEVBQUVMLE9BQU8sQ0FBQ0csS0FBUixDQUFjRyxLQUh0QjtBQUlDLDBCQUFNLEVBQUVOLE9BQU8sQ0FBQ0csS0FBUixDQUFjSTtBQUp2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxlQUEyQ1AsT0FBTyxDQUFDRSxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEWTtBQUFBLFNBQVo7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJEO0FBQUEsa0JBREQ7QUErQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgSG92ZXJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaG92ZXJMaW5rL2hvdmVyTGlua1wiO1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXYvbmF2XCI7XHJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi9saWIvY2xpZW50XCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIFNjZW5lIH0gZnJvbSBcInJlYWN0LXNjcm9sbG1hZ2ljXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYWxsZXJ5KHsgZ2FsbGVyeSB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxOYXYgLz5cclxuXHRcdFx0PENvbnRyb2xsZXI+XHJcblx0XHRcdFx0PFNjZW5lIGR1cmF0aW9uPXs2MDB9IHBpbj5cclxuXHRcdFx0XHRcdDxkaXY+YWFhYWFhYTwvZGl2PlxyXG5cdFx0XHRcdDwvU2NlbmU+XHJcblx0XHRcdDwvQ29udHJvbGxlcj5cclxuXHJcblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImdhbGxlcnlcIj5cclxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaW1hZ2VfbGlzdFwiPlxyXG5cdFx0XHRcdFx0e2dhbGxlcnkubWFwKChnYWxsZXJ5KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxIb3Zlckxpbms+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9nYWxsZXJ5LyR7Z2FsbGVyeS5pZH1gfSBrZXk9e2dhbGxlcnkuaWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaW1hZ2VfaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2dhbGxlcnkucGhvdG8udXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtnYWxsZXJ5LnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9e2dhbGxlcnkucGhvdG8ud2lkdGh9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9e2dhbGxlcnkucGhvdG8uaGVpZ2h0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L0hvdmVyTGluaz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvbWFpbj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuZ2V0KHsgZW5kcG9pbnQ6IFwiZ2FsbGVyeVwiIH0pO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Z2FsbGVyeTogZGF0YS5jb250ZW50cyxcclxuXHRcdH0sXHJcblx0fTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIkhvdmVyTGluayIsIk5hdiIsIkNvbnRyb2xsZXIiLCJTY2VuZSIsImdhbGxlcnkiLCJtYXAiLCJpZCIsInBob3RvIiwidXJsIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=