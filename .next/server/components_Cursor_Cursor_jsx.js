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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\y_koma\\Desktop\\project\\pim\\components\\Cursor\\Cursor.jsx";


const Cursor = () => {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      ref: dotOutline,
      className: "cursor-dot-outline"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      ref: dot,
      className: "cursor-dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 3
  }, undefined);
};

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50c19DdXJzb3JfQ3Vyc29yX2pzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPLE1BQU1FLE1BQU0sR0FBRyxNQUFNO0FBQzNCLFFBQU1DLEtBQUssR0FBRyxFQUFkO0FBRUEsUUFBTUMsR0FBRyxHQUFHSCw2Q0FBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQSxRQUFNSSxVQUFVLEdBQUdKLDZDQUFNLENBQUMsSUFBRCxDQUF6QjtBQUVBLFFBQU1LLGFBQWEsR0FBR0wsNkNBQU0sQ0FBQyxJQUFELENBQTVCO0FBQ0EsUUFBTU0sY0FBYyxHQUFHTiw2Q0FBTSxDQUFDLEtBQUQsQ0FBN0I7QUFFQSxRQUFNTyxJQUFJLEdBQUdQLDZDQUFNLENBQUNRLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixDQUFyQixDQUFuQjtBQUNBLFFBQU1DLElBQUksR0FBR1YsNkNBQU0sQ0FBQ1EsTUFBTSxDQUFDRyxXQUFQLEdBQXFCLENBQXRCLENBQW5COztBQUNBLFFBQU1DLEVBQUUsR0FBR1osNkNBQU0sQ0FBQyxDQUFELENBQWpCOztBQUNBLFFBQU1hLEVBQUUsR0FBR2IsNkNBQU0sQ0FBQyxDQUFELENBQWpCOztBQUVBLFFBQU1jLFVBQVUsR0FBR2QsNkNBQU0sQ0FBQyxJQUFELENBQXpCO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNmZ0IsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q0MsY0FBdkM7QUFDQUYsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0UsYUFBckM7QUFDQUgsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q0csY0FBdkM7QUFDQUosSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixFQUF3Q0ksZUFBeEM7QUFDQUwsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixFQUF3Q0ssZUFBeEM7QUFFQUMsSUFBQUEsaUJBQWlCO0FBRWpCLFdBQU8sTUFBTTtBQUNaUCxNQUFBQSxRQUFRLENBQUNRLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDTixjQUExQztBQUNBRixNQUFBQSxRQUFRLENBQUNRLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDTCxhQUF4QztBQUNBSCxNQUFBQSxRQUFRLENBQUNRLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDSixjQUExQztBQUNBSixNQUFBQSxRQUFRLENBQUNRLG1CQUFULENBQTZCLFlBQTdCLEVBQTJDSCxlQUEzQztBQUNBTCxNQUFBQSxRQUFRLENBQUNRLG1CQUFULENBQTZCLFlBQTdCLEVBQTJDRixlQUEzQztBQUVBRyxNQUFBQSxvQkFBb0IsQ0FBQ1YsVUFBVSxDQUFDVyxPQUFaLENBQXBCO0FBQ0EsS0FSRDtBQVNBLEdBbEJRLEVBa0JOLEVBbEJNLENBQVQ7O0FBb0JBLFFBQU1DLHNCQUFzQixHQUFHLE1BQU07QUFDcEMsUUFBSXJCLGFBQWEsQ0FBQ29CLE9BQWxCLEVBQTJCO0FBQzFCdEIsTUFBQUEsR0FBRyxDQUFDc0IsT0FBSixDQUFZRSxLQUFaLENBQWtCQyxPQUFsQixHQUE0QixDQUE1QjtBQUNBeEIsTUFBQUEsVUFBVSxDQUFDcUIsT0FBWCxDQUFtQkUsS0FBbkIsQ0FBeUJDLE9BQXpCLEdBQW1DLENBQW5DO0FBQ0EsS0FIRCxNQUdPO0FBQ056QixNQUFBQSxHQUFHLENBQUNzQixPQUFKLENBQVlFLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLENBQTVCO0FBQ0F4QixNQUFBQSxVQUFVLENBQUNxQixPQUFYLENBQW1CRSxLQUFuQixDQUF5QkMsT0FBekIsR0FBbUMsQ0FBbkM7QUFDQTtBQUNELEdBUkQ7O0FBVUEsUUFBTUMsZ0JBQWdCLEdBQUcsTUFBTTtBQUM5QixRQUFJdkIsY0FBYyxDQUFDbUIsT0FBbkIsRUFBNEI7QUFDM0J0QixNQUFBQSxHQUFHLENBQUNzQixPQUFKLENBQVlFLEtBQVosQ0FBa0JHLFNBQWxCLEdBQThCLG1DQUE5QjtBQUNBMUIsTUFBQUEsVUFBVSxDQUFDcUIsT0FBWCxDQUFtQkUsS0FBbkIsQ0FBeUJHLFNBQXpCLEdBQXFDLGtDQUFyQztBQUNBLEtBSEQsTUFHTztBQUNOM0IsTUFBQUEsR0FBRyxDQUFDc0IsT0FBSixDQUFZRSxLQUFaLENBQWtCRyxTQUFsQixHQUE4QixnQ0FBOUI7QUFDQTFCLE1BQUFBLFVBQVUsQ0FBQ3FCLE9BQVgsQ0FBbUJFLEtBQW5CLENBQXlCRyxTQUF6QixHQUFxQyxnQ0FBckM7QUFDQTtBQUNELEdBUkQ7O0FBVUEsUUFBTWIsY0FBYyxHQUFHLE1BQU07QUFDNUJYLElBQUFBLGNBQWMsQ0FBQ21CLE9BQWYsR0FBeUIsSUFBekI7QUFDQUksSUFBQUEsZ0JBQWdCO0FBQ2hCLEdBSEQ7O0FBS0EsUUFBTVgsYUFBYSxHQUFHLE1BQU07QUFDM0JaLElBQUFBLGNBQWMsQ0FBQ21CLE9BQWYsR0FBeUIsS0FBekI7QUFDQUksSUFBQUEsZ0JBQWdCO0FBQ2hCLEdBSEQ7O0FBS0EsUUFBTVQsZUFBZSxHQUFHLE1BQU07QUFDN0JmLElBQUFBLGFBQWEsQ0FBQ29CLE9BQWQsR0FBd0IsSUFBeEI7QUFDQUMsSUFBQUEsc0JBQXNCO0FBQ3RCLEdBSEQ7O0FBS0EsUUFBTUwsZUFBZSxHQUFHLE1BQU07QUFDN0JoQixJQUFBQSxhQUFhLENBQUNvQixPQUFkLEdBQXdCLEtBQXhCO0FBQ0FDLElBQUFBLHNCQUFzQjtBQUN0QixHQUhEOztBQUtBLFFBQU1QLGNBQWMsR0FBSVksQ0FBRCxJQUFPO0FBQzdCMUIsSUFBQUEsYUFBYSxDQUFDb0IsT0FBZCxHQUF3QixJQUF4QjtBQUNBQyxJQUFBQSxzQkFBc0I7QUFFdEJuQixJQUFBQSxJQUFJLENBQUNrQixPQUFMLEdBQWVNLENBQUMsQ0FBQ0MsS0FBakI7QUFDQXRCLElBQUFBLElBQUksQ0FBQ2UsT0FBTCxHQUFlTSxDQUFDLENBQUNFLEtBQWpCO0FBRUE5QixJQUFBQSxHQUFHLENBQUNzQixPQUFKLENBQVlFLEtBQVosQ0FBa0JPLEdBQWxCLEdBQXdCeEIsSUFBSSxDQUFDZSxPQUFMLEdBQWUsSUFBdkM7QUFDQXRCLElBQUFBLEdBQUcsQ0FBQ3NCLE9BQUosQ0FBWUUsS0FBWixDQUFrQlEsSUFBbEIsR0FBeUI1QixJQUFJLENBQUNrQixPQUFMLEdBQWUsSUFBeEM7QUFDQSxHQVREOztBQVdBLFFBQU1ILGlCQUFpQixHQUFHLE1BQU07QUFDL0JWLElBQUFBLEVBQUUsQ0FBQ2EsT0FBSCxJQUFjLENBQUNsQixJQUFJLENBQUNrQixPQUFMLEdBQWViLEVBQUUsQ0FBQ2EsT0FBbkIsSUFBOEJ2QixLQUE1QztBQUNBVyxJQUFBQSxFQUFFLENBQUNZLE9BQUgsSUFBYyxDQUFDZixJQUFJLENBQUNlLE9BQUwsR0FBZVosRUFBRSxDQUFDWSxPQUFuQixJQUE4QnZCLEtBQTVDO0FBRUFFLElBQUFBLFVBQVUsQ0FBQ3FCLE9BQVgsQ0FBbUJFLEtBQW5CLENBQXlCTyxHQUF6QixHQUErQnJCLEVBQUUsQ0FBQ1ksT0FBSCxHQUFhLElBQTVDO0FBQ0FyQixJQUFBQSxVQUFVLENBQUNxQixPQUFYLENBQW1CRSxLQUFuQixDQUF5QlEsSUFBekIsR0FBZ0N2QixFQUFFLENBQUNhLE9BQUgsR0FBYSxJQUE3QztBQUVBWCxJQUFBQSxVQUFVLENBQUNXLE9BQVgsR0FBcUJXLHFCQUFxQixDQUFDZCxpQkFBRCxDQUExQztBQUNBLEdBUkQ7O0FBVUEsc0JBQ0M7QUFBQSw0QkFDQztBQUFLLFNBQUcsRUFBRWxCLFVBQVY7QUFBc0IsZUFBUyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFLLFNBQUcsRUFBRUQsR0FBVjtBQUFlLGVBQVMsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBTUEsQ0F2R00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL0N1cnNvci9DdXJzb3IuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ3Vyc29yID0gKCkgPT4ge1xyXG5cdGNvbnN0IGRlbGF5ID0gMTg7XHJcblxyXG5cdGNvbnN0IGRvdCA9IHVzZVJlZihudWxsKTtcclxuXHRjb25zdCBkb3RPdXRsaW5lID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25zdCBjdXJzb3JWaXNpYmxlID0gdXNlUmVmKHRydWUpO1xyXG5cdGNvbnN0IGN1cnNvckVubGFyZ2VkID0gdXNlUmVmKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgZW5kWCA9IHVzZVJlZih3aW5kb3cuaW5uZXJXaWR0aCAvIDIpO1xyXG5cdGNvbnN0IGVuZFkgPSB1c2VSZWYod2luZG93LmlubmVySGVpZ2h0IC8gMik7XHJcblx0Y29uc3QgX3ggPSB1c2VSZWYoMCk7XHJcblx0Y29uc3QgX3kgPSB1c2VSZWYoMCk7XHJcblxyXG5cdGNvbnN0IHJlcXVlc3RSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlT3ZlckV2ZW50KTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlT3V0RXZlbnQpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVFdmVudCk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZUVudGVyRXZlbnQpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbW91c2VMZWF2ZUV2ZW50KTtcclxuXHJcblx0XHRhbmltYXRlRG90T3V0bGluZSgpO1xyXG5cclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VPdmVyRXZlbnQpO1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZU91dEV2ZW50KTtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVFdmVudCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlRW50ZXJFdmVudCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1vdXNlTGVhdmVFdmVudCk7XHJcblxyXG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0UmVmLmN1cnJlbnQpO1xyXG5cdFx0fTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IHRvZ2dsZUN1cnNvclZpc2liaWxpdHkgPSAoKSA9PiB7XHJcblx0XHRpZiAoY3Vyc29yVmlzaWJsZS5jdXJyZW50KSB7XHJcblx0XHRcdGRvdC5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cdFx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb3QuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHRcdFx0ZG90T3V0bGluZS5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHRvZ2dsZUN1cnNvclNpemUgPSAoKSA9PiB7XHJcblx0XHRpZiAoY3Vyc29yRW5sYXJnZWQuY3VycmVudCkge1xyXG5cdFx0XHRkb3QuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjc1KVwiO1xyXG5cdFx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS41KVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG90LmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSlcIjtcclxuXHRcdFx0ZG90T3V0bGluZS5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpXCI7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbW91c2VPdmVyRXZlbnQgPSAoKSA9PiB7XHJcblx0XHRjdXJzb3JFbmxhcmdlZC5jdXJyZW50ID0gdHJ1ZTtcclxuXHRcdHRvZ2dsZUN1cnNvclNpemUoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBtb3VzZU91dEV2ZW50ID0gKCkgPT4ge1xyXG5cdFx0Y3Vyc29yRW5sYXJnZWQuY3VycmVudCA9IGZhbHNlO1xyXG5cdFx0dG9nZ2xlQ3Vyc29yU2l6ZSgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG1vdXNlRW50ZXJFdmVudCA9ICgpID0+IHtcclxuXHRcdGN1cnNvclZpc2libGUuY3VycmVudCA9IHRydWU7XHJcblx0XHR0b2dnbGVDdXJzb3JWaXNpYmlsaXR5KCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbW91c2VMZWF2ZUV2ZW50ID0gKCkgPT4ge1xyXG5cdFx0Y3Vyc29yVmlzaWJsZS5jdXJyZW50ID0gZmFsc2U7XHJcblx0XHR0b2dnbGVDdXJzb3JWaXNpYmlsaXR5KCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbW91c2VNb3ZlRXZlbnQgPSAoZSkgPT4ge1xyXG5cdFx0Y3Vyc29yVmlzaWJsZS5jdXJyZW50ID0gdHJ1ZTtcclxuXHRcdHRvZ2dsZUN1cnNvclZpc2liaWxpdHkoKTtcclxuXHJcblx0XHRlbmRYLmN1cnJlbnQgPSBlLnBhZ2VYO1xyXG5cdFx0ZW5kWS5jdXJyZW50ID0gZS5wYWdlWTtcclxuXHJcblx0XHRkb3QuY3VycmVudC5zdHlsZS50b3AgPSBlbmRZLmN1cnJlbnQgKyBcInB4XCI7XHJcblx0XHRkb3QuY3VycmVudC5zdHlsZS5sZWZ0ID0gZW5kWC5jdXJyZW50ICsgXCJweFwiO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGFuaW1hdGVEb3RPdXRsaW5lID0gKCkgPT4ge1xyXG5cdFx0X3guY3VycmVudCArPSAoZW5kWC5jdXJyZW50IC0gX3guY3VycmVudCkgLyBkZWxheTtcclxuXHRcdF95LmN1cnJlbnQgKz0gKGVuZFkuY3VycmVudCAtIF95LmN1cnJlbnQpIC8gZGVsYXk7XHJcblxyXG5cdFx0ZG90T3V0bGluZS5jdXJyZW50LnN0eWxlLnRvcCA9IF95LmN1cnJlbnQgKyBcInB4XCI7XHJcblx0XHRkb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUubGVmdCA9IF94LmN1cnJlbnQgKyBcInB4XCI7XHJcblxyXG5cdFx0cmVxdWVzdFJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVEb3RPdXRsaW5lKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiByZWY9e2RvdE91dGxpbmV9IGNsYXNzTmFtZT1cImN1cnNvci1kb3Qtb3V0bGluZVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IHJlZj17ZG90fSBjbGFzc05hbWU9XCJjdXJzb3ItZG90XCI+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiQ3Vyc29yIiwiZGVsYXkiLCJkb3QiLCJkb3RPdXRsaW5lIiwiY3Vyc29yVmlzaWJsZSIsImN1cnNvckVubGFyZ2VkIiwiZW5kWCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJlbmRZIiwiaW5uZXJIZWlnaHQiLCJfeCIsIl95IiwicmVxdWVzdFJlZiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlT3ZlckV2ZW50IiwibW91c2VPdXRFdmVudCIsIm1vdXNlTW92ZUV2ZW50IiwibW91c2VFbnRlckV2ZW50IiwibW91c2VMZWF2ZUV2ZW50IiwiYW5pbWF0ZURvdE91dGxpbmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50IiwidG9nZ2xlQ3Vyc29yVmlzaWJpbGl0eSIsInN0eWxlIiwib3BhY2l0eSIsInRvZ2dsZUN1cnNvclNpemUiLCJ0cmFuc2Zvcm0iLCJlIiwicGFnZVgiLCJwYWdlWSIsInRvcCIsImxlZnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9