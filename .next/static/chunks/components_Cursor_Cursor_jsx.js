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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\y_koma\\Desktop\\project\\pim\\components\\Cursor\\Cursor.jsx",
    _this = undefined,
    _s = $RefreshSig$();



var Cursor = function Cursor() {
  _s();

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      ref: dotOutline,
      className: "cursor-dot-outline"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      ref: dot,
      className: "cursor-dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 3
  }, _this);
};

_s(Cursor, "3eSABLjBKY+xLi8lFwG33L0jQ4Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9jb21wb25lbnRzX0N1cnNvcl9DdXJzb3JfanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTyxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQzNCLE1BQU1DLEtBQUssR0FBRyxFQUFkO0FBRUEsTUFBTUMsR0FBRyxHQUFHSCw2Q0FBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQSxNQUFNSSxVQUFVLEdBQUdKLDZDQUFNLENBQUMsSUFBRCxDQUF6QjtBQUVBLE1BQU1LLGFBQWEsR0FBR0wsNkNBQU0sQ0FBQyxJQUFELENBQTVCO0FBQ0EsTUFBTU0sY0FBYyxHQUFHTiw2Q0FBTSxDQUFDLEtBQUQsQ0FBN0I7QUFFQSxNQUFNTyxJQUFJLEdBQUdQLDZDQUFNLENBQUNRLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixDQUFyQixDQUFuQjtBQUNBLE1BQU1DLElBQUksR0FBR1YsNkNBQU0sQ0FBQ1EsTUFBTSxDQUFDRyxXQUFQLEdBQXFCLENBQXRCLENBQW5COztBQUNBLE1BQU1DLEVBQUUsR0FBR1osNkNBQU0sQ0FBQyxDQUFELENBQWpCOztBQUNBLE1BQU1hLEVBQUUsR0FBR2IsNkNBQU0sQ0FBQyxDQUFELENBQWpCOztBQUVBLE1BQU1jLFVBQVUsR0FBR2QsNkNBQU0sQ0FBQyxJQUFELENBQXpCO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmZ0IsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q0MsY0FBdkM7QUFDQUYsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0UsYUFBckM7QUFDQUgsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q0csY0FBdkM7QUFDQUosSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixFQUF3Q0ksZUFBeEM7QUFDQUwsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxD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QUFBLFdBREQ7QUFNQSxDQXZHTTs7R0FBTUY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3Vyc29yL0N1cnNvci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDdXJzb3IgPSAoKSA9PiB7XHJcblx0Y29uc3QgZGVsYXkgPSAxODtcclxuXHJcblx0Y29uc3QgZG90ID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IGRvdE91dGxpbmUgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdGNvbnN0IGN1cnNvclZpc2libGUgPSB1c2VSZWYodHJ1ZSk7XHJcblx0Y29uc3QgY3Vyc29yRW5sYXJnZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBlbmRYID0gdXNlUmVmKHdpbmRvdy5pbm5lcldpZHRoIC8gMik7XHJcblx0Y29uc3QgZW5kWSA9IHVzZVJlZih3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcclxuXHRjb25zdCBfeCA9IHVzZVJlZigwKTtcclxuXHRjb25zdCBfeSA9IHVzZVJlZigwKTtcclxuXHJcblx0Y29uc3QgcmVxdWVzdFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VPdmVyRXZlbnQpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbW91c2VPdXRFdmVudCk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUV2ZW50KTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlRW50ZXJFdmVudCk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBtb3VzZUxlYXZlRXZlbnQpO1xyXG5cclxuXHRcdGFuaW1hdGVEb3RPdXRsaW5lKCk7XHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZU92ZXJFdmVudCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlT3V0RXZlbnQpO1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUV2ZW50KTtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VFbnRlckV2ZW50KTtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbW91c2VMZWF2ZUV2ZW50KTtcclxuXHJcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RSZWYuY3VycmVudCk7XHJcblx0XHR9O1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlQ3Vyc29yVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuXHRcdGlmIChjdXJzb3JWaXNpYmxlLmN1cnJlbnQpIHtcclxuXHRcdFx0ZG90LmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcblx0XHRcdGRvdE91dGxpbmUuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvdC5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cdFx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlQ3Vyc29yU2l6ZSA9ICgpID0+IHtcclxuXHRcdGlmIChjdXJzb3JFbmxhcmdlZC5jdXJyZW50KSB7XHJcblx0XHRcdGRvdC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuNzUpXCI7XHJcblx0XHRcdGRvdE91dGxpbmUuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjUpXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb3QuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKVwiO1xyXG5cdFx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSlcIjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBtb3VzZU92ZXJFdmVudCA9ICgpID0+IHtcclxuXHRcdGN1cnNvckVubGFyZ2VkLmN1cnJlbnQgPSB0cnVlO1xyXG5cdFx0dG9nZ2xlQ3Vyc29yU2l6ZSgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG1vdXNlT3V0RXZlbnQgPSAoKSA9PiB7XHJcblx0XHRjdXJzb3JFbmxhcmdlZC5jdXJyZW50ID0gZmFsc2U7XHJcblx0XHR0b2dnbGVDdXJzb3JTaXplKCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbW91c2VFbnRlckV2ZW50ID0gKCkgPT4ge1xyXG5cdFx0Y3Vyc29yVmlzaWJsZS5jdXJyZW50ID0gdHJ1ZTtcclxuXHRcdHRvZ2dsZUN1cnNvclZpc2liaWxpdHkoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBtb3VzZUxlYXZlRXZlbnQgPSAoKSA9PiB7XHJcblx0XHRjdXJzb3JWaXNpYmxlLmN1cnJlbnQgPSBmYWxzZTtcclxuXHRcdHRvZ2dsZUN1cnNvclZpc2liaWxpdHkoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBtb3VzZU1vdmVFdmVudCA9IChlKSA9PiB7XHJcblx0XHRjdXJzb3JWaXNpYmxlLmN1cnJlbnQgPSB0cnVlO1xyXG5cdFx0dG9nZ2xlQ3Vyc29yVmlzaWJpbGl0eSgpO1xyXG5cclxuXHRcdGVuZFguY3VycmVudCA9IGUucGFnZVg7XHJcblx0XHRlbmRZLmN1cnJlbnQgPSBlLnBhZ2VZO1xyXG5cclxuXHRcdGRvdC5jdXJyZW50LnN0eWxlLnRvcCA9IGVuZFkuY3VycmVudCArIFwicHhcIjtcclxuXHRcdGRvdC5jdXJyZW50LnN0eWxlLmxlZnQgPSBlbmRYLmN1cnJlbnQgKyBcInB4XCI7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYW5pbWF0ZURvdE91dGxpbmUgPSAoKSA9PiB7XHJcblx0XHRfeC5jdXJyZW50ICs9IChlbmRYLmN1cnJlbnQgLSBfeC5jdXJyZW50KSAvIGRlbGF5O1xyXG5cdFx0X3kuY3VycmVudCArPSAoZW5kWS5jdXJyZW50IC0gX3kuY3VycmVudCkgLyBkZWxheTtcclxuXHJcblx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUudG9wID0gX3kuY3VycmVudCArIFwicHhcIjtcclxuXHRcdGRvdE91dGxpbmUuY3VycmVudC5zdHlsZS5sZWZ0ID0gX3guY3VycmVudCArIFwicHhcIjtcclxuXHJcblx0XHRyZXF1ZXN0UmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZURvdE91dGxpbmUpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IHJlZj17ZG90T3V0bGluZX0gY2xhc3NOYW1lPVwiY3Vyc29yLWRvdC1vdXRsaW5lXCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgcmVmPXtkb3R9IGNsYXNzTmFtZT1cImN1cnNvci1kb3RcIj48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDdXJzb3IiLCJkZWxheSIsImRvdCIsImRvdE91dGxpbmUiLCJjdXJzb3JWaXNpYmxlIiwiY3Vyc29yRW5sYXJnZWQiLCJlbmRYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImVuZFkiLCJpbm5lckhlaWdodCIsIl94IiwiX3kiLCJyZXF1ZXN0UmVmIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VPdmVyRXZlbnQiLCJtb3VzZU91dEV2ZW50IiwibW91c2VNb3ZlRXZlbnQiLCJtb3VzZUVudGVyRXZlbnQiLCJtb3VzZUxlYXZlRXZlbnQiLCJhbmltYXRlRG90T3V0bGluZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImN1cnJlbnQiLCJ0b2dnbGVDdXJzb3JWaXNpYmlsaXR5Iiwic3R5bGUiLCJvcGFjaXR5IiwidG9nZ2xlQ3Vyc29yU2l6ZSIsInRyYW5zZm9ybSIsImUiLCJwYWdlWCIsInBhZ2VZIiwidG9wIiwibGVmdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=