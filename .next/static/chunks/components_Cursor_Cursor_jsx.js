"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Cursor_Cursor_jsx"],{

/***/ "./components/Cursor/Cursor.jsx":
/*!**************************************!*\
  !*** ./components/Cursor/Cursor.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cursor": function() { return /* binding */ Cursor; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\y_koma\\Desktop\\pim\\components\\Cursor\\Cursor.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var Cursor = function Cursor() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_2__.HoverClick),
      hover = _useContext.hover;

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
      route = _useRouter.route;

  var delay = 18;
  var dot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var dotOutline = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var cursorVisible = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var cursorEnlarged = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var endX = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(window.innerWidth / 2);
  var endY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(window.innerHeight / 2);

  var _x = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);

  var _y = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);

  var requestRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);
    animateDotOutline();
    return function () {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  var toggleCursorVisibility = function toggleCursorVisibility() {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  var toggleCursorSize = function toggleCursorSize() {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(0.75)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      dot.current.style.transform = "translate(-50%, -50%) scale(1)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };

  var mouseOverEvent = function mouseOverEvent() {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  var mouseOutEvent = function mouseOutEvent() {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  var mouseEnterEvent = function mouseEnterEvent() {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  var mouseLeaveEvent = function mouseLeaveEvent() {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  var mouseMoveEvent = function mouseMoveEvent(e) {
    cursorVisible.current = true;
    toggleCursorVisibility();
    endX.current = e.pageX;
    endY.current = e.pageY;
    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  var animateDotOutline = function animateDotOutline() {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;
    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: hover,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      ref: dotOutline,
      className: "cursor-dot-outline",
      children: hover
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      ref: dot,
      className: "cursor-dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 3
  }, _this);
};

_s(Cursor, "CTKSynUQ3MaYXwZh7NU+kleI/aU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Cursor;

var _c;

$RefreshReg$(_c, "Cursor");

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9jb21wb25lbnRzX0N1cnNvcl9DdXJzb3JfanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFTyxJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQzNCLG9CQUFrQkYsaURBQVUsQ0FBQ0Msa0RBQUQsQ0FBNUI7QUFBQSxNQUFRRSxLQUFSLGVBQVFBLEtBQVI7O0FBRUEsbUJBQWtCTCxzREFBUyxFQUEzQjtBQUFBLE1BQVFNLEtBQVIsY0FBUUEsS0FBUjs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsRUFBZDtBQUVBLE1BQU1DLEdBQUcsR0FBR1QsNkNBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0EsTUFBTVUsVUFBVSxHQUFHViw2Q0FBTSxDQUFDLElBQUQsQ0FBekI7QUFFQSxNQUFNVyxhQUFhLEdBQUdYLDZDQUFNLENBQUMsSUFBRCxDQUE1QjtBQUNBLE1BQU1ZLGNBQWMsR0FBR1osNkNBQU0sQ0FBQyxLQUFELENBQTdCO0FBRUEsTUFBTWEsSUFBSSxHQUFHYiw2Q0FBTSxDQUFDYyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsQ0FBckIsQ0FBbkI7QUFDQSxNQUFNQyxJQUFJLEdBQUdoQiw2Q0FBTSxDQUFDYyxNQUFNLENBQUNHLFdBQVAsR0FBcUIsQ0FBdEIsQ0FBbkI7O0FBQ0EsTUFBTUMsRUFBRSxHQUFHbEIsNkNBQU0sQ0FBQyxDQUFELENBQWpCOztBQUNBLE1BQU1tQixFQUFFLEdBQUduQiw2Q0FBTSxDQUFDLENBQUQsQ0FBakI7O0FBRUEsTUFBTW9CLFVBQVUsR0FBR3BCLDZDQUFNLENBQUMsSUFBRCxDQUF6QjtBQUVBRCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZnNCLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNDLGNBQXZDO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNFLGFB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Q0M7QUFBSyxTQUFHLEVBQUVJLFVBQVY7QUFBc0IsZUFBUyxFQUFDLG9CQUFoQztBQUFBLGdCQUNFSjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUlDO0FBQUssU0FBRyxFQUFFRyxHQUFWO0FBQWUsZUFBUyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVFBLENBN0dNOztHQUFNSjtVQUdNSjs7O0tBSE5JIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3Vyc29yL0N1cnNvci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIb3ZlckNsaWNrIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDdXJzb3IgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBob3ZlciB9ID0gdXNlQ29udGV4dChIb3ZlckNsaWNrKTtcclxuXHJcblx0Y29uc3QgeyByb3V0ZSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IGRlbGF5ID0gMTg7XHJcblxyXG5cdGNvbnN0IGRvdCA9IHVzZVJlZihudWxsKTtcclxuXHRjb25zdCBkb3RPdXRsaW5lID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25zdCBjdXJzb3JWaXNpYmxlID0gdXNlUmVmKHRydWUpO1xyXG5cdGNvbnN0IGN1cnNvckVubGFyZ2VkID0gdXNlUmVmKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgZW5kWCA9IHVzZVJlZih3aW5kb3cuaW5uZXJXaWR0aCAvIDIpO1xyXG5cdGNvbnN0IGVuZFkgPSB1c2VSZWYod2luZG93LmlubmVySGVpZ2h0IC8gMik7XHJcblx0Y29uc3QgX3ggPSB1c2VSZWYoMCk7XHJcblx0Y29uc3QgX3kgPSB1c2VSZWYoMCk7XHJcblxyXG5cdGNvbnN0IHJlcXVlc3RSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlT3ZlckV2ZW50KTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlT3V0RXZlbnQpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVFdmVudCk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZUVudGVyRXZlbnQpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbW91c2VMZWF2ZUV2ZW50KTtcclxuXHJcblx0XHRhbmltYXRlRG90T3V0bGluZSgpO1xyXG5cclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VPdmVyRXZlbnQpO1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZU91dEV2ZW50KTtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVFdmVudCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlRW50ZXJFdmVudCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1vdXNlTGVhdmVFdmVudCk7XHJcblxyXG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0UmVmLmN1cnJlbnQpO1xyXG5cdFx0fTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IHRvZ2dsZUN1cnNvclZpc2liaWxpdHkgPSAoKSA9PiB7XHJcblx0XHRpZiAoY3Vyc29yVmlzaWJsZS5jdXJyZW50KSB7XHJcblx0XHRcdGRvdC5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cdFx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb3QuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHRcdFx0ZG90T3V0bGluZS5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHRvZ2dsZUN1cnNvclNpemUgPSAoKSA9PiB7XHJcblx0XHRpZiAoY3Vyc29yRW5sYXJnZWQuY3VycmVudCkge1xyXG5cdFx0XHRkb3QuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjc1KVwiO1xyXG5cdFx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS41KVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG90LmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSlcIjtcclxuXHRcdFx0ZG90T3V0bGluZS5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpXCI7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbW91c2VPdmVyRXZlbnQgPSAoKSA9PiB7XHJcblx0XHRjdXJzb3JFbmxhcmdlZC5jdXJyZW50ID0gdHJ1ZTtcclxuXHRcdHRvZ2dsZUN1cnNvclNpemUoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBtb3VzZU91dEV2ZW50ID0gKCkgPT4ge1xyXG5cdFx0Y3Vyc29yRW5sYXJnZWQuY3VycmVudCA9IGZhbHNlO1xyXG5cdFx0dG9nZ2xlQ3Vyc29yU2l6ZSgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG1vdXNlRW50ZXJFdmVudCA9ICgpID0+IHtcclxuXHRcdGN1cnNvclZpc2libGUuY3VycmVudCA9IHRydWU7XHJcblx0XHR0b2dnbGVDdXJzb3JWaXNpYmlsaXR5KCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbW91c2VMZWF2ZUV2ZW50ID0gKCkgPT4ge1xyXG5cdFx0Y3Vyc29yVmlzaWJsZS5jdXJyZW50ID0gZmFsc2U7XHJcblx0XHR0b2dnbGVDdXJzb3JWaXNpYmlsaXR5KCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbW91c2VNb3ZlRXZlbnQgPSAoZSkgPT4ge1xyXG5cdFx0Y3Vyc29yVmlzaWJsZS5jdXJyZW50ID0gdHJ1ZTtcclxuXHRcdHRvZ2dsZUN1cnNvclZpc2liaWxpdHkoKTtcclxuXHJcblx0XHRlbmRYLmN1cnJlbnQgPSBlLnBhZ2VYO1xyXG5cdFx0ZW5kWS5jdXJyZW50ID0gZS5wYWdlWTtcclxuXHJcblx0XHRkb3QuY3VycmVudC5zdHlsZS50b3AgPSBlbmRZLmN1cnJlbnQgKyBcInB4XCI7XHJcblx0XHRkb3QuY3VycmVudC5zdHlsZS5sZWZ0ID0gZW5kWC5jdXJyZW50ICsgXCJweFwiO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGFuaW1hdGVEb3RPdXRsaW5lID0gKCkgPT4ge1xyXG5cdFx0X3guY3VycmVudCArPSAoZW5kWC5jdXJyZW50IC0gX3guY3VycmVudCkgLyBkZWxheTtcclxuXHRcdF95LmN1cnJlbnQgKz0gKGVuZFkuY3VycmVudCAtIF95LmN1cnJlbnQpIC8gZGVsYXk7XHJcblxyXG5cdFx0ZG90T3V0bGluZS5jdXJyZW50LnN0eWxlLnRvcCA9IF95LmN1cnJlbnQgKyBcInB4XCI7XHJcblx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUubGVmdCA9IF94LmN1cnJlbnQgKyBcInB4XCI7XHJcblxyXG5cdFx0cmVxdWVzdFJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVEb3RPdXRsaW5lKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2hvdmVyfT5cclxuXHRcdFx0PGRpdiByZWY9e2RvdE91dGxpbmV9IGNsYXNzTmFtZT1cImN1cnNvci1kb3Qtb3V0bGluZVwiPlxyXG5cdFx0XHRcdHtob3Zlcn1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgcmVmPXtkb3R9IGNsYXNzTmFtZT1cImN1cnNvci1kb3RcIj48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJIb3ZlckNsaWNrIiwiQ3Vyc29yIiwiaG92ZXIiLCJyb3V0ZSIsImRlbGF5IiwiZG90IiwiZG90T3V0bGluZSIsImN1cnNvclZpc2libGUiLCJjdXJzb3JFbmxhcmdlZCIsImVuZFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZW5kWSIsImlubmVySGVpZ2h0IiwiX3giLCJfeSIsInJlcXVlc3RSZWYiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZU92ZXJFdmVudCIsIm1vdXNlT3V0RXZlbnQiLCJtb3VzZU1vdmVFdmVudCIsIm1vdXNlRW50ZXJFdmVudCIsIm1vdXNlTGVhdmVFdmVudCIsImFuaW1hdGVEb3RPdXRsaW5lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudCIsInRvZ2dsZUN1cnNvclZpc2liaWxpdHkiLCJzdHlsZSIsIm9wYWNpdHkiLCJ0b2dnbGVDdXJzb3JTaXplIiwidHJhbnNmb3JtIiwiZSIsInBhZ2VYIiwicGFnZVkiLCJ0b3AiLCJsZWZ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==