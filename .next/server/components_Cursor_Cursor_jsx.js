"use strict";
exports.id = "components_Cursor_Cursor_jsx";
exports.ids = ["components_Cursor_Cursor_jsx"];
exports.modules = {

/***/ "./components/Cursor/Cursor.jsx":
/*!**************************************!*\
  !*** ./components/Cursor/Cursor.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cursor": () => (/* binding */ Cursor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\y_koma\\Desktop\\pim\\components\\Cursor\\Cursor.jsx";





const Cursor = () => {
  const {
    hover
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_2__.HoverClick);
  const {
    route
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const delay = 18;
  const dot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dotOutline = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const cursorVisible = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  const cursorEnlarged = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const endX = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(window.innerWidth / 2);
  const endY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(window.innerHeight / 2);

  const _x = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);

  const _y = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);

  const requestRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);
    animateDotOutline();
    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(0.75)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      dot.current.style.transform = "translate(-50%, -50%) scale(1)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = e => {
    cursorVisible.current = true;
    toggleCursorVisibility();
    endX.current = e.pageX;
    endY.current = e.pageY;
    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  const animateDotOutline = () => {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      ref: dot,
      className: "cursor-dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 3
  }, undefined);
};

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQVFBLENBN0dNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9DdXJzb3IvQ3Vyc29yLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhvdmVyQ2xpY2sgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1cnNvciA9ICgpID0+IHtcclxuXHRjb25zdCB7IGhvdmVyIH0gPSB1c2VDb250ZXh0KEhvdmVyQ2xpY2spO1xyXG5cclxuXHRjb25zdCB7IHJvdXRlIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgZGVsYXkgPSAxODtcclxuXHJcblx0Y29uc3QgZG90ID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IGRvdE91dGxpbmUgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdGNvbnN0IGN1cnNvclZpc2libGUgPSB1c2VSZWYodHJ1ZSk7XHJcblx0Y29uc3QgY3Vyc29yRW5sYXJnZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBlbmRYID0gdXNlUmVmKHdpbmRvdy5pbm5lcldpZHRoIC8gMik7XHJcblx0Y29uc3QgZW5kWSA9IHVzZVJlZih3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcclxuXHRjb25zdCBfeCA9IHVzZVJlZigwKTtcclxuXHRjb25zdCBfeSA9IHVzZVJlZigwKTtcclxuXHJcblx0Y29uc3QgcmVxdWVzdFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VPdmVyRXZlbnQpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbW91c2VPdXRFdmVudCk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUV2ZW50KTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlRW50ZXJFdmVudCk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBtb3VzZUxlYXZlRXZlbnQpO1xyXG5cclxuXHRcdGFuaW1hdGVEb3RPdXRsaW5lKCk7XHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZU92ZXJFdmVudCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlT3V0RXZlbnQpO1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUV2ZW50KTtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VFbnRlckV2ZW50KTtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbW91c2VMZWF2ZUV2ZW50KTtcclxuXHJcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RSZWYuY3VycmVudCk7XHJcblx0XHR9O1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlQ3Vyc29yVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuXHRcdGlmIChjdXJzb3JWaXNpYmxlLmN1cnJlbnQpIHtcclxuXHRcdFx0ZG90LmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcblx0XHRcdGRvdE91dGxpbmUuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvdC5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cdFx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlQ3Vyc29yU2l6ZSA9ICgpID0+IHtcclxuXHRcdGlmIChjdXJzb3JFbmxhcmdlZC5jdXJyZW50KSB7XHJcblx0XHRcdGRvdC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuNzUpXCI7XHJcblx0XHRcdGRvdE91dGxpbmUuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjUpXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb3QuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKVwiO1xyXG5cdFx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSlcIjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBtb3VzZU92ZXJFdmVudCA9ICgpID0+IHtcclxuXHRcdGN1cnNvckVubGFyZ2VkLmN1cnJlbnQgPSB0cnVlO1xyXG5cdFx0dG9nZ2xlQ3Vyc29yU2l6ZSgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG1vdXNlT3V0RXZlbnQgPSAoKSA9PiB7XHJcblx0XHRjdXJzb3JFbmxhcmdlZC5jdXJyZW50ID0gZmFsc2U7XHJcblx0XHR0b2dnbGVDdXJzb3JTaXplKCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbW91c2VFbnRlckV2ZW50ID0gKCkgPT4ge1xyXG5cdFx0Y3Vyc29yVmlzaWJsZS5jdXJyZW50ID0gdHJ1ZTtcclxuXHRcdHRvZ2dsZUN1cnNvclZpc2liaWxpdHkoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBtb3VzZUxlYXZlRXZlbnQgPSAoKSA9PiB7XHJcblx0XHRjdXJzb3JWaXNpYmxlLmN1cnJlbnQgPSBmYWxzZTtcclxuXHRcdHRvZ2dsZUN1cnNvclZpc2liaWxpdHkoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBtb3VzZU1vdmVFdmVudCA9IChlKSA9PiB7XHJcblx0XHRjdXJzb3JWaXNpYmxlLmN1cnJlbnQgPSB0cnVlO1xyXG5cdFx0dG9nZ2xlQ3Vyc29yVmlzaWJpbGl0eSgpO1xyXG5cclxuXHRcdGVuZFguY3VycmVudCA9IGUucGFnZVg7XHJcblx0XHRlbmRZLmN1cnJlbnQgPSBlLnBhZ2VZO1xyXG5cclxuXHRcdGRvdC5jdXJyZW50LnN0eWxlLnRvcCA9IGVuZFkuY3VycmVudCArIFwicHhcIjtcclxuXHRcdGRvdC5jdXJyZW50LnN0eWxlLmxlZnQgPSBlbmRYLmN1cnJlbnQgKyBcInB4XCI7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYW5pbWF0ZURvdE91dGxpbmUgPSAoKSA9PiB7XHJcblx0XHRfeC5jdXJyZW50ICs9IChlbmRYLmN1cnJlbnQgLSBfeC5jdXJyZW50KSAvIGRlbGF5O1xyXG5cdFx0X3kuY3VycmVudCArPSAoZW5kWS5jdXJyZW50IC0gX3kuY3VycmVudCkgLyBkZWxheTtcclxuXHJcblx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUudG9wID0gX3kuY3VycmVudCArIFwicHhcIjtcclxuXHRcdGRvdE91dGxpbmUuY3VycmVudC5zdHlsZS5sZWZ0ID0gX3guY3VycmVudCArIFwicHhcIjtcclxuXHJcblx0XHRyZXF1ZXN0UmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZURvdE91dGxpbmUpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17aG92ZXJ9PlxyXG5cdFx0XHQ8ZGl2IHJlZj17ZG90T3V0bGluZX0gY2xhc3NOYW1lPVwiY3Vyc29yLWRvdC1vdXRsaW5lXCI+XHJcblx0XHRcdFx0e2hvdmVyfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiByZWY9e2RvdH0gY2xhc3NOYW1lPVwiY3Vyc29yLWRvdFwiPjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkhvdmVyQ2xpY2siLCJDdXJzb3IiLCJob3ZlciIsInJvdXRlIiwiZGVsYXkiLCJkb3QiLCJkb3RPdXRsaW5lIiwiY3Vyc29yVmlzaWJsZSIsImN1cnNvckVubGFyZ2VkIiwiZW5kWCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJlbmRZIiwiaW5uZXJIZWlnaHQiLCJfeCIsIl95IiwicmVxdWVzdFJlZiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlT3ZlckV2ZW50IiwibW91c2VPdXRFdmVudCIsIm1vdXNlTW92ZUV2ZW50IiwibW91c2VFbnRlckV2ZW50IiwibW91c2VMZWF2ZUV2ZW50IiwiYW5pbWF0ZURvdE91dGxpbmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50IiwidG9nZ2xlQ3Vyc29yVmlzaWJpbGl0eSIsInN0eWxlIiwib3BhY2l0eSIsInRvZ2dsZUN1cnNvclNpemUiLCJ0cmFuc2Zvcm0iLCJlIiwicGFnZVgiLCJwYWdlWSIsInRvcCIsImxlZnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9