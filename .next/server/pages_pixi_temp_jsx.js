"use strict";
exports.id = "pages_pixi_temp_jsx";
exports.ids = ["pages_pixi_temp_jsx"];
exports.modules = {

/***/ "./pages/RotatingText.jsx":
/*!********************************!*\
  !*** ./pages/RotatingText.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pixi_filter_adjustment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi/filter-adjustment */ "@pixi/filter-adjustment");
/* harmony import */ var _pixi_filter_adjustment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pixi_filter_adjustment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inlet/react-pixi */ "@inlet/react-pixi");
/* harmony import */ var _inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\y_koma\\Desktop\\project\\pim\\pages\\RotatingText.jsx";







function RotatingText() {
  const Filters = (0,_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__.withFilters)(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__.Container, {
    blur: pixi_js__WEBPACK_IMPORTED_MODULE_2__.filters.BlurFilter,
    adjust: _pixi_filter_adjustment__WEBPACK_IMPORTED_MODULE_0__.AdjustmentFilter,
    noise: pixi_js__WEBPACK_IMPORTED_MODULE_2__.filters.NoiseFilter
  });
  const {
    0: seed,
    1: setSeed
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  (0,_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__.useTick)(delta => {
    setSeed(seed + 0.002);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Filters, {
    scale: 1,
    noise: {
      noise: 0.2
    },
    noise: {
      seed: 0.1
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__.Sprite, {
      scale: {
        x: 0.5,
        y: 0.5
      },
      anchor: 0.5,
      x: 300,
      y: 300,
      image: "./images/image01.jpg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RotatingText);

/***/ }),

/***/ "./pages/pixi_temp.jsx":
/*!*****************************!*\
  !*** ./pages/pixi_temp.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RotatingText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RotatingText */ "./pages/RotatingText.jsx");
/* harmony import */ var _inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inlet/react-pixi */ "@inlet/react-pixi");
/* harmony import */ var _inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\y_koma\\Desktop\\project\\pim\\pages\\pixi_temp.jsx";




function Pixi_temp() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__.Stage, {
    width: 500,
    height: 500,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_RotatingText__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pixi_temp);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNfcGl4aV90ZW1wX2pzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNPLFlBQVQsR0FBd0I7QUFDdkIsUUFBTUMsT0FBTyxHQUFHTCw4REFBVyxDQUFDRix3REFBRCxFQUFZO0FBQ3RDUSxJQUFBQSxJQUFJLEVBQUVMLHVEQURnQztBQUV0Q1EsSUFBQUEsTUFBTSxFQUFFWixxRUFGOEI7QUFHdENhLElBQUFBLEtBQUssRUFBRVQsd0RBQXdCVTtBQUhPLEdBQVosQ0FBM0I7QUFLQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JWLCtDQUFRLENBQUMsQ0FBRCxDQUFoQztBQUNBRCxFQUFBQSwwREFBTyxDQUFFWSxLQUFELElBQVc7QUFDbEJELElBQUFBLE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLEtBQVIsQ0FBUDtBQUNBLEdBRk0sQ0FBUDtBQUdBLHNCQUNDLDhEQUFDLE9BQUQ7QUFBUyxTQUFLLEVBQUUsQ0FBaEI7QUFBbUIsU0FBSyxFQUFFO0FBQUVGLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQTFCO0FBQTBDLFNBQUssRUFBRTtBQUFFRSxNQUFBQSxJQUFJLEVBQUU7QUFBUixLQUFqRDtBQUFBLDJCQUNDLDhEQUFDLHFEQUFEO0FBQ0MsV0FBSyxFQUFFO0FBQUVHLFFBQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLFFBQUFBLENBQUMsRUFBRTtBQUFiLE9BRFI7QUFFQyxZQUFNLEVBQUUsR0FGVDtBQUdDLE9BQUMsRUFBRSxHQUhKO0FBSUMsT0FBQyxFQUFFLEdBSko7QUFLQyxXQUFLLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBV0E7O0FBRUQsaUVBQWVaLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7OztBQUVBLFNBQVNjLFNBQVQsR0FBcUI7QUFDcEIsc0JBQ0MsOERBQUMsb0RBQUQ7QUFBTyxTQUFLLEVBQUUsR0FBZDtBQUFtQixVQUFNLEVBQUUsR0FBM0I7QUFBQSwyQkFDQyw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBS0E7O0FBQ0QsaUVBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9Sb3RhdGluZ1RleHQuanN4Iiwid2VicGFjazovL215LWFwcC8uL3BhZ2VzL3BpeGlfdGVtcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRqdXN0bWVudEZpbHRlciB9IGZyb20gXCJAcGl4aS9maWx0ZXItYWRqdXN0bWVudFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFNwcml0ZSwgd2l0aEZpbHRlcnMgfSBmcm9tIFwiQGlubGV0L3JlYWN0LXBpeGlcIjtcclxuaW1wb3J0ICogYXMgUElYSSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VUaWNrIH0gZnJvbSBcIkBpbmxldC9yZWFjdC1waXhpXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBSb3RhdGluZ1RleHQoKSB7XHJcblx0Y29uc3QgRmlsdGVycyA9IHdpdGhGaWx0ZXJzKENvbnRhaW5lciwge1xyXG5cdFx0Ymx1cjogUElYSS5maWx0ZXJzLkJsdXJGaWx0ZXIsXHJcblx0XHRhZGp1c3Q6IEFkanVzdG1lbnRGaWx0ZXIsXHJcblx0XHRub2lzZTogUElYSS5maWx0ZXJzLk5vaXNlRmlsdGVyLFxyXG5cdH0pO1xyXG5cdGNvbnN0IFtzZWVkLCBzZXRTZWVkXSA9IHVzZVN0YXRlKDApO1xyXG5cdHVzZVRpY2soKGRlbHRhKSA9PiB7XHJcblx0XHRzZXRTZWVkKHNlZWQgKyAwLjAwMik7XHJcblx0fSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxGaWx0ZXJzIHNjYWxlPXsxfSBub2lzZT17eyBub2lzZTogMC4yIH19IG5vaXNlPXt7IHNlZWQ6IDAuMSB9fT5cclxuXHRcdFx0PFNwcml0ZVxyXG5cdFx0XHRcdHNjYWxlPXt7IHg6IDAuNSwgeTogMC41IH19XHJcblx0XHRcdFx0YW5jaG9yPXswLjV9XHJcblx0XHRcdFx0eD17MzAwfVxyXG5cdFx0XHRcdHk9ezMwMH1cclxuXHRcdFx0XHRpbWFnZT1cIi4vaW1hZ2VzL2ltYWdlMDEuanBnXCJcclxuXHRcdFx0Lz5cclxuXHRcdDwvRmlsdGVycz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3RhdGluZ1RleHQ7XHJcbiIsImltcG9ydCBSb3RhdGluZ1RleHQgZnJvbSBcIi4vUm90YXRpbmdUZXh0XCI7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIkBpbmxldC9yZWFjdC1waXhpXCI7XHJcblxyXG5mdW5jdGlvbiBQaXhpX3RlbXAoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxTdGFnZSB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0+XHJcblx0XHRcdDxSb3RhdGluZ1RleHQgLz5cclxuXHRcdDwvU3RhZ2U+XHJcblx0KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQaXhpX3RlbXA7XHJcbiJdLCJuYW1lcyI6WyJBZGp1c3RtZW50RmlsdGVyIiwiQ29udGFpbmVyIiwiU3ByaXRlIiwid2l0aEZpbHRlcnMiLCJQSVhJIiwidXNlVGljayIsInVzZVN0YXRlIiwiUm90YXRpbmdUZXh0IiwiRmlsdGVycyIsImJsdXIiLCJmaWx0ZXJzIiwiQmx1ckZpbHRlciIsImFkanVzdCIsIm5vaXNlIiwiTm9pc2VGaWx0ZXIiLCJzZWVkIiwic2V0U2VlZCIsImRlbHRhIiwieCIsInkiLCJTdGFnZSIsIlBpeGlfdGVtcCJdLCJzb3VyY2VSb290IjoiIn0=