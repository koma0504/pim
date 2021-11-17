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
                    lineNumber: 19,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 9
              }, _this)
            }, gallery.id, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
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


/***/ }),

/***/ "./node_modules/react-scrollmagic/dist/index.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-scrollmagic/dist/index.es.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": function() { return /* binding */ Controller; },
/* harmony export */   "Scene": function() { return /* binding */ Scene; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
var windowMock = {};
windowMock.addEventListener = function () {};

var ScrollMagic = (function (window, document) {

	var ScrollMagic = function ScrollMagic() {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.7";

	// TODO: temporary workaround for chrome's scroll jitter bug
	window.addEventListener("mousewheel", function () {});

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
  * The main class that is needed once per scroll container.
  *
  * @class
  *
  * @example
  * // basic initialization
  * var controller = new ScrollMagic.Controller();
  *
  * // passing options
  * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
  *
  * @param {object} [options] - An object containing one or more options for the controller.
  * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
  * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
  * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
  * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
 										 ** `0` => silent
 										 ** `1` => errors
 										 ** `2` => errors, warnings
 										 ** `3` => errors, warnings, debuginfo
  * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
  																										 This interval polls these parameters to fire the necessary events.  
  																										 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
  *
  */
	ScrollMagic.Controller = function (options) {
		/*
   * ----------------------------------------------------------------
   * settings
   * ----------------------------------------------------------------
   */
		var NAMESPACE = 'ScrollMagic.Controller',
		    SCROLL_DIRECTION_FORWARD = 'FORWARD',
		    SCROLL_DIRECTION_REVERSE = 'REVERSE',
		    SCROLL_DIRECTION_PAUSED = 'PAUSED',
		    DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

		/*
   * ----------------------------------------------------------------
   * private vars
   * ----------------------------------------------------------------
   */
		var Controller = this,
		    _options = _util.extend({}, DEFAULT_OPTIONS, options),
		    _sceneObjects = [],
		    _updateScenesOnNextCycle = false,
		    // can be boolean (true => all scenes) or an array of scenes to be updated
		_scrollPos = 0,
		    _scrollDirection = SCROLL_DIRECTION_PAUSED,
		    _isDocument = true,
		    _viewPortSize = 0,
		    _enabled = true,
		    _updateTimeout,
		    _refreshTimeout;

		/*
   * ----------------------------------------------------------------
   * private functions
   * ----------------------------------------------------------------
   */

		/**
   * Internal constructor function of the ScrollMagic Controller
   * @private
   */
		var construct = function construct() {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			var ri = parseInt(_options.refreshInterval, 10);
			_options.refreshInterval = _util.type.Number(ri) ? ri : DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
   * Schedule the next execution of the refresh function
   * @private
   */
		var scheduleRefresh = function scheduleRefresh() {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
   * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
   * @private
   */
		var getScrollPos = function getScrollPos() {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
   * Returns the current viewport Size (width vor horizontal, height for vertical)
   * @private
   */
		var getViewportSize = function getViewportSize() {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
   * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
   * Make available publicly for pinned mousewheel workaround.
   * @private
   */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
   * Handle updates in cycles instead of on scroll (performance)
   * @private
   */
		var updateScenes = function updateScenes() {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) {
					// scroll position changed?
					_scrollDirection = deltaScroll > 0 ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
   * Initializes rAF callback
   * @private
   */
		var debounceUpdate = function debounceUpdate() {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
   * Handles Container changes
   * @private
   */
		var onChange = function onChange(e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function refresh() {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) {
						// stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) {
				// refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
   * Send a debug message to the console.
   * provided publicly with _log for plugins
   * @private
   *
   * @param {number} loglevel - The loglevel required to initiate output for the message.
   * @param {...mixed} output - One or more variables that should be passed to the console.
   */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
   * Sort scenes in ascending order of their start offset.
   * @private
   *
   * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
   * @return {array} The sorted array of Scenes.
   */
		var sortScenes = function sortScenes(ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
   * ----------------------------------------------------------------
   * public functions
   * ----------------------------------------------------------------
   */

		/**
   * Add one ore more scene(s) to the controller.  
   * This is the equivalent to `Scene.addTo(controller)`.
   * @public
   * @example
   * // with a previously defined scene
   * controller.addScene(scene);
   *
   * // with a newly created scene.
   * controller.addScene(new ScrollMagic.Scene({duration : 0}));
   *
   * // adding multiple scenes
   * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
   *
   * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
   * @return {Controller} Parent object for chaining.
   */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () {
						// resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
   * Remove one ore more scene(s) from the controller.  
   * This is the equivalent to `Scene.remove()`.
   * @public
   * @example
   * // remove a scene from the controller
   * controller.removeScene(scene);
   *
   * // remove multiple scenes from the controller
   * controller.removeScene([scene, scene2, scene3]);
   *
   * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
   * @returns {Controller} Parent object for chaining.
   */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
  * Update one ore more scene(s) according to the scroll position of the container.  
  * This is the equivalent to `Scene.update()`.  
  * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
  * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
  * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
  * @public
  * @example
  * // update a specific scene on next cycle
   * controller.updateScene(scene);
   *
  * // update a specific scene immediately
  * controller.updateScene(scene, true);
   *
  * // update multiple scenes scene on next cycle
  * controller.updateScene([scene1, scene2, scene3]);
  *
  * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
  * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
  										  This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
  * @return {Controller} Parent object for chaining.
  */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) {
					// if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
   * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
   * See `Controller.updateScene()` for more information about what this means.  
   * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
   * The only application for this method is when ScrollMagic fails to detect these events.  
   * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
   * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
   * @public
   * @example
   * // update the controller on next cycle (saves performance due to elimination of redundant updates)
   * controller.update();
   *
   * // update the controller immediately
   * controller.update(true);
   *
   * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
   * @return {Controller} Parent object for chaining.
   */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
   * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
   * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
   * @public
   *
   * @since 1.1.0
   * @example
   * // scroll to an offset of 100
   * controller.scrollTo(100);
   *
   * // scroll to a DOM element
   * controller.scrollTo("#anchor");
   *
   * // scroll to the beginning of a scene
   * var scene = new ScrollMagic.Scene({offset: 200});
   * controller.scrollTo(scene);
   *
   * // define a new scroll position modification function (jQuery animate instead of jump)
   * controller.scrollTo(function (newScrollPos) {
   *	$("html, body").animate({scrollTop: newScrollPos});
   * });
   * controller.scrollTo(100); // call as usual, but the new function will be used instead
   *
   * // define a new scroll function with an additional parameter
   * controller.scrollTo(function (newScrollPos, message) {
   *  console.log(message);
   *	$(this).animate({scrollTop: newScrollPos});
   * });
   * // call as usual, but supply an extra parameter to the defined custom function
   * controller.scrollTo(100, "my message");
   *
   * // define a new scroll function with an additional parameter containing multiple variables
   * controller.scrollTo(function (newScrollPos, options) {
   *  someGlobalVar = options.a + options.b;
   *	$(this).animate({scrollTop: newScrollPos});
   * });
   * // call as usual, but supply an extra parameter containing multiple options
   * controller.scrollTo(100, {a: 1, b: 2});
   *
   * // define a new scroll function with a callback supplied as an additional parameter
   * controller.scrollTo(function (newScrollPos, callback) {
   *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
   * });
   * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
   * controller.scrollTo(100, function() {
   *	console.log("scroll has finished.");
   * });
   *
   * @param {mixed} scrollTarget - The supplied argument can be one of these types:
   * 1. `number` -> The container will scroll to this new scroll offset.
   * 2. `string` or `object` -> Can be a selector or a DOM object.  
   *  The container will scroll to the position of this element.
   * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
   * 4. `function` -> This function will be used for future scroll position modifications.  
   *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
   *  It may also optionally receive an optional additional parameter (see below)  
   *  _**NOTE:**  
   *  All other options will still work as expected, using the new function to scroll._
   * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
   * @returns {Controller} Parent object for chaining.
   */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) {
				// excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) {
				// scroll to scene
				if (scrollTarget.controller() === Controller) {
					// check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) {
				// assign new scroll function
				setScrollPos = scrollTarget;
			} else {
				// scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var param = _options.vertical ? "top" : "left",
					    // which param is of interest ?
					containerOffset = _util.get.offset(_options.container),
					    // container position is needed because element offset is returned in relation to document, not in relation to container.
					elementOffset = _util.get.offset(elem);

					if (!_isDocument) {
						// container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
   * **Get** the current scrollPosition or **Set** a new method to calculate it.  
   * -> **GET**:
   * When used as a getter this function will return the current scroll position.  
   * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
   * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
   *
   * -> **SET**:
   * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
   * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
   * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
   * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
   * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
   *
   * To change the current scroll position please use `Controller.scrollTo()`.
   * @public
   *
   * @example
   * // get the current scroll Position
   * var scrollPos = controller.scrollPos();
   *
   * // set a new scroll position calculation method
   * controller.scrollPos(function () {
   *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
   * });
   *
   * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
   * @returns {(number|Controller)} Current scroll position or parent object for chaining.
   */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) {
				// get
				return getScrollPos.call(Controller);
			} else {
				// set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
   * **Get** all infos or one in particular about the controller.
   * @public
   * @example
   * // returns the current scroll position (number)
   * var scrollPos = controller.info("scrollPos");
   *
   * // returns all infos as an object
   * var infos = controller.info();
   *
   * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
   							 Valid options are:
   							 ** `"size"` => the current viewport size of the container
   							 ** `"vertical"` => true if vertical scrolling, otherwise false
   							 ** `"scrollPos"` => the current scroll position
   							 ** `"scrollDirection"` => the last known direction of the scroll
   							 ** `"container"` => the container element
   							 ** `"isDocument"` => true if container element is the document.
   * @returns {(mixed|object)} The requested info(s).
   */
		this.info = function (about) {
			var values = {
				size: _viewPortSize, // contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) {
				// get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
   * **Get** or **Set** the current loglevel option value.
   * @public
   *
   * @example
   * // get the current value
   * var loglevel = controller.loglevel();
   *
   * // set a new value
   * controller.loglevel(3);
   *
   * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
   * @returns {(number|Controller)} Current loglevel or parent object for chaining.
   */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) {
				// get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) {
				// set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
   * **Get** or **Set** the current enabled state of the controller.  
   * This can be used to disable all Scenes connected to the controller without destroying or removing them.
   * @public
   *
   * @example
   * // get the current value
   * var enabled = controller.enabled();
   *
   * // disable the controller
   * controller.enabled(false);
   *
   * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
   * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
   */
		this.enabled = function (newState) {
			if (!arguments.length) {
				// get
				return _enabled;
			} else if (_enabled != newState) {
				// set
				_enabled = !!newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
   * Destroy the Controller, all Scenes and everything.
   * @public
   *
   * @example
   * // without resetting the scenes
   * controller = controller.destroy();
   *
   * // with scene reset
   * controller = controller.destroy(true);
   *
   * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
   * @returns {null} Null to unset handler variables.
   */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
	/*
  * method used to add an option to ScrollMagic Scenes.
  */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};

	/**
  * A Scene defines where the controller should react and how.
  *
  * @class
  *
  * @example
  * // create a standard scene and add it to a controller
  * new ScrollMagic.Scene()
  *		.addTo(controller);
  *
  * // create a scene with custom options and assign a handler to it.
  * var scene = new ScrollMagic.Scene({
  * 		duration: 100,
  *		offset: 200,
  *		triggerHook: "onEnter",
  *		reverse: false
  * });
  *
  * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
  							   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
  							   When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
  * @param {(number|string|function)} [options.duration=0] - The duration of the scene. 
  					Please see `Scene.duration()` for details.
  * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
  * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
  * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
  															  Can also be defined using a string:
  															  ** `"onEnter"` => `1`
  															  ** `"onCenter"` => `0.5`
  															  ** `"onLeave"` => `0`
  * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
  * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
  										  ** `0` => silent
  										  ** `1` => errors
  										  ** `2` => errors, warnings
  										  ** `3` => errors, warnings, debuginfo
  * 
  */
	ScrollMagic.Scene = function (options) {

		/*
   * ----------------------------------------------------------------
   * settings
   * ----------------------------------------------------------------
   */

		var NAMESPACE = 'ScrollMagic.Scene',
		    SCENE_STATE_BEFORE = 'BEFORE',
		    SCENE_STATE_DURING = 'DURING',
		    SCENE_STATE_AFTER = 'AFTER',
		    DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

		/*
   * ----------------------------------------------------------------
   * private vars
   * ----------------------------------------------------------------
   */

		var Scene = this,
		    _options = _util.extend({}, DEFAULT_OPTIONS, options),
		    _state = SCENE_STATE_BEFORE,
		    _progress = 0,
		    _scrollOffset = {
			start: 0,
			end: 0
		},
		    // reflects the controllers's scroll position for the start and end of the scene respectively
		_triggerPos = 0,
		    _enabled = true,
		    _durationUpdateMethod,
		    _controller;

		/**
   * Internal constructor function of the ScrollMagic Scene
   * @private
   */
		var construct = function construct() {
			for (var key in _options) {
				// check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

		/*
   * ----------------------------------------------------------------
   * Event Management
   * ----------------------------------------------------------------
   */

		var _listeners = {};
		/**
   * Scene start event.  
   * Fires whenever the scroll position its the starting point of the scene.  
   * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#start
   *
   * @example
   * scene.on("start", function (event) {
   * 	console.log("Hit start point of scene.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene end event.  
   * Fires whenever the scroll position its the ending point of the scene.  
   * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#end
   *
   * @example
   * scene.on("end", function (event) {
   * 	console.log("Hit end point of scene.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene enter event.  
   * Fires whenever the scene enters the "DURING" state.  
   * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#enter
   *
   * @example
   * scene.on("enter", function (event) {
   * 	console.log("Scene entered.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene - always `"DURING"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene leave event.  
   * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
   * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#leave
   *
   * @example
   * scene.on("leave", function (event) {
   * 	console.log("Scene left.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene update event.  
   * Fires whenever the scene is updated (but not necessarily changes the progress).
   *
   * @event ScrollMagic.Scene#update
   *
   * @example
   * scene.on("update", function (event) {
   * 	console.log("Scene updated.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
   * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
   * @property {number} event.scrollPos - The current scroll position of the container
   */
		/**
   * Scene progress event.  
   * Fires whenever the progress of the scene changes.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#progress
   *
   * @example
   * scene.on("progress", function (event) {
   * 	console.log("Scene progress changed to " + event.progress);
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene change event.  
   * Fires whenvever a property of the scene is changed.
   *
   * @event ScrollMagic.Scene#change
   *
   * @example
   * scene.on("change", function (event) {
   * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {string} event.what - Indicates what value has been changed
   * @property {mixed} event.newval - The new value of the changed property
   */
		/**
   * Scene shift event.  
   * Fires whenvever the start or end **scroll offset** of the scene change.
   * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
   * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
   * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
   *
   * @event ScrollMagic.Scene#shift
   * @since 1.1.0
   *
   * @example
   * scene.on("shift", function (event) {
   * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {string} event.reason - Indicates why the scene has shifted
   */
		/**
   * Scene destroy event.  
   * Fires whenvever the scene is destroyed.
   * This can be used to tidy up custom behaviour used in events.
   *
   * @event ScrollMagic.Scene#destroy
   * @since 1.1.0
   *
   * @example
   * scene.on("enter", function (event) {
   *        // add custom action
   *        $("#my-elem").left("200");
   *      })
   *      .on("destroy", function (event) {
   *        // reset my element to start position
   *        if (event.reset) {
   *          $("#my-elem").left("0");
   *        }
   *      });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
   */
		/**
   * Scene add event.  
   * Fires when the scene is added to a controller.
   * This is mostly used by plugins to know that change might be due.
   *
   * @event ScrollMagic.Scene#add
   * @since 2.0.0
   *
   * @example
   * scene.on("add", function (event) {
   * 	console.log('Scene was added to a new controller.');
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {boolean} event.controller - The controller object the scene was added to.
   */
		/**
   * Scene remove event.  
   * Fires when the scene is removed from a controller.
   * This is mostly used by plugins to know that change might be due.
   *
   * @event ScrollMagic.Scene#remove
   * @since 2.0.0
   *
   * @example
   * scene.on("remove", function (event) {
   * 	console.log('Scene was removed from its controller.');
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   */

		/**
   * Add one ore more event listener.  
   * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
   * @method ScrollMagic.Scene#on
   *
   * @example
   * function callback (event) {
   * 		console.log("Event fired! (" + event.type + ")");
   * }
   * // add listeners
   * scene.on("change update progress start end enter leave", callback);
   *
   * @param {string} names - The name or names of the event the callback should be attached to.
   * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
   * @returns {Scene} Parent object for chaining.
   */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var nameparts = fullname.split('.'),
					    eventname = nameparts[0],
					    namespace = nameparts[1];
					if (eventname != "*") {
						// disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
   * Remove one or more event listener.
   * @method ScrollMagic.Scene#off
   *
   * @example
   * function callback (event) {
   * 		console.log("Event fired! (" + event.type + ")");
   * }
   * // add listeners
   * scene.on("change update", callback);
   * // remove listeners
   * scene.off("change update", callback);
   *
   * @param {string} names - The name or names of the event that should be removed.
   * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
   * @returns {Scene} Parent object for chaining.
   */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var nameparts = fullname.split('.'),
				    eventname = nameparts[0],
				    namespace = nameparts[1] || '',
				    removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var list = _listeners[remove] || [],
					    i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
   * Trigger an event.
   * @method ScrollMagic.Scene#trigger
   *
   * @example
   * this.trigger("change");
   *
   * @param {string} name - The name of the event that should be triggered.
   * @param {object} [vars] - An object containing info that should be passed to the callback.
   * @returns {Scene} Parent object for chaining.
   */
		this.trigger = function (name, vars) {
			if (name) {
				var nameparts = name.trim().split('.'),
				    eventname = nameparts[0],
				    namespace = nameparts[1],
				    listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene.on("change.internal", function (e) {
			if (e.what !== "loglevel" && e.what !== "tweenChanges") {
				// no need for a scene update scene with these options...
				if (e.what === "triggerElement") {
					updateTriggerElementPosition();
				} else if (e.what === "reverse") {
					// the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
					Scene.update();
				}
			}
		}).on("shift.internal", function (e) {
			updateScrollOffset();
			Scene.update(); // update scene to reflect new position
		});

		/**
   * Send a debug message to the console.
   * @private
   * but provided publicly with _log for plugins
   *
   * @param {number} loglevel - The loglevel required to initiate output for the message.
   * @param {...mixed} output - One or more variables that should be passed to the console.
   */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
   * Add the scene to a controller.  
   * This is the equivalent to `Controller.addScene(scene)`.
   * @method ScrollMagic.Scene#addTo
   *
   * @example
   * // add a scene to a ScrollMagic Controller
   * scene.addTo(controller);
   *
   * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
   * @returns {Scene} Parent object for chaining.
   */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) {
					// was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
   * **Get** or **Set** the current enabled state of the scene.  
   * This can be used to disable this scene without removing or destroying it.
   * @method ScrollMagic.Scene#enabled
   *
   * @example
   * // get the current value
   * var enabled = scene.enabled();
   *
   * // disable the scene
   * scene.enabled(false);
   *
   * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
   * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
   */
		this.enabled = function (newState) {
			if (!arguments.length) {
				// get
				return _enabled;
			} else if (_enabled != newState) {
				// set
				_enabled = !!newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
   * Remove the scene from the controller.  
   * This is the equivalent to `Controller.removeScene(scene)`.
   * The scene will not be updated anymore until you readd it to a controller.
   * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
   * @method ScrollMagic.Scene#remove
   * @example
   * // remove the scene from its controller
   * scene.remove();
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
   * Destroy the scene and everything.
   * @method ScrollMagic.Scene#destroy
   * @example
   * // destroy the scene without resetting the pin and tween to their initial positions
   * scene = scene.destroy();
   *
   * // destroy the scene and reset the pin and tween
   * scene = scene.destroy(true);
   *
   * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
   * @returns {null} Null to unset handler variables.
   */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};

		/**
   * Updates the Scene to reflect the current state.  
   * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
   * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
   * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
   * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
   * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
   * @method ScrollMagic.Scene#update
   * @example
   * // update the scene on next tick
   * scene.update();
   *
   * // update the scene immediately
   * scene.update(true);
   *
   * @fires Scene.update
   *
   * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
   * @returns {Scene} Parent object for chaining.
   */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var scrollPos = _controller.info("scrollPos"),
						    newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
   * Updates dynamic scene variables like the trigger element position or the duration.
   * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
   * 
   * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
   * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
   *
   * @method ScrollMagic.Scene#refresh
   * @since 1.1.0
   * @example
   * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
   * 
   * // change the position of the trigger
   * $("#trigger").css("top", 500);
   * // immediately let the scene know of this change
   * scene.refresh();
   *
   * @fires {@link Scene.shift}, if the trigger element position or the duration changed
   * @fires {@link Scene.change}, if the duration changed
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
   * **Get** or **Set** the scene's progress.  
   * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
   * The order in which the events are fired depends on the duration of the scene:
   *  1. Scenes with `duration == 0`:  
   *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
   *  When the trigger position of the scene is passed the events are always fired in this order:  
   *  `enter`, `start`, `progress` when scrolling forward  
   *  and  
   *  `progress`, `start`, `leave` when scrolling in reverse
   *  2. Scenes with `duration > 0`:  
   *  Scenes with a set duration have a defined start and end point.  
   *  When scrolling past the start position of the scene it will fire these events in this order:  
   *  `enter`, `start`, `progress`  
   *  When continuing to scroll and passing the end point it will fire these events:  
   *  `progress`, `end`, `leave`  
   *  When reversing through the end point these events are fired:  
   *  `enter`, `end`, `progress`  
   *  And when continuing to scroll past the start position in reverse it will fire:  
   *  `progress`, `start`, `leave`  
   *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
   * 
   * In short:  
   * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
   * `start` and `end` will always trigger at their respective position.
   * 
   * Please review the event descriptions for details on the events and the event object that is passed to the callback.
   * 
   * @method ScrollMagic.Scene#progress
   * @example
   * // get the current scene progress
   * var progress = scene.progress();
   *
   * // set new scene progress
   * scene.progress(0.3);
   *
   * @fires {@link Scene.enter}, when used as setter
   * @fires {@link Scene.start}, when used as setter
   * @fires {@link Scene.progress}, when used as setter
   * @fires {@link Scene.end}, when used as setter
   * @fires {@link Scene.leave}, when used as setter
   *
   * @param {number} [progress] - The new progress value of the scene `[0-1]`.
   * @returns {number} `get` -  Current scene progress.
   * @returns {Scene} `set` -  Parent object for chaining.
   */
		this.progress = function (progress) {
			if (!arguments.length) {
				// get
				return _progress;
			} else {
				// set
				var doUpdate = false,
				    oldState = _state,
				    scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
				    reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var eventVars = {
						progress: _progress,
						state: _state,
						scrollDirection: scrollDirection
					},
					    stateChanged = _state != oldState;

					var trigger = function trigger(eventName) {
						// tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) {
						// enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) {
						// leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};

		/**
   * Update the start and end scrollOffset of the container.
   * The positions reflect what the controller's scroll position will be at the start and end respectively.
   * Is called, when:
   *   - Scene event "change" is called with: offset, triggerHook, duration 
   *   - scroll container event "resize" is called
   *   - the position of the triggerElement changes
   *   - the controller changes -> addTo()
   * @private
   */
		var updateScrollOffset = function updateScrollOffset() {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
   * Updates the duration if set to a dynamic function.
   * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
   * 
   * @fires {@link Scene.change}, if the duration changed
   * @fires {@link Scene.shift}, if the duration changed
   *
   * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
   * @private
   */
		var updateDuration = function updateDuration(suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) {
					// set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
   * Updates the position of the triggerElement, if present.
   * This method is called ...
   *  - ... when the triggerElement is changed
   *  - ... when the scene is added to a (new) controller
   *  - ... in regular intervals from the controller through scene.refresh().
   * 
   * @fires {@link Scene.shift}, if the position changed
   *
   * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
   * @private
   */
		var updateTriggerElementPosition = function updateTriggerElementPosition(suppressEvents) {
			var elementPos = 0,
			    telem = _options.triggerElement;
			if (_controller && (telem || _triggerPos > 0)) {
				// either an element exists or was removed and the triggerPos is still > 0
				if (telem) {
					// there currently a triggerElement set
					if (telem.parentNode) {
						// check if element is still attached to DOM
						var controllerInfo = _controller.info(),
						    containerOffset = _util.get.offset(controllerInfo.container),
						    // container position is needed because element offset is returned in relation to document, not in relation to container.
						param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?

						// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
						while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
							telem = telem.parentNode;
						}

						var elementOffset = _util.get.offset(telem);

						if (!controllerInfo.isDocument) {
							// container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
							containerOffset[param] -= _controller.scrollPos();
						}

						elementPos = elementOffset[param] - containerOffset[param];
					} else {
						// there was an element, but it was removed from DOM
						log(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined);
						Scene.triggerElement(undefined); // unset, so a change event is triggered
					}
				}

				var changed = elementPos != _triggerPos;
				_triggerPos = elementPos;
				if (changed && !suppressEvents) {
					Scene.trigger("shift", {
						reason: "triggerElementPosition"
					});
				}
			}
		};

		/**
   * Trigger a shift event, when the container is resized and the triggerHook is > 1.
   * @private
   */
		var onContainerResize = function onContainerResize(e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};

		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function duration(val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function val() {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod.call(Scene));
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
   * Checks the validity of a specific or all options and reset to default if neccessary.
   * @private
   */
		var validateOption = function validateOption(check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) {
					// there is a validation method for this option
					try {
						// validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) {
						// validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
   * Helper used by the setter/getters for scene options
   * @private
   */
		var changeOption = function changeOption(varname, newval) {
			var changed = false,
			    oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function addSceneOption(optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) {
						// get
						return _options[optionName];
					} else {
						if (optionName === "duration") {
							// new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) {
							// set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
   * **Get** or **Set** the duration option value.
   *
   * As a **setter** it accepts three types of parameters:
   * 1. `number`: Sets the duration of the scene to exactly this amount of pixels.  
   *   This means the scene will last for exactly this amount of pixels scrolled. Sub-Pixels are also valid.
   *   A value of `0` means that the scene is 'open end' and no end will be triggered. Pins will never unpin and animations will play independently of scroll progress.
   * 2. `string`: Always updates the duration relative to parent scroll container.  
   *   For example `"100%"` will keep the duration always exactly at the inner height of the scroll container.
   *   When scrolling vertically the width is used for reference respectively.
   * 3. `function`: The supplied function will be called to return the scene duration.
   *   This is useful in setups where the duration depends on other elements who might change size. By supplying a function you can return a value instead of updating potentially multiple scene durations.  
   *   The scene can be referenced inside the callback using `this`.
   *   _**WARNING:** This is an easy way to kill performance, as the callback will be executed every time `Scene.refresh()` is called, which happens a lot. The interval is defined by the controller (see ScrollMagic.Controller option `refreshInterval`).  
   *   It's recomended to avoid calculations within the function and use cached variables as return values.  
   *   This counts double if you use the same function for multiple scenes._
   *
   * @method ScrollMagic.Scene#duration
   * @example
   * // get the current duration value
   * var duration = scene.duration();
   *
   * // set a new duration
   * scene.duration(300);
   *
   * // set duration responsively to container size
   * scene.duration("100%");
   *
   * // use a function to randomize the duration for some reason.
   * var durationValueCache;
   * function durationCallback () {
   *   return durationValueCache;
   * }
   * function updateDuration () {
   *   durationValueCache = Math.random() * 100;
   * }
   * updateDuration(); // set to initial value
   * scene.duration(durationCallback); // set duration callback
   *
   * @fires {@link Scene.change}, when used as setter
   * @fires {@link Scene.shift}, when used as setter
   * @param {(number|string|function)} [newDuration] - The new duration setting for the scene.
   * @returns {number} `get` -  Current scene duration.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the offset option value.
   * @method ScrollMagic.Scene#offset
   * @example
   * // get the current offset
   * var offset = scene.offset();
   *
   * // set a new offset
   * scene.offset(100);
   *
   * @fires {@link Scene.change}, when used as setter
   * @fires {@link Scene.shift}, when used as setter
   * @param {number} [newOffset] - The new offset of the scene.
   * @returns {number} `get` -  Current scene offset.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the triggerElement option value.
   * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
   * @method ScrollMagic.Scene#triggerElement
   * @example
   * // get the current triggerElement
   * var triggerElement = scene.triggerElement();
   *
   * // set a new triggerElement using a selector
   * scene.triggerElement("#trigger");
   * // set a new triggerElement using a DOM object
   * scene.triggerElement(document.getElementById("trigger"));
   *
   * @fires {@link Scene.change}, when used as setter
   * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
   * @returns {(string|object)} `get` -  Current triggerElement.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the triggerHook option value.
   * @method ScrollMagic.Scene#triggerHook
   * @example
   * // get the current triggerHook value
   * var triggerHook = scene.triggerHook();
   *
   * // set a new triggerHook using a string
   * scene.triggerHook("onLeave");
   * // set a new triggerHook using a number
   * scene.triggerHook(0.7);
   *
   * @fires {@link Scene.change}, when used as setter
   * @fires {@link Scene.shift}, when used as setter
   * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
   * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the reverse option value.
   * @method ScrollMagic.Scene#reverse
   * @example
   * // get the current reverse option
   * var reverse = scene.reverse();
   *
   * // set new reverse option
   * scene.reverse(false);
   *
   * @fires {@link Scene.change}, when used as setter
   * @param {boolean} [newReverse] - The new reverse setting of the scene.
   * @returns {boolean} `get` -  Current reverse option value.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the loglevel option value.
   * @method ScrollMagic.Scene#loglevel
   * @example
   * // get the current loglevel
   * var loglevel = scene.loglevel();
   *
   * // set new loglevel
   * scene.loglevel(3);
   *
   * @fires {@link Scene.change}, when used as setter
   * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
   * @returns {number} `get` -  Current loglevel.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** the associated controller.
   * @method ScrollMagic.Scene#controller
   * @example
   * // get the controller of a scene
   * var controller = scene.controller();
   *
   * @returns {ScrollMagic.Controller} Parent controller or `undefined`
   */
		this.controller = function () {
			return _controller;
		};

		/**
   * **Get** the current state.
   * @method ScrollMagic.Scene#state
   * @example
   * // get the current state
   * var state = scene.state();
   *
   * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
   */
		this.state = function () {
			return _state;
		};

		/**
   * **Get** the current scroll offset for the start of the scene.  
   * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
   * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
   * @method ScrollMagic.Scene#scrollOffset
   * @example
   * // get the current scroll offset for the start and end of the scene.
   * var start = scene.scrollOffset();
   * var end = scene.scrollOffset() + scene.duration();
   * console.log("the scene starts at", start, "and ends at", end);
   *
   * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
   */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
   * **Get** the trigger position of the scene (including the value of the `offset` option).  
   * @method ScrollMagic.Scene#triggerPosition
   * @example
   * // get the scene's trigger position
   * var triggerPosition = scene.triggerPosition();
   *
   * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
   */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};

		var _pin, _pinOptions;

		Scene.on("shift.internal", function (e) {
			var durationChanged = e.reason === "duration";
			if (_state === SCENE_STATE_AFTER && durationChanged || _state === SCENE_STATE_DURING && _options.duration === 0) {
				// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
				updatePinState();
			}
			if (durationChanged) {
				updatePinDimensions();
			}
		}).on("progress.internal", function (e) {
			updatePinState();
		}).on("add.internal", function (e) {
			updatePinDimensions();
		}).on("destroy.internal", function (e) {
			Scene.removePin(e.reset);
		});
		/**
   * Update the pin state.
   * @private
   */
		var updatePinState = function updatePinState(forceUnpin) {
			if (_pin && _controller) {
				var containerInfo = _controller.info(),
				    pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins

				if (!forceUnpin && _state === SCENE_STATE_DURING) {
					// during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var fixedPos = _util.get.offset(_pinOptions.spacer, true),
					    // get viewport position of spacer
					scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start // quicker
					: Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress

					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var newCSS = {
						position: _pinOptions.inFlow ? "relative" : "absolute",
						top: 0,
						left: 0
					},
					    change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) {
						// only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) {
							// before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
   * Update the pin spacer and/or element size.
   * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
   * @private
   */
		var updatePinDimensions = function updatePinDimensions() {
			if (_pin && _controller && _pinOptions.inFlow) {
				// no spacerresize, if original position is absolute
				var during = _state === SCENE_STATE_DURING,
				    vertical = _controller.info("vertical"),
				    pinTarget = _pinOptions.spacer.firstChild,
				    // usually the pined element but can also be another spacer (cascaded pins)
				marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
				    css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
   * Updates the Pin state (in certain scenarios)
   * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
   * So this function is called on resize and scroll of the document.
   * @private
   */
		var updatePinInContainer = function updatePinInContainer() {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
   * Updates the Pin spacer size state (in certain scenarios)
   * If container is resized during pin and relatively sized the size of the pin might need to be updated...
   * So this function is called on resize of the container.
   * @private
   */
		var updateRelativePinSpacer = function updateRelativePinSpacer() {
			if (_controller && _pin && // well, duh
			_state === SCENE_STATE_DURING && ( // element in pinned state?
			// is width or height relatively sized, but not in relation to body? then we need to recalc.
			(_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode) || _pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))) {
				updatePinDimensions();
			}
		};

		/**
   * Is called, when the mousewhel is used while over a pinned element inside a div container.
   * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
   * @private
   */
		var onMousewheelOverPin = function onMousewheelOverPin(e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				// in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
   * Pin an element for the duration of the scene.
   * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
   * Make sure only one pin is applied to an element at the same time.
   * An element can be pinned multiple times, but only successively.
   * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
   * @method ScrollMagic.Scene#setPin
   * @example
   * // pin element and push all following elements down by the amount of the pin duration.
   * scene.setPin("#pin");
   *
   * // pin element and keeping all following elements in their place. The pinned element will move past them.
   * scene.setPin("#pin", {pushFollowers: false});
   *
   * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
   * @param {object} [settings] - settings for the pin
   * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
   												   Ignored, when duration is `0`.
   * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.setPin = function (element, settings) {
			var defaultSettings = {
				pushFollowers: true,
				spacerClass: "scrollmagic-pin-spacer"
			};
			var pushFollowersActivelySet = settings && settings.hasOwnProperty('pushFollowers');
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) {
				// preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}
			}
			_pin = element;

			var parentDisplay = _pin.parentNode.style.display,
			    boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var inFlow = _util.css(_pin, "position") != "absolute",
			    pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
			    sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.

			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () {
				// wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && pushFollowersActivelySet && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
			    spacerCSS = _util.extend(pinCSS, {
				position: inFlow ? "relative" : "absolute",
				boxSizing: "content-box",
				mozBoxSizing: "content-box",
				webkitBoxSizing: "content-box"
			});

			if (!inFlow) {
				// copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow // stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var pinInlineCSS = _pin.style,
				    copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
   * Remove the pin from the scene.
   * @method ScrollMagic.Scene#removePin
   * @example
   * // remove the pin from the scene without resetting it (the spacer is not removed)
   * scene.removePin();
   *
   * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
   * scene.removePin(true);
   *
   * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
   * @returns {Scene} Parent object for chaining.
   */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) {
					// if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						// copy margins to child spacer
						var style = _pinOptions.spacer.style,
						    values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
						    margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						// if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};

		var _cssClasses,
		    _cssClassElems = [];

		Scene.on("destroy.internal", function (e) {
			Scene.removeClassToggle(e.reset);
		});
		/**
   * Define a css class modification while the scene is active.  
   * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
   * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
   * @method ScrollMagic.Scene#setClassToggle
   * @example
   * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
   * scene.setClassToggle("#my-elem", "myclass");
   *
   * // add multiple classes to multiple elements defined by the selector '.classChange'
   * scene.setClassToggle(".classChange", "class1 class2 class3");
   *
   * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
   * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
   * Remove the class binding from the scene.
   * @method ScrollMagic.Scene#removeClassToggle
   * @example
   * // remove class binding from the scene without reset
   * scene.removeClassToggle();
   *
   * // remove class binding and remove the changes it caused
   * scene.removeClassToggle(true);
   *
   * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
   * @returns {Scene} Parent object for chaining.
   */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function offset(val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function triggerElement(val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem && elem.parentNode) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function triggerHook(val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function reverse(val) {
				return !!val; // force boolean
			},
			loglevel: function loglevel(val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		}, // holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"] // list of options that trigger a `shift` event
	};
	/*
  * method used to add an option to ScrollMagic Scenes.
  * TODO: DOC (private for dev)
  */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};

	/**
  * TODO: DOCS (private for dev)
  * @class
  * @private
  */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

	/*
  * TODO: DOCS (private for dev)
  */

	var _util = ScrollMagic._util = function (window) {
		var U = {},
		    i;

		/**
   * ------------------------------
   * internal helpers
   * ------------------------------
   */

		// parse float and fall back to 0.
		var floatval = function floatval(number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function _getComputedStyle(elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function _dimension(which, elem, outer, includeMargin) {
			elem = elem === document ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function _camelCase(str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
   * ------------------------------
   * external helpers
   * ------------------------------
   */

		// extend obj – same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var lastTime = 0,
		    vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function _requestAnimationFrame(callback) {
				var currTime = new Date().getTime(),
				    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
				    id = window.setTimeout(function () {
					callback(currTime + timeToCall);
				}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function _cancelAnimationFrame(id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var loglevels = ["error", "warn", "log"],
		    console = window.console || {};

		console.log = console.log || function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
			    time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
			    method = loglevels[loglevel - 1],
			    args = Array.prototype.splice.call(arguments, 1),
			    func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
   * ------------------------------
   * type testing
   * ------------------------------
   */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && v - parseFloat(v) + 1 >= 0;
		};
		_type.DomElement = function (o) {
			return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" || typeof HTMLElement === "function" ? o instanceof HTMLElement || o instanceof SVGElement : //DOM2
			o && (typeof o === "undefined" ? "undefined" : _typeof(o)) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
		};

		/**
   * ------------------------------
   * DOM Element info
   * ------------------------------
   */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) {
					// invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector) || selector instanceof NodeList) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) {
					// list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return elem && typeof elem.scrollTop === 'number' ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return elem && typeof elem.scrollLeft === 'number' ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) {
				// check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) {
					// clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
   * ------------------------------
   * DOM Element manipulation
   * ------------------------------
   */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.add(classname);else elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.remove(classname);else elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var obj = {},
				    style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) {
						// assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {});

	return ScrollMagic;
})(typeof window === 'undefined' ? windowMock : window, typeof document === 'undefined' ? {} : document);

var ControllerContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

var Controller = function (_React$Component) {
  inherits(Controller, _React$Component);

  function Controller() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Controller);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Controller.__proto__ || Object.getPrototypeOf(Controller)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      controller: null
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Controller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          children = _props.children,
          controllerProps = objectWithoutProperties(_props, ['children']);

      this.setState({
        controller: new ScrollMagic.Controller(controllerProps)
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.controller = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var controller = this.state.controller;


      if (!controller) {
        return children;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        ControllerContext.Provider,
        { value: controller },
        children
      );
    }
  }]);
  return Controller;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file Debug Extension for ScrollMagic.
 */
function debugAddIndicators (ScrollMagic) {
	var NAMESPACE = "debug.addIndicators";

	if (typeof window === 'undefined') {
		var window = {};
		window.addEventListener = function () {};
	}

	var console = window.console || {},
	    err = Function.prototype.bind.call(console.error || console.log || function () {}, console);
	if (!ScrollMagic) {
		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
	}

	// plugin settings
	var FONT_SIZE = "0.85em",
	    ZINDEX = "9999",
	    EDGE_OFFSET = 15; // minimum edge distance, added to indentation

	// overall vars
	var _util = ScrollMagic._util,
	    _autoindex = 0;

	ScrollMagic.Scene.extend(function () {
		var Scene = this,
		    _indicator;

		/**
   * Add visual indicators for a ScrollMagic.Scene.  
   * @memberof! debug.addIndicators#
   *
   * @example
   * // add basic indicators
   * scene.addIndicators()
   *
   * // passing options
   * scene.addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});
   *
   * @param {object} [options] - An object containing one or more options for the indicators.
   * @param {(string|object)} [options.parent] - A selector, DOM Object or a jQuery object that the indicators should be added to.  
   														 														 If undefined, the controller's container will be used.
   * @param {number} [options.name=""] - This string will be displayed at the start and end indicators of the scene for identification purposes. If no name is supplied an automatic index will be used.
   * @param {number} [options.indent=0] - Additional position offset for the indicators (useful, when having multiple scenes starting at the same position).
   * @param {string} [options.colorStart=green] - CSS color definition for the start indicator.
   * @param {string} [options.colorEnd=red] - CSS color definition for the end indicator.
   * @param {string} [options.colorTrigger=blue] - CSS color definition for the trigger indicator.
   */
		Scene.addIndicators = function (options) {
			if (!_indicator) {
				var DEFAULT_OPTIONS = {
					name: "",
					indent: 0,
					parent: undefined,
					colorStart: "green",
					colorEnd: "red",
					colorTrigger: "blue"
				};

				options = _util.extend({}, DEFAULT_OPTIONS, options);

				_autoindex++;
				_indicator = new Indicator(Scene, options);

				Scene.on("add.plugin_addIndicators", _indicator.add);
				Scene.on("remove.plugin_addIndicators", _indicator.remove);
				Scene.on("destroy.plugin_addIndicators", Scene.removeIndicators);

				// it the scene already has a controller we can start right away.
				if (Scene.controller()) {
					_indicator.add();
				}
			}
			return Scene;
		};

		/**
   * Removes visual indicators from a ScrollMagic.Scene.
   * @memberof! debug.addIndicators#
   *
   * @example
   * // remove previously added indicators
   * scene.removeIndicators()
   *
   */
		Scene.removeIndicators = function () {
			if (_indicator) {
				_indicator.remove();
				this.off("*.plugin_addIndicators");
				_indicator = undefined;
			}
			return Scene;
		};
	});

	/*
  * ----------------------------------------------------------------
  * Extension for controller to store and update related indicators
  * ----------------------------------------------------------------
  */
	// add option to globally auto-add indicators to scenes
	/**
  * Every ScrollMagic.Controller instance now accepts an additional option.  
  * See {@link ScrollMagic.Controller} for a complete list of the standard options.
  * @memberof! debug.addIndicators#
  * @method new ScrollMagic.Controller(options)
  * @example
  * // make a controller and add indicators to all scenes attached
  * var controller = new ScrollMagic.Controller({addIndicators: true});
  * // this scene will automatically have indicators added to it
  * new ScrollMagic.Scene()
  *                .addTo(controller);
  *
  * @param {object} [options] - Options for the Controller.
  * @param {boolean} [options.addIndicators=false] - If set to `true` every scene that is added to the controller will automatically get indicators added to it.
  */
	ScrollMagic.Controller.addOption("addIndicators", false);
	// extend Controller
	ScrollMagic.Controller.extend(function () {
		var Controller = this,
		    _info = Controller.info(),
		    _container = _info.container,
		    _isDocument = _info.isDocument,
		    _vertical = _info.vertical,
		    _indicators = { // container for all indicators and methods
			groups: []
		};

		var log = function log() {
			if (Controller._log) {
				// not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Controller._log.apply(this, arguments);
			}
		};
		if (Controller._indicators) {
			log(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin.");
		}

		// add indicators container
		this._indicators = _indicators;
		/*
  	needed updates:
  	+++++++++++++++
  	start/end position on scene shift (handled in Indicator class)
  	trigger parameters on triggerHook value change (handled in Indicator class)
  	bounds position on container scroll or resize (to keep alignment to bottom/right)
  	trigger position on container resize, window resize (if container isn't document) and window scroll (if container isn't document)
  */

		// event handler for when associated bounds markers need to be repositioned
		var handleBoundsPositionChange = function handleBoundsPositionChange() {
			_indicators.updateBoundsPositions();
		};

		// event handler for when associated trigger groups need to be repositioned
		var handleTriggerPositionChange = function handleTriggerPositionChange() {
			_indicators.updateTriggerGroupPositions();
		};

		_container.addEventListener("resize", handleTriggerPositionChange);
		if (!_isDocument) {
			window.addEventListener("resize", handleTriggerPositionChange);
			window.addEventListener("scroll", handleTriggerPositionChange);
		}
		// update all related bounds containers
		_container.addEventListener("resize", handleBoundsPositionChange);
		_container.addEventListener("scroll", handleBoundsPositionChange);

		// updates the position of the bounds container to aligned to the right for vertical containers and to the bottom for horizontal
		this._indicators.updateBoundsPositions = function (specificIndicator) {
			var // constant for all bounds
			groups = specificIndicator ? [_util.extend({}, specificIndicator.triggerGroup, {
				members: [specificIndicator]
			})] : // create a group with only one element
			_indicators.groups,
			    // use all
			g = groups.length,
			    css = {},
			    paramPos = _vertical ? "left" : "top",
			    paramDimension = _vertical ? "width" : "height",
			    edge = _vertical ? _util.get.scrollLeft(_container) + _util.get.width(_container) - EDGE_OFFSET : _util.get.scrollTop(_container) + _util.get.height(_container) - EDGE_OFFSET,
			    b,
			    triggerSize,
			    group;
			while (g--) {
				// group loop
				group = groups[g];
				b = group.members.length;
				triggerSize = _util.get[paramDimension](group.element.firstChild);
				while (b--) {
					// indicators loop
					css[paramPos] = edge - triggerSize;
					_util.css(group.members[b].bounds, css);
				}
			}
		};

		// updates the positions of all trigger groups attached to a controller or a specific one, if provided
		this._indicators.updateTriggerGroupPositions = function (specificGroup) {
			var // constant vars
			groups = specificGroup ? [specificGroup] : _indicators.groups,
			    i = groups.length,
			    container = _isDocument ? document.body : _container,
			    containerOffset = _isDocument ? {
				top: 0,
				left: 0
			} : _util.get.offset(container, true),
			    edge = _vertical ? _util.get.width(_container) - EDGE_OFFSET : _util.get.height(_container) - EDGE_OFFSET,
			    paramDimension = _vertical ? "width" : "height",
			    paramTransform = _vertical ? "Y" : "X";
			var // changing vars
			group, elem, pos, elemSize, transform;
			while (i--) {
				group = groups[i];
				elem = group.element;
				pos = group.triggerHook * Controller.info("size");
				elemSize = _util.get[paramDimension](elem.firstChild.firstChild);
				transform = pos > elemSize ? "translate" + paramTransform + "(-100%)" : "";

				_util.css(elem, {
					top: containerOffset.top + (_vertical ? pos : edge - group.members[0].options.indent),
					left: containerOffset.left + (_vertical ? edge - group.members[0].options.indent : pos)
				});
				_util.css(elem.firstChild.firstChild, {
					"-ms-transform": transform,
					"-webkit-transform": transform,
					"transform": transform
				});
			}
		};

		// updates the label for the group to contain the name, if it only has one member
		this._indicators.updateTriggerGroupLabel = function (group) {
			var text = "trigger" + (group.members.length > 1 ? "" : " " + group.members[0].options.name),
			    elem = group.element.firstChild.firstChild,
			    doUpdate = elem.textContent !== text;
			if (doUpdate) {
				elem.textContent = text;
				if (_vertical) {
					// bounds position is dependent on text length, so update
					_indicators.updateBoundsPositions();
				}
			}
		};

		// add indicators if global option is set
		this.addScene = function (newScene) {

			if (this._options.addIndicators && newScene instanceof ScrollMagic.Scene && newScene.controller() === Controller) {
				newScene.addIndicators();
			}
			// call original destroy method
			this.$super.addScene.apply(this, arguments);
		};

		// remove all previously set listeners on destroy
		this.destroy = function () {
			_container.removeEventListener("resize", handleTriggerPositionChange);
			if (!_isDocument) {
				window.removeEventListener("resize", handleTriggerPositionChange);
				window.removeEventListener("scroll", handleTriggerPositionChange);
			}
			_container.removeEventListener("resize", handleBoundsPositionChange);
			_container.removeEventListener("scroll", handleBoundsPositionChange);
			// call original destroy method
			this.$super.destroy.apply(this, arguments);
		};
		return Controller;
	});

	/*
  * ----------------------------------------------------------------
  * Internal class for the construction of Indicators
  * ----------------------------------------------------------------
  */
	var Indicator = function Indicator(Scene, options) {
		var Indicator = this,
		    _elemBounds = TPL.bounds(),
		    _elemStart = TPL.start(options.colorStart),
		    _elemEnd = TPL.end(options.colorEnd),
		    _boundsContainer = options.parent && _util.get.elements(options.parent)[0],
		    _vertical,
		    _ctrl;

		var log = function log() {
			if (Scene._log) {
				// not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		options.name = options.name || _autoindex;

		// prepare bounds elements
		_elemStart.firstChild.textContent += " " + options.name;
		_elemEnd.textContent += " " + options.name;
		_elemBounds.appendChild(_elemStart);
		_elemBounds.appendChild(_elemEnd);

		// set public variables
		Indicator.options = options;
		Indicator.bounds = _elemBounds;
		// will be set later
		Indicator.triggerGroup = undefined;

		// add indicators to DOM
		this.add = function () {
			_ctrl = Scene.controller();
			_vertical = _ctrl.info("vertical");

			var isDocument = _ctrl.info("isDocument");

			if (!_boundsContainer) {
				// no parent supplied or doesnt exist
				_boundsContainer = isDocument ? document.body : _ctrl.info("container"); // check if window/document (then use body)
			}
			if (!isDocument && _util.css(_boundsContainer, "position") === 'static') {
				// position mode needed for correct positioning of indicators
				_util.css(_boundsContainer, {
					position: "relative"
				});
			}

			// add listeners for updates
			Scene.on("change.plugin_addIndicators", handleTriggerParamsChange);
			Scene.on("shift.plugin_addIndicators", handleBoundsParamsChange);

			// updates trigger & bounds (will add elements if needed)
			updateTriggerGroup();
			updateBounds();

			setTimeout(function () {
				// do after all execution is finished otherwise sometimes size calculations are off
				_ctrl._indicators.updateBoundsPositions(Indicator);
			}, 0);

			log(3, "added indicators");
		};

		// remove indicators from DOM
		this.remove = function () {
			if (Indicator.triggerGroup) {
				// if not set there's nothing to remove
				Scene.off("change.plugin_addIndicators", handleTriggerParamsChange);
				Scene.off("shift.plugin_addIndicators", handleBoundsParamsChange);

				if (Indicator.triggerGroup.members.length > 1) {
					// just remove from memberlist of old group
					var group = Indicator.triggerGroup;
					group.members.splice(group.members.indexOf(Indicator), 1);
					_ctrl._indicators.updateTriggerGroupLabel(group);
					_ctrl._indicators.updateTriggerGroupPositions(group);
					Indicator.triggerGroup = undefined;
				} else {
					// remove complete group
					removeTriggerGroup();
				}
				removeBounds();

				log(3, "removed indicators");
			}
		};

		/*
   * ----------------------------------------------------------------
   * internal Event Handlers
   * ----------------------------------------------------------------
   */

		// event handler for when bounds params change
		var handleBoundsParamsChange = function handleBoundsParamsChange() {
			updateBounds();
		};

		// event handler for when trigger params change
		var handleTriggerParamsChange = function handleTriggerParamsChange(e) {
			if (e.what === "triggerHook") {
				updateTriggerGroup();
			}
		};

		/*
   * ----------------------------------------------------------------
   * Bounds (start / stop) management
   * ----------------------------------------------------------------
   */

		// adds an new bounds elements to the array and to the DOM
		var addBounds = function addBounds() {
			var v = _ctrl.info("vertical");
			// apply stuff we didn't know before...
			_util.css(_elemStart.firstChild, {
				"border-bottom-width": v ? 1 : 0,
				"border-right-width": v ? 0 : 1,
				"bottom": v ? -1 : options.indent,
				"right": v ? options.indent : -1,
				"padding": v ? "0 8px" : "2px 4px"
			});
			_util.css(_elemEnd, {
				"border-top-width": v ? 1 : 0,
				"border-left-width": v ? 0 : 1,
				"top": v ? "100%" : "",
				"right": v ? options.indent : "",
				"bottom": v ? "" : options.indent,
				"left": v ? "" : "100%",
				"padding": v ? "0 8px" : "2px 4px"
			});
			// append
			_boundsContainer.appendChild(_elemBounds);
		};

		// remove bounds from list and DOM
		var removeBounds = function removeBounds() {
			_elemBounds.parentNode.removeChild(_elemBounds);
		};

		// update the start and end positions of the scene
		var updateBounds = function updateBounds() {
			if (_elemBounds.parentNode !== _boundsContainer) {
				addBounds(); // Add Bounds elements (start/end)
			}
			var css = {};
			css[_vertical ? "top" : "left"] = Scene.triggerPosition();
			css[_vertical ? "height" : "width"] = Scene.duration();
			_util.css(_elemBounds, css);
			_util.css(_elemEnd, {
				display: Scene.duration() > 0 ? "" : "none"
			});
		};

		/*
   * ----------------------------------------------------------------
   * trigger and trigger group management
   * ----------------------------------------------------------------
   */

		// adds an new trigger group to the array and to the DOM
		var addTriggerGroup = function addTriggerGroup() {
			var triggerElem = TPL.trigger(options.colorTrigger); // new trigger element
			var css = {};
			css[_vertical ? "right" : "bottom"] = 0;
			css[_vertical ? "border-top-width" : "border-left-width"] = 1;
			_util.css(triggerElem.firstChild, css);
			_util.css(triggerElem.firstChild.firstChild, {
				padding: _vertical ? "0 8px 3px 8px" : "3px 4px"
			});
			document.body.appendChild(triggerElem); // directly add to body
			var newGroup = {
				triggerHook: Scene.triggerHook(),
				element: triggerElem,
				members: [Indicator]
			};
			_ctrl._indicators.groups.push(newGroup);
			Indicator.triggerGroup = newGroup;
			// update right away
			_ctrl._indicators.updateTriggerGroupLabel(newGroup);
			_ctrl._indicators.updateTriggerGroupPositions(newGroup);
		};

		var removeTriggerGroup = function removeTriggerGroup() {
			_ctrl._indicators.groups.splice(_ctrl._indicators.groups.indexOf(Indicator.triggerGroup), 1);
			Indicator.triggerGroup.element.parentNode.removeChild(Indicator.triggerGroup.element);
			Indicator.triggerGroup = undefined;
		};

		// updates the trigger group -> either join existing or add new one
		/*	
   * Logic:
   * 1 if a trigger group exist, check if it's in sync with Scene settings – if so, nothing else needs to happen
   * 2 try to find an existing one that matches Scene parameters
   * 	 2.1 If a match is found check if already assigned to an existing group
   *			 If so:
   *       A: it was the last member of existing group -> kill whole group
   *       B: the existing group has other members -> just remove from member list
   *	 2.2 Assign to matching group
   * 3 if no new match could be found, check if assigned to existing group
   *   A: yes, and it's the only member -> just update parameters and positions and keep using this group
   *   B: yes but there are other members -> remove from member list and create a new one
   *   C: no, so create a new one
   */
		var updateTriggerGroup = function updateTriggerGroup() {
			var triggerHook = Scene.triggerHook(),
			    closeEnough = 0.0001;

			// Have a group, check if it still matches
			if (Indicator.triggerGroup) {
				if (Math.abs(Indicator.triggerGroup.triggerHook - triggerHook) < closeEnough) {
					// _util.log(0, "trigger", options.name, "->", "no need to change, still in sync");
					return; // all good
				}
			}
			// Don't have a group, check if a matching one exists
			// _util.log(0, "trigger", options.name, "->", "out of sync!");
			var groups = _ctrl._indicators.groups,
			    group,
			    i = groups.length;
			while (i--) {
				group = groups[i];
				if (Math.abs(group.triggerHook - triggerHook) < closeEnough) {
					// found a match!
					// _util.log(0, "trigger", options.name, "->", "found match");
					if (Indicator.triggerGroup) {
						// do I have an old group that is out of sync?
						if (Indicator.triggerGroup.members.length === 1) {
							// is it the only remaining group?
							// _util.log(0, "trigger", options.name, "->", "kill");
							// was the last member, remove the whole group
							removeTriggerGroup();
						} else {
							Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
							_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
							_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
							// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
						}
					}
					// join new group
					group.members.push(Indicator);
					Indicator.triggerGroup = group;
					_ctrl._indicators.updateTriggerGroupLabel(group);
					return;
				}
			}

			// at this point I am obviously out of sync and don't match any other group
			if (Indicator.triggerGroup) {
				if (Indicator.triggerGroup.members.length === 1) {
					// _util.log(0, "trigger", options.name, "->", "updating existing");
					// out of sync but i'm the only member => just change and update
					Indicator.triggerGroup.triggerHook = triggerHook;
					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
					return;
				} else {
					// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
					Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
					_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
					Indicator.triggerGroup = undefined; // need a brand new group...
				}
			}
			// _util.log(0, "trigger", options.name, "->", "add a new one");
			// did not find any match, make new trigger group
			addTriggerGroup();
		};
	};

	/*
  * ----------------------------------------------------------------
  * Templates for the indicators
  * ----------------------------------------------------------------
  */
	var TPL = {
		start: function start(color) {
			// inner element (for bottom offset -1, while keeping top position 0)
			var inner = document.createElement("div");
			inner.textContent = "start";
			_util.css(inner, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			var e = document.createElement('div');
			// wrapper
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				width: 0,
				height: 0
			});
			e.appendChild(inner);
			return e;
		},
		end: function end(color) {
			var e = document.createElement('div');
			e.textContent = "end";
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			return e;
		},
		bounds: function bounds() {
			var e = document.createElement('div');
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				"white-space": "nowrap",
				"pointer-events": "none",
				"font-size": FONT_SIZE
			});
			e.style.zIndex = ZINDEX;
			return e;
		},
		trigger: function trigger(color) {
			// inner to be above or below line but keep position
			var inner = document.createElement('div');
			inner.textContent = "trigger";
			_util.css(inner, {
				position: "relative"
			});
			// inner wrapper for right: 0 and main element has no size
			var w = document.createElement('div');
			_util.css(w, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			w.appendChild(inner);
			// wrapper
			var e = document.createElement('div');
			_util.css(e, {
				position: "fixed",
				overflow: "visible",
				"white-space": "nowrap",
				"pointer-events": "none",
				"font-size": FONT_SIZE
			});
			e.style.zIndex = ZINDEX;
			e.appendChild(w);
			return e;
		}
	};
}

debugAddIndicators(ScrollMagic);

var refOrInnerRef = function refOrInnerRef(child) {
  if (child.type && child.type.$$typeof && child.type.$$typeof.toString() === 'Symbol(react.forward_ref)') {
    return 'ref';
  }

  // styled-components < 4
  if (child.type && child.type.styledComponentId) {
    return 'innerRef';
  }

  return 'ref';
};

var isGSAP = function isGSAP(child) {
  if (react__WEBPACK_IMPORTED_MODULE_0___default().Children.count(child) === 1 && child.type && (child.type.displayName === 'Tween' || child.type.displayName === 'Timeline')) {
    return true;
  }
  return false;
};

var controlGSAP = function controlGSAP(child, progress, event) {
  if (isGSAP(child)) {
    var props = _extends({}, child.props, { totalProgress: progress, paused: true });
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(child.type, props)
    );
  }
  return child;
};

var callChildFunction = function callChildFunction(children, progress, event) {
  if (children && typeof children === 'function') {
    return children(progress, event);
  }
  return children;
};

var getChild = function getChild(children, progress, event) {
  children = controlGSAP(children, progress, event);
  children = callChildFunction(children, progress, event);
  return react__WEBPACK_IMPORTED_MODULE_0___default().Children.only(children);
};

var isString = function isString(element) {
  if (typeof element === 'string' || element instanceof String) {
    return true;
  }
  return false;
};

var SceneBase = function (_React$PureComponent) {
  inherits(SceneBase, _React$PureComponent);

  function SceneBase() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, SceneBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SceneBase.__proto__ || Object.getPrototypeOf(SceneBase)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      event: 'init',
      progress: 0
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(SceneBase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          children = _props.children,
          controller = _props.controller,
          classToggle = _props.classToggle,
          pin = _props.pin,
          pinSettings = _props.pinSettings,
          indicators = _props.indicators,
          enabled = _props.enabled,
          sceneParams = objectWithoutProperties(_props, ['children', 'controller', 'classToggle', 'pin', 'pinSettings', 'indicators', 'enabled']);


      var element = this.ref;
      sceneParams.triggerElement = sceneParams.triggerElement === null ? null : sceneParams.triggerElement || element;

      this.scene = new ScrollMagic.Scene(sceneParams);

      this.initEventHandlers();

      if (classToggle) {
        this.setClassToggle(this.scene, element, classToggle);
      }

      if (pin || pinSettings) {
        this.setPin(this.scene, element, pin, pinSettings);
      }

      if (indicators) {
        this.scene.addIndicators({ name: ' ' });
      }

      if (enabled !== undefined) {
        this.scene.enabled(enabled);
      }

      this.scene.addTo(controller);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          duration = _props2.duration,
          offset = _props2.offset,
          triggerElement = _props2.triggerElement,
          triggerHook = _props2.triggerHook,
          reverse = _props2.reverse,
          enabled = _props2.enabled;


      if (duration !== undefined && duration !== prevProps.duration) {
        this.scene.duration(duration);
      }

      if (offset !== undefined && offset !== prevProps.offset) {
        this.scene.offset(offset);
      }

      if (triggerElement !== undefined && triggerElement !== prevProps.triggerElement) ;

      if (triggerHook !== undefined && triggerHook !== prevProps.triggerHook) {
        this.scene.triggerHook(triggerHook);
      }

      if (reverse !== undefined && reverse !== prevProps.reverse) {
        this.scene.reverse(reverse);
      }

      if (enabled !== undefined && enabled !== prevProps.enabled) {
        this.scene.enabled(enabled);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.scene.destroy();
    }
  }, {
    key: 'setClassToggle',
    value: function setClassToggle(scene, element, classToggle) {
      if (Array.isArray(classToggle) && classToggle.length === 2) {
        scene.setClassToggle(classToggle[0], classToggle[1]);
      } else {
        scene.setClassToggle(element, classToggle);
      }
    }
  }, {
    key: 'setPin',
    value: function setPin(scene, element, pin, pinSettings) {
      element = isString(pin) ? pin : element;
      scene.setPin(element, pinSettings);
    }
  }, {
    key: 'initEventHandlers',
    value: function initEventHandlers() {
      var _this2 = this;

      var _props3 = this.props,
          children = _props3.children,
          _props3$progressEvent = _props3.progressEvents,
          progressEvents = _props3$progressEvent === undefined ? true : _props3$progressEvent;


      if (typeof children !== 'function' && !isGSAP(callChildFunction(children, 0, 'init'))) {
        return;
      }

      this.scene.on('start end enter leave', function (event) {
        _this2.setState({
          event: event
        });
      });

      if (progressEvents) {
        this.scene.on('progress', function (event) {
          _this2.setState({
            progress: event.progress
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var _state = this.state,
          progress = _state.progress,
          event = _state.event;


      var child = getChild(children, progress, event);

      // TODO: Don't add ref to stateless or stateful components 

      return react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, defineProperty({}, refOrInnerRef(child), function (ref) {
        return _this3.ref = ref;
      }));
    }
  }]);
  return SceneBase;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

var SceneWrapper = function (_React$PureComponent2) {
  inherits(SceneWrapper, _React$PureComponent2);

  function SceneWrapper() {
    classCallCheck(this, SceneWrapper);
    return possibleConstructorReturn(this, (SceneWrapper.__proto__ || Object.getPrototypeOf(SceneWrapper)).apply(this, arguments));
  }

  createClass(SceneWrapper, [{
    key: 'render',
    value: function render() {
      if (!this.props.controller) {
        var _children = this.props.children;

        var _progress = 0;
        var _event = 'init';

        return getChild(_children, _progress, _event);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SceneBase, this.props);
    }
  }]);
  return SceneWrapper;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

SceneWrapper.displayName = 'Scene';
var Scene = function Scene(_ref2) {
  var children = _ref2.children,
      props = objectWithoutProperties(_ref2, ['children']);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    ControllerContext.Consumer,
    null,
    function (controller) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        SceneWrapper,
        _extends({ controller: controller }, props),
        children
      );
    }
  );
};


//# sourceMappingURL=index.es.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS41ZDA3YWMxMGVkNWI5YzM2NmUwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRWUsU0FBU00sT0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhBLE9BQVcsUUFBWEEsT0FBVztBQUM1QyxzQkFDQztBQUFBLDRCQUNDLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQU0sZUFBUyxFQUFDLFNBQWhCO0FBQUEsNkJBQ0M7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxrQkFDRUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQ0QsT0FBRDtBQUFBLDhCQUNaLDhEQUFDLHNFQUFEO0FBQUEsbUNBQ0MsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxxQkFBY0EsT0FBTyxDQUFDRSxFQUF0QixDQUFWO0FBQUEscUNBQ0M7QUFBRyx5QkFBUyxFQUFDLFlBQWI7QUFBQSx1Q0FDQztBQUFBLHlDQUNDLDhEQUFDLG1EQUFEO0FBQ0MsdUJBQUcsRUFBRUYsT0FBTyxDQUFDRyxLQUFSLENBQWNDLEdBRHBCO0FBRUMsdUJBQUcsRUFBRUosT0FBTyxDQUFDSyxLQUZkO0FBR0MseUJBQUssRUFBRUwsT0FBTyxDQUFDRyxLQUFSLENBQWNHLEtBSHRCO0FBSUMsMEJBQU0sRUFBRU4sT0FBTyxDQUFDRyxLQUFSLENBQWNJO0FBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELGVBQTJDUCxPQUFPLENBQUNFLEVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBWjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQSxrQkFERDtBQXlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDeUI7O0FBRTFCO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx1Q0FBdUM7QUFDeEY7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxpQkFBaUI7QUFDN0IsWUFBWSxTQUFTO0FBQ3JCLFlBQVksUUFBUSw4QkFBOEIsc0pBQXNKLHdCQUF3QjtBQUNoTyxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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WTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGVBQWUscUJBQXFCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUscUJBQXFCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixPQUFPO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZSxP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QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsUUFBUTtBQUNSO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0o7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUMsNERBQW1COztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMERBQW1CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMERBQW1CO0FBQ2hDO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2QjtBQUM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYWxsZXJ5LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNjcm9sbG1hZ2ljL2Rpc3QvaW5kZXguZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgSG92ZXJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaG92ZXJMaW5rL2hvdmVyTGlua1wiO1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXYvbmF2XCI7XHJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi9saWIvY2xpZW50XCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIFNjZW5lIH0gZnJvbSBcInJlYWN0LXNjcm9sbG1hZ2ljXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYWxsZXJ5KHsgZ2FsbGVyeSB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxOYXYgLz5cclxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiZ2FsbGVyeVwiPlxyXG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJpbWFnZV9saXN0XCI+XHJcblx0XHRcdFx0XHR7Z2FsbGVyeS5tYXAoKGdhbGxlcnkpID0+IChcclxuXHRcdFx0XHRcdFx0PEhvdmVyTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2dhbGxlcnkvJHtnYWxsZXJ5LmlkfWB9IGtleT17Z2FsbGVyeS5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpbWFnZV9pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17Z2FsbGVyeS5waG90by51cmx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e2dhbGxlcnkudGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17Z2FsbGVyeS5waG90by53aWR0aH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD17Z2FsbGVyeS5waG90by5oZWlnaHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvSG92ZXJMaW5rPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9tYWluPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGNsaWVudC5nZXQoeyBlbmRwb2ludDogXCJnYWxsZXJ5XCIgfSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRnYWxsZXJ5OiBkYXRhLmNvbnRlbnRzLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuLyohXHJcbiAqIFNjcm9sbE1hZ2ljIHYyLjAuNyAoMjAxOS0wNS0wNylcclxuICogVGhlIGphdmFzY3JpcHQgbGlicmFyeSBmb3IgbWFnaWNhbCBzY3JvbGwgaW50ZXJhY3Rpb25zLlxyXG4gKiAoYykgMjAxOSBKYW4gUGFlcGtlIChAamFucGFlcGtlKVxyXG4gKiBQcm9qZWN0IFdlYnNpdGU6IGh0dHA6Ly9zY3JvbGxtYWdpYy5pb1xyXG4gKiBcclxuICogQHZlcnNpb24gMi4wLjdcclxuICogQGxpY2Vuc2UgRHVhbCBsaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZSBhbmQgR1BMLlxyXG4gKiBAYXV0aG9yIEphbiBQYWVwa2UgLSBlLW1haWxAamFucGFlcGtlLmRlXHJcbiAqXHJcbiAqIEBmaWxlIFNjcm9sbE1hZ2ljIG1haW4gbGlicmFyeS5cclxuICovXG4vKipcclxuICogQG5hbWVzcGFjZSBTY3JvbGxNYWdpY1xyXG4gKi9cbnZhciB3aW5kb3dNb2NrID0ge307XG53aW5kb3dNb2NrLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7fTtcblxudmFyIFNjcm9sbE1hZ2ljID0gKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50KSB7XG5cblx0dmFyIFNjcm9sbE1hZ2ljID0gZnVuY3Rpb24gU2Nyb2xsTWFnaWMoKSB7XG5cdFx0X3V0aWwubG9nKDIsICcoQ09NUEFUSUJJTElUWSBOT1RJQ0UpIC0+IEFzIG9mIFNjcm9sbE1hZ2ljIDIuMC4wIHlvdSBuZWVkIHRvIHVzZSBcXCduZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpXFwnIHRvIGNyZWF0ZSBhIG5ldyBjb250cm9sbGVyIGluc3RhbmNlLiBVc2UgXFwnbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKClcXCcgdG8gaW5zdGFuY2UgYSBzY2VuZS4nKTtcblx0fTtcblxuXHRTY3JvbGxNYWdpYy52ZXJzaW9uID0gXCIyLjAuN1wiO1xuXG5cdC8vIFRPRE86IHRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBjaHJvbWUncyBzY3JvbGwgaml0dGVyIGJ1Z1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgZnVuY3Rpb24gKCkge30pO1xuXG5cdC8vIGdsb2JhbCBjb25zdFxuXHR2YXIgUElOX1NQQUNFUl9BVFRSSUJVVEUgPSBcImRhdGEtc2Nyb2xsbWFnaWMtcGluLXNwYWNlclwiO1xuXG5cdC8qKlxyXG4gICogVGhlIG1haW4gY2xhc3MgdGhhdCBpcyBuZWVkZWQgb25jZSBwZXIgc2Nyb2xsIGNvbnRhaW5lci5cclxuICAqXHJcbiAgKiBAY2xhc3NcclxuICAqXHJcbiAgKiBAZXhhbXBsZVxyXG4gICogLy8gYmFzaWMgaW5pdGlhbGl6YXRpb25cclxuICAqIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuICAqXHJcbiAgKiAvLyBwYXNzaW5nIG9wdGlvbnNcclxuICAqIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoe2NvbnRhaW5lcjogXCIjbXlDb250YWluZXJcIiwgbG9nbGV2ZWw6IDN9KTtcclxuICAqXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgb3B0aW9ucyBmb3IgdGhlIGNvbnRyb2xsZXIuXHJcbiAgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW29wdGlvbnMuY29udGFpbmVyPXdpbmRvd10gLSBBIHNlbGVjdG9yLCBET00gb2JqZWN0IHRoYXQgcmVmZXJlbmNlcyB0aGUgbWFpbiBjb250YWluZXIgZm9yIHNjcm9sbGluZy5cclxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudmVydGljYWw9dHJ1ZV0gLSBTZXRzIHRoZSBzY3JvbGwgbW9kZSB0byB2ZXJ0aWNhbCAoYHRydWVgKSBvciBob3Jpem9udGFsIChgZmFsc2VgKSBzY3JvbGxpbmcuXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMuZ2xvYmFsU2NlbmVPcHRpb25zPXt9XSAtIFRoZXNlIG9wdGlvbnMgd2lsbCBiZSBwYXNzZWQgdG8gZXZlcnkgU2NlbmUgdGhhdCBpcyBhZGRlZCB0byB0aGUgY29udHJvbGxlciB1c2luZyB0aGUgYWRkU2NlbmUgbWV0aG9kLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBTY2VuZSBvcHRpb25zIHNlZSB7QGxpbmsgU2Nyb2xsTWFnaWMuU2NlbmV9LlxyXG4gICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmxvZ2xldmVsPTJdIExvZ2xldmVsIGZvciBkZWJ1Z2dpbmcuIE5vdGUgdGhhdCBsb2dnaW5nIGlzIGRpc2FibGVkIGluIHRoZSBtaW5pZmllZCB2ZXJzaW9uIG9mIFNjcm9sbE1hZ2ljLlxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0XHQgKiogYDBgID0+IHNpbGVudFxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0XHQgKiogYDFgID0+IGVycm9yc1xyXG4gXHRcdFx0XHRcdFx0XHRcdFx0XHQgKiogYDJgID0+IGVycm9ycywgd2FybmluZ3NcclxuIFx0XHRcdFx0XHRcdFx0XHRcdFx0ICoqIGAzYCA9PiBlcnJvcnMsIHdhcm5pbmdzLCBkZWJ1Z2luZm9cclxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmVmcmVzaEludGVydmFsPTEwMF0gLSBTb21lIGNoYW5nZXMgZG9uJ3QgY2FsbCBldmVudHMgYnkgZGVmYXVsdCwgbGlrZSBjaGFuZ2luZyB0aGUgY29udGFpbmVyIHNpemUgb3IgbW92aW5nIGEgc2NlbmUgdHJpZ2dlciBlbGVtZW50LiAgXHJcbiAgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUaGlzIGludGVydmFsIHBvbGxzIHRoZXNlIHBhcmFtZXRlcnMgdG8gZmlyZSB0aGUgbmVjZXNzYXJ5IGV2ZW50cy4gIFxyXG4gIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgSWYgeW91IGRvbid0IHVzZSBjdXN0b20gY29udGFpbmVycywgdHJpZ2dlciBlbGVtZW50cyBvciBoYXZlIHN0YXRpYyBsYXlvdXRzLCB3aGVyZSB0aGUgcG9zaXRpb25zIG9mIHRoZSB0cmlnZ2VyIGVsZW1lbnRzIGRvbid0IGNoYW5nZSwgeW91IGNhbiBzZXQgdGhpcyB0byAwIGRpc2FibGUgaW50ZXJ2YWwgY2hlY2tpbmcgYW5kIGltcHJvdmUgcGVyZm9ybWFuY2UuXHJcbiAgKlxyXG4gICovXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdC8qXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIHNldHRpbmdzXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXHRcdHZhciBOQU1FU1BBQ0UgPSAnU2Nyb2xsTWFnaWMuQ29udHJvbGxlcicsXG5cdFx0ICAgIFNDUk9MTF9ESVJFQ1RJT05fRk9SV0FSRCA9ICdGT1JXQVJEJyxcblx0XHQgICAgU0NST0xMX0RJUkVDVElPTl9SRVZFUlNFID0gJ1JFVkVSU0UnLFxuXHRcdCAgICBTQ1JPTExfRElSRUNUSU9OX1BBVVNFRCA9ICdQQVVTRUQnLFxuXHRcdCAgICBERUZBVUxUX09QVElPTlMgPSBDT05UUk9MTEVSX09QVElPTlMuZGVmYXVsdHM7XG5cblx0XHQvKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBwcml2YXRlIHZhcnNcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cdFx0dmFyIENvbnRyb2xsZXIgPSB0aGlzLFxuXHRcdCAgICBfb3B0aW9ucyA9IF91dGlsLmV4dGVuZCh7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKSxcblx0XHQgICAgX3NjZW5lT2JqZWN0cyA9IFtdLFxuXHRcdCAgICBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBmYWxzZSxcblx0XHQgICAgLy8gY2FuIGJlIGJvb2xlYW4gKHRydWUgPT4gYWxsIHNjZW5lcykgb3IgYW4gYXJyYXkgb2Ygc2NlbmVzIHRvIGJlIHVwZGF0ZWRcblx0XHRfc2Nyb2xsUG9zID0gMCxcblx0XHQgICAgX3Njcm9sbERpcmVjdGlvbiA9IFNDUk9MTF9ESVJFQ1RJT05fUEFVU0VELFxuXHRcdCAgICBfaXNEb2N1bWVudCA9IHRydWUsXG5cdFx0ICAgIF92aWV3UG9ydFNpemUgPSAwLFxuXHRcdCAgICBfZW5hYmxlZCA9IHRydWUsXG5cdFx0ICAgIF91cGRhdGVUaW1lb3V0LFxuXHRcdCAgICBfcmVmcmVzaFRpbWVvdXQ7XG5cblx0XHQvKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBwcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuXHRcdC8qKlxyXG4gICAqIEludGVybmFsIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIHRoZSBTY3JvbGxNYWdpYyBDb250cm9sbGVyXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cblx0XHR2YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gY29uc3RydWN0KCkge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIF9vcHRpb25zKSB7XG5cdFx0XHRcdGlmICghREVGQVVMVF9PUFRJT05TLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBVbmtub3duIG9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIik7XG5cdFx0XHRcdFx0ZGVsZXRlIF9vcHRpb25zW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lciA9IF91dGlsLmdldC5lbGVtZW50cyhfb3B0aW9ucy5jb250YWluZXIpWzBdO1xuXHRcdFx0Ly8gY2hlY2sgU2Nyb2xsQ29udGFpbmVyXG5cdFx0XHRpZiAoIV9vcHRpb25zLmNvbnRhaW5lcikge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjcmVhdGluZyBvYmplY3QgXCIgKyBOQU1FU1BBQ0UgKyBcIjogTm8gdmFsaWQgc2Nyb2xsIGNvbnRhaW5lciBzdXBwbGllZFwiKTtcblx0XHRcdFx0dGhyb3cgTkFNRVNQQUNFICsgXCIgaW5pdCBmYWlsZWQuXCI7IC8vIGNhbmNlbFxuXHRcdFx0fVxuXHRcdFx0X2lzRG9jdW1lbnQgPSBfb3B0aW9ucy5jb250YWluZXIgPT09IHdpbmRvdyB8fCBfb3B0aW9ucy5jb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkgfHwgIWRvY3VtZW50LmJvZHkuY29udGFpbnMoX29wdGlvbnMuY29udGFpbmVyKTtcblx0XHRcdC8vIG5vcm1hbGl6ZSB0byB3aW5kb3dcblx0XHRcdGlmIChfaXNEb2N1bWVudCkge1xuXHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIgPSB3aW5kb3c7XG5cdFx0XHR9XG5cdFx0XHQvLyB1cGRhdGUgY29udGFpbmVyIHNpemUgaW1tZWRpYXRlbHlcblx0XHRcdF92aWV3UG9ydFNpemUgPSBnZXRWaWV3cG9ydFNpemUoKTtcblx0XHRcdC8vIHNldCBldmVudCBoYW5kbGVyc1xuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25DaGFuZ2UpO1xuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25DaGFuZ2UpO1xuXG5cdFx0XHR2YXIgcmkgPSBwYXJzZUludChfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwsIDEwKTtcblx0XHRcdF9vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCA9IF91dGlsLnR5cGUuTnVtYmVyKHJpKSA/IHJpIDogREVGQVVMVF9PUFRJT05TLnJlZnJlc2hJbnRlcnZhbDtcblx0XHRcdHNjaGVkdWxlUmVmcmVzaCgpO1xuXG5cdFx0XHRsb2coMywgXCJhZGRlZCBuZXcgXCIgKyBOQU1FU1BBQ0UgKyBcIiBjb250cm9sbGVyICh2XCIgKyBTY3JvbGxNYWdpYy52ZXJzaW9uICsgXCIpXCIpO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBTY2hlZHVsZSB0aGUgbmV4dCBleGVjdXRpb24gb2YgdGhlIHJlZnJlc2ggZnVuY3Rpb25cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xuXHRcdHZhciBzY2hlZHVsZVJlZnJlc2ggPSBmdW5jdGlvbiBzY2hlZHVsZVJlZnJlc2goKSB7XG5cdFx0XHRpZiAoX29wdGlvbnMucmVmcmVzaEludGVydmFsID4gMCkge1xuXHRcdFx0XHRfcmVmcmVzaFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChyZWZyZXNoLCBfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBEZWZhdWx0IGZ1bmN0aW9uIHRvIGdldCBzY3JvbGwgcG9zIC0gb3ZlcndyaXRlYWJsZSB1c2luZyBgQ29udHJvbGxlci5zY3JvbGxQb3MobmV3RnVuY3Rpb24pYFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXG5cdFx0dmFyIGdldFNjcm9sbFBvcyA9IGZ1bmN0aW9uIGdldFNjcm9sbFBvcygpIHtcblx0XHRcdHJldHVybiBfb3B0aW9ucy52ZXJ0aWNhbCA/IF91dGlsLmdldC5zY3JvbGxUb3AoX29wdGlvbnMuY29udGFpbmVyKSA6IF91dGlsLmdldC5zY3JvbGxMZWZ0KF9vcHRpb25zLmNvbnRhaW5lcik7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmlld3BvcnQgU2l6ZSAod2lkdGggdm9yIGhvcml6b250YWwsIGhlaWdodCBmb3IgdmVydGljYWwpXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cblx0XHR2YXIgZ2V0Vmlld3BvcnRTaXplID0gZnVuY3Rpb24gZ2V0Vmlld3BvcnRTaXplKCkge1xuXHRcdFx0cmV0dXJuIF9vcHRpb25zLnZlcnRpY2FsID8gX3V0aWwuZ2V0LmhlaWdodChfb3B0aW9ucy5jb250YWluZXIpIDogX3V0aWwuZ2V0LndpZHRoKF9vcHRpb25zLmNvbnRhaW5lcik7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIERlZmF1bHQgZnVuY3Rpb24gdG8gc2V0IHNjcm9sbCBwb3MgLSBvdmVyd3JpdGVhYmxlIHVzaW5nIGBDb250cm9sbGVyLnNjcm9sbFRvKG5ld0Z1bmN0aW9uKWBcclxuICAgKiBNYWtlIGF2YWlsYWJsZSBwdWJsaWNseSBmb3IgcGlubmVkIG1vdXNld2hlZWwgd29ya2Fyb3VuZC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xuXHRcdHZhciBzZXRTY3JvbGxQb3MgPSB0aGlzLl9zZXRTY3JvbGxQb3MgPSBmdW5jdGlvbiAocG9zKSB7XG5cdFx0XHRpZiAoX29wdGlvbnMudmVydGljYWwpIHtcblx0XHRcdFx0aWYgKF9pc0RvY3VtZW50KSB7XG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKF91dGlsLmdldC5zY3JvbGxMZWZ0KCksIHBvcyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnNjcm9sbFRvcCA9IHBvcztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKF9pc0RvY3VtZW50KSB7XG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKHBvcywgX3V0aWwuZ2V0LnNjcm9sbFRvcCgpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIuc2Nyb2xsTGVmdCA9IHBvcztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBIYW5kbGUgdXBkYXRlcyBpbiBjeWNsZXMgaW5zdGVhZCBvZiBvbiBzY3JvbGwgKHBlcmZvcm1hbmNlKVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXG5cdFx0dmFyIHVwZGF0ZVNjZW5lcyA9IGZ1bmN0aW9uIHVwZGF0ZVNjZW5lcygpIHtcblx0XHRcdGlmIChfZW5hYmxlZCAmJiBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUpIHtcblx0XHRcdFx0Ly8gZGV0ZXJtaW5lIHNjZW5lcyB0byB1cGRhdGVcblx0XHRcdFx0dmFyIHNjZW5lc1RvVXBkYXRlID0gX3V0aWwudHlwZS5BcnJheShfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUpID8gX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIDogX3NjZW5lT2JqZWN0cy5zbGljZSgwKTtcblx0XHRcdFx0Ly8gcmVzZXQgc2NlbmVzXG5cdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IGZhbHNlO1xuXHRcdFx0XHR2YXIgb2xkU2Nyb2xsUG9zID0gX3Njcm9sbFBvcztcblx0XHRcdFx0Ly8gdXBkYXRlIHNjcm9sbCBwb3Mgbm93IGluc3RlYWQgb2Ygb25DaGFuZ2UsIGFzIGl0IG1pZ2h0IGhhdmUgY2hhbmdlZCBzaW5jZSBzY2hlZHVsaW5nIChpLmUuIGluLWJyb3dzZXIgc21vb3RoIHNjcm9sbClcblx0XHRcdFx0X3Njcm9sbFBvcyA9IENvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XG5cdFx0XHRcdHZhciBkZWx0YVNjcm9sbCA9IF9zY3JvbGxQb3MgLSBvbGRTY3JvbGxQb3M7XG5cdFx0XHRcdGlmIChkZWx0YVNjcm9sbCAhPT0gMCkge1xuXHRcdFx0XHRcdC8vIHNjcm9sbCBwb3NpdGlvbiBjaGFuZ2VkP1xuXHRcdFx0XHRcdF9zY3JvbGxEaXJlY3Rpb24gPSBkZWx0YVNjcm9sbCA+IDAgPyBTQ1JPTExfRElSRUNUSU9OX0ZPUldBUkQgOiBTQ1JPTExfRElSRUNUSU9OX1JFVkVSU0U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gcmV2ZXJzZSBvcmRlciBvZiBzY2VuZXMgaWYgc2Nyb2xsaW5nIHJldmVyc2Vcblx0XHRcdFx0aWYgKF9zY3JvbGxEaXJlY3Rpb24gPT09IFNDUk9MTF9ESVJFQ1RJT05fUkVWRVJTRSkge1xuXHRcdFx0XHRcdHNjZW5lc1RvVXBkYXRlLnJldmVyc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyB1cGRhdGUgc2NlbmVzXG5cdFx0XHRcdHNjZW5lc1RvVXBkYXRlLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xuXHRcdFx0XHRcdGxvZygzLCBcInVwZGF0aW5nIFNjZW5lIFwiICsgKGluZGV4ICsgMSkgKyBcIi9cIiArIHNjZW5lc1RvVXBkYXRlLmxlbmd0aCArIFwiIChcIiArIF9zY2VuZU9iamVjdHMubGVuZ3RoICsgXCIgdG90YWwpXCIpO1xuXHRcdFx0XHRcdHNjZW5lLnVwZGF0ZSh0cnVlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChzY2VuZXNUb1VwZGF0ZS5sZW5ndGggPT09IDAgJiYgX29wdGlvbnMubG9nbGV2ZWwgPj0gMykge1xuXHRcdFx0XHRcdGxvZygzLCBcInVwZGF0aW5nIDAgU2NlbmVzIChub3RoaW5nIGFkZGVkIHRvIGNvbnRyb2xsZXIpXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIEluaXRpYWxpemVzIHJBRiBjYWxsYmFja1xyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXG5cdFx0dmFyIGRlYm91bmNlVXBkYXRlID0gZnVuY3Rpb24gZGVib3VuY2VVcGRhdGUoKSB7XG5cdFx0XHRfdXBkYXRlVGltZW91dCA9IF91dGlsLnJBRih1cGRhdGVTY2VuZXMpO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBIYW5kbGVzIENvbnRhaW5lciBjaGFuZ2VzXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cblx0XHR2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG5cdFx0XHRsb2coMywgXCJldmVudCBmaXJlZCBjYXVzaW5nIGFuIHVwZGF0ZTpcIiwgZS50eXBlKTtcblx0XHRcdGlmIChlLnR5cGUgPT0gXCJyZXNpemVcIikge1xuXHRcdFx0XHQvLyByZXNpemVcblx0XHRcdFx0X3ZpZXdQb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZSgpO1xuXHRcdFx0XHRfc2Nyb2xsRGlyZWN0aW9uID0gU0NST0xMX0RJUkVDVElPTl9QQVVTRUQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBzY2hlZHVsZSB1cGRhdGVcblx0XHRcdGlmIChfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgIT09IHRydWUpIHtcblx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gdHJ1ZTtcblx0XHRcdFx0ZGVib3VuY2VVcGRhdGUoKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIHJlZnJlc2ggPSBmdW5jdGlvbiByZWZyZXNoKCkge1xuXHRcdFx0aWYgKCFfaXNEb2N1bWVudCkge1xuXHRcdFx0XHQvLyBzaW11bGF0ZSByZXNpemUgZXZlbnQuIE9ubHkgd29ya3MgZm9yIHZpZXdwb3J0IHJlbGV2YW50IHBhcmFtIChwZXJmb3JtYW5jZSlcblx0XHRcdFx0aWYgKF92aWV3UG9ydFNpemUgIT0gZ2V0Vmlld3BvcnRTaXplKCkpIHtcblx0XHRcdFx0XHR2YXIgcmVzaXplRXZlbnQ7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHJlc2l6ZUV2ZW50ID0gbmV3IEV2ZW50KCdyZXNpemUnLCB7XG5cdFx0XHRcdFx0XHRcdGJ1YmJsZXM6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRjYW5jZWxhYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0Ly8gc3R1cGlkIElFXG5cdFx0XHRcdFx0XHRyZXNpemVFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG5cdFx0XHRcdFx0XHRyZXNpemVFdmVudC5pbml0RXZlbnQoXCJyZXNpemVcIiwgZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQocmVzaXplRXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRfc2NlbmVPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xuXHRcdFx0XHQvLyByZWZyZXNoIGFsbCBzY2VuZXNcblx0XHRcdFx0c2NlbmUucmVmcmVzaCgpO1xuXHRcdFx0fSk7XG5cdFx0XHRzY2hlZHVsZVJlZnJlc2goKTtcblx0XHR9O1xuXG5cdFx0LyoqXHJcbiAgICogU2VuZCBhIGRlYnVnIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICogcHJvdmlkZWQgcHVibGljbHkgd2l0aCBfbG9nIGZvciBwbHVnaW5zXHJcbiAgICogQHByaXZhdGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2dsZXZlbCAtIFRoZSBsb2dsZXZlbCByZXF1aXJlZCB0byBpbml0aWF0ZSBvdXRwdXQgZm9yIHRoZSBtZXNzYWdlLlxyXG4gICAqIEBwYXJhbSB7Li4ubWl4ZWR9IG91dHB1dCAtIE9uZSBvciBtb3JlIHZhcmlhYmxlcyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICovXG5cdFx0dmFyIGxvZyA9IHRoaXMuX2xvZyA9IGZ1bmN0aW9uIChsb2dsZXZlbCwgb3V0cHV0KSB7XG5cdFx0XHRpZiAoX29wdGlvbnMubG9nbGV2ZWwgPj0gbG9nbGV2ZWwpIHtcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgMCwgXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIikgLT5cIik7XG5cdFx0XHRcdF91dGlsLmxvZy5hcHBseSh3aW5kb3csIGFyZ3VtZW50cyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvLyBmb3Igc2NlbmVzIHdlIGhhdmUgZ2V0dGVycyBmb3IgZWFjaCBvcHRpb24sIGJ1dCBmb3IgdGhlIGNvbnRyb2xsZXIgd2UgZG9uJ3QsIHNvIHdlIG5lZWQgdG8gbWFrZSBpdCBhdmFpbGFibGUgZXh0ZXJuYWxseSBmb3IgcGx1Z2luc1xuXHRcdHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcblxuXHRcdC8qKlxyXG4gICAqIFNvcnQgc2NlbmVzIGluIGFzY2VuZGluZyBvcmRlciBvZiB0aGVpciBzdGFydCBvZmZzZXQuXHJcbiAgICogQHByaXZhdGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7YXJyYXl9IFNjZW5lc0FycmF5IC0gYW4gYXJyYXkgb2YgU2Nyb2xsTWFnaWMgU2NlbmVzIHRoYXQgc2hvdWxkIGJlIHNvcnRlZFxyXG4gICAqIEByZXR1cm4ge2FycmF5fSBUaGUgc29ydGVkIGFycmF5IG9mIFNjZW5lcy5cclxuICAgKi9cblx0XHR2YXIgc29ydFNjZW5lcyA9IGZ1bmN0aW9uIHNvcnRTY2VuZXMoU2NlbmVzQXJyYXkpIHtcblx0XHRcdGlmIChTY2VuZXNBcnJheS5sZW5ndGggPD0gMSkge1xuXHRcdFx0XHRyZXR1cm4gU2NlbmVzQXJyYXk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgc2NlbmVzID0gU2NlbmVzQXJyYXkuc2xpY2UoMCk7XG5cdFx0XHRcdHNjZW5lcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGEuc2Nyb2xsT2Zmc2V0KCkgPiBiLnNjcm9sbE9mZnNldCgpID8gMSA6IC0xO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHNjZW5lcztcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIHB1YmxpYyBmdW5jdGlvbnNcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cblx0XHQvKipcclxuICAgKiBBZGQgb25lIG9yZSBtb3JlIHNjZW5lKHMpIHRvIHRoZSBjb250cm9sbGVyLiAgXHJcbiAgICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgU2NlbmUuYWRkVG8oY29udHJvbGxlcilgLlxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIHdpdGggYSBwcmV2aW91c2x5IGRlZmluZWQgc2NlbmVcclxuICAgKiBjb250cm9sbGVyLmFkZFNjZW5lKHNjZW5lKTtcclxuICAgKlxyXG4gICAqIC8vIHdpdGggYSBuZXdseSBjcmVhdGVkIHNjZW5lLlxyXG4gICAqIGNvbnRyb2xsZXIuYWRkU2NlbmUobmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtkdXJhdGlvbiA6IDB9KSk7XHJcbiAgICpcclxuICAgKiAvLyBhZGRpbmcgbXVsdGlwbGUgc2NlbmVzXHJcbiAgICogY29udHJvbGxlci5hZGRTY2VuZShbc2NlbmUsIHNjZW5lMiwgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtkdXJhdGlvbiA6IDB9KV0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoU2Nyb2xsTWFnaWMuU2NlbmV8YXJyYXkpfSBuZXdTY2VuZSAtIFNjcm9sbE1hZ2ljIFNjZW5lIG9yIEFycmF5IG9mIFNjZW5lcyB0byBiZSBhZGRlZCB0byB0aGUgY29udHJvbGxlci5cclxuICAgKiBAcmV0dXJuIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuICAgKi9cblx0XHR0aGlzLmFkZFNjZW5lID0gZnVuY3Rpb24gKG5ld1NjZW5lKSB7XG5cdFx0XHRpZiAoX3V0aWwudHlwZS5BcnJheShuZXdTY2VuZSkpIHtcblx0XHRcdFx0bmV3U2NlbmUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XG5cdFx0XHRcdFx0Q29udHJvbGxlci5hZGRTY2VuZShzY2VuZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmIChuZXdTY2VuZSBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLlNjZW5lKSB7XG5cdFx0XHRcdGlmIChuZXdTY2VuZS5jb250cm9sbGVyKCkgIT09IENvbnRyb2xsZXIpIHtcblx0XHRcdFx0XHRuZXdTY2VuZS5hZGRUbyhDb250cm9sbGVyKTtcblx0XHRcdFx0fSBlbHNlIGlmIChfc2NlbmVPYmplY3RzLmluZGV4T2YobmV3U2NlbmUpIDwgMCkge1xuXHRcdFx0XHRcdC8vIG5ldyBzY2VuZVxuXHRcdFx0XHRcdF9zY2VuZU9iamVjdHMucHVzaChuZXdTY2VuZSk7IC8vIGFkZCB0byBhcnJheVxuXHRcdFx0XHRcdF9zY2VuZU9iamVjdHMgPSBzb3J0U2NlbmVzKF9zY2VuZU9iamVjdHMpOyAvLyBzb3J0XG5cdFx0XHRcdFx0bmV3U2NlbmUub24oXCJzaGlmdC5jb250cm9sbGVyX3NvcnRcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0Ly8gcmVzb3J0IHdoZW5ldmVyIHNjZW5lIG1vdmVzXG5cdFx0XHRcdFx0XHRfc2NlbmVPYmplY3RzID0gc29ydFNjZW5lcyhfc2NlbmVPYmplY3RzKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQvLyBpbnNlcnQgR2xvYmFsIGRlZmF1bHRzLlxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBfb3B0aW9ucy5nbG9iYWxTY2VuZU9wdGlvbnMpIHtcblx0XHRcdFx0XHRcdGlmIChuZXdTY2VuZVtrZXldKSB7XG5cdFx0XHRcdFx0XHRcdG5ld1NjZW5lW2tleV0uY2FsbChuZXdTY2VuZSwgX29wdGlvbnMuZ2xvYmFsU2NlbmVPcHRpb25zW2tleV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsb2coMywgXCJhZGRpbmcgU2NlbmUgKG5vdyBcIiArIF9zY2VuZU9iamVjdHMubGVuZ3RoICsgXCIgdG90YWwpXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogaW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCBmb3IgJy5hZGRTY2VuZSgpJ1wiKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBSZW1vdmUgb25lIG9yZSBtb3JlIHNjZW5lKHMpIGZyb20gdGhlIGNvbnRyb2xsZXIuICBcclxuICAgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS5yZW1vdmUoKWAuXHJcbiAgICogQHB1YmxpY1xyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLy8gcmVtb3ZlIGEgc2NlbmUgZnJvbSB0aGUgY29udHJvbGxlclxyXG4gICAqIGNvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpO1xyXG4gICAqXHJcbiAgICogLy8gcmVtb3ZlIG11bHRpcGxlIHNjZW5lcyBmcm9tIHRoZSBjb250cm9sbGVyXHJcbiAgICogY29udHJvbGxlci5yZW1vdmVTY2VuZShbc2NlbmUsIHNjZW5lMiwgc2NlbmUzXSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhTY3JvbGxNYWdpYy5TY2VuZXxhcnJheSl9IFNjZW5lIC0gU2Nyb2xsTWFnaWMgU2NlbmUgb3IgQXJyYXkgb2YgU2NlbmVzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgY29udHJvbGxlci5cclxuICAgKiBAcmV0dXJucyB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcbiAgICovXG5cdFx0dGhpcy5yZW1vdmVTY2VuZSA9IGZ1bmN0aW9uIChTY2VuZSkge1xuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkoU2NlbmUpKSB7XG5cdFx0XHRcdFNjZW5lLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xuXHRcdFx0XHRcdENvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IF9zY2VuZU9iamVjdHMuaW5kZXhPZihTY2VuZSk7XG5cdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0U2NlbmUub2ZmKFwic2hpZnQuY29udHJvbGxlcl9zb3J0XCIpO1xuXHRcdFx0XHRcdF9zY2VuZU9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRsb2coMywgXCJyZW1vdmluZyBTY2VuZSAobm93IFwiICsgX3NjZW5lT2JqZWN0cy5sZW5ndGggKyBcIiBsZWZ0KVwiKTtcblx0XHRcdFx0XHRTY2VuZS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICogVXBkYXRlIG9uZSBvcmUgbW9yZSBzY2VuZShzKSBhY2NvcmRpbmcgdG8gdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVyLiAgXHJcbiAgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS51cGRhdGUoKWAuICBcclxuICAqIFRoZSB1cGRhdGUgbWV0aG9kIGNhbGN1bGF0ZXMgdGhlIHNjZW5lJ3Mgc3RhcnQgYW5kIGVuZCBwb3NpdGlvbiAoYmFzZWQgb24gdGhlIHRyaWdnZXIgZWxlbWVudCwgdHJpZ2dlciBob29rLCBkdXJhdGlvbiBhbmQgb2Zmc2V0KSBhbmQgY2hlY2tzIGl0IGFnYWluc3QgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIuICBcclxuICAqIEl0IHRoZW4gdXBkYXRlcyB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZSBhY2NvcmRpbmdseSAob3IgZG9lcyBub3RoaW5nLCBpZiB0aGUgc3RhdGUgaXMgYWxyZWFkeSBjb3JyZWN0KSDigJMgUGlucyB3aWxsIGJlIHNldCB0byB0aGVpciBjb3JyZWN0IHBvc2l0aW9uIGFuZCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkIHRvIHRoZWlyIGNvcnJlY3QgcHJvZ3Jlc3MuICBcclxuICAqIF8qKk5vdGU6KiogVGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQgY29uc3RhbnRseSB3aGVuZXZlciBDb250cm9sbGVyIGRldGVjdHMgYSBjaGFuZ2UuIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB5b3UgaXMgaWYgeW91IGNoYW5nZSBzb21ldGhpbmcgb3V0c2lkZSBvZiB0aGUgcmVhbG0gb2YgU2Nyb2xsTWFnaWMsIGxpa2UgbW92aW5nIHRoZSB0cmlnZ2VyIG9yIGNoYW5naW5nIHR3ZWVuIHBhcmFtZXRlcnMuX1xyXG4gICogQHB1YmxpY1xyXG4gICogQGV4YW1wbGVcclxuICAqIC8vIHVwZGF0ZSBhIHNwZWNpZmljIHNjZW5lIG9uIG5leHQgY3ljbGVcclxuICAgKiBjb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lKTtcclxuICAgKlxyXG4gICogLy8gdXBkYXRlIGEgc3BlY2lmaWMgc2NlbmUgaW1tZWRpYXRlbHlcclxuICAqIGNvbnRyb2xsZXIudXBkYXRlU2NlbmUoc2NlbmUsIHRydWUpO1xyXG4gICAqXHJcbiAgKiAvLyB1cGRhdGUgbXVsdGlwbGUgc2NlbmVzIHNjZW5lIG9uIG5leHQgY3ljbGVcclxuICAqIGNvbnRyb2xsZXIudXBkYXRlU2NlbmUoW3NjZW5lMSwgc2NlbmUyLCBzY2VuZTNdKTtcclxuICAqXHJcbiAgKiBAcGFyYW0ge1Njcm9sbE1hZ2ljLlNjZW5lfSBTY2VuZSAtIFNjcm9sbE1hZ2ljIFNjZW5lIG9yIEFycmF5IG9mIFNjZW5lcyB0aGF0IGlzL2FyZSBzdXBwb3NlZCB0byBiZSB1cGRhdGVkLlxyXG4gICogQHBhcmFtIHtib29sZWFufSBbaW1tZWRpYXRlbHk9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSB1cGRhdGUgd2lsbCBiZSBpbnN0YW50LCBpZiBgZmFsc2VgIGl0IHdpbGwgd2FpdCB1bnRpbCBuZXh0IHVwZGF0ZSBjeWNsZS4gIFxyXG4gIFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBUaGlzIGlzIHVzZWZ1bCB3aGVuIGNoYW5naW5nIG11bHRpcGxlIHByb3BlcnRpZXMgb2YgdGhlIHNjZW5lIC0gdGhpcyB3YXkgaXQgd2lsbCBvbmx5IGJlIHVwZGF0ZWQgb25jZSBhbGwgbmV3IHByb3BlcnRpZXMgYXJlIHNldCAodXBkYXRlU2NlbmVzKS5cclxuICAqIEByZXR1cm4ge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICovXG5cdFx0dGhpcy51cGRhdGVTY2VuZSA9IGZ1bmN0aW9uIChTY2VuZSwgaW1tZWRpYXRlbHkpIHtcblx0XHRcdGlmIChfdXRpbC50eXBlLkFycmF5KFNjZW5lKSkge1xuXHRcdFx0XHRTY2VuZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcblx0XHRcdFx0XHRDb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCBpbW1lZGlhdGVseSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGltbWVkaWF0ZWx5KSB7XG5cdFx0XHRcdFx0U2NlbmUudXBkYXRlKHRydWUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSAhPT0gdHJ1ZSAmJiBTY2VuZSBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLlNjZW5lKSB7XG5cdFx0XHRcdFx0Ly8gaWYgX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIGlzIHRydWUsIGFsbCBjb25uZWN0ZWQgc2NlbmVzIGFyZSBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgdXBkYXRlXG5cdFx0XHRcdFx0Ly8gcHJlcCBhcnJheSBmb3IgbmV4dCB1cGRhdGUgY3ljbGVcblx0XHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgfHwgW107XG5cdFx0XHRcdFx0aWYgKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZS5pbmRleE9mKFNjZW5lKSA9PSAtMSkge1xuXHRcdFx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlLnB1c2goU2NlbmUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBzb3J0U2NlbmVzKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSk7IC8vIHNvcnRcblx0XHRcdFx0XHRkZWJvdW5jZVVwZGF0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcblx0XHR9O1xuXG5cdFx0LyoqXHJcbiAgICogVXBkYXRlcyB0aGUgY29udHJvbGxlciBwYXJhbXMgYW5kIGNhbGxzIHVwZGF0ZVNjZW5lIG9uIGV2ZXJ5IHNjZW5lLCB0aGF0IGlzIGF0dGFjaGVkIHRvIHRoZSBjb250cm9sbGVyLiAgXHJcbiAgICogU2VlIGBDb250cm9sbGVyLnVwZGF0ZVNjZW5lKClgIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgdGhpcyBtZWFucy4gIFxyXG4gICAqIEluIG1vc3QgY2FzZXMgeW91IHdpbGwgbm90IG5lZWQgdGhpcyBmdW5jdGlvbiwgYXMgaXQgaXMgY2FsbGVkIGNvbnN0YW50bHksIHdoZW5ldmVyIFNjcm9sbE1hZ2ljIGRldGVjdHMgYSBzdGF0ZSBjaGFuZ2UgZXZlbnQsIGxpa2UgcmVzaXplIG9yIHNjcm9sbC4gIFxyXG4gICAqIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB0aGlzIG1ldGhvZCBpcyB3aGVuIFNjcm9sbE1hZ2ljIGZhaWxzIHRvIGRldGVjdCB0aGVzZSBldmVudHMuICBcclxuICAgKiBPbmUgYXBwbGljYXRpb24gaXMgd2l0aCBzb21lIGV4dGVybmFsIHNjcm9sbCBsaWJyYXJpZXMgKGxpa2UgaVNjcm9sbCkgdGhhdCBtb3ZlIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBhIG5lZ2F0aXZlIG9mZnNldCBpbnN0ZWFkIG9mIGFjdHVhbGx5IHNjcm9sbGluZy4gSW4gdGhpcyBjYXNlIHRoZSB1cGRhdGUgb24gdGhlIGNvbnRyb2xsZXIgbmVlZHMgdG8gYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBjaGlsZCBjb250YWluZXIncyBwb3NpdGlvbiBjaGFuZ2VzLlxyXG4gICAqIEZvciB0aGlzIGNhc2UgdGhlcmUgd2lsbCBhbHNvIGJlIHRoZSBuZWVkIHRvIHByb3ZpZGUgYSBjdXN0b20gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBjb3JyZWN0IHNjcm9sbCBwb3NpdGlvbi4gU2VlIGBDb250cm9sbGVyLnNjcm9sbFBvcygpYCBmb3IgZGV0YWlscy5cclxuICAgKiBAcHVibGljXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyB1cGRhdGUgdGhlIGNvbnRyb2xsZXIgb24gbmV4dCBjeWNsZSAoc2F2ZXMgcGVyZm9ybWFuY2UgZHVlIHRvIGVsaW1pbmF0aW9uIG9mIHJlZHVuZGFudCB1cGRhdGVzKVxyXG4gICAqIGNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICpcclxuICAgKiAvLyB1cGRhdGUgdGhlIGNvbnRyb2xsZXIgaW1tZWRpYXRlbHlcclxuICAgKiBjb250cm9sbGVyLnVwZGF0ZSh0cnVlKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbWVkaWF0ZWx5PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgdXBkYXRlIHdpbGwgYmUgaW5zdGFudCwgaWYgYGZhbHNlYCBpdCB3aWxsIHdhaXQgdW50aWwgbmV4dCB1cGRhdGUgY3ljbGUgKGJldHRlciBwZXJmb3JtYW5jZSlcclxuICAgKiBAcmV0dXJuIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuICAgKi9cblx0XHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChpbW1lZGlhdGVseSkge1xuXHRcdFx0b25DaGFuZ2Uoe1xuXHRcdFx0XHR0eXBlOiBcInJlc2l6ZVwiXG5cdFx0XHR9KTsgLy8gd2lsbCB1cGRhdGUgc2l6ZSBhbmQgc2V0IF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSB0byB0cnVlXG5cdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcblx0XHRcdFx0dXBkYXRlU2NlbmVzKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcblx0XHR9O1xuXG5cdFx0LyoqXHJcbiAgICogU2Nyb2xsIHRvIGEgbnVtZXJpYyBzY3JvbGwgb2Zmc2V0LCBhIERPTSBlbGVtZW50LCB0aGUgc3RhcnQgb2YgYSBzY2VuZSBvciBwcm92aWRlIGFuIGFsdGVybmF0ZSBtZXRob2QgZm9yIHNjcm9sbGluZy4gIFxyXG4gICAqIEZvciB2ZXJ0aWNhbCBjb250cm9sbGVycyBpdCB3aWxsIGNoYW5nZSB0aGUgdG9wIHNjcm9sbCBvZmZzZXQgYW5kIGZvciBob3Jpem9udGFsIGFwcGxpY2F0aW9ucyBpdCB3aWxsIGNoYW5nZSB0aGUgbGVmdCBvZmZzZXQuXHJcbiAgICogQHB1YmxpY1xyXG4gICAqXHJcbiAgICogQHNpbmNlIDEuMS4wXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyBzY3JvbGwgdG8gYW4gb2Zmc2V0IG9mIDEwMFxyXG4gICAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwKTtcclxuICAgKlxyXG4gICAqIC8vIHNjcm9sbCB0byBhIERPTSBlbGVtZW50XHJcbiAgICogY29udHJvbGxlci5zY3JvbGxUbyhcIiNhbmNob3JcIik7XHJcbiAgICpcclxuICAgKiAvLyBzY3JvbGwgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHNjZW5lXHJcbiAgICogdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtvZmZzZXQ6IDIwMH0pO1xyXG4gICAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oc2NlbmUpO1xyXG4gICAqXHJcbiAgICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBwb3NpdGlvbiBtb2RpZmljYXRpb24gZnVuY3Rpb24gKGpRdWVyeSBhbmltYXRlIGluc3RlYWQgb2YganVtcClcclxuICAgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MpIHtcclxuICAgKlx0JChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9KTtcclxuICAgKiB9KTtcclxuICAgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCk7IC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCB0aGUgbmV3IGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBpbnN0ZWFkXHJcbiAgICpcclxuICAgKiAvLyBkZWZpbmUgYSBuZXcgc2Nyb2xsIGZ1bmN0aW9uIHdpdGggYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXJcclxuICAgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MsIG1lc3NhZ2UpIHtcclxuICAgKiAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICpcdCQodGhpcykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9KTtcclxuICAgKiB9KTtcclxuICAgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciB0byB0aGUgZGVmaW5lZCBjdXN0b20gZnVuY3Rpb25cclxuICAgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCwgXCJteSBtZXNzYWdlXCIpO1xyXG4gICAqXHJcbiAgICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBmdW5jdGlvbiB3aXRoIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyIGNvbnRhaW5pbmcgbXVsdGlwbGUgdmFyaWFibGVzXHJcbiAgICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zLCBvcHRpb25zKSB7XHJcbiAgICogIHNvbWVHbG9iYWxWYXIgPSBvcHRpb25zLmEgKyBvcHRpb25zLmI7XHJcbiAgICpcdCQodGhpcykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9KTtcclxuICAgKiB9KTtcclxuICAgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciBjb250YWluaW5nIG11bHRpcGxlIG9wdGlvbnNcclxuICAgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCwge2E6IDEsIGI6IDJ9KTtcclxuICAgKlxyXG4gICAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgZnVuY3Rpb24gd2l0aCBhIGNhbGxiYWNrIHN1cHBsaWVkIGFzIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyXHJcbiAgICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zLCBjYWxsYmFjaykge1xyXG4gICAqXHQkKHRoaXMpLmFuaW1hdGUoe3Njcm9sbFRvcDogbmV3U2Nyb2xsUG9zfSwgNDAwLCBcInN3aW5nXCIsIGNhbGxiYWNrKTtcclxuICAgKiB9KTtcclxuICAgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciwgd2hpY2ggaXMgdXNlZCBhcyBhIGNhbGxiYWNrIGluIHRoZSBwcmV2aW91c2x5IGRlZmluZWQgY3VzdG9tIHNjcm9sbCBmdW5jdGlvblxyXG4gICAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwLCBmdW5jdGlvbigpIHtcclxuICAgKlx0Y29uc29sZS5sb2coXCJzY3JvbGwgaGFzIGZpbmlzaGVkLlwiKTtcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bWl4ZWR9IHNjcm9sbFRhcmdldCAtIFRoZSBzdXBwbGllZCBhcmd1bWVudCBjYW4gYmUgb25lIG9mIHRoZXNlIHR5cGVzOlxyXG4gICAqIDEuIGBudW1iZXJgIC0+IFRoZSBjb250YWluZXIgd2lsbCBzY3JvbGwgdG8gdGhpcyBuZXcgc2Nyb2xsIG9mZnNldC5cclxuICAgKiAyLiBgc3RyaW5nYCBvciBgb2JqZWN0YCAtPiBDYW4gYmUgYSBzZWxlY3RvciBvciBhIERPTSBvYmplY3QuICBcclxuICAgKiAgVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGUgcG9zaXRpb24gb2YgdGhpcyBlbGVtZW50LlxyXG4gICAqIDMuIGBTY3JvbGxNYWdpYyBTY2VuZWAgLT4gVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGUgc3RhcnQgb2YgdGhpcyBzY2VuZS5cclxuICAgKiA0LiBgZnVuY3Rpb25gIC0+IFRoaXMgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIGZvciBmdXR1cmUgc2Nyb2xsIHBvc2l0aW9uIG1vZGlmaWNhdGlvbnMuICBcclxuICAgKiAgVGhpcyBwcm92aWRlcyBhIHdheSBmb3IgeW91IHRvIGNoYW5nZSB0aGUgYmVoYXZpb3VyIG9mIHNjcm9sbGluZyBhbmQgYWRkaW5nIG5ldyBiZWhhdmlvdXIgbGlrZSBhbmltYXRpb24uIFRoZSBmdW5jdGlvbiByZWNlaXZlcyB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvbiBhcyBhIHBhcmFtZXRlciBhbmQgYSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IHVzaW5nIGB0aGlzYC4gIFxyXG4gICAqICBJdCBtYXkgYWxzbyBvcHRpb25hbGx5IHJlY2VpdmUgYW4gb3B0aW9uYWwgYWRkaXRpb25hbCBwYXJhbWV0ZXIgKHNlZSBiZWxvdykgIFxyXG4gICAqICBfKipOT1RFOioqICBcclxuICAgKiAgQWxsIG90aGVyIG9wdGlvbnMgd2lsbCBzdGlsbCB3b3JrIGFzIGV4cGVjdGVkLCB1c2luZyB0aGUgbmV3IGZ1bmN0aW9uIHRvIHNjcm9sbC5fXHJcbiAgICogQHBhcmFtIHttaXhlZH0gW2FkZGl0aW9uYWxQYXJhbWV0ZXJdIC0gSWYgYSBjdXN0b20gc2Nyb2xsIGZ1bmN0aW9uIHdhcyBkZWZpbmVkIChzZWUgYWJvdmUgNC4pLCB5b3UgbWF5IHdhbnQgdG8gc3VwcGx5IGFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBpdCwgd2hlbiBjYWxsaW5nIGl0LiBZb3UgY2FuIGRvIHRoaXMgdXNpbmcgdGhpcyBwYXJhbWV0ZXIg4oCTIHNlZSBleGFtcGxlcyBmb3IgZGV0YWlscy4gUGxlYXNlIG5vdGUsIHRoYXQgdGhpcyBwYXJhbWV0ZXIgd2lsbCBoYXZlIG5vIGVmZmVjdCwgaWYgeW91IHVzZSB0aGUgZGVmYXVsdCBzY3JvbGxpbmcgZnVuY3Rpb24uXHJcbiAgICogQHJldHVybnMge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xuXHRcdHRoaXMuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoc2Nyb2xsVGFyZ2V0LCBhZGRpdGlvbmFsUGFyYW1ldGVyKSB7XG5cdFx0XHRpZiAoX3V0aWwudHlwZS5OdW1iZXIoc2Nyb2xsVGFyZ2V0KSkge1xuXHRcdFx0XHQvLyBleGNlY3V0ZVxuXHRcdFx0XHRzZXRTY3JvbGxQb3MuY2FsbChfb3B0aW9ucy5jb250YWluZXIsIHNjcm9sbFRhcmdldCwgYWRkaXRpb25hbFBhcmFtZXRlcik7XG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbFRhcmdldCBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLlNjZW5lKSB7XG5cdFx0XHRcdC8vIHNjcm9sbCB0byBzY2VuZVxuXHRcdFx0XHRpZiAoc2Nyb2xsVGFyZ2V0LmNvbnRyb2xsZXIoKSA9PT0gQ29udHJvbGxlcikge1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBjb250cm9sbGVyIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHNjZW5lXG5cdFx0XHRcdFx0Q29udHJvbGxlci5zY3JvbGxUbyhzY3JvbGxUYXJnZXQuc2Nyb2xsT2Zmc2V0KCksIGFkZGl0aW9uYWxQYXJhbWV0ZXIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvZygyLCBcInNjcm9sbFRvKCk6IFRoZSBzdXBwbGllZCBzY2VuZSBkb2VzIG5vdCBiZWxvbmcgdG8gdGhpcyBjb250cm9sbGVyLiBTY3JvbGwgY2FuY2VsbGVkLlwiLCBzY3JvbGxUYXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKF91dGlsLnR5cGUuRnVuY3Rpb24oc2Nyb2xsVGFyZ2V0KSkge1xuXHRcdFx0XHQvLyBhc3NpZ24gbmV3IHNjcm9sbCBmdW5jdGlvblxuXHRcdFx0XHRzZXRTY3JvbGxQb3MgPSBzY3JvbGxUYXJnZXQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBzY3JvbGwgdG8gZWxlbWVudFxuXHRcdFx0XHR2YXIgZWxlbSA9IF91dGlsLmdldC5lbGVtZW50cyhzY3JvbGxUYXJnZXQpWzBdO1xuXHRcdFx0XHRpZiAoZWxlbSkge1xuXHRcdFx0XHRcdC8vIGlmIHBhcmVudCBpcyBwaW4gc3BhY2VyLCB1c2Ugc3BhY2VyIHBvc2l0aW9uIGluc3RlYWQgc28gY29ycmVjdCBzdGFydCBwb3NpdGlvbiBpcyByZXR1cm5lZCBmb3IgcGlubmVkIGVsZW1lbnRzLlxuXHRcdFx0XHRcdHdoaWxlIChlbGVtLnBhcmVudE5vZGUuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkge1xuXHRcdFx0XHRcdFx0ZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgcGFyYW0gPSBfb3B0aW9ucy52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIixcblx0XHRcdFx0XHQgICAgLy8gd2hpY2ggcGFyYW0gaXMgb2YgaW50ZXJlc3QgP1xuXHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQoX29wdGlvbnMuY29udGFpbmVyKSxcblx0XHRcdFx0XHQgICAgLy8gY29udGFpbmVyIHBvc2l0aW9uIGlzIG5lZWRlZCBiZWNhdXNlIGVsZW1lbnQgb2Zmc2V0IGlzIHJldHVybmVkIGluIHJlbGF0aW9uIHRvIGRvY3VtZW50LCBub3QgaW4gcmVsYXRpb24gdG8gY29udGFpbmVyLlxuXHRcdFx0XHRcdGVsZW1lbnRPZmZzZXQgPSBfdXRpbC5nZXQub2Zmc2V0KGVsZW0pO1xuXG5cdFx0XHRcdFx0aWYgKCFfaXNEb2N1bWVudCkge1xuXHRcdFx0XHRcdFx0Ly8gY29udGFpbmVyIGlzIG5vdCB0aGUgZG9jdW1lbnQgcm9vdCwgc28gc3Vic3RyYWN0IHNjcm9sbCBQb3NpdGlvbiB0byBnZXQgY29ycmVjdCB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb24gcmVsYXRpdmUgdG8gc2Nyb2xsY29udGVudFxuXHRcdFx0XHRcdFx0Y29udGFpbmVyT2Zmc2V0W3BhcmFtXSAtPSBDb250cm9sbGVyLnNjcm9sbFBvcygpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdENvbnRyb2xsZXIuc2Nyb2xsVG8oZWxlbWVudE9mZnNldFtwYXJhbV0gLSBjb250YWluZXJPZmZzZXRbcGFyYW1dLCBhZGRpdGlvbmFsUGFyYW1ldGVyKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2coMiwgXCJzY3JvbGxUbygpOiBUaGUgc3VwcGxpZWQgYXJndW1lbnQgaXMgaW52YWxpZC4gU2Nyb2xsIGNhbmNlbGxlZC5cIiwgc2Nyb2xsVGFyZ2V0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqICoqR2V0KiogdGhlIGN1cnJlbnQgc2Nyb2xsUG9zaXRpb24gb3IgKipTZXQqKiBhIG5ldyBtZXRob2QgdG8gY2FsY3VsYXRlIGl0LiAgXHJcbiAgICogLT4gKipHRVQqKjpcclxuICAgKiBXaGVuIHVzZWQgYXMgYSBnZXR0ZXIgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uICBcclxuICAgKiBUbyBnZXQgYSBjYWNoZWQgdmFsdWUgdXNlIENvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSwgd2hpY2ggd2lsbCBiZSB1cGRhdGVkIGluIHRoZSB1cGRhdGUgY3ljbGUuICBcclxuICAgKiBGb3IgdmVydGljYWwgY29udHJvbGxlcnMgaXQgd2lsbCByZXR1cm4gdGhlIHRvcCBzY3JvbGwgb2Zmc2V0IGFuZCBmb3IgaG9yaXpvbnRhbCBhcHBsaWNhdGlvbnMgaXQgd2lsbCByZXR1cm4gdGhlIGxlZnQgb2Zmc2V0LlxyXG4gICAqXHJcbiAgICogLT4gKipTRVQqKjpcclxuICAgKiBXaGVuIHVzZWQgYXMgYSBzZXR0ZXIgdGhpcyBtZXRob2QgcHJvZGVzIGEgd2F5IHRvIHBlcm1hbmVudGx5IG92ZXJ3cml0ZSB0aGUgY29udHJvbGxlcidzIHNjcm9sbCBwb3NpdGlvbiBjYWxjdWxhdGlvbi4gIFxyXG4gICAqIEEgdHlwaWNhbCB1c2VjYXNlIGlzIHdoZW4gdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBub3QgcmVmbGVjdGVkIGJ5IHRoZSBjb250YWluZXJzIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IHZhbHVlcywgYnV0IGZvciBleGFtcGxlIGJ5IHRoZSBpbm5lciBvZmZzZXQgb2YgYSBjaGlsZCBjb250YWluZXIuICBcclxuICAgKiBNb3ZpbmcgYSBjaGlsZCBjb250YWluZXIgaW5zaWRlIGEgcGFyZW50IGlzIGEgY29tbW9ubHkgdXNlZCBtZXRob2QgZm9yIHNldmVyYWwgc2Nyb2xsaW5nIGZyYW1ld29ya3MsIGluY2x1ZGluZyBpU2Nyb2xsLiAgXHJcbiAgICogQnkgcHJvdmlkaW5nIGFuIGFsdGVybmF0ZSBjYWxjdWxhdGlvbiBmdW5jdGlvbiB5b3UgY2FuIG1ha2Ugc3VyZSBTY3JvbGxNYWdpYyByZWNlaXZlcyB0aGUgY29ycmVjdCBzY3JvbGwgcG9zaXRpb24uICBcclxuICAgKiBQbGVhc2UgYWxzbyBiZWFyIGluIG1pbmQgdGhhdCB5b3VyIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4geSB2YWx1ZXMgZm9yIHZlcnRpY2FsIHNjcm9sbHMgYW4geCBmb3IgaG9yaXpvbnRhbHMuXHJcbiAgICpcclxuICAgKiBUbyBjaGFuZ2UgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHBsZWFzZSB1c2UgYENvbnRyb2xsZXIuc2Nyb2xsVG8oKWAuXHJcbiAgICogQHB1YmxpY1xyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIFBvc2l0aW9uXHJcbiAgICogdmFyIHNjcm9sbFBvcyA9IGNvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XHJcbiAgICpcclxuICAgKiAvLyBzZXQgYSBuZXcgc2Nyb2xsIHBvc2l0aW9uIGNhbGN1bGF0aW9uIG1ldGhvZFxyXG4gICAqIGNvbnRyb2xsZXIuc2Nyb2xsUG9zKGZ1bmN0aW9uICgpIHtcclxuICAgKlx0cmV0dXJuIHRoaXMuaW5mbyhcInZlcnRpY2FsXCIpID8gLW15Y2hpbGRjb250YWluZXIueSA6IC1teWNoaWxkY29udGFpbmVyLnhcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtzY3JvbGxQb3NNZXRob2RdIC0gVGhlIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yIHRoZSBzY3JvbGwgcG9zaXRpb24gY2FsY3VsYXRpb24gb2YgdGhlIGNvbnRhaW5lci5cclxuICAgKiBAcmV0dXJucyB7KG51bWJlcnxDb250cm9sbGVyKX0gQ3VycmVudCBzY3JvbGwgcG9zaXRpb24gb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcbiAgICovXG5cdFx0dGhpcy5zY3JvbGxQb3MgPSBmdW5jdGlvbiAoc2Nyb2xsUG9zTWV0aG9kKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gZ2V0XG5cdFx0XHRcdHJldHVybiBnZXRTY3JvbGxQb3MuY2FsbChDb250cm9sbGVyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHNldFxuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5GdW5jdGlvbihzY3JvbGxQb3NNZXRob2QpKSB7XG5cdFx0XHRcdFx0Z2V0U2Nyb2xsUG9zID0gc2Nyb2xsUG9zTWV0aG9kO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvZygyLCBcIlByb3ZpZGVkIHZhbHVlIGZvciBtZXRob2QgJ3Njcm9sbFBvcycgaXMgbm90IGEgZnVuY3Rpb24uIFRvIGNoYW5nZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gdXNlICdzY3JvbGxUbygpJy5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiAqKkdldCoqIGFsbCBpbmZvcyBvciBvbmUgaW4gcGFydGljdWxhciBhYm91dCB0aGUgY29udHJvbGxlci5cclxuICAgKiBAcHVibGljXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyByZXR1cm5zIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiAobnVtYmVyKVxyXG4gICAqIHZhciBzY3JvbGxQb3MgPSBjb250cm9sbGVyLmluZm8oXCJzY3JvbGxQb3NcIik7XHJcbiAgICpcclxuICAgKiAvLyByZXR1cm5zIGFsbCBpbmZvcyBhcyBhbiBvYmplY3RcclxuICAgKiB2YXIgaW5mb3MgPSBjb250cm9sbGVyLmluZm8oKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYWJvdXRdIC0gSWYgcGFzc2VkIG9ubHkgdGhpcyBpbmZvIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZCBvZiBhbiBvYmplY3QgY29udGFpbmluZyBhbGwuICBcclxuICAgXHRcdFx0XHRcdFx0XHQgVmFsaWQgb3B0aW9ucyBhcmU6XHJcbiAgIFx0XHRcdFx0XHRcdFx0ICoqIGBcInNpemVcImAgPT4gdGhlIGN1cnJlbnQgdmlld3BvcnQgc2l6ZSBvZiB0aGUgY29udGFpbmVyXHJcbiAgIFx0XHRcdFx0XHRcdFx0ICoqIGBcInZlcnRpY2FsXCJgID0+IHRydWUgaWYgdmVydGljYWwgc2Nyb2xsaW5nLCBvdGhlcndpc2UgZmFsc2VcclxuICAgXHRcdFx0XHRcdFx0XHQgKiogYFwic2Nyb2xsUG9zXCJgID0+IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxyXG4gICBcdFx0XHRcdFx0XHRcdCAqKiBgXCJzY3JvbGxEaXJlY3Rpb25cImAgPT4gdGhlIGxhc3Qga25vd24gZGlyZWN0aW9uIG9mIHRoZSBzY3JvbGxcclxuICAgXHRcdFx0XHRcdFx0XHQgKiogYFwiY29udGFpbmVyXCJgID0+IHRoZSBjb250YWluZXIgZWxlbWVudFxyXG4gICBcdFx0XHRcdFx0XHRcdCAqKiBgXCJpc0RvY3VtZW50XCJgID0+IHRydWUgaWYgY29udGFpbmVyIGVsZW1lbnQgaXMgdGhlIGRvY3VtZW50LlxyXG4gICAqIEByZXR1cm5zIHsobWl4ZWR8b2JqZWN0KX0gVGhlIHJlcXVlc3RlZCBpbmZvKHMpLlxyXG4gICAqL1xuXHRcdHRoaXMuaW5mbyA9IGZ1bmN0aW9uIChhYm91dCkge1xuXHRcdFx0dmFyIHZhbHVlcyA9IHtcblx0XHRcdFx0c2l6ZTogX3ZpZXdQb3J0U2l6ZSwgLy8gY29udGFpbnMgaGVpZ2h0IG9yIHdpZHRoIChpbiByZWdhcmQgdG8gb3JpZW50YXRpb24pO1xuXHRcdFx0XHR2ZXJ0aWNhbDogX29wdGlvbnMudmVydGljYWwsXG5cdFx0XHRcdHNjcm9sbFBvczogX3Njcm9sbFBvcyxcblx0XHRcdFx0c2Nyb2xsRGlyZWN0aW9uOiBfc2Nyb2xsRGlyZWN0aW9uLFxuXHRcdFx0XHRjb250YWluZXI6IF9vcHRpb25zLmNvbnRhaW5lcixcblx0XHRcdFx0aXNEb2N1bWVudDogX2lzRG9jdW1lbnRcblx0XHRcdH07XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gZ2V0IGFsbCBhcyBhbiBvYmplY3Rcblx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdH0gZWxzZSBpZiAodmFsdWVzW2Fib3V0XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZXNbYWJvdXRdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IG9wdGlvbiBcXFwiXCIgKyBhYm91dCArIFwiXFxcIiBpcyBub3QgYXZhaWxhYmxlXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgY3VycmVudCBsb2dsZXZlbCBvcHRpb24gdmFsdWUuXHJcbiAgICogQHB1YmxpY1xyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgKiB2YXIgbG9nbGV2ZWwgPSBjb250cm9sbGVyLmxvZ2xldmVsKCk7XHJcbiAgICpcclxuICAgKiAvLyBzZXQgYSBuZXcgdmFsdWVcclxuICAgKiBjb250cm9sbGVyLmxvZ2xldmVsKDMpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtuZXdMb2dsZXZlbF0gLSBUaGUgbmV3IGxvZ2xldmVsIHNldHRpbmcgb2YgdGhlIENvbnRyb2xsZXIuIGBbMC0zXWBcclxuICAgKiBAcmV0dXJucyB7KG51bWJlcnxDb250cm9sbGVyKX0gQ3VycmVudCBsb2dsZXZlbCBvciBwYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuICAgKi9cblx0XHR0aGlzLmxvZ2xldmVsID0gZnVuY3Rpb24gKG5ld0xvZ2xldmVsKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gZ2V0XG5cdFx0XHRcdHJldHVybiBfb3B0aW9ucy5sb2dsZXZlbDtcblx0XHRcdH0gZWxzZSBpZiAoX29wdGlvbnMubG9nbGV2ZWwgIT0gbmV3TG9nbGV2ZWwpIHtcblx0XHRcdFx0Ly8gc2V0XG5cdFx0XHRcdF9vcHRpb25zLmxvZ2xldmVsID0gbmV3TG9nbGV2ZWw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcblx0XHR9O1xuXG5cdFx0LyoqXHJcbiAgICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBjdXJyZW50IGVuYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2xsZXIuICBcclxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc2FibGUgYWxsIFNjZW5lcyBjb25uZWN0ZWQgdG8gdGhlIGNvbnRyb2xsZXIgd2l0aG91dCBkZXN0cm95aW5nIG9yIHJlbW92aW5nIHRoZW0uXHJcbiAgICogQHB1YmxpY1xyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgKiB2YXIgZW5hYmxlZCA9IGNvbnRyb2xsZXIuZW5hYmxlZCgpO1xyXG4gICAqXHJcbiAgICogLy8gZGlzYWJsZSB0aGUgY29udHJvbGxlclxyXG4gICAqIGNvbnRyb2xsZXIuZW5hYmxlZChmYWxzZSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdTdGF0ZV0gLSBUaGUgbmV3IGVuYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2xsZXIgYHRydWVgIG9yIGBmYWxzZWAuXHJcbiAgICogQHJldHVybnMgeyhib29sZWFufENvbnRyb2xsZXIpfSBDdXJyZW50IGVuYWJsZWQgc3RhdGUgb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcbiAgICovXG5cdFx0dGhpcy5lbmFibGVkID0gZnVuY3Rpb24gKG5ld1N0YXRlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gZ2V0XG5cdFx0XHRcdHJldHVybiBfZW5hYmxlZDtcblx0XHRcdH0gZWxzZSBpZiAoX2VuYWJsZWQgIT0gbmV3U3RhdGUpIHtcblx0XHRcdFx0Ly8gc2V0XG5cdFx0XHRcdF9lbmFibGVkID0gISFuZXdTdGF0ZTtcblx0XHRcdFx0Q29udHJvbGxlci51cGRhdGVTY2VuZShfc2NlbmVPYmplY3RzLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBEZXN0cm95IHRoZSBDb250cm9sbGVyLCBhbGwgU2NlbmVzIGFuZCBldmVyeXRoaW5nLlxyXG4gICAqIEBwdWJsaWNcclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLy8gd2l0aG91dCByZXNldHRpbmcgdGhlIHNjZW5lc1xyXG4gICAqIGNvbnRyb2xsZXIgPSBjb250cm9sbGVyLmRlc3Ryb3koKTtcclxuICAgKlxyXG4gICAqIC8vIHdpdGggc2NlbmUgcmVzZXRcclxuICAgKiBjb250cm9sbGVyID0gY29udHJvbGxlci5kZXN0cm95KHRydWUpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVzZXRTY2VuZXM9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSBwaW5zIGFuZCB0d2VlbnMgKGlmIGV4aXN0ZW50KSBvZiBhbGwgc2NlbmVzIHdpbGwgYmUgcmVzZXQuXHJcbiAgICogQHJldHVybnMge251bGx9IE51bGwgdG8gdW5zZXQgaGFuZGxlciB2YXJpYWJsZXMuXHJcbiAgICovXG5cdFx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKHJlc2V0U2NlbmVzKSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KF9yZWZyZXNoVGltZW91dCk7XG5cdFx0XHR2YXIgaSA9IF9zY2VuZU9iamVjdHMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHRfc2NlbmVPYmplY3RzW2ldLmRlc3Ryb3kocmVzZXRTY2VuZXMpO1xuXHRcdFx0fVxuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25DaGFuZ2UpO1xuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25DaGFuZ2UpO1xuXHRcdFx0X3V0aWwuY0FGKF91cGRhdGVUaW1lb3V0KTtcblx0XHRcdGxvZygzLCBcImRlc3Ryb3llZCBcIiArIE5BTUVTUEFDRSArIFwiIChyZXNldDogXCIgKyAocmVzZXRTY2VuZXMgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9O1xuXG5cdFx0Ly8gSU5JVFxuXHRcdGNvbnN0cnVjdCgpO1xuXHRcdHJldHVybiBDb250cm9sbGVyO1xuXHR9O1xuXG5cdC8vIHN0b3JlIHBhZ2V3aWRlIGNvbnRyb2xsZXIgb3B0aW9uc1xuXHR2YXIgQ09OVFJPTExFUl9PUFRJT05TID0ge1xuXHRcdGRlZmF1bHRzOiB7XG5cdFx0XHRjb250YWluZXI6IHdpbmRvdyxcblx0XHRcdHZlcnRpY2FsOiB0cnVlLFxuXHRcdFx0Z2xvYmFsU2NlbmVPcHRpb25zOiB7fSxcblx0XHRcdGxvZ2xldmVsOiAyLFxuXHRcdFx0cmVmcmVzaEludGVydmFsOiAxMDBcblx0XHR9XG5cdH07XG5cdC8qXHJcbiAgKiBtZXRob2QgdXNlZCB0byBhZGQgYW4gb3B0aW9uIHRvIFNjcm9sbE1hZ2ljIFNjZW5lcy5cclxuICAqL1xuXHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLmFkZE9wdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUpIHtcblx0XHRDT05UUk9MTEVSX09QVElPTlMuZGVmYXVsdHNbbmFtZV0gPSBkZWZhdWx0VmFsdWU7XG5cdH07XG5cdC8vIGluc3RhbmNlIGV4dGVuc2lvbiBmdW5jdGlvbiBmb3IgcGx1Z2luc1xuXHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbnNpb24pIHtcblx0XHR2YXIgb2xkQ2xhc3MgPSB0aGlzO1xuXHRcdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRvbGRDbGFzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0dGhpcy4kc3VwZXIgPSBfdXRpbC5leHRlbmQoe30sIHRoaXMpOyAvLyBjb3B5IHBhcmVudCBzdGF0ZVxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG5cdFx0fTtcblx0XHRfdXRpbC5leHRlbmQoU2Nyb2xsTWFnaWMuQ29udHJvbGxlciwgb2xkQ2xhc3MpOyAvLyBjb3B5IHByb3BlcnRpZXNcblx0XHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLnByb3RvdHlwZSA9IG9sZENsYXNzLnByb3RvdHlwZTsgLy8gY29weSBwcm90b3R5cGVcblx0XHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXI7IC8vIHJlc3RvcmUgY29uc3RydWN0b3Jcblx0fTtcblxuXHQvKipcclxuICAqIEEgU2NlbmUgZGVmaW5lcyB3aGVyZSB0aGUgY29udHJvbGxlciBzaG91bGQgcmVhY3QgYW5kIGhvdy5cclxuICAqXHJcbiAgKiBAY2xhc3NcclxuICAqXHJcbiAgKiBAZXhhbXBsZVxyXG4gICogLy8gY3JlYXRlIGEgc3RhbmRhcmQgc2NlbmUgYW5kIGFkZCBpdCB0byBhIGNvbnRyb2xsZXJcclxuICAqIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSgpXHJcbiAgKlx0XHQuYWRkVG8oY29udHJvbGxlcik7XHJcbiAgKlxyXG4gICogLy8gY3JlYXRlIGEgc2NlbmUgd2l0aCBjdXN0b20gb3B0aW9ucyBhbmQgYXNzaWduIGEgaGFuZGxlciB0byBpdC5cclxuICAqIHZhciBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcbiAgKiBcdFx0ZHVyYXRpb246IDEwMCxcclxuICAqXHRcdG9mZnNldDogMjAwLFxyXG4gICpcdFx0dHJpZ2dlckhvb2s6IFwib25FbnRlclwiLFxyXG4gICpcdFx0cmV2ZXJzZTogZmFsc2VcclxuICAqIH0pO1xyXG4gICpcclxuICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIGZvciB0aGUgU2NlbmUuIFRoZSBvcHRpb25zIGNhbiBiZSB1cGRhdGVkIGF0IGFueSB0aW1lLiAgXHJcbiAgXHRcdFx0XHRcdFx0XHQgICBJbnN0ZWFkIG9mIHNldHRpbmcgdGhlIG9wdGlvbnMgZm9yIGVhY2ggc2NlbmUgaW5kaXZpZHVhbGx5IHlvdSBjYW4gYWxzbyBzZXQgdGhlbSBnbG9iYWxseSBpbiB0aGUgY29udHJvbGxlciBhcyB0aGUgY29udHJvbGxlcnMgYGdsb2JhbFNjZW5lT3B0aW9uc2Agb3B0aW9uLiBUaGUgb2JqZWN0IGFjY2VwdHMgdGhlIHNhbWUgcHJvcGVydGllcyBhcyB0aGUgb25lcyBiZWxvdy4gIFxyXG4gIFx0XHRcdFx0XHRcdFx0ICAgV2hlbiBhIHNjZW5lIGlzIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyIHRoZSBvcHRpb25zIGRlZmluZWQgdXNpbmcgdGhlIFNjZW5lIGNvbnN0cnVjdG9yIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYnkgdGhvc2Ugc2V0IGluIGBnbG9iYWxTY2VuZU9wdGlvbnNgLlxyXG4gICogQHBhcmFtIHsobnVtYmVyfHN0cmluZ3xmdW5jdGlvbil9IFtvcHRpb25zLmR1cmF0aW9uPTBdIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZS4gXHJcbiAgXHRcdFx0XHRcdFBsZWFzZSBzZWUgYFNjZW5lLmR1cmF0aW9uKClgIGZvciBkZXRhaWxzLlxyXG4gICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm9mZnNldD0wXSAtIE9mZnNldCBWYWx1ZSBmb3IgdGhlIFRyaWdnZXIgUG9zaXRpb24uIElmIG5vIHRyaWdnZXJFbGVtZW50IGlzIGRlZmluZWQgdGhpcyB3aWxsIGJlIHRoZSBzY3JvbGwgZGlzdGFuY2UgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIHBhZ2UsIGFmdGVyIHdoaWNoIHRoZSBzY2VuZSB3aWxsIHN0YXJ0LlxyXG4gICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IFtvcHRpb25zLnRyaWdnZXJFbGVtZW50PW51bGxdIC0gU2VsZWN0b3Igb3IgRE9NIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHN0YXJ0IG9mIHRoZSBzY2VuZS4gSWYgdW5kZWZpbmVkIHRoZSBzY2VuZSB3aWxsIHN0YXJ0IHJpZ2h0IGF0IHRoZSBzdGFydCBvZiB0aGUgcGFnZSAodW5sZXNzIGFuIG9mZnNldCBpcyBzZXQpLlxyXG4gICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IFtvcHRpb25zLnRyaWdnZXJIb29rPVwib25DZW50ZXJcIl0gLSBDYW4gYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGRlZmluaW5nIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlciBIb29rIGluIHJlbGF0aW9uIHRvIHRoZSB2aWV3cG9ydC4gIFxyXG4gIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgQ2FuIGFsc28gYmUgZGVmaW5lZCB1c2luZyBhIHN0cmluZzpcclxuICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGBcIm9uRW50ZXJcImAgPT4gYDFgXHJcbiAgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgXCJvbkNlbnRlclwiYCA9PiBgMC41YFxyXG4gIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYFwib25MZWF2ZVwiYCA9PiBgMGBcclxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmV2ZXJzZT10cnVlXSAtIFNob3VsZCB0aGUgc2NlbmUgcmV2ZXJzZSwgd2hlbiBzY3JvbGxpbmcgdXA/XHJcbiAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubG9nbGV2ZWw9Ml0gLSBMb2dsZXZlbCBmb3IgZGVidWdnaW5nLiBOb3RlIHRoYXQgbG9nZ2luZyBpcyBkaXNhYmxlZCBpbiB0aGUgbWluaWZpZWQgdmVyc2lvbiBvZiBTY3JvbGxNYWdpYy5cclxuICBcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYDBgID0+IHNpbGVudFxyXG4gIFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgMWAgPT4gZXJyb3JzXHJcbiAgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAyYCA9PiBlcnJvcnMsIHdhcm5pbmdzXHJcbiAgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAzYCA9PiBlcnJvcnMsIHdhcm5pbmdzLCBkZWJ1Z2luZm9cclxuICAqIFxyXG4gICovXG5cdFNjcm9sbE1hZ2ljLlNjZW5lID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuXHRcdC8qXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIHNldHRpbmdzXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG5cdFx0dmFyIE5BTUVTUEFDRSA9ICdTY3JvbGxNYWdpYy5TY2VuZScsXG5cdFx0ICAgIFNDRU5FX1NUQVRFX0JFRk9SRSA9ICdCRUZPUkUnLFxuXHRcdCAgICBTQ0VORV9TVEFURV9EVVJJTkcgPSAnRFVSSU5HJyxcblx0XHQgICAgU0NFTkVfU1RBVEVfQUZURVIgPSAnQUZURVInLFxuXHRcdCAgICBERUZBVUxUX09QVElPTlMgPSBTQ0VORV9PUFRJT05TLmRlZmF1bHRzO1xuXG5cdFx0LypcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogcHJpdmF0ZSB2YXJzXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG5cdFx0dmFyIFNjZW5lID0gdGhpcyxcblx0XHQgICAgX29wdGlvbnMgPSBfdXRpbC5leHRlbmQoe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyksXG5cdFx0ICAgIF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0JFRk9SRSxcblx0XHQgICAgX3Byb2dyZXNzID0gMCxcblx0XHQgICAgX3Njcm9sbE9mZnNldCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZW5kOiAwXG5cdFx0fSxcblx0XHQgICAgLy8gcmVmbGVjdHMgdGhlIGNvbnRyb2xsZXJzJ3Mgc2Nyb2xsIHBvc2l0aW9uIGZvciB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc2NlbmUgcmVzcGVjdGl2ZWx5XG5cdFx0X3RyaWdnZXJQb3MgPSAwLFxuXHRcdCAgICBfZW5hYmxlZCA9IHRydWUsXG5cdFx0ICAgIF9kdXJhdGlvblVwZGF0ZU1ldGhvZCxcblx0XHQgICAgX2NvbnRyb2xsZXI7XG5cblx0XHQvKipcclxuICAgKiBJbnRlcm5hbCBjb25zdHJ1Y3RvciBmdW5jdGlvbiBvZiB0aGUgU2Nyb2xsTWFnaWMgU2NlbmVcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xuXHRcdHZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiBjb25zdHJ1Y3QoKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gX29wdGlvbnMpIHtcblx0XHRcdFx0Ly8gY2hlY2sgc3VwcGxpZWQgb3B0aW9uc1xuXHRcdFx0XHRpZiAoIURFRkFVTFRfT1BUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogVW5rbm93biBvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xuXHRcdFx0XHRcdGRlbGV0ZSBfb3B0aW9uc1trZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBhZGQgZ2V0dGVycy9zZXR0ZXJzIGZvciBhbGwgcG9zc2libGUgb3B0aW9uc1xuXHRcdFx0Zm9yICh2YXIgb3B0aW9uTmFtZSBpbiBERUZBVUxUX09QVElPTlMpIHtcblx0XHRcdFx0YWRkU2NlbmVPcHRpb24ob3B0aW9uTmFtZSk7XG5cdFx0XHR9XG5cdFx0XHQvLyB2YWxpZGF0ZSBhbGwgb3B0aW9uc1xuXHRcdFx0dmFsaWRhdGVPcHRpb24oKTtcblx0XHR9O1xuXG5cdFx0LypcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogRXZlbnQgTWFuYWdlbWVudFxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuXHRcdHZhciBfbGlzdGVuZXJzID0ge307XG5cdFx0LyoqXHJcbiAgICogU2NlbmUgc3RhcnQgZXZlbnQuICBcclxuICAgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2Nyb2xsIHBvc2l0aW9uIGl0cyB0aGUgc3RhcnRpbmcgcG9pbnQgb2YgdGhlIHNjZW5lLiAgXHJcbiAgICogSXQgd2lsbCBhbHNvIGZpcmUgd2hlbiBzY3JvbGxpbmcgYmFjayB1cCBnb2luZyBvdmVyIHRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgc2NlbmUuIElmIHlvdSB3YW50IHNvbWV0aGluZyB0byBoYXBwZW4gb25seSB3aGVuIHNjcm9sbGluZyBkb3duL3JpZ2h0LCB1c2UgdGhlIHNjcm9sbERpcmVjdGlvbiBwYXJhbWV0ZXIgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuICAgKlxyXG4gICAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcbiAgICpcclxuICAgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjc3RhcnRcclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogc2NlbmUub24oXCJzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgKiBcdGNvbnNvbGUubG9nKFwiSGl0IHN0YXJ0IHBvaW50IG9mIHNjZW5lLlwiKTtcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG4gICAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSBgXCJCRUZPUkVcImAgb3IgYFwiRFVSSU5HXCJgXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG4gICAqL1xuXHRcdC8qKlxyXG4gICAqIFNjZW5lIGVuZCBldmVudC4gIFxyXG4gICAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY3JvbGwgcG9zaXRpb24gaXRzIHRoZSBlbmRpbmcgcG9pbnQgb2YgdGhlIHNjZW5lLiAgXHJcbiAgICogSXQgd2lsbCBhbHNvIGZpcmUgd2hlbiBzY3JvbGxpbmcgYmFjayB1cCBmcm9tIGFmdGVyIHRoZSBzY2VuZSBhbmQgZ29pbmcgb3ZlciBpdHMgZW5kIHBvc2l0aW9uLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgdG8gaGFwcGVuIG9ubHkgd2hlbiBzY3JvbGxpbmcgZG93bi9yaWdodCwgdXNlIHRoZSBzY3JvbGxEaXJlY3Rpb24gcGFyYW1ldGVyIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcbiAgICpcclxuICAgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxyXG4gICAqXHJcbiAgICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2VuZFxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBzY2VuZS5vbihcImVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgKiBcdGNvbnNvbGUubG9nKFwiSGl0IGVuZCBwb2ludCBvZiBzY2VuZS5cIik7XHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuICAgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiRFVSSU5HXCJgIG9yIGBcIkFGVEVSXCJgXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG4gICAqL1xuXHRcdC8qKlxyXG4gICAqIFNjZW5lIGVudGVyIGV2ZW50LiAgXHJcbiAgICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjZW5lIGVudGVycyB0aGUgXCJEVVJJTkdcIiBzdGF0ZS4gIFxyXG4gICAqIEtlZXAgaW4gbWluZCB0aGF0IGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHRoZSBzY2VuZSBwbGF5cyBmb3J3YXJkIG9yIGJhY2t3YXJkOiBUaGlzIGV2ZW50IGFsd2F5cyBmaXJlcyB3aGVuIHRoZSBzY2VuZSBlbnRlcnMgaXRzIGFjdGl2ZSBzY3JvbGwgdGltZWZyYW1lLCByZWdhcmRsZXNzIG9mIHRoZSBzY3JvbGwtZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuICAgKlxyXG4gICAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNlbnRlclxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBzY2VuZS5vbihcImVudGVyXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBlbnRlcmVkLlwiKTtcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG4gICAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSAtIGFsd2F5cyBgXCJEVVJJTkdcImBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXHJcbiAgICovXG5cdFx0LyoqXHJcbiAgICogU2NlbmUgbGVhdmUgZXZlbnQuICBcclxuICAgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2NlbmUncyBzdGF0ZSBnb2VzIGZyb20gXCJEVVJJTkdcIiB0byBlaXRoZXIgXCJCRUZPUkVcIiBvciBcIkFGVEVSXCIuICBcclxuICAgKiBLZWVwIGluIG1pbmQgdGhhdCBpdCBkb2Vzbid0IG1hdHRlciBpZiB0aGUgc2NlbmUgcGxheXMgZm9yd2FyZCBvciBiYWNrd2FyZDogVGhpcyBldmVudCBhbHdheXMgZmlyZXMgd2hlbiB0aGUgc2NlbmUgbGVhdmVzIGl0cyBhY3RpdmUgc2Nyb2xsIHRpbWVmcmFtZSwgcmVnYXJkbGVzcyBvZiB0aGUgc2Nyb2xsLWRpcmVjdGlvbi5cclxuICAgKlxyXG4gICAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcbiAgICpcclxuICAgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjbGVhdmVcclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogc2NlbmUub24oXCJsZWF2ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgbGVmdC5cIik7XHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuICAgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiQkVGT1JFXCJgIG9yIGBcIkFGVEVSXCJgXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG4gICAqL1xuXHRcdC8qKlxyXG4gICAqIFNjZW5lIHVwZGF0ZSBldmVudC4gIFxyXG4gICAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY2VuZSBpcyB1cGRhdGVkIChidXQgbm90IG5lY2Vzc2FyaWx5IGNoYW5nZXMgdGhlIHByb2dyZXNzKS5cclxuICAgKlxyXG4gICAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSN1cGRhdGVcclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogc2NlbmUub24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIHVwZGF0ZWQuXCIpO1xyXG4gICAqIH0pO1xyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcbiAgICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnN0YXJ0UG9zIC0gVGhlIHN0YXJ0aW5nIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSAoaW4gcmVsYXRpb24gdG8gdGhlIGNvbmFpbmVyKVxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5lbmRQb3MgLSBUaGUgZW5kaW5nIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSAoaW4gcmVsYXRpb24gdG8gdGhlIGNvbmFpbmVyKVxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5zY3JvbGxQb3MgLSBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lclxyXG4gICAqL1xuXHRcdC8qKlxyXG4gICAqIFNjZW5lIHByb2dyZXNzIGV2ZW50LiAgXHJcbiAgICogRmlyZXMgd2hlbmV2ZXIgdGhlIHByb2dyZXNzIG9mIHRoZSBzY2VuZSBjaGFuZ2VzLlxyXG4gICAqXHJcbiAgICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuICAgKlxyXG4gICAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNwcm9ncmVzc1xyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBzY2VuZS5vbihcInByb2dyZXNzXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBwcm9ncmVzcyBjaGFuZ2VkIHRvIFwiICsgZXZlbnQucHJvZ3Jlc3MpO1xyXG4gICAqIH0pO1xyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcbiAgICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkJFRk9SRVwiYCwgYFwiRFVSSU5HXCJgIG9yIGBcIkFGVEVSXCJgXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG4gICAqL1xuXHRcdC8qKlxyXG4gICAqIFNjZW5lIGNoYW5nZSBldmVudC4gIFxyXG4gICAqIEZpcmVzIHdoZW52ZXZlciBhIHByb3BlcnR5IG9mIHRoZSBzY2VuZSBpcyBjaGFuZ2VkLlxyXG4gICAqXHJcbiAgICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2NoYW5nZVxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBzY2VuZS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgUHJvcGVydHkgXFxcIlwiICsgZXZlbnQud2hhdCArIFwiXFxcIiBjaGFuZ2VkIHRvIFwiICsgZXZlbnQubmV3dmFsKTtcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG4gICAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC53aGF0IC0gSW5kaWNhdGVzIHdoYXQgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxyXG4gICAqIEBwcm9wZXJ0eSB7bWl4ZWR9IGV2ZW50Lm5ld3ZhbCAtIFRoZSBuZXcgdmFsdWUgb2YgdGhlIGNoYW5nZWQgcHJvcGVydHlcclxuICAgKi9cblx0XHQvKipcclxuICAgKiBTY2VuZSBzaGlmdCBldmVudC4gIFxyXG4gICAqIEZpcmVzIHdoZW52ZXZlciB0aGUgc3RhcnQgb3IgZW5kICoqc2Nyb2xsIG9mZnNldCoqIG9mIHRoZSBzY2VuZSBjaGFuZ2UuXHJcbiAgICogVGhpcyBoYXBwZW5zIGV4cGxpY2l0ZWx5LCB3aGVuIG9uZSBvZiB0aGVzZSB2YWx1ZXMgY2hhbmdlOiBgb2Zmc2V0YCwgYGR1cmF0aW9uYCBvciBgdHJpZ2dlckhvb2tgLlxyXG4gICAqIEl0IHdpbGwgZmlyZSBpbXBsaWNpdGx5IHdoZW4gdGhlIGB0cmlnZ2VyRWxlbWVudGAgY2hhbmdlcywgaWYgdGhlIG5ldyBlbGVtZW50IGhhcyBhIGRpZmZlcmVudCBwb3NpdGlvbiAobW9zdCBjYXNlcykuXHJcbiAgICogSXQgd2lsbCBhbHNvIGZpcmUgaW1wbGljaXRseSB3aGVuIHRoZSBzaXplIG9mIHRoZSBjb250YWluZXIgY2hhbmdlcyBhbmQgdGhlIHRyaWdnZXJIb29rIGlzIGFueXRoaW5nIG90aGVyIHRoYW4gYG9uTGVhdmVgLlxyXG4gICAqXHJcbiAgICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3NoaWZ0XHJcbiAgICogQHNpbmNlIDEuMS4wXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIHNjZW5lLm9uKFwic2hpZnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIG1vdmVkLCBiZWNhdXNlIHRoZSBcIiArIGV2ZW50LnJlYXNvbiArIFwiIGhhcyBjaGFuZ2VkLilcIik7XHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuICAgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQucmVhc29uIC0gSW5kaWNhdGVzIHdoeSB0aGUgc2NlbmUgaGFzIHNoaWZ0ZWRcclxuICAgKi9cblx0XHQvKipcclxuICAgKiBTY2VuZSBkZXN0cm95IGV2ZW50LiAgXHJcbiAgICogRmlyZXMgd2hlbnZldmVyIHRoZSBzY2VuZSBpcyBkZXN0cm95ZWQuXHJcbiAgICogVGhpcyBjYW4gYmUgdXNlZCB0byB0aWR5IHVwIGN1c3RvbSBiZWhhdmlvdXIgdXNlZCBpbiBldmVudHMuXHJcbiAgICpcclxuICAgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjZGVzdHJveVxyXG4gICAqIEBzaW5jZSAxLjEuMFxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBzY2VuZS5vbihcImVudGVyXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAqICAgICAgICAvLyBhZGQgY3VzdG9tIGFjdGlvblxyXG4gICAqICAgICAgICAkKFwiI215LWVsZW1cIikubGVmdChcIjIwMFwiKTtcclxuICAgKiAgICAgIH0pXHJcbiAgICogICAgICAub24oXCJkZXN0cm95XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAqICAgICAgICAvLyByZXNldCBteSBlbGVtZW50IHRvIHN0YXJ0IHBvc2l0aW9uXHJcbiAgICogICAgICAgIGlmIChldmVudC5yZXNldCkge1xyXG4gICAqICAgICAgICAgICQoXCIjbXktZWxlbVwiKS5sZWZ0KFwiMFwiKTtcclxuICAgKiAgICAgICAgfVxyXG4gICAqICAgICAgfSk7XHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuICAgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGV2ZW50LnJlc2V0IC0gSW5kaWNhdGVzIGlmIHRoZSBkZXN0cm95IG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggcmVzZXQgYHRydWVgIG9yIGBmYWxzZWAuXHJcbiAgICovXG5cdFx0LyoqXHJcbiAgICogU2NlbmUgYWRkIGV2ZW50LiAgXHJcbiAgICogRmlyZXMgd2hlbiB0aGUgc2NlbmUgaXMgYWRkZWQgdG8gYSBjb250cm9sbGVyLlxyXG4gICAqIFRoaXMgaXMgbW9zdGx5IHVzZWQgYnkgcGx1Z2lucyB0byBrbm93IHRoYXQgY2hhbmdlIG1pZ2h0IGJlIGR1ZS5cclxuICAgKlxyXG4gICAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNhZGRcclxuICAgKiBAc2luY2UgMi4wLjBcclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogc2NlbmUub24oXCJhZGRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICogXHRjb25zb2xlLmxvZygnU2NlbmUgd2FzIGFkZGVkIHRvIGEgbmV3IGNvbnRyb2xsZXIuJyk7XHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuICAgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGV2ZW50LmNvbnRyb2xsZXIgLSBUaGUgY29udHJvbGxlciBvYmplY3QgdGhlIHNjZW5lIHdhcyBhZGRlZCB0by5cclxuICAgKi9cblx0XHQvKipcclxuICAgKiBTY2VuZSByZW1vdmUgZXZlbnQuICBcclxuICAgKiBGaXJlcyB3aGVuIHRoZSBzY2VuZSBpcyByZW1vdmVkIGZyb20gYSBjb250cm9sbGVyLlxyXG4gICAqIFRoaXMgaXMgbW9zdGx5IHVzZWQgYnkgcGx1Z2lucyB0byBrbm93IHRoYXQgY2hhbmdlIG1pZ2h0IGJlIGR1ZS5cclxuICAgKlxyXG4gICAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNyZW1vdmVcclxuICAgKiBAc2luY2UgMi4wLjBcclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogc2NlbmUub24oXCJyZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICogXHRjb25zb2xlLmxvZygnU2NlbmUgd2FzIHJlbW92ZWQgZnJvbSBpdHMgY29udHJvbGxlci4nKTtcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG4gICAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG4gICAqL1xuXG5cdFx0LyoqXHJcbiAgICogQWRkIG9uZSBvcmUgbW9yZSBldmVudCBsaXN0ZW5lci4gIFxyXG4gICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkIGF0IHRoZSByZXNwZWN0aXZlIGV2ZW50LCBhbmQgYW4gb2JqZWN0IGNvbnRhaW5pbmcgcmVsZXZhbnQgZGF0YSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcbiAgICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNvblxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBmdW5jdGlvbiBjYWxsYmFjayAoZXZlbnQpIHtcclxuICAgKiBcdFx0Y29uc29sZS5sb2coXCJFdmVudCBmaXJlZCEgKFwiICsgZXZlbnQudHlwZSArIFwiKVwiKTtcclxuICAgKiB9XHJcbiAgICogLy8gYWRkIGxpc3RlbmVyc1xyXG4gICAqIHNjZW5lLm9uKFwiY2hhbmdlIHVwZGF0ZSBwcm9ncmVzcyBzdGFydCBlbmQgZW50ZXIgbGVhdmVcIiwgY2FsbGJhY2spO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzIC0gVGhlIG5hbWUgb3IgbmFtZXMgb2YgdGhlIGV2ZW50IHRoZSBjYWxsYmFjayBzaG91bGQgYmUgYXR0YWNoZWQgdG8uXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGV4ZWN1dGVkLCB3aGVuIHRoZSBldmVudCBpcyBkaXNwYXRjaGVkLiBBbiBldmVudCBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG4gICAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcbiAgICovXG5cdFx0dGhpcy5vbiA9IGZ1bmN0aW9uIChuYW1lcywgY2FsbGJhY2spIHtcblx0XHRcdGlmIChfdXRpbC50eXBlLkZ1bmN0aW9uKGNhbGxiYWNrKSkge1xuXHRcdFx0XHRuYW1lcyA9IG5hbWVzLnRyaW0oKS5zcGxpdCgnICcpO1xuXHRcdFx0XHRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmdWxsbmFtZSkge1xuXHRcdFx0XHRcdHZhciBuYW1lcGFydHMgPSBmdWxsbmFtZS5zcGxpdCgnLicpLFxuXHRcdFx0XHRcdCAgICBldmVudG5hbWUgPSBuYW1lcGFydHNbMF0sXG5cdFx0XHRcdFx0ICAgIG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXTtcblx0XHRcdFx0XHRpZiAoZXZlbnRuYW1lICE9IFwiKlwiKSB7XG5cdFx0XHRcdFx0XHQvLyBkaXNhbGxvdyB3aWxkY2FyZHNcblx0XHRcdFx0XHRcdGlmICghX2xpc3RlbmVyc1tldmVudG5hbWVdKSB7XG5cdFx0XHRcdFx0XHRcdF9saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IFtdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0X2xpc3RlbmVyc1tldmVudG5hbWVdLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRuYW1lc3BhY2U6IG5hbWVzcGFjZSB8fCAnJyxcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKDEsIFwiRVJST1Igd2hlbiBjYWxsaW5nICcub24oKSc6IFN1cHBsaWVkIGNhbGxiYWNrIGZvciAnXCIgKyBuYW1lcyArIFwiJyBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbiFcIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIFJlbW92ZSBvbmUgb3IgbW9yZSBldmVudCBsaXN0ZW5lci5cclxuICAgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI29mZlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBmdW5jdGlvbiBjYWxsYmFjayAoZXZlbnQpIHtcclxuICAgKiBcdFx0Y29uc29sZS5sb2coXCJFdmVudCBmaXJlZCEgKFwiICsgZXZlbnQudHlwZSArIFwiKVwiKTtcclxuICAgKiB9XHJcbiAgICogLy8gYWRkIGxpc3RlbmVyc1xyXG4gICAqIHNjZW5lLm9uKFwiY2hhbmdlIHVwZGF0ZVwiLCBjYWxsYmFjayk7XHJcbiAgICogLy8gcmVtb3ZlIGxpc3RlbmVyc1xyXG4gICAqIHNjZW5lLm9mZihcImNoYW5nZSB1cGRhdGVcIiwgY2FsbGJhY2spO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzIC0gVGhlIG5hbWUgb3IgbmFtZXMgb2YgdGhlIGV2ZW50IHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgc3BlY2lmaWMgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgcmVtb3ZlZC4gSWYgbm9uZSBpcyBwYXNzZWQgYWxsIGNhbGxiYWNrcyB0byB0aGUgZXZlbnQgbGlzdGVuZXIgd2lsbCBiZSByZW1vdmVkLlxyXG4gICAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcbiAgICovXG5cdFx0dGhpcy5vZmYgPSBmdW5jdGlvbiAobmFtZXMsIGNhbGxiYWNrKSB7XG5cdFx0XHRpZiAoIW5hbWVzKSB7XG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBJbnZhbGlkIGV2ZW50IG5hbWUgc3VwcGxpZWQuXCIpO1xuXHRcdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0XHR9XG5cdFx0XHRuYW1lcyA9IG5hbWVzLnRyaW0oKS5zcGxpdCgnICcpO1xuXHRcdFx0bmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnVsbG5hbWUsIGtleSkge1xuXHRcdFx0XHR2YXIgbmFtZXBhcnRzID0gZnVsbG5hbWUuc3BsaXQoJy4nKSxcblx0XHRcdFx0ICAgIGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcblx0XHRcdFx0ICAgIG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXSB8fCAnJyxcblx0XHRcdFx0ICAgIHJlbW92ZUxpc3QgPSBldmVudG5hbWUgPT09ICcqJyA/IE9iamVjdC5rZXlzKF9saXN0ZW5lcnMpIDogW2V2ZW50bmFtZV07XG5cdFx0XHRcdHJlbW92ZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAocmVtb3ZlKSB7XG5cdFx0XHRcdFx0dmFyIGxpc3QgPSBfbGlzdGVuZXJzW3JlbW92ZV0gfHwgW10sXG5cdFx0XHRcdFx0ICAgIGkgPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdFx0XHR2YXIgbGlzdGVuZXIgPSBsaXN0W2ldO1xuXHRcdFx0XHRcdFx0aWYgKGxpc3RlbmVyICYmIChuYW1lc3BhY2UgPT09IGxpc3RlbmVyLm5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09ICcqJykgJiYgKCFjYWxsYmFjayB8fCBjYWxsYmFjayA9PSBsaXN0ZW5lci5jYWxsYmFjaykpIHtcblx0XHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghbGlzdC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGRlbGV0ZSBfbGlzdGVuZXJzW3JlbW92ZV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBUcmlnZ2VyIGFuIGV2ZW50LlxyXG4gICAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjdHJpZ2dlclxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiB0aGlzLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0aGF0IHNob3VsZCBiZSB0cmlnZ2VyZWQuXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IFt2YXJzXSAtIEFuIG9iamVjdCBjb250YWluaW5nIGluZm8gdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuICAgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xuXHRcdHRoaXMudHJpZ2dlciA9IGZ1bmN0aW9uIChuYW1lLCB2YXJzKSB7XG5cdFx0XHRpZiAobmFtZSkge1xuXHRcdFx0XHR2YXIgbmFtZXBhcnRzID0gbmFtZS50cmltKCkuc3BsaXQoJy4nKSxcblx0XHRcdFx0ICAgIGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcblx0XHRcdFx0ICAgIG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXSxcblx0XHRcdFx0ICAgIGxpc3RlbmVycyA9IF9saXN0ZW5lcnNbZXZlbnRuYW1lXTtcblx0XHRcdFx0bG9nKDMsICdldmVudCBmaXJlZDonLCBldmVudG5hbWUsIHZhcnMgPyBcIi0+XCIgOiAnJywgdmFycyB8fCAnJyk7XG5cdFx0XHRcdGlmIChsaXN0ZW5lcnMpIHtcblx0XHRcdFx0XHRsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIsIGtleSkge1xuXHRcdFx0XHRcdFx0aWYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSBsaXN0ZW5lci5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suY2FsbChTY2VuZSwgbmV3IFNjcm9sbE1hZ2ljLkV2ZW50KGV2ZW50bmFtZSwgbGlzdGVuZXIubmFtZXNwYWNlLCBTY2VuZSwgdmFycykpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogSW52YWxpZCBldmVudCBuYW1lIHN1cHBsaWVkLlwiKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IGV2ZW50IGxpc3RlbmVyc1xuXHRcdFNjZW5lLm9uKFwiY2hhbmdlLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRpZiAoZS53aGF0ICE9PSBcImxvZ2xldmVsXCIgJiYgZS53aGF0ICE9PSBcInR3ZWVuQ2hhbmdlc1wiKSB7XG5cdFx0XHRcdC8vIG5vIG5lZWQgZm9yIGEgc2NlbmUgdXBkYXRlIHNjZW5lIHdpdGggdGhlc2Ugb3B0aW9ucy4uLlxuXHRcdFx0XHRpZiAoZS53aGF0ID09PSBcInRyaWdnZXJFbGVtZW50XCIpIHtcblx0XHRcdFx0XHR1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZS53aGF0ID09PSBcInJldmVyc2VcIikge1xuXHRcdFx0XHRcdC8vIHRoZSBvbmx5IHByb3BlcnR5IGxlZnQgdGhhdCBtYXkgaGF2ZSBhbiBpbXBhY3Qgb24gdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUuIEV2ZXJ5dGhpbmcgZWxzZSBpcyBoYW5kbGVkIGJ5IHRoZSBzaGlmdCBldmVudC5cblx0XHRcdFx0XHRTY2VuZS51cGRhdGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pLm9uKFwic2hpZnQuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdHVwZGF0ZVNjcm9sbE9mZnNldCgpO1xuXHRcdFx0U2NlbmUudXBkYXRlKCk7IC8vIHVwZGF0ZSBzY2VuZSB0byByZWZsZWN0IG5ldyBwb3NpdGlvblxuXHRcdH0pO1xuXG5cdFx0LyoqXHJcbiAgICogU2VuZCBhIGRlYnVnIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBidXQgcHJvdmlkZWQgcHVibGljbHkgd2l0aCBfbG9nIGZvciBwbHVnaW5zXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9nbGV2ZWwgLSBUaGUgbG9nbGV2ZWwgcmVxdWlyZWQgdG8gaW5pdGlhdGUgb3V0cHV0IGZvciB0aGUgbWVzc2FnZS5cclxuICAgKiBAcGFyYW0gey4uLm1peGVkfSBvdXRwdXQgLSBPbmUgb3IgbW9yZSB2YXJpYWJsZXMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBjb25zb2xlLlxyXG4gICAqL1xuXHRcdHZhciBsb2cgPSB0aGlzLl9sb2cgPSBmdW5jdGlvbiAobG9nbGV2ZWwsIG91dHB1dCkge1xuXHRcdFx0aWYgKF9vcHRpb25zLmxvZ2xldmVsID49IGxvZ2xldmVsKSB7XG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEsIDAsIFwiKFwiICsgTkFNRVNQQUNFICsgXCIpIC0+XCIpO1xuXHRcdFx0XHRfdXRpbC5sb2cuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBBZGQgdGhlIHNjZW5lIHRvIGEgY29udHJvbGxlci4gIFxyXG4gICAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYENvbnRyb2xsZXIuYWRkU2NlbmUoc2NlbmUpYC5cclxuICAgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2FkZFRvXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIGFkZCBhIHNjZW5lIHRvIGEgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclxyXG4gICAqIHNjZW5lLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTY3JvbGxNYWdpYy5Db250cm9sbGVyfSBjb250cm9sbGVyIC0gVGhlIGNvbnRyb2xsZXIgdG8gd2hpY2ggdGhlIHNjZW5lIHNob3VsZCBiZSBhZGRlZC5cclxuICAgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xuXHRcdHRoaXMuYWRkVG8gPSBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuXHRcdFx0aWYgKCEoY29udHJvbGxlciBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIpKSB7XG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBzdXBwbGllZCBhcmd1bWVudCBvZiAnYWRkVG8oKScgaXMgbm90IGEgdmFsaWQgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclwiKTtcblx0XHRcdH0gZWxzZSBpZiAoX2NvbnRyb2xsZXIgIT0gY29udHJvbGxlcikge1xuXHRcdFx0XHQvLyBuZXcgY29udHJvbGxlclxuXHRcdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHtcblx0XHRcdFx0XHQvLyB3YXMgYXNzb2NpYXRlZCB0byBhIGRpZmZlcmVudCBjb250cm9sbGVyIGJlZm9yZSwgc28gcmVtb3ZlIGl0Li4uXG5cdFx0XHRcdFx0X2NvbnRyb2xsZXIucmVtb3ZlU2NlbmUoU2NlbmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9jb250cm9sbGVyID0gY29udHJvbGxlcjtcblx0XHRcdFx0dmFsaWRhdGVPcHRpb24oKTtcblx0XHRcdFx0dXBkYXRlRHVyYXRpb24odHJ1ZSk7XG5cdFx0XHRcdHVwZGF0ZVRyaWdnZXJFbGVtZW50UG9zaXRpb24odHJ1ZSk7XG5cdFx0XHRcdHVwZGF0ZVNjcm9sbE9mZnNldCgpO1xuXHRcdFx0XHRfY29udHJvbGxlci5pbmZvKFwiY29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ29udGFpbmVyUmVzaXplKTtcblx0XHRcdFx0Y29udHJvbGxlci5hZGRTY2VuZShTY2VuZSk7XG5cdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJhZGRcIiwge1xuXHRcdFx0XHRcdGNvbnRyb2xsZXI6IF9jb250cm9sbGVyXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsb2coMywgXCJhZGRlZCBcIiArIE5BTUVTUEFDRSArIFwiIHRvIGNvbnRyb2xsZXJcIik7XG5cdFx0XHRcdFNjZW5lLnVwZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgc2NlbmUuICBcclxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc2FibGUgdGhpcyBzY2VuZSB3aXRob3V0IHJlbW92aW5nIG9yIGRlc3Ryb3lpbmcgaXQuXHJcbiAgICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNlbmFibGVkXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAqIHZhciBlbmFibGVkID0gc2NlbmUuZW5hYmxlZCgpO1xyXG4gICAqXHJcbiAgICogLy8gZGlzYWJsZSB0aGUgc2NlbmVcclxuICAgKiBzY2VuZS5lbmFibGVkKGZhbHNlKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1N0YXRlXSAtIFRoZSBuZXcgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgc2NlbmUgYHRydWVgIG9yIGBmYWxzZWAuXHJcbiAgICogQHJldHVybnMgeyhib29sZWFufFNjZW5lKX0gQ3VycmVudCBlbmFibGVkIHN0YXRlIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZ1bmN0aW9uIChuZXdTdGF0ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIGdldFxuXHRcdFx0XHRyZXR1cm4gX2VuYWJsZWQ7XG5cdFx0XHR9IGVsc2UgaWYgKF9lbmFibGVkICE9IG5ld1N0YXRlKSB7XG5cdFx0XHRcdC8vIHNldFxuXHRcdFx0XHRfZW5hYmxlZCA9ICEhbmV3U3RhdGU7XG5cdFx0XHRcdFNjZW5lLnVwZGF0ZSh0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0LyoqXHJcbiAgICogUmVtb3ZlIHRoZSBzY2VuZSBmcm9tIHRoZSBjb250cm9sbGVyLiAgXHJcbiAgICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgQ29udHJvbGxlci5yZW1vdmVTY2VuZShzY2VuZSlgLlxyXG4gICAqIFRoZSBzY2VuZSB3aWxsIG5vdCBiZSB1cGRhdGVkIGFueW1vcmUgdW50aWwgeW91IHJlYWRkIGl0IHRvIGEgY29udHJvbGxlci5cclxuICAgKiBUbyByZW1vdmUgdGhlIHBpbiBvciB0aGUgdHdlZW4geW91IG5lZWQgdG8gY2FsbCByZW1vdmVUd2VlbigpIG9yIHJlbW92ZVBpbigpIHJlc3BlY3RpdmVseS5cclxuICAgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZVxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLy8gcmVtb3ZlIHRoZSBzY2VuZSBmcm9tIGl0cyBjb250cm9sbGVyXHJcbiAgICogc2NlbmUucmVtb3ZlKCk7XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xuXHRcdHRoaXMucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKF9jb250cm9sbGVyKSB7XG5cdFx0XHRcdF9jb250cm9sbGVyLmluZm8oXCJjb250YWluZXJcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25Db250YWluZXJSZXNpemUpO1xuXHRcdFx0XHR2YXIgdG1wUGFyZW50ID0gX2NvbnRyb2xsZXI7XG5cdFx0XHRcdF9jb250cm9sbGVyID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR0bXBQYXJlbnQucmVtb3ZlU2NlbmUoU2NlbmUpO1xuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwicmVtb3ZlXCIpO1xuXHRcdFx0XHRsb2coMywgXCJyZW1vdmVkIFwiICsgTkFNRVNQQUNFICsgXCIgZnJvbSBjb250cm9sbGVyXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBEZXN0cm95IHRoZSBzY2VuZSBhbmQgZXZlcnl0aGluZy5cclxuICAgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2Rlc3Ryb3lcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIGRlc3Ryb3kgdGhlIHNjZW5lIHdpdGhvdXQgcmVzZXR0aW5nIHRoZSBwaW4gYW5kIHR3ZWVuIHRvIHRoZWlyIGluaXRpYWwgcG9zaXRpb25zXHJcbiAgICogc2NlbmUgPSBzY2VuZS5kZXN0cm95KCk7XHJcbiAgICpcclxuICAgKiAvLyBkZXN0cm95IHRoZSBzY2VuZSBhbmQgcmVzZXQgdGhlIHBpbiBhbmQgdHdlZW5cclxuICAgKiBzY2VuZSA9IHNjZW5lLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNldD1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHBpbiBhbmQgdHdlZW4gKGlmIGV4aXN0ZW50KSB3aWxsIGJlIHJlc2V0LlxyXG4gICAqIEByZXR1cm5zIHtudWxsfSBOdWxsIHRvIHVuc2V0IGhhbmRsZXIgdmFyaWFibGVzLlxyXG4gICAqL1xuXHRcdHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uIChyZXNldCkge1xuXHRcdFx0U2NlbmUudHJpZ2dlcihcImRlc3Ryb3lcIiwge1xuXHRcdFx0XHRyZXNldDogcmVzZXRcblx0XHRcdH0pO1xuXHRcdFx0U2NlbmUucmVtb3ZlKCk7XG5cdFx0XHRTY2VuZS5vZmYoXCIqLipcIik7XG5cdFx0XHRsb2coMywgXCJkZXN0cm95ZWQgXCIgKyBOQU1FU1BBQ0UgKyBcIiAocmVzZXQ6IFwiICsgKHJlc2V0ID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpICsgXCIpXCIpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIFNjZW5lIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgc3RhdGUuICBcclxuICAgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBDb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCBpbW1lZGlhdGVseSlgLiAgXHJcbiAgICogVGhlIHVwZGF0ZSBtZXRob2QgY2FsY3VsYXRlcyB0aGUgc2NlbmUncyBzdGFydCBhbmQgZW5kIHBvc2l0aW9uIChiYXNlZCBvbiB0aGUgdHJpZ2dlciBlbGVtZW50LCB0cmlnZ2VyIGhvb2ssIGR1cmF0aW9uIGFuZCBvZmZzZXQpIGFuZCBjaGVja3MgaXQgYWdhaW5zdCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lci4gIFxyXG4gICAqIEl0IHRoZW4gdXBkYXRlcyB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZSBhY2NvcmRpbmdseSAob3IgZG9lcyBub3RoaW5nLCBpZiB0aGUgc3RhdGUgaXMgYWxyZWFkeSBjb3JyZWN0KSDigJMgUGlucyB3aWxsIGJlIHNldCB0byB0aGVpciBjb3JyZWN0IHBvc2l0aW9uIGFuZCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkIHRvIHRoZWlyIGNvcnJlY3QgcHJvZ3Jlc3MuXHJcbiAgICogVGhpcyBtZWFucyBhbiB1cGRhdGUgZG9lc24ndCBuZWNlc3NhcmlseSByZXN1bHQgaW4gYSBwcm9ncmVzcyBjaGFuZ2UuIFRoZSBgcHJvZ3Jlc3NgIGV2ZW50IHdpbGwgYmUgZmlyZWQgaWYgdGhlIHByb2dyZXNzIGhhcyBpbmRlZWQgY2hhbmdlZCBiZXR3ZWVuIHRoaXMgdXBkYXRlIGFuZCB0aGUgbGFzdC4gIFxyXG4gICAqIF8qKk5PVEU6KiogVGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQgY29uc3RhbnRseSB3aGVuZXZlciBTY3JvbGxNYWdpYyBkZXRlY3RzIGEgY2hhbmdlLiBUaGUgb25seSBhcHBsaWNhdGlvbiBmb3IgeW91IGlzIGlmIHlvdSBjaGFuZ2Ugc29tZXRoaW5nIG91dHNpZGUgb2YgdGhlIHJlYWxtIG9mIFNjcm9sbE1hZ2ljLCBsaWtlIG1vdmluZyB0aGUgdHJpZ2dlciBvciBjaGFuZ2luZyB0d2VlbiBwYXJhbWV0ZXJzLl9cclxuICAgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3VwZGF0ZVxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLy8gdXBkYXRlIHRoZSBzY2VuZSBvbiBuZXh0IHRpY2tcclxuICAgKiBzY2VuZS51cGRhdGUoKTtcclxuICAgKlxyXG4gICAqIC8vIHVwZGF0ZSB0aGUgc2NlbmUgaW1tZWRpYXRlbHlcclxuICAgKiBzY2VuZS51cGRhdGUodHJ1ZSk7XHJcbiAgICpcclxuICAgKiBAZmlyZXMgU2NlbmUudXBkYXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW1lZGlhdGVseT1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHVwZGF0ZSB3aWxsIGJlIGluc3RhbnQsIGlmIGBmYWxzZWAgaXQgd2lsbCB3YWl0IHVudGlsIG5leHQgdXBkYXRlIGN5Y2xlIChiZXR0ZXIgcGVyZm9ybWFuY2UpLlxyXG4gICAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcbiAgICovXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaW1tZWRpYXRlbHkpIHtcblx0XHRcdGlmIChfY29udHJvbGxlcikge1xuXHRcdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcblx0XHRcdFx0XHRpZiAoX2NvbnRyb2xsZXIuZW5hYmxlZCgpICYmIF9lbmFibGVkKSB7XG5cdFx0XHRcdFx0XHR2YXIgc2Nyb2xsUG9zID0gX2NvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSxcblx0XHRcdFx0XHRcdCAgICBuZXdQcm9ncmVzcztcblxuXHRcdFx0XHRcdFx0aWYgKF9vcHRpb25zLmR1cmF0aW9uID4gMCkge1xuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcyA9IChzY3JvbGxQb3MgLSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0KSAvIChfc2Nyb2xsT2Zmc2V0LmVuZCAtIF9zY3JvbGxPZmZzZXQuc3RhcnQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bmV3UHJvZ3Jlc3MgPSBzY3JvbGxQb3MgPj0gX3Njcm9sbE9mZnNldC5zdGFydCA/IDEgOiAwO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwidXBkYXRlXCIsIHtcblx0XHRcdFx0XHRcdFx0c3RhcnRQb3M6IF9zY3JvbGxPZmZzZXQuc3RhcnQsXG5cdFx0XHRcdFx0XHRcdGVuZFBvczogX3Njcm9sbE9mZnNldC5lbmQsXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFBvczogc2Nyb2xsUG9zXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0U2NlbmUucHJvZ3Jlc3MobmV3UHJvZ3Jlc3MpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX3BpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykge1xuXHRcdFx0XHRcdFx0dXBkYXRlUGluU3RhdGUodHJ1ZSk7IC8vIHVucGluIGluIHBvc2l0aW9uXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9jb250cm9sbGVyLnVwZGF0ZVNjZW5lKFNjZW5lLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0LyoqXHJcbiAgICogVXBkYXRlcyBkeW5hbWljIHNjZW5lIHZhcmlhYmxlcyBsaWtlIHRoZSB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb24gb3IgdGhlIGR1cmF0aW9uLlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGluIHJlZ3VsYXIgaW50ZXJ2YWxzIGZyb20gdGhlIGNvbnRyb2xsZXIuIFNlZSB7QGxpbmsgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcn0gb3B0aW9uIGByZWZyZXNoSW50ZXJ2YWxgLlxyXG4gICAqIFxyXG4gICAqIFlvdSBjYW4gY2FsbCBpdCB0byBtaW5pbWl6ZSBsYWcsIGZvciBleGFtcGxlIHdoZW4geW91IGludGVudGlvbmFsbHkgY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlckVsZW1lbnQuXHJcbiAgICogSWYgeW91IGRvbid0IGl0IHdpbGwgc2ltcGx5IGJlIHVwZGF0ZWQgaW4gdGhlIG5leHQgcmVmcmVzaCBpbnRlcnZhbCBvZiB0aGUgY29udGFpbmVyLCB3aGljaCBpcyB1c3VhbGx5IHN1ZmZpY2llbnQuXHJcbiAgICpcclxuICAgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlZnJlc2hcclxuICAgKiBAc2luY2UgMS4xLjBcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHt0cmlnZ2VyRWxlbWVudDogXCIjdHJpZ2dlclwifSk7XHJcbiAgICogXHJcbiAgICogLy8gY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlclxyXG4gICAqICQoXCIjdHJpZ2dlclwiKS5jc3MoXCJ0b3BcIiwgNTAwKTtcclxuICAgKiAvLyBpbW1lZGlhdGVseSBsZXQgdGhlIHNjZW5lIGtub3cgb2YgdGhpcyBjaGFuZ2VcclxuICAgKiBzY2VuZS5yZWZyZXNoKCk7XHJcbiAgICpcclxuICAgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiBvciB0aGUgZHVyYXRpb24gY2hhbmdlZFxyXG4gICAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcbiAgICovXG5cdFx0dGhpcy5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dXBkYXRlRHVyYXRpb24oKTtcblx0XHRcdHVwZGF0ZVRyaWdnZXJFbGVtZW50UG9zaXRpb24oKTtcblx0XHRcdC8vIHVwZGF0ZSB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb25cblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0LyoqXHJcbiAgICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBzY2VuZSdzIHByb2dyZXNzLiAgXHJcbiAgICogVXN1YWxseSBpdCBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5IHRvIHVzZSB0aGlzIGFzIGEgc2V0dGVyLCBhcyBpdCBpcyBzZXQgYXV0b21hdGljYWxseSBieSBzY2VuZS51cGRhdGUoKS4gIFxyXG4gICAqIFRoZSBvcmRlciBpbiB3aGljaCB0aGUgZXZlbnRzIGFyZSBmaXJlZCBkZXBlbmRzIG9uIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmU6XHJcbiAgICogIDEuIFNjZW5lcyB3aXRoIGBkdXJhdGlvbiA9PSAwYDogIFxyXG4gICAqICBTY2VuZXMgdGhhdCBoYXZlIG5vIGR1cmF0aW9uIGJ5IGRlZmluaXRpb24gaGF2ZSBubyBlbmRpbmcuIFRodXMgdGhlIGBlbmRgIGV2ZW50IHdpbGwgbmV2ZXIgYmUgZmlyZWQuICBcclxuICAgKiAgV2hlbiB0aGUgdHJpZ2dlciBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgaXMgcGFzc2VkIHRoZSBldmVudHMgYXJlIGFsd2F5cyBmaXJlZCBpbiB0aGlzIG9yZGVyOiAgXHJcbiAgICogIGBlbnRlcmAsIGBzdGFydGAsIGBwcm9ncmVzc2Agd2hlbiBzY3JvbGxpbmcgZm9yd2FyZCAgXHJcbiAgICogIGFuZCAgXHJcbiAgICogIGBwcm9ncmVzc2AsIGBzdGFydGAsIGBsZWF2ZWAgd2hlbiBzY3JvbGxpbmcgaW4gcmV2ZXJzZVxyXG4gICAqICAyLiBTY2VuZXMgd2l0aCBgZHVyYXRpb24gPiAwYDogIFxyXG4gICAqICBTY2VuZXMgd2l0aCBhIHNldCBkdXJhdGlvbiBoYXZlIGEgZGVmaW5lZCBzdGFydCBhbmQgZW5kIHBvaW50LiAgXHJcbiAgICogIFdoZW4gc2Nyb2xsaW5nIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZSBpdCB3aWxsIGZpcmUgdGhlc2UgZXZlbnRzIGluIHRoaXMgb3JkZXI6ICBcclxuICAgKiAgYGVudGVyYCwgYHN0YXJ0YCwgYHByb2dyZXNzYCAgXHJcbiAgICogIFdoZW4gY29udGludWluZyB0byBzY3JvbGwgYW5kIHBhc3NpbmcgdGhlIGVuZCBwb2ludCBpdCB3aWxsIGZpcmUgdGhlc2UgZXZlbnRzOiAgXHJcbiAgICogIGBwcm9ncmVzc2AsIGBlbmRgLCBgbGVhdmVgICBcclxuICAgKiAgV2hlbiByZXZlcnNpbmcgdGhyb3VnaCB0aGUgZW5kIHBvaW50IHRoZXNlIGV2ZW50cyBhcmUgZmlyZWQ6ICBcclxuICAgKiAgYGVudGVyYCwgYGVuZGAsIGBwcm9ncmVzc2AgIFxyXG4gICAqICBBbmQgd2hlbiBjb250aW51aW5nIHRvIHNjcm9sbCBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbiBpbiByZXZlcnNlIGl0IHdpbGwgZmlyZTogIFxyXG4gICAqICBgcHJvZ3Jlc3NgLCBgc3RhcnRgLCBgbGVhdmVgICBcclxuICAgKiAgSW4gYmV0d2VlbiBzdGFydCBhbmQgZW5kIHRoZSBgcHJvZ3Jlc3NgIGV2ZW50IHdpbGwgYmUgY2FsbGVkIGNvbnN0YW50bHksIHdoZW5ldmVyIHRoZSBwcm9ncmVzcyBjaGFuZ2VzLlxyXG4gICAqIFxyXG4gICAqIEluIHNob3J0OiAgXHJcbiAgICogYGVudGVyYCBldmVudHMgd2lsbCBhbHdheXMgdHJpZ2dlciAqKmJlZm9yZSoqIHRoZSBwcm9ncmVzcyB1cGRhdGUgYW5kIGBsZWF2ZWAgZW52ZW50cyB3aWxsIHRyaWdnZXIgKiphZnRlcioqIHRoZSBwcm9ncmVzcyB1cGRhdGUuICBcclxuICAgKiBgc3RhcnRgIGFuZCBgZW5kYCB3aWxsIGFsd2F5cyB0cmlnZ2VyIGF0IHRoZWlyIHJlc3BlY3RpdmUgcG9zaXRpb24uXHJcbiAgICogXHJcbiAgICogUGxlYXNlIHJldmlldyB0aGUgZXZlbnQgZGVzY3JpcHRpb25zIGZvciBkZXRhaWxzIG9uIHRoZSBldmVudHMgYW5kIHRoZSBldmVudCBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG4gICAqIFxyXG4gICAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcHJvZ3Jlc3NcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIGdldCB0aGUgY3VycmVudCBzY2VuZSBwcm9ncmVzc1xyXG4gICAqIHZhciBwcm9ncmVzcyA9IHNjZW5lLnByb2dyZXNzKCk7XHJcbiAgICpcclxuICAgKiAvLyBzZXQgbmV3IHNjZW5lIHByb2dyZXNzXHJcbiAgICogc2NlbmUucHJvZ3Jlc3MoMC4zKTtcclxuICAgKlxyXG4gICAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuZW50ZXJ9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcbiAgICogQGZpcmVzIHtAbGluayBTY2VuZS5zdGFydH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuICAgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnByb2dyZXNzfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG4gICAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuZW5kfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG4gICAqIEBmaXJlcyB7QGxpbmsgU2NlbmUubGVhdmV9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW3Byb2dyZXNzXSAtIFRoZSBuZXcgcHJvZ3Jlc3MgdmFsdWUgb2YgdGhlIHNjZW5lIGBbMC0xXWAuXHJcbiAgICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBzY2VuZSBwcm9ncmVzcy5cclxuICAgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xuXHRcdHRoaXMucHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHQvLyBnZXRcblx0XHRcdFx0cmV0dXJuIF9wcm9ncmVzcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHNldFxuXHRcdFx0XHR2YXIgZG9VcGRhdGUgPSBmYWxzZSxcblx0XHRcdFx0ICAgIG9sZFN0YXRlID0gX3N0YXRlLFxuXHRcdFx0XHQgICAgc2Nyb2xsRGlyZWN0aW9uID0gX2NvbnRyb2xsZXIgPyBfY29udHJvbGxlci5pbmZvKFwic2Nyb2xsRGlyZWN0aW9uXCIpIDogJ1BBVVNFRCcsXG5cdFx0XHRcdCAgICByZXZlcnNlT3JGb3J3YXJkID0gX29wdGlvbnMucmV2ZXJzZSB8fCBwcm9ncmVzcyA+PSBfcHJvZ3Jlc3M7XG5cdFx0XHRcdGlmIChfb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCkge1xuXHRcdFx0XHRcdC8vIHplcm8gZHVyYXRpb24gc2NlbmVzXG5cdFx0XHRcdFx0ZG9VcGRhdGUgPSBfcHJvZ3Jlc3MgIT0gcHJvZ3Jlc3M7XG5cdFx0XHRcdFx0X3Byb2dyZXNzID0gcHJvZ3Jlc3MgPCAxICYmIHJldmVyc2VPckZvcndhcmQgPyAwIDogMTtcblx0XHRcdFx0XHRfc3RhdGUgPSBfcHJvZ3Jlc3MgPT09IDAgPyBTQ0VORV9TVEFURV9CRUZPUkUgOiBTQ0VORV9TVEFURV9EVVJJTkc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gc2NlbmVzIHdpdGggc3RhcnQgYW5kIGVuZFxuXHRcdFx0XHRcdGlmIChwcm9ncmVzcyA8IDAgJiYgX3N0YXRlICE9PSBTQ0VORV9TVEFURV9CRUZPUkUgJiYgcmV2ZXJzZU9yRm9yd2FyZCkge1xuXHRcdFx0XHRcdFx0Ly8gZ28gYmFjayB0byBpbml0aWFsIHN0YXRlXG5cdFx0XHRcdFx0XHRfcHJvZ3Jlc3MgPSAwO1xuXHRcdFx0XHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfQkVGT1JFO1xuXHRcdFx0XHRcdFx0ZG9VcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJvZ3Jlc3MgPj0gMCAmJiBwcm9ncmVzcyA8IDEgJiYgcmV2ZXJzZU9yRm9yd2FyZCkge1xuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gcHJvZ3Jlc3M7XG5cdFx0XHRcdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9EVVJJTkc7XG5cdFx0XHRcdFx0XHRkb1VwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA+PSAxICYmIF9zdGF0ZSAhPT0gU0NFTkVfU1RBVEVfQUZURVIpIHtcblx0XHRcdFx0XHRcdF9wcm9ncmVzcyA9IDE7XG5cdFx0XHRcdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9BRlRFUjtcblx0XHRcdFx0XHRcdGRvVXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICFyZXZlcnNlT3JGb3J3YXJkKSB7XG5cdFx0XHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSgpOyAvLyBpbiBjYXNlIHdlIHNjcm9sbGVkIGJhY2t3YXJkcyBtaWQtc2NlbmUgYW5kIHJldmVyc2UgaXMgZGlzYWJsZWQgPT4gdXBkYXRlIHRoZSBwaW4gcG9zaXRpb24sIHNvIGl0IGRvZXNuJ3QgbW92ZSBiYWNrIGFzIHdlbGwuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkb1VwZGF0ZSkge1xuXHRcdFx0XHRcdC8vIGZpcmUgZXZlbnRzXG5cdFx0XHRcdFx0dmFyIGV2ZW50VmFycyA9IHtcblx0XHRcdFx0XHRcdHByb2dyZXNzOiBfcHJvZ3Jlc3MsXG5cdFx0XHRcdFx0XHRzdGF0ZTogX3N0YXRlLFxuXHRcdFx0XHRcdFx0c2Nyb2xsRGlyZWN0aW9uOiBzY3JvbGxEaXJlY3Rpb25cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCAgICBzdGF0ZUNoYW5nZWQgPSBfc3RhdGUgIT0gb2xkU3RhdGU7XG5cblx0XHRcdFx0XHR2YXIgdHJpZ2dlciA9IGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnROYW1lKSB7XG5cdFx0XHRcdFx0XHQvLyB0bXAgaGVscGVyIHRvIHNpbXBsaWZ5IGNvZGVcblx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoZXZlbnROYW1lLCBldmVudFZhcnMpO1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRpZiAoc3RhdGVDaGFuZ2VkKSB7XG5cdFx0XHRcdFx0XHQvLyBlbnRlciBldmVudHNcblx0XHRcdFx0XHRcdGlmIChvbGRTdGF0ZSAhPT0gU0NFTkVfU1RBVEVfRFVSSU5HKSB7XG5cdFx0XHRcdFx0XHRcdHRyaWdnZXIoXCJlbnRlclwiKTtcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihvbGRTdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFID8gXCJzdGFydFwiIDogXCJlbmRcIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRyaWdnZXIoXCJwcm9ncmVzc1wiKTtcblx0XHRcdFx0XHRpZiAoc3RhdGVDaGFuZ2VkKSB7XG5cdFx0XHRcdFx0XHQvLyBsZWF2ZSBldmVudHNcblx0XHRcdFx0XHRcdGlmIChfc3RhdGUgIT09IFNDRU5FX1NUQVRFX0RVUklORykge1xuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFID8gXCJzdGFydFwiIDogXCJlbmRcIik7XG5cdFx0XHRcdFx0XHRcdHRyaWdnZXIoXCJsZWF2ZVwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgc3RhcnQgYW5kIGVuZCBzY3JvbGxPZmZzZXQgb2YgdGhlIGNvbnRhaW5lci5cclxuICAgKiBUaGUgcG9zaXRpb25zIHJlZmxlY3Qgd2hhdCB0aGUgY29udHJvbGxlcidzIHNjcm9sbCBwb3NpdGlvbiB3aWxsIGJlIGF0IHRoZSBzdGFydCBhbmQgZW5kIHJlc3BlY3RpdmVseS5cclxuICAgKiBJcyBjYWxsZWQsIHdoZW46XHJcbiAgICogICAtIFNjZW5lIGV2ZW50IFwiY2hhbmdlXCIgaXMgY2FsbGVkIHdpdGg6IG9mZnNldCwgdHJpZ2dlckhvb2ssIGR1cmF0aW9uIFxyXG4gICAqICAgLSBzY3JvbGwgY29udGFpbmVyIGV2ZW50IFwicmVzaXplXCIgaXMgY2FsbGVkXHJcbiAgICogICAtIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlckVsZW1lbnQgY2hhbmdlc1xyXG4gICAqICAgLSB0aGUgY29udHJvbGxlciBjaGFuZ2VzIC0+IGFkZFRvKClcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xuXHRcdHZhciB1cGRhdGVTY3JvbGxPZmZzZXQgPSBmdW5jdGlvbiB1cGRhdGVTY3JvbGxPZmZzZXQoKSB7XG5cdFx0XHRfc2Nyb2xsT2Zmc2V0ID0ge1xuXHRcdFx0XHRzdGFydDogX3RyaWdnZXJQb3MgKyBfb3B0aW9ucy5vZmZzZXRcblx0XHRcdH07XG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX29wdGlvbnMudHJpZ2dlckVsZW1lbnQpIHtcblx0XHRcdFx0Ly8gdGFrZSBhd2F5IHRyaWdnZXJIb29rIHBvcnRpb24gdG8gZ2V0IHJlbGF0aXZlIHRvIHRvcFxuXHRcdFx0XHRfc2Nyb2xsT2Zmc2V0LnN0YXJ0IC09IF9jb250cm9sbGVyLmluZm8oXCJzaXplXCIpICogX29wdGlvbnMudHJpZ2dlckhvb2s7XG5cdFx0XHR9XG5cdFx0XHRfc2Nyb2xsT2Zmc2V0LmVuZCA9IF9zY3JvbGxPZmZzZXQuc3RhcnQgKyBfb3B0aW9ucy5kdXJhdGlvbjtcblx0XHR9O1xuXG5cdFx0LyoqXHJcbiAgICogVXBkYXRlcyB0aGUgZHVyYXRpb24gaWYgc2V0IHRvIGEgZHluYW1pYyBmdW5jdGlvbi5cclxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgYWRkZWQgdG8gYSBjb250cm9sbGVyIGFuZCBpbiByZWd1bGFyIGludGVydmFscyBmcm9tIHRoZSBjb250cm9sbGVyIHRocm91Z2ggc2NlbmUucmVmcmVzaCgpLlxyXG4gICAqIFxyXG4gICAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcclxuICAgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N1cHByZXNzRXZlbnRzPWZhbHNlXSAtIElmIHRydWUgdGhlIHNoaWZ0IGV2ZW50IHdpbGwgYmUgc3VwcHJlc3NlZC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xuXHRcdHZhciB1cGRhdGVEdXJhdGlvbiA9IGZ1bmN0aW9uIHVwZGF0ZUR1cmF0aW9uKHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHQvLyB1cGRhdGUgZHVyYXRpb25cblx0XHRcdGlmIChfZHVyYXRpb25VcGRhdGVNZXRob2QpIHtcblx0XHRcdFx0dmFyIHZhcm5hbWUgPSBcImR1cmF0aW9uXCI7XG5cdFx0XHRcdGlmIChjaGFuZ2VPcHRpb24odmFybmFtZSwgX2R1cmF0aW9uVXBkYXRlTWV0aG9kLmNhbGwoU2NlbmUpKSAmJiAhc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdFx0XHQvLyBzZXRcblx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwiY2hhbmdlXCIsIHtcblx0XHRcdFx0XHRcdHdoYXQ6IHZhcm5hbWUsXG5cdFx0XHRcdFx0XHRuZXd2YWw6IF9vcHRpb25zW3Zhcm5hbWVdXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcblx0XHRcdFx0XHRcdHJlYXNvbjogdmFybmFtZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyRWxlbWVudCwgaWYgcHJlc2VudC5cclxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgLi4uXHJcbiAgICogIC0gLi4uIHdoZW4gdGhlIHRyaWdnZXJFbGVtZW50IGlzIGNoYW5nZWRcclxuICAgKiAgLSAuLi4gd2hlbiB0aGUgc2NlbmUgaXMgYWRkZWQgdG8gYSAobmV3KSBjb250cm9sbGVyXHJcbiAgICogIC0gLi4uIGluIHJlZ3VsYXIgaW50ZXJ2YWxzIGZyb20gdGhlIGNvbnRyb2xsZXIgdGhyb3VnaCBzY2VuZS5yZWZyZXNoKCkuXHJcbiAgICogXHJcbiAgICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIGlmIHRoZSBwb3NpdGlvbiBjaGFuZ2VkXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdXBwcmVzc0V2ZW50cz1mYWxzZV0gLSBJZiB0cnVlIHRoZSBzaGlmdCBldmVudCB3aWxsIGJlIHN1cHByZXNzZWQuXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cblx0XHR2YXIgdXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIHVwZGF0ZVRyaWdnZXJFbGVtZW50UG9zaXRpb24oc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdHZhciBlbGVtZW50UG9zID0gMCxcblx0XHRcdCAgICB0ZWxlbSA9IF9vcHRpb25zLnRyaWdnZXJFbGVtZW50O1xuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmICh0ZWxlbSB8fCBfdHJpZ2dlclBvcyA+IDApKSB7XG5cdFx0XHRcdC8vIGVpdGhlciBhbiBlbGVtZW50IGV4aXN0cyBvciB3YXMgcmVtb3ZlZCBhbmQgdGhlIHRyaWdnZXJQb3MgaXMgc3RpbGwgPiAwXG5cdFx0XHRcdGlmICh0ZWxlbSkge1xuXHRcdFx0XHRcdC8vIHRoZXJlIGN1cnJlbnRseSBhIHRyaWdnZXJFbGVtZW50IHNldFxuXHRcdFx0XHRcdGlmICh0ZWxlbS5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdFx0XHQvLyBjaGVjayBpZiBlbGVtZW50IGlzIHN0aWxsIGF0dGFjaGVkIHRvIERPTVxuXHRcdFx0XHRcdFx0dmFyIGNvbnRyb2xsZXJJbmZvID0gX2NvbnRyb2xsZXIuaW5mbygpLFxuXHRcdFx0XHRcdFx0ICAgIGNvbnRhaW5lck9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQoY29udHJvbGxlckluZm8uY29udGFpbmVyKSxcblx0XHRcdFx0XHRcdCAgICAvLyBjb250YWluZXIgcG9zaXRpb24gaXMgbmVlZGVkIGJlY2F1c2UgZWxlbWVudCBvZmZzZXQgaXMgcmV0dXJuZWQgaW4gcmVsYXRpb24gdG8gZG9jdW1lbnQsIG5vdCBpbiByZWxhdGlvbiB0byBjb250YWluZXIuXG5cdFx0XHRcdFx0XHRwYXJhbSA9IGNvbnRyb2xsZXJJbmZvLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiOyAvLyB3aGljaCBwYXJhbSBpcyBvZiBpbnRlcmVzdCA/XG5cblx0XHRcdFx0XHRcdC8vIGlmIHBhcmVudCBpcyBzcGFjZXIsIHVzZSBzcGFjZXIgcG9zaXRpb24gaW5zdGVhZCBzbyBjb3JyZWN0IHN0YXJ0IHBvc2l0aW9uIGlzIHJldHVybmVkIGZvciBwaW5uZWQgZWxlbWVudHMuXG5cdFx0XHRcdFx0XHR3aGlsZSAodGVsZW0ucGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUpKSB7XG5cdFx0XHRcdFx0XHRcdHRlbGVtID0gdGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dmFyIGVsZW1lbnRPZmZzZXQgPSBfdXRpbC5nZXQub2Zmc2V0KHRlbGVtKTtcblxuXHRcdFx0XHRcdFx0aWYgKCFjb250cm9sbGVySW5mby5pc0RvY3VtZW50KSB7XG5cdFx0XHRcdFx0XHRcdC8vIGNvbnRhaW5lciBpcyBub3QgdGhlIGRvY3VtZW50IHJvb3QsIHNvIHN1YnN0cmFjdCBzY3JvbGwgUG9zaXRpb24gdG8gZ2V0IGNvcnJlY3QgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHNjcm9sbGNvbnRlbnRcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyT2Zmc2V0W3BhcmFtXSAtPSBfY29udHJvbGxlci5zY3JvbGxQb3MoKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZWxlbWVudFBvcyA9IGVsZW1lbnRPZmZzZXRbcGFyYW1dIC0gY29udGFpbmVyT2Zmc2V0W3BhcmFtXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gdGhlcmUgd2FzIGFuIGVsZW1lbnQsIGJ1dCBpdCB3YXMgcmVtb3ZlZCBmcm9tIERPTVxuXHRcdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogdHJpZ2dlckVsZW1lbnQgd2FzIHJlbW92ZWQgZnJvbSBET00gYW5kIHdpbGwgYmUgcmVzZXQgdG9cIiwgdW5kZWZpbmVkKTtcblx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXJFbGVtZW50KHVuZGVmaW5lZCk7IC8vIHVuc2V0LCBzbyBhIGNoYW5nZSBldmVudCBpcyB0cmlnZ2VyZWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgY2hhbmdlZCA9IGVsZW1lbnRQb3MgIT0gX3RyaWdnZXJQb3M7XG5cdFx0XHRcdF90cmlnZ2VyUG9zID0gZWxlbWVudFBvcztcblx0XHRcdFx0aWYgKGNoYW5nZWQgJiYgIXN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcblx0XHRcdFx0XHRcdHJlYXNvbjogXCJ0cmlnZ2VyRWxlbWVudFBvc2l0aW9uXCJcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBUcmlnZ2VyIGEgc2hpZnQgZXZlbnQsIHdoZW4gdGhlIGNvbnRhaW5lciBpcyByZXNpemVkIGFuZCB0aGUgdHJpZ2dlckhvb2sgaXMgPiAxLlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXG5cdFx0dmFyIG9uQ29udGFpbmVyUmVzaXplID0gZnVuY3Rpb24gb25Db250YWluZXJSZXNpemUoZSkge1xuXHRcdFx0aWYgKF9vcHRpb25zLnRyaWdnZXJIb29rID4gMCkge1xuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwic2hpZnRcIiwge1xuXHRcdFx0XHRcdHJlYXNvbjogXCJjb250YWluZXJSZXNpemVcIlxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIF92YWxpZGF0ZSA9IF91dGlsLmV4dGVuZChTQ0VORV9PUFRJT05TLnZhbGlkYXRlLCB7XG5cdFx0XHQvLyB2YWxpZGF0aW9uIGZvciBkdXJhdGlvbiBoYW5kbGVkIGludGVybmFsbHkgZm9yIHJlZmVyZW5jZSB0byBwcml2YXRlIHZhciBfZHVyYXRpb25NZXRob2Rcblx0XHRcdGR1cmF0aW9uOiBmdW5jdGlvbiBkdXJhdGlvbih2YWwpIHtcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuU3RyaW5nKHZhbCkgJiYgdmFsLm1hdGNoKC9eKFxcLnxcXGQpKlxcZCslJC8pKSB7XG5cdFx0XHRcdFx0Ly8gcGVyY2VudGFnZSB2YWx1ZVxuXHRcdFx0XHRcdHZhciBwZXJjID0gcGFyc2VGbG9hdCh2YWwpIC8gMTAwO1xuXHRcdFx0XHRcdHZhbCA9IGZ1bmN0aW9uIHZhbCgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfY29udHJvbGxlciA/IF9jb250cm9sbGVyLmluZm8oXCJzaXplXCIpICogcGVyYyA6IDA7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5GdW5jdGlvbih2YWwpKSB7XG5cdFx0XHRcdFx0Ly8gZnVuY3Rpb25cblx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB2YWw7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQoX2R1cmF0aW9uVXBkYXRlTWV0aG9kLmNhbGwoU2NlbmUpKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHR2YWwgPSAtMTsgLy8gd2lsbCBjYXVzZSBlcnJvciBiZWxvd1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyB2YWwgaGFzIHRvIGJlIGZsb2F0XG5cdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQodmFsKTtcblx0XHRcdFx0aWYgKCFfdXRpbC50eXBlLk51bWJlcih2YWwpIHx8IHZhbCA8IDApIHtcblx0XHRcdFx0XHRpZiAoX2R1cmF0aW9uVXBkYXRlTWV0aG9kKSB7XG5cdFx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHJldHVybiB2YWx1ZSBvZiBzdXBwbGllZCBmdW5jdGlvbiBmb3Igb3B0aW9uIFxcXCJkdXJhdGlvblxcXCI6XCIsIHZhbF07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiZHVyYXRpb25cXFwiOlwiLCB2YWxdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0LyoqXHJcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBhIHNwZWNpZmljIG9yIGFsbCBvcHRpb25zIGFuZCByZXNldCB0byBkZWZhdWx0IGlmIG5lY2Nlc3NhcnkuXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cblx0XHR2YXIgdmFsaWRhdGVPcHRpb24gPSBmdW5jdGlvbiB2YWxpZGF0ZU9wdGlvbihjaGVjaykge1xuXHRcdFx0Y2hlY2sgPSBhcmd1bWVudHMubGVuZ3RoID8gW2NoZWNrXSA6IE9iamVjdC5rZXlzKF92YWxpZGF0ZSk7XG5cdFx0XHRjaGVjay5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb25OYW1lLCBrZXkpIHtcblx0XHRcdFx0dmFyIHZhbHVlO1xuXHRcdFx0XHRpZiAoX3ZhbGlkYXRlW29wdGlvbk5hbWVdKSB7XG5cdFx0XHRcdFx0Ly8gdGhlcmUgaXMgYSB2YWxpZGF0aW9uIG1ldGhvZCBmb3IgdGhpcyBvcHRpb25cblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0Ly8gdmFsaWRhdGUgdmFsdWVcblx0XHRcdFx0XHRcdHZhbHVlID0gX3ZhbGlkYXRlW29wdGlvbk5hbWVdKF9vcHRpb25zW29wdGlvbk5hbWVdKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHQvLyB2YWxpZGF0aW9uIGZhaWxlZCAtPiByZXNldCB0byBkZWZhdWx0XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IERFRkFVTFRfT1BUSU9OU1tvcHRpb25OYW1lXTtcblx0XHRcdFx0XHRcdHZhciBsb2dNU0cgPSBfdXRpbC50eXBlLlN0cmluZyhlKSA/IFtlXSA6IGU7XG5cdFx0XHRcdFx0XHRpZiAoX3V0aWwudHlwZS5BcnJheShsb2dNU0cpKSB7XG5cdFx0XHRcdFx0XHRcdGxvZ01TR1swXSA9IFwiRVJST1I6IFwiICsgbG9nTVNHWzBdO1xuXHRcdFx0XHRcdFx0XHRsb2dNU0cudW5zaGlmdCgxKTsgLy8gbG9nbGV2ZWwgMSBmb3IgZXJyb3IgbXNnXG5cdFx0XHRcdFx0XHRcdGxvZy5hcHBseSh0aGlzLCBsb2dNU0cpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IFByb2JsZW0gZXhlY3V0aW5nIHZhbGlkYXRpb24gY2FsbGJhY2sgZm9yIG9wdGlvbiAnXCIgKyBvcHRpb25OYW1lICsgXCInOlwiLCBlLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0XHRfb3B0aW9uc1tvcHRpb25OYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIEhlbHBlciB1c2VkIGJ5IHRoZSBzZXR0ZXIvZ2V0dGVycyBmb3Igc2NlbmUgb3B0aW9uc1xyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXG5cdFx0dmFyIGNoYW5nZU9wdGlvbiA9IGZ1bmN0aW9uIGNoYW5nZU9wdGlvbih2YXJuYW1lLCBuZXd2YWwpIHtcblx0XHRcdHZhciBjaGFuZ2VkID0gZmFsc2UsXG5cdFx0XHQgICAgb2xkdmFsID0gX29wdGlvbnNbdmFybmFtZV07XG5cdFx0XHRpZiAoX29wdGlvbnNbdmFybmFtZV0gIT0gbmV3dmFsKSB7XG5cdFx0XHRcdF9vcHRpb25zW3Zhcm5hbWVdID0gbmV3dmFsO1xuXHRcdFx0XHR2YWxpZGF0ZU9wdGlvbih2YXJuYW1lKTsgLy8gcmVzZXRzIHRvIGRlZmF1bHQgaWYgbmVjZXNzYXJ5XG5cdFx0XHRcdGNoYW5nZWQgPSBvbGR2YWwgIT0gX29wdGlvbnNbdmFybmFtZV07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2hhbmdlZDtcblx0XHR9O1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZ2V0dGVycy9zZXR0ZXJzIGZvciBhbGwgb3B0aW9uc1xuXHRcdHZhciBhZGRTY2VuZU9wdGlvbiA9IGZ1bmN0aW9uIGFkZFNjZW5lT3B0aW9uKG9wdGlvbk5hbWUpIHtcblx0XHRcdGlmICghU2NlbmVbb3B0aW9uTmFtZV0pIHtcblx0XHRcdFx0U2NlbmVbb3B0aW9uTmFtZV0gPSBmdW5jdGlvbiAobmV3VmFsKSB7XG5cdFx0XHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQvLyBnZXRcblx0XHRcdFx0XHRcdHJldHVybiBfb3B0aW9uc1tvcHRpb25OYW1lXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbk5hbWUgPT09IFwiZHVyYXRpb25cIikge1xuXHRcdFx0XHRcdFx0XHQvLyBuZXcgZHVyYXRpb24gaXMgc2V0LCBzbyBhbnkgcHJldmlvdXNseSBzZXQgZnVuY3Rpb24gbXVzdCBiZSB1bnNldFxuXHRcdFx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoY2hhbmdlT3B0aW9uKG9wdGlvbk5hbWUsIG5ld1ZhbCkpIHtcblx0XHRcdFx0XHRcdFx0Ly8gc2V0XG5cdFx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRcdFx0XHRcdHdoYXQ6IG9wdGlvbk5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0bmV3dmFsOiBfb3B0aW9uc1tvcHRpb25OYW1lXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0aWYgKFNDRU5FX09QVElPTlMuc2hpZnRzLmluZGV4T2Yob3B0aW9uTmFtZSkgPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJzaGlmdFwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZWFzb246IG9wdGlvbk5hbWVcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgZHVyYXRpb24gb3B0aW9uIHZhbHVlLlxyXG4gICAqXHJcbiAgICogQXMgYSAqKnNldHRlcioqIGl0IGFjY2VwdHMgdGhyZWUgdHlwZXMgb2YgcGFyYW1ldGVyczpcclxuICAgKiAxLiBgbnVtYmVyYDogU2V0cyB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lIHRvIGV4YWN0bHkgdGhpcyBhbW91bnQgb2YgcGl4ZWxzLiAgXHJcbiAgICogICBUaGlzIG1lYW5zIHRoZSBzY2VuZSB3aWxsIGxhc3QgZm9yIGV4YWN0bHkgdGhpcyBhbW91bnQgb2YgcGl4ZWxzIHNjcm9sbGVkLiBTdWItUGl4ZWxzIGFyZSBhbHNvIHZhbGlkLlxyXG4gICAqICAgQSB2YWx1ZSBvZiBgMGAgbWVhbnMgdGhhdCB0aGUgc2NlbmUgaXMgJ29wZW4gZW5kJyBhbmQgbm8gZW5kIHdpbGwgYmUgdHJpZ2dlcmVkLiBQaW5zIHdpbGwgbmV2ZXIgdW5waW4gYW5kIGFuaW1hdGlvbnMgd2lsbCBwbGF5IGluZGVwZW5kZW50bHkgb2Ygc2Nyb2xsIHByb2dyZXNzLlxyXG4gICAqIDIuIGBzdHJpbmdgOiBBbHdheXMgdXBkYXRlcyB0aGUgZHVyYXRpb24gcmVsYXRpdmUgdG8gcGFyZW50IHNjcm9sbCBjb250YWluZXIuICBcclxuICAgKiAgIEZvciBleGFtcGxlIGBcIjEwMCVcImAgd2lsbCBrZWVwIHRoZSBkdXJhdGlvbiBhbHdheXMgZXhhY3RseSBhdCB0aGUgaW5uZXIgaGVpZ2h0IG9mIHRoZSBzY3JvbGwgY29udGFpbmVyLlxyXG4gICAqICAgV2hlbiBzY3JvbGxpbmcgdmVydGljYWxseSB0aGUgd2lkdGggaXMgdXNlZCBmb3IgcmVmZXJlbmNlIHJlc3BlY3RpdmVseS5cclxuICAgKiAzLiBgZnVuY3Rpb25gOiBUaGUgc3VwcGxpZWQgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gcmV0dXJuIHRoZSBzY2VuZSBkdXJhdGlvbi5cclxuICAgKiAgIFRoaXMgaXMgdXNlZnVsIGluIHNldHVwcyB3aGVyZSB0aGUgZHVyYXRpb24gZGVwZW5kcyBvbiBvdGhlciBlbGVtZW50cyB3aG8gbWlnaHQgY2hhbmdlIHNpemUuIEJ5IHN1cHBseWluZyBhIGZ1bmN0aW9uIHlvdSBjYW4gcmV0dXJuIGEgdmFsdWUgaW5zdGVhZCBvZiB1cGRhdGluZyBwb3RlbnRpYWxseSBtdWx0aXBsZSBzY2VuZSBkdXJhdGlvbnMuICBcclxuICAgKiAgIFRoZSBzY2VuZSBjYW4gYmUgcmVmZXJlbmNlZCBpbnNpZGUgdGhlIGNhbGxiYWNrIHVzaW5nIGB0aGlzYC5cclxuICAgKiAgIF8qKldBUk5JTkc6KiogVGhpcyBpcyBhbiBlYXN5IHdheSB0byBraWxsIHBlcmZvcm1hbmNlLCBhcyB0aGUgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBldmVyeSB0aW1lIGBTY2VuZS5yZWZyZXNoKClgIGlzIGNhbGxlZCwgd2hpY2ggaGFwcGVucyBhIGxvdC4gVGhlIGludGVydmFsIGlzIGRlZmluZWQgYnkgdGhlIGNvbnRyb2xsZXIgKHNlZSBTY3JvbGxNYWdpYy5Db250cm9sbGVyIG9wdGlvbiBgcmVmcmVzaEludGVydmFsYCkuICBcclxuICAgKiAgIEl0J3MgcmVjb21lbmRlZCB0byBhdm9pZCBjYWxjdWxhdGlvbnMgd2l0aGluIHRoZSBmdW5jdGlvbiBhbmQgdXNlIGNhY2hlZCB2YXJpYWJsZXMgYXMgcmV0dXJuIHZhbHVlcy4gIFxyXG4gICAqICAgVGhpcyBjb3VudHMgZG91YmxlIGlmIHlvdSB1c2UgdGhlIHNhbWUgZnVuY3Rpb24gZm9yIG11bHRpcGxlIHNjZW5lcy5fXHJcbiAgICpcclxuICAgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2R1cmF0aW9uXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyBnZXQgdGhlIGN1cnJlbnQgZHVyYXRpb24gdmFsdWVcclxuICAgKiB2YXIgZHVyYXRpb24gPSBzY2VuZS5kdXJhdGlvbigpO1xyXG4gICAqXHJcbiAgICogLy8gc2V0IGEgbmV3IGR1cmF0aW9uXHJcbiAgICogc2NlbmUuZHVyYXRpb24oMzAwKTtcclxuICAgKlxyXG4gICAqIC8vIHNldCBkdXJhdGlvbiByZXNwb25zaXZlbHkgdG8gY29udGFpbmVyIHNpemVcclxuICAgKiBzY2VuZS5kdXJhdGlvbihcIjEwMCVcIik7XHJcbiAgICpcclxuICAgKiAvLyB1c2UgYSBmdW5jdGlvbiB0byByYW5kb21pemUgdGhlIGR1cmF0aW9uIGZvciBzb21lIHJlYXNvbi5cclxuICAgKiB2YXIgZHVyYXRpb25WYWx1ZUNhY2hlO1xyXG4gICAqIGZ1bmN0aW9uIGR1cmF0aW9uQ2FsbGJhY2sgKCkge1xyXG4gICAqICAgcmV0dXJuIGR1cmF0aW9uVmFsdWVDYWNoZTtcclxuICAgKiB9XHJcbiAgICogZnVuY3Rpb24gdXBkYXRlRHVyYXRpb24gKCkge1xyXG4gICAqICAgZHVyYXRpb25WYWx1ZUNhY2hlID0gTWF0aC5yYW5kb20oKSAqIDEwMDtcclxuICAgKiB9XHJcbiAgICogdXBkYXRlRHVyYXRpb24oKTsgLy8gc2V0IHRvIGluaXRpYWwgdmFsdWVcclxuICAgKiBzY2VuZS5kdXJhdGlvbihkdXJhdGlvbkNhbGxiYWNrKTsgLy8gc2V0IGR1cmF0aW9uIGNhbGxiYWNrXHJcbiAgICpcclxuICAgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuICAgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG4gICAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pfSBbbmV3RHVyYXRpb25dIC0gVGhlIG5ldyBkdXJhdGlvbiBzZXR0aW5nIGZvciB0aGUgc2NlbmUuXHJcbiAgICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBzY2VuZSBkdXJhdGlvbi5cclxuICAgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xuXG5cdFx0LyoqXHJcbiAgICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBvZmZzZXQgb3B0aW9uIHZhbHVlLlxyXG4gICAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjb2Zmc2V0XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyBnZXQgdGhlIGN1cnJlbnQgb2Zmc2V0XHJcbiAgICogdmFyIG9mZnNldCA9IHNjZW5lLm9mZnNldCgpO1xyXG4gICAqXHJcbiAgICogLy8gc2V0IGEgbmV3IG9mZnNldFxyXG4gICAqIHNjZW5lLm9mZnNldCgxMDApO1xyXG4gICAqXHJcbiAgICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcbiAgICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW25ld09mZnNldF0gLSBUaGUgbmV3IG9mZnNldCBvZiB0aGUgc2NlbmUuXHJcbiAgICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBzY2VuZSBvZmZzZXQuXHJcbiAgICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuICAgKi9cblxuXHRcdC8qKlxyXG4gICAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgdHJpZ2dlckVsZW1lbnQgb3B0aW9uIHZhbHVlLlxyXG4gICAqIERvZXMgKipub3QqKiBmaXJlIGBTY2VuZS5zaGlmdGAsIGJlY2F1c2UgY2hhbmdpbmcgdGhlIHRyaWdnZXIgRWxlbWVudCBkb2Vzbid0IG5lY2Vzc2FyaWx5IG1lYW4gdGhlIHN0YXJ0IHBvc2l0aW9uIGNoYW5nZXMuIFRoaXMgd2lsbCBiZSBkZXRlcm1pbmVkIGluIGBTY2VuZS5yZWZyZXNoKClgLCB3aGljaCBpcyBhdXRvbWF0aWNhbGx5IHRyaWdnZXJlZC5cclxuICAgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJFbGVtZW50XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdHJpZ2dlckVsZW1lbnRcclxuICAgKiB2YXIgdHJpZ2dlckVsZW1lbnQgPSBzY2VuZS50cmlnZ2VyRWxlbWVudCgpO1xyXG4gICAqXHJcbiAgICogLy8gc2V0IGEgbmV3IHRyaWdnZXJFbGVtZW50IHVzaW5nIGEgc2VsZWN0b3JcclxuICAgKiBzY2VuZS50cmlnZ2VyRWxlbWVudChcIiN0cmlnZ2VyXCIpO1xyXG4gICAqIC8vIHNldCBhIG5ldyB0cmlnZ2VyRWxlbWVudCB1c2luZyBhIERPTSBvYmplY3RcclxuICAgKiBzY2VuZS50cmlnZ2VyRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyaWdnZXJcIikpO1xyXG4gICAqXHJcbiAgICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IFtuZXdUcmlnZ2VyRWxlbWVudF0gLSBUaGUgbmV3IHRyaWdnZXIgZWxlbWVudCBmb3IgdGhlIHNjZW5lLlxyXG4gICAqIEByZXR1cm5zIHsoc3RyaW5nfG9iamVjdCl9IGBnZXRgIC0gIEN1cnJlbnQgdHJpZ2dlckVsZW1lbnQuXHJcbiAgICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuICAgKi9cblxuXHRcdC8qKlxyXG4gICAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgdHJpZ2dlckhvb2sgb3B0aW9uIHZhbHVlLlxyXG4gICAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjdHJpZ2dlckhvb2tcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIGdldCB0aGUgY3VycmVudCB0cmlnZ2VySG9vayB2YWx1ZVxyXG4gICAqIHZhciB0cmlnZ2VySG9vayA9IHNjZW5lLnRyaWdnZXJIb29rKCk7XHJcbiAgICpcclxuICAgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckhvb2sgdXNpbmcgYSBzdHJpbmdcclxuICAgKiBzY2VuZS50cmlnZ2VySG9vayhcIm9uTGVhdmVcIik7XHJcbiAgICogLy8gc2V0IGEgbmV3IHRyaWdnZXJIb29rIHVzaW5nIGEgbnVtYmVyXHJcbiAgICogc2NlbmUudHJpZ2dlckhvb2soMC43KTtcclxuICAgKlxyXG4gICAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG4gICAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcbiAgICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IFtuZXdUcmlnZ2VySG9va10gLSBUaGUgbmV3IHRyaWdnZXJIb29rIG9mIHRoZSBzY2VuZS4gU2VlIHtAbGluayBTY2VuZX0gcGFyYW1ldGVyIGRlc2NyaXB0aW9uIGZvciB2YWx1ZSBvcHRpb25zLlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgdHJpZ2dlckhvb2sgKEFMV0FZUyBudW1lcmljYWwpLlxyXG4gICAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcbiAgICovXG5cblx0XHQvKipcclxuICAgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHJldmVyc2Ugb3B0aW9uIHZhbHVlLlxyXG4gICAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmV2ZXJzZVxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLy8gZ2V0IHRoZSBjdXJyZW50IHJldmVyc2Ugb3B0aW9uXHJcbiAgICogdmFyIHJldmVyc2UgPSBzY2VuZS5yZXZlcnNlKCk7XHJcbiAgICpcclxuICAgKiAvLyBzZXQgbmV3IHJldmVyc2Ugb3B0aW9uXHJcbiAgICogc2NlbmUucmV2ZXJzZShmYWxzZSk7XHJcbiAgICpcclxuICAgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdSZXZlcnNlXSAtIFRoZSBuZXcgcmV2ZXJzZSBzZXR0aW5nIG9mIHRoZSBzY2VuZS5cclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYGdldGAgLSAgQ3VycmVudCByZXZlcnNlIG9wdGlvbiB2YWx1ZS5cclxuICAgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xuXG5cdFx0LyoqXHJcbiAgICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBsb2dsZXZlbCBvcHRpb24gdmFsdWUuXHJcbiAgICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNsb2dsZXZlbFxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLy8gZ2V0IHRoZSBjdXJyZW50IGxvZ2xldmVsXHJcbiAgICogdmFyIGxvZ2xldmVsID0gc2NlbmUubG9nbGV2ZWwoKTtcclxuICAgKlxyXG4gICAqIC8vIHNldCBuZXcgbG9nbGV2ZWxcclxuICAgKiBzY2VuZS5sb2dsZXZlbCgzKTtcclxuICAgKlxyXG4gICAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbmV3TG9nbGV2ZWxdIC0gVGhlIG5ldyBsb2dsZXZlbCBzZXR0aW5nIG9mIHRoZSBzY2VuZS4gYFswLTNdYFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgbG9nbGV2ZWwuXHJcbiAgICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuICAgKi9cblxuXHRcdC8qKlxyXG4gICAqICoqR2V0KiogdGhlIGFzc29jaWF0ZWQgY29udHJvbGxlci5cclxuICAgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2NvbnRyb2xsZXJcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIGdldCB0aGUgY29udHJvbGxlciBvZiBhIHNjZW5lXHJcbiAgICogdmFyIGNvbnRyb2xsZXIgPSBzY2VuZS5jb250cm9sbGVyKCk7XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7U2Nyb2xsTWFnaWMuQ29udHJvbGxlcn0gUGFyZW50IGNvbnRyb2xsZXIgb3IgYHVuZGVmaW5lZGBcclxuICAgKi9cblx0XHR0aGlzLmNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gX2NvbnRyb2xsZXI7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqICoqR2V0KiogdGhlIGN1cnJlbnQgc3RhdGUuXHJcbiAgICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzdGF0ZVxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLy8gZ2V0IHRoZSBjdXJyZW50IHN0YXRlXHJcbiAgICogdmFyIHN0YXRlID0gc2NlbmUuc3RhdGUoKTtcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGBcIkJFRk9SRVwiYCwgYFwiRFVSSU5HXCJgIG9yIGBcIkFGVEVSXCJgXHJcbiAgICovXG5cdFx0dGhpcy5zdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBfc3RhdGU7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqICoqR2V0KiogdGhlIGN1cnJlbnQgc2Nyb2xsIG9mZnNldCBmb3IgdGhlIHN0YXJ0IG9mIHRoZSBzY2VuZS4gIFxyXG4gICAqIE1pbmQsIHRoYXQgdGhlIHNjcm9sbE9mZnNldCBpcyByZWxhdGVkIHRvIHRoZSBzaXplIG9mIHRoZSBjb250YWluZXIsIGlmIGB0cmlnZ2VySG9va2AgaXMgYmlnZ2VyIHRoYW4gYDBgIChvciBgXCJvbkxlYXZlXCJgKS4gIFxyXG4gICAqIFRoaXMgbWVhbnMsIHRoYXQgcmVzaXppbmcgdGhlIGNvbnRhaW5lciBvciBjaGFuZ2luZyB0aGUgYHRyaWdnZXJIb29rYCB3aWxsIGluZmx1ZW5jZSB0aGUgc2NlbmUncyBzdGFydCBvZmZzZXQuXHJcbiAgICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzY3JvbGxPZmZzZXRcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIGdldCB0aGUgY3VycmVudCBzY3JvbGwgb2Zmc2V0IGZvciB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc2NlbmUuXHJcbiAgICogdmFyIHN0YXJ0ID0gc2NlbmUuc2Nyb2xsT2Zmc2V0KCk7XHJcbiAgICogdmFyIGVuZCA9IHNjZW5lLnNjcm9sbE9mZnNldCgpICsgc2NlbmUuZHVyYXRpb24oKTtcclxuICAgKiBjb25zb2xlLmxvZyhcInRoZSBzY2VuZSBzdGFydHMgYXRcIiwgc3RhcnQsIFwiYW5kIGVuZHMgYXRcIiwgZW5kKTtcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBzY3JvbGwgb2Zmc2V0IChvZiB0aGUgY29udGFpbmVyKSBhdCB3aGljaCB0aGUgc2NlbmUgd2lsbCB0cmlnZ2VyLiBZIHZhbHVlIGZvciB2ZXJ0aWNhbCBhbmQgWCB2YWx1ZSBmb3IgaG9yaXpvbnRhbCBzY3JvbGxzLlxyXG4gICAqL1xuXHRcdHRoaXMuc2Nyb2xsT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIF9zY3JvbGxPZmZzZXQuc3RhcnQ7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqICoqR2V0KiogdGhlIHRyaWdnZXIgcG9zaXRpb24gb2YgdGhlIHNjZW5lIChpbmNsdWRpbmcgdGhlIHZhbHVlIG9mIHRoZSBgb2Zmc2V0YCBvcHRpb24pLiAgXHJcbiAgICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VyUG9zaXRpb25cclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIGdldCB0aGUgc2NlbmUncyB0cmlnZ2VyIHBvc2l0aW9uXHJcbiAgICogdmFyIHRyaWdnZXJQb3NpdGlvbiA9IHNjZW5lLnRyaWdnZXJQb3NpdGlvbigpO1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge251bWJlcn0gU3RhcnQgcG9zaXRpb24gb2YgdGhlIHNjZW5lLiBUb3AgcG9zaXRpb24gdmFsdWUgZm9yIHZlcnRpY2FsIGFuZCBsZWZ0IHBvc2l0aW9uIHZhbHVlIGZvciBob3Jpem9udGFsIHNjcm9sbHMuXHJcbiAgICovXG5cdFx0dGhpcy50cmlnZ2VyUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgcG9zID0gX29wdGlvbnMub2Zmc2V0OyAvLyB0aGUgb2Zmc2V0IGlzIHRoZSBiYXNpc1xuXHRcdFx0aWYgKF9jb250cm9sbGVyKSB7XG5cdFx0XHRcdC8vIGdldCB0aGUgdHJpZ2dlciBwb3NpdGlvblxuXHRcdFx0XHRpZiAoX29wdGlvbnMudHJpZ2dlckVsZW1lbnQpIHtcblx0XHRcdFx0XHQvLyBFbGVtZW50IGFzIHRyaWdnZXJcblx0XHRcdFx0XHRwb3MgKz0gX3RyaWdnZXJQb3M7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHRyaWdnZXJIb29rIHRvIHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmdcblx0XHRcdFx0XHRwb3MgKz0gX2NvbnRyb2xsZXIuaW5mbyhcInNpemVcIikgKiBTY2VuZS50cmlnZ2VySG9vaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcG9zO1xuXHRcdH07XG5cblx0XHR2YXIgX3BpbiwgX3Bpbk9wdGlvbnM7XG5cblx0XHRTY2VuZS5vbihcInNoaWZ0LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHR2YXIgZHVyYXRpb25DaGFuZ2VkID0gZS5yZWFzb24gPT09IFwiZHVyYXRpb25cIjtcblx0XHRcdGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0FGVEVSICYmIGR1cmF0aW9uQ2hhbmdlZCB8fCBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiBfb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCkge1xuXHRcdFx0XHQvLyBpZiBbZHVyYXRpb24gY2hhbmdlZCBhZnRlciBhIHNjZW5lIChpbnNpZGUgc2NlbmUgcHJvZ3Jlc3MgdXBkYXRlcyBwaW4gcG9zaXRpb24pXSBvciBbZHVyYXRpb24gaXMgMCwgd2UgYXJlIGluIHBpbiBwaGFzZSBhbmQgc29tZSBvdGhlciB2YWx1ZSBjaGFuZ2VkXS5cblx0XHRcdFx0dXBkYXRlUGluU3RhdGUoKTtcblx0XHRcdH1cblx0XHRcdGlmIChkdXJhdGlvbkNoYW5nZWQpIHtcblx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xuXHRcdFx0fVxuXHRcdH0pLm9uKFwicHJvZ3Jlc3MuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XG5cdFx0fSkub24oXCJhZGQuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcblx0XHR9KS5vbihcImRlc3Ryb3kuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFNjZW5lLnJlbW92ZVBpbihlLnJlc2V0KTtcblx0XHR9KTtcblx0XHQvKipcclxuICAgKiBVcGRhdGUgdGhlIHBpbiBzdGF0ZS5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xuXHRcdHZhciB1cGRhdGVQaW5TdGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZVBpblN0YXRlKGZvcmNlVW5waW4pIHtcblx0XHRcdGlmIChfcGluICYmIF9jb250cm9sbGVyKSB7XG5cdFx0XHRcdHZhciBjb250YWluZXJJbmZvID0gX2NvbnRyb2xsZXIuaW5mbygpLFxuXHRcdFx0XHQgICAgcGluVGFyZ2V0ID0gX3Bpbk9wdGlvbnMuc3BhY2VyLmZpcnN0Q2hpbGQ7IC8vIG1heSBiZSBwaW4gZWxlbWVudCBvciBhbm90aGVyIHNwYWNlciwgaWYgY2FzY2FkaW5nIHBpbnNcblxuXHRcdFx0XHRpZiAoIWZvcmNlVW5waW4gJiYgX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcblx0XHRcdFx0XHQvLyBkdXJpbmcgc2NlbmUgb3IgaWYgZHVyYXRpb24gaXMgMCBhbmQgd2UgYXJlIHBhc3QgdGhlIHRyaWdnZXJcblx0XHRcdFx0XHQvLyBwaW5uZWQgc3RhdGVcblx0XHRcdFx0XHRpZiAoX3V0aWwuY3NzKHBpblRhcmdldCwgXCJwb3NpdGlvblwiKSAhPSBcImZpeGVkXCIpIHtcblx0XHRcdFx0XHRcdC8vIGNoYW5nZSBzdGF0ZSBiZWZvcmUgdXBkYXRpbmcgcGluIHNwYWNlciAocG9zaXRpb24gY2hhbmdlcyBkdWUgdG8gZml4ZWQgY29sbGFwc2luZyBtaWdodCBvY2N1ci4pXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MocGluVGFyZ2V0LCB7XG5cdFx0XHRcdFx0XHRcdFwicG9zaXRpb25cIjogXCJmaXhlZFwiXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdC8vIHVwZGF0ZSBwaW4gc3BhY2VyXG5cdFx0XHRcdFx0XHR1cGRhdGVQaW5EaW1lbnNpb25zKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIGZpeGVkUG9zID0gX3V0aWwuZ2V0Lm9mZnNldChfcGluT3B0aW9ucy5zcGFjZXIsIHRydWUpLFxuXHRcdFx0XHRcdCAgICAvLyBnZXQgdmlld3BvcnQgcG9zaXRpb24gb2Ygc3BhY2VyXG5cdFx0XHRcdFx0c2Nyb2xsRGlzdGFuY2UgPSBfb3B0aW9ucy5yZXZlcnNlIHx8IF9vcHRpb25zLmR1cmF0aW9uID09PSAwID8gY29udGFpbmVySW5mby5zY3JvbGxQb3MgLSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0IC8vIHF1aWNrZXJcblx0XHRcdFx0XHQ6IE1hdGgucm91bmQoX3Byb2dyZXNzICogX29wdGlvbnMuZHVyYXRpb24gKiAxMCkgLyAxMDsgLy8gaWYgbm8gcmV2ZXJzZSBhbmQgZHVyaW5nIHBpbiB0aGUgcG9zaXRpb24gbmVlZHMgdG8gYmUgcmVjYWxjdWxhdGVkIHVzaW5nIHRoZSBwcm9ncmVzc1xuXG5cdFx0XHRcdFx0Ly8gYWRkIHNjcm9sbERpc3RhbmNlXG5cdFx0XHRcdFx0Zml4ZWRQb3NbY29udGFpbmVySW5mby52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIl0gKz0gc2Nyb2xsRGlzdGFuY2U7XG5cblx0XHRcdFx0XHQvLyBzZXQgbmV3IHZhbHVlc1xuXHRcdFx0XHRcdF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZCwge1xuXHRcdFx0XHRcdFx0dG9wOiBmaXhlZFBvcy50b3AsXG5cdFx0XHRcdFx0XHRsZWZ0OiBmaXhlZFBvcy5sZWZ0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gdW5waW5uZWQgc3RhdGVcblx0XHRcdFx0XHR2YXIgbmV3Q1NTID0ge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IF9waW5PcHRpb25zLmluRmxvdyA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIixcblx0XHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRcdGxlZnQ6IDBcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCAgICBjaGFuZ2UgPSBfdXRpbC5jc3MocGluVGFyZ2V0LCBcInBvc2l0aW9uXCIpICE9IG5ld0NTUy5wb3NpdGlvbjtcblxuXHRcdFx0XHRcdGlmICghX3Bpbk9wdGlvbnMucHVzaEZvbGxvd2Vycykge1xuXHRcdFx0XHRcdFx0bmV3Q1NTW2NvbnRhaW5lckluZm8udmVydGljYWwgPyBcInRvcFwiIDogXCJsZWZ0XCJdID0gX29wdGlvbnMuZHVyYXRpb24gKiBfcHJvZ3Jlc3M7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChfb3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcblx0XHRcdFx0XHRcdC8vIG9ubHkgY29uY2VybnMgc2NlbmVzIHdpdGggZHVyYXRpb25cblx0XHRcdFx0XHRcdGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0FGVEVSICYmIHBhcnNlRmxvYXQoX3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlciwgXCJwYWRkaW5nLXRvcFwiKSkgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0Y2hhbmdlID0gdHJ1ZTsgLy8gaWYgaW4gYWZ0ZXIgc3RhdGUgYnV0IGhhdmVudCB1cGRhdGVkIHNwYWNlciB5ZXQgKGp1bXBlZCBwYXN0IHBpbilcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUgJiYgcGFyc2VGbG9hdChfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBcInBhZGRpbmctYm90dG9tXCIpKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHQvLyBiZWZvcmVcblx0XHRcdFx0XHRcdFx0Y2hhbmdlID0gdHJ1ZTsgLy8ganVtcGVkIHBhc3QgZml4ZWQgc3RhdGUgdXB3YXJkIGRpcmVjdGlvblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBzZXQgbmV3IHZhbHVlc1xuXHRcdFx0XHRcdF91dGlsLmNzcyhwaW5UYXJnZXQsIG5ld0NTUyk7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZSkge1xuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlIHBpbiBzcGFjZXIgaWYgc3RhdGUgY2hhbmdlZFxuXHRcdFx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBVcGRhdGUgdGhlIHBpbiBzcGFjZXIgYW5kL29yIGVsZW1lbnQgc2l6ZS5cclxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgc3BhY2VyIG5lZWRzIHRvIGJlIHVwZGF0ZWQgd2hlbmV2ZXIgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZSBjaGFuZ2VzLCBpZiBpdCBpcyB0byBwdXNoIGRvd24gZm9sbG93aW5nIGVsZW1lbnRzLlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXG5cdFx0dmFyIHVwZGF0ZVBpbkRpbWVuc2lvbnMgPSBmdW5jdGlvbiB1cGRhdGVQaW5EaW1lbnNpb25zKCkge1xuXHRcdFx0aWYgKF9waW4gJiYgX2NvbnRyb2xsZXIgJiYgX3Bpbk9wdGlvbnMuaW5GbG93KSB7XG5cdFx0XHRcdC8vIG5vIHNwYWNlcnJlc2l6ZSwgaWYgb3JpZ2luYWwgcG9zaXRpb24gaXMgYWJzb2x1dGVcblx0XHRcdFx0dmFyIGR1cmluZyA9IF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HLFxuXHRcdFx0XHQgICAgdmVydGljYWwgPSBfY29udHJvbGxlci5pbmZvKFwidmVydGljYWxcIiksXG5cdFx0XHRcdCAgICBwaW5UYXJnZXQgPSBfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZCxcblx0XHRcdFx0ICAgIC8vIHVzdWFsbHkgdGhlIHBpbmVkIGVsZW1lbnQgYnV0IGNhbiBhbHNvIGJlIGFub3RoZXIgc3BhY2VyIChjYXNjYWRlZCBwaW5zKVxuXHRcdFx0XHRtYXJnaW5Db2xsYXBzZSA9IF91dGlsLmlzTWFyZ2luQ29sbGFwc2VUeXBlKF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIFwiZGlzcGxheVwiKSksXG5cdFx0XHRcdCAgICBjc3MgPSB7fTtcblxuXHRcdFx0XHQvLyBzZXQgbmV3IHNpemVcblx0XHRcdFx0Ly8gaWYgcmVsc2l6ZTogc3BhY2VyIC0+IHBpbiB8IGVsc2U6IHBpbiAtPiBzcGFjZXJcblx0XHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSB7XG5cdFx0XHRcdFx0aWYgKGR1cmluZykge1xuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcblx0XHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiBfdXRpbC5nZXQud2lkdGgoX3Bpbk9wdGlvbnMuc3BhY2VyKVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XG5cdFx0XHRcdFx0XHRcdFwid2lkdGhcIjogXCIxMDAlXCJcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBtaW53aWR0aCBpcyBuZWVkZWQgZm9yIGNhc2NhZGVkIHBpbnMuXG5cdFx0XHRcdFx0Y3NzW1wibWluLXdpZHRoXCJdID0gX3V0aWwuZ2V0LndpZHRoKHZlcnRpY2FsID8gX3BpbiA6IHBpblRhcmdldCwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0Y3NzLndpZHRoID0gZHVyaW5nID8gY3NzW1wibWluLXdpZHRoXCJdIDogXCJhdXRvXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0aWYgKGR1cmluZykge1xuXHRcdFx0XHRcdFx0Ly8gdGhlIG9ubHkgcGFkZGluZyB0aGUgc3BhY2VyIHNob3VsZCBldmVyIGluY2x1ZGUgaXMgdGhlIGR1cmF0aW9uIChpZiBwdXNoRm9sbG93ZXJzID0gdHJ1ZSksIHNvIHdlIG5lZWQgdG8gc3Vic3RyYWN0IHRoYXQuXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xuXHRcdFx0XHRcdFx0XHRcImhlaWdodFwiOiBfdXRpbC5nZXQuaGVpZ2h0KF9waW5PcHRpb25zLnNwYWNlcikgLSAoX3Bpbk9wdGlvbnMucHVzaEZvbGxvd2VycyA/IF9vcHRpb25zLmR1cmF0aW9uIDogMClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xuXHRcdFx0XHRcdFx0XHRcImhlaWdodFwiOiBcIjEwMCVcIlxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIG1hcmdpbiBpcyBvbmx5IGluY2x1ZGVkIGlmIGl0J3MgYSBjYXNjYWRlZCBwaW4gdG8gcmVzb2x2ZSBhbiBJRTkgYnVnXG5cdFx0XHRcdFx0Y3NzW1wibWluLWhlaWdodFwiXSA9IF91dGlsLmdldC5oZWlnaHQodmVydGljYWwgPyBwaW5UYXJnZXQgOiBfcGluLCB0cnVlLCAhbWFyZ2luQ29sbGFwc2UpOyAvLyBuZWVkZWQgZm9yIGNhc2NhZGluZyBwaW5zXG5cdFx0XHRcdFx0Y3NzLmhlaWdodCA9IGR1cmluZyA/IGNzc1tcIm1pbi1oZWlnaHRcIl0gOiBcImF1dG9cIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGFkZCBzcGFjZSBmb3IgZHVyYXRpb24gaWYgcHVzaEZvbGxvd2VycyBpcyB0cnVlXG5cdFx0XHRcdGlmIChfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzKSB7XG5cdFx0XHRcdFx0Y3NzW1wicGFkZGluZ1wiICsgKHZlcnRpY2FsID8gXCJUb3BcIiA6IFwiTGVmdFwiKV0gPSBfb3B0aW9ucy5kdXJhdGlvbiAqIF9wcm9ncmVzcztcblx0XHRcdFx0XHRjc3NbXCJwYWRkaW5nXCIgKyAodmVydGljYWwgPyBcIkJvdHRvbVwiIDogXCJSaWdodFwiKV0gPSBfb3B0aW9ucy5kdXJhdGlvbiAqICgxIC0gX3Byb2dyZXNzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBjc3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBVcGRhdGVzIHRoZSBQaW4gc3RhdGUgKGluIGNlcnRhaW4gc2NlbmFyaW9zKVxyXG4gICAqIElmIHRoZSBjb250cm9sbGVyIGNvbnRhaW5lciBpcyBub3QgdGhlIGRvY3VtZW50IGFuZCB3ZSBhcmUgbWlkLXBpbi1waGFzZSBzY3JvbGxpbmcgb3IgcmVzaXppbmcgdGhlIG1haW4gZG9jdW1lbnQgY2FuIHJlc3VsdCB0byB3cm9uZyBwaW4gcG9zaXRpb25zLlxyXG4gICAqIFNvIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIHJlc2l6ZSBhbmQgc2Nyb2xsIG9mIHRoZSBkb2N1bWVudC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xuXHRcdHZhciB1cGRhdGVQaW5JbkNvbnRhaW5lciA9IGZ1bmN0aW9uIHVwZGF0ZVBpbkluQ29udGFpbmVyKCkge1xuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmIF9waW4gJiYgX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgIV9jb250cm9sbGVyLmluZm8oXCJpc0RvY3VtZW50XCIpKSB7XG5cdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIFBpbiBzcGFjZXIgc2l6ZSBzdGF0ZSAoaW4gY2VydGFpbiBzY2VuYXJpb3MpXHJcbiAgICogSWYgY29udGFpbmVyIGlzIHJlc2l6ZWQgZHVyaW5nIHBpbiBhbmQgcmVsYXRpdmVseSBzaXplZCB0aGUgc2l6ZSBvZiB0aGUgcGluIG1pZ2h0IG5lZWQgdG8gYmUgdXBkYXRlZC4uLlxyXG4gICAqIFNvIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIHJlc2l6ZSBvZiB0aGUgY29udGFpbmVyLlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXG5cdFx0dmFyIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyID0gZnVuY3Rpb24gdXBkYXRlUmVsYXRpdmVQaW5TcGFjZXIoKSB7XG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX3BpbiAmJiAvLyB3ZWxsLCBkdWhcblx0XHRcdF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICggLy8gZWxlbWVudCBpbiBwaW5uZWQgc3RhdGU/XG5cdFx0XHQvLyBpcyB3aWR0aCBvciBoZWlnaHQgcmVsYXRpdmVseSBzaXplZCwgYnV0IG5vdCBpbiByZWxhdGlvbiB0byBib2R5PyB0aGVuIHdlIG5lZWQgdG8gcmVjYWxjLlxuXHRcdFx0KF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSAmJiBfdXRpbC5nZXQud2lkdGgod2luZG93KSAhPSBfdXRpbC5nZXQud2lkdGgoX3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUpIHx8IF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0ICYmIF91dGlsLmdldC5oZWlnaHQod2luZG93KSAhPSBfdXRpbC5nZXQuaGVpZ2h0KF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlKSkpIHtcblx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBJcyBjYWxsZWQsIHdoZW4gdGhlIG1vdXNld2hlbCBpcyB1c2VkIHdoaWxlIG92ZXIgYSBwaW5uZWQgZWxlbWVudCBpbnNpZGUgYSBkaXYgY29udGFpbmVyLlxyXG4gICAqIElmIHRoZSBzY2VuZSBpcyBpbiBmaXhlZCBzdGF0ZSBzY3JvbGwgZXZlbnRzIHdvdWxkIGJlIGNvdW50ZWQgdG93YXJkcyB0aGUgYm9keS4gVGhpcyBmb3J3YXJkcyB0aGUgZXZlbnQgdG8gdGhlIHNjcm9sbCBjb250YWluZXIuXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cblx0XHR2YXIgb25Nb3VzZXdoZWVsT3ZlclBpbiA9IGZ1bmN0aW9uIG9uTW91c2V3aGVlbE92ZXJQaW4oZSkge1xuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmIF9waW4gJiYgX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgIV9jb250cm9sbGVyLmluZm8oXCJpc0RvY3VtZW50XCIpKSB7XG5cdFx0XHRcdC8vIGluIHBpbiBzdGF0ZVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdF9jb250cm9sbGVyLl9zZXRTY3JvbGxQb3MoX2NvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSAtICgoZS53aGVlbERlbHRhIHx8IGVbX2NvbnRyb2xsZXIuaW5mbyhcInZlcnRpY2FsXCIpID8gXCJ3aGVlbERlbHRhWVwiIDogXCJ3aGVlbERlbHRhWFwiXSkgLyAzIHx8IC1lLmRldGFpbCAqIDMwKSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIFBpbiBhbiBlbGVtZW50IGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lLlxyXG4gICAqIElmIHRoZSBzY2VuZSBkdXJhdGlvbiBpcyAwIHRoZSBlbGVtZW50IHdpbGwgb25seSBiZSB1bnBpbm5lZCwgaWYgdGhlIHVzZXIgc2Nyb2xscyBiYWNrIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uLiAgXHJcbiAgICogTWFrZSBzdXJlIG9ubHkgb25lIHBpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgYXQgdGhlIHNhbWUgdGltZS5cclxuICAgKiBBbiBlbGVtZW50IGNhbiBiZSBwaW5uZWQgbXVsdGlwbGUgdGltZXMsIGJ1dCBvbmx5IHN1Y2Nlc3NpdmVseS5cclxuICAgKiBfKipOT1RFOioqIFRoZSBvcHRpb24gYHB1c2hGb2xsb3dlcnNgIGhhcyBubyBlZmZlY3QsIHdoZW4gdGhlIHNjZW5lIGR1cmF0aW9uIGlzIDAuX1xyXG4gICAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjc2V0UGluXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyBwaW4gZWxlbWVudCBhbmQgcHVzaCBhbGwgZm9sbG93aW5nIGVsZW1lbnRzIGRvd24gYnkgdGhlIGFtb3VudCBvZiB0aGUgcGluIGR1cmF0aW9uLlxyXG4gICAqIHNjZW5lLnNldFBpbihcIiNwaW5cIik7XHJcbiAgICpcclxuICAgKiAvLyBwaW4gZWxlbWVudCBhbmQga2VlcGluZyBhbGwgZm9sbG93aW5nIGVsZW1lbnRzIGluIHRoZWlyIHBsYWNlLiBUaGUgcGlubmVkIGVsZW1lbnQgd2lsbCBtb3ZlIHBhc3QgdGhlbS5cclxuICAgKiBzY2VuZS5zZXRQaW4oXCIjcGluXCIsIHtwdXNoRm9sbG93ZXJzOiBmYWxzZX0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IGVsZW1lbnQgLSBBIFNlbGVjdG9yIHRhcmdldGluZyBhbiBlbGVtZW50IG9yIGEgRE9NIG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHBpbm5lZC5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gW3NldHRpbmdzXSAtIHNldHRpbmdzIGZvciB0aGUgcGluXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbc2V0dGluZ3MucHVzaEZvbGxvd2Vycz10cnVlXSAtIElmIGB0cnVlYCBmb2xsb3dpbmcgZWxlbWVudHMgd2lsbCBiZSBcInB1c2hlZFwiIGRvd24gZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgcGluLCBpZiBgZmFsc2VgIHRoZSBwaW5uZWQgZWxlbWVudCB3aWxsIGp1c3Qgc2Nyb2xsIHBhc3QgdGhlbS4gIFxyXG4gICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBJZ25vcmVkLCB3aGVuIGR1cmF0aW9uIGlzIGAwYC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NldHRpbmdzLnNwYWNlckNsYXNzPVwic2Nyb2xsbWFnaWMtcGluLXNwYWNlclwiXSAtIENsYXNzbmFtZSBvZiB0aGUgcGluIHNwYWNlciBlbGVtZW50LCB3aGljaCBpcyB1c2VkIHRvIHJlcGxhY2UgdGhlIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xuXHRcdHRoaXMuc2V0UGluID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNldHRpbmdzKSB7XG5cdFx0XHR2YXIgZGVmYXVsdFNldHRpbmdzID0ge1xuXHRcdFx0XHRwdXNoRm9sbG93ZXJzOiB0cnVlLFxuXHRcdFx0XHRzcGFjZXJDbGFzczogXCJzY3JvbGxtYWdpYy1waW4tc3BhY2VyXCJcblx0XHRcdH07XG5cdFx0XHR2YXIgcHVzaEZvbGxvd2Vyc0FjdGl2ZWx5U2V0ID0gc2V0dGluZ3MgJiYgc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ3B1c2hGb2xsb3dlcnMnKTtcblx0XHRcdHNldHRpbmdzID0gX3V0aWwuZXh0ZW5kKHt9LCBkZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcblxuXHRcdFx0Ly8gdmFsaWRhdGUgRWxlbWVudFxuXHRcdFx0ZWxlbWVudCA9IF91dGlsLmdldC5lbGVtZW50cyhlbGVtZW50KVswXTtcblx0XHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0UGluKCknOiBJbnZhbGlkIHBpbiBlbGVtZW50IHN1cHBsaWVkLlwiKTtcblx0XHRcdFx0cmV0dXJuIFNjZW5lOyAvLyBjYW5jZWxcblx0XHRcdH0gZWxzZSBpZiAoX3V0aWwuY3NzKGVsZW1lbnQsIFwicG9zaXRpb25cIikgPT09IFwiZml4ZWRcIikge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0UGluKCknOiBQaW4gZG9lcyBub3Qgd29yayB3aXRoIGVsZW1lbnRzIHRoYXQgYXJlIHBvc2l0aW9uZWQgJ2ZpeGVkJy5cIik7XG5cdFx0XHRcdHJldHVybiBTY2VuZTsgLy8gY2FuY2VsXG5cdFx0XHR9XG5cblx0XHRcdGlmIChfcGluKSB7XG5cdFx0XHRcdC8vIHByZWV4aXN0aW5nIHBpbj9cblx0XHRcdFx0aWYgKF9waW4gPT09IGVsZW1lbnQpIHtcblx0XHRcdFx0XHQvLyBzYW1lIHBpbiB3ZSBhbHJlYWR5IGhhdmUgLT4gZG8gbm90aGluZ1xuXHRcdFx0XHRcdHJldHVybiBTY2VuZTsgLy8gY2FuY2VsXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8ga2lsbCBvbGQgcGluXG5cdFx0XHRcdFx0U2NlbmUucmVtb3ZlUGluKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdF9waW4gPSBlbGVtZW50O1xuXG5cdFx0XHR2YXIgcGFyZW50RGlzcGxheSA9IF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5LFxuXHRcdFx0ICAgIGJvdW5kc1BhcmFtcyA9IFtcInRvcFwiLCBcImxlZnRcIiwgXCJib3R0b21cIiwgXCJyaWdodFwiLCBcIm1hcmdpblwiLCBcIm1hcmdpbkxlZnRcIiwgXCJtYXJnaW5SaWdodFwiLCBcIm1hcmdpblRvcFwiLCBcIm1hcmdpbkJvdHRvbVwiXTtcblxuXHRcdFx0X3Bpbi5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIGhhY2sgc3RhcnQgdG8gZm9yY2UgY3NzIHRvIHJldHVybiBzdHlsZXNoZWV0IHZhbHVlcyBpbnN0ZWFkIG9mIGNhbGN1bGF0ZWQgcHggdmFsdWVzLlxuXHRcdFx0dmFyIGluRmxvdyA9IF91dGlsLmNzcyhfcGluLCBcInBvc2l0aW9uXCIpICE9IFwiYWJzb2x1dGVcIixcblx0XHRcdCAgICBwaW5DU1MgPSBfdXRpbC5jc3MoX3BpbiwgYm91bmRzUGFyYW1zLmNvbmNhdChbXCJkaXNwbGF5XCJdKSksXG5cdFx0XHQgICAgc2l6ZUNTUyA9IF91dGlsLmNzcyhfcGluLCBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXSk7XG5cdFx0XHRfcGluLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9IHBhcmVudERpc3BsYXk7IC8vIGhhY2sgZW5kLlxuXG5cdFx0XHRpZiAoIWluRmxvdyAmJiBzZXR0aW5ncy5wdXNoRm9sbG93ZXJzKSB7XG5cdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IElmIHRoZSBwaW5uZWQgZWxlbWVudCBpcyBwb3NpdGlvbmVkIGFic29sdXRlbHkgcHVzaEZvbGxvd2VycyB3aWxsIGJlIGRpc2FibGVkLlwiKTtcblx0XHRcdFx0c2V0dGluZ3MucHVzaEZvbGxvd2VycyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQvLyB3YWl0IHVudGlsIGFsbCBmaW5pc2hlZCwgYmVjYXVzZSB3aXRoIHJlc3BvbnNpdmUgZHVyYXRpb24gaXQgd2lsbCBvbmx5IGJlIHNldCBhZnRlciBzY2VuZSBpcyBhZGRlZCB0byBjb250cm9sbGVyXG5cdFx0XHRcdGlmIChfcGluICYmIF9vcHRpb25zLmR1cmF0aW9uID09PSAwICYmIHB1c2hGb2xsb3dlcnNBY3RpdmVseVNldCAmJiBzZXR0aW5ncy5wdXNoRm9sbG93ZXJzKSB7XG5cdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogcHVzaEZvbGxvd2VycyA9XCIsIHRydWUsIFwiaGFzIG5vIGVmZmVjdCwgd2hlbiBzY2VuZSBkdXJhdGlvbiBpcyAwLlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgMCk7XG5cblx0XHRcdC8vIGNyZWF0ZSBzcGFjZXIgYW5kIGluc2VydFxuXHRcdFx0dmFyIHNwYWNlciA9IF9waW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIF9waW4pLFxuXHRcdFx0ICAgIHNwYWNlckNTUyA9IF91dGlsLmV4dGVuZChwaW5DU1MsIHtcblx0XHRcdFx0cG9zaXRpb246IGluRmxvdyA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIixcblx0XHRcdFx0Ym94U2l6aW5nOiBcImNvbnRlbnQtYm94XCIsXG5cdFx0XHRcdG1vekJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxuXHRcdFx0XHR3ZWJraXRCb3hTaXppbmc6IFwiY29udGVudC1ib3hcIlxuXHRcdFx0fSk7XG5cblx0XHRcdGlmICghaW5GbG93KSB7XG5cdFx0XHRcdC8vIGNvcHkgc2l6ZSBpZiBwb3NpdGlvbmVkIGFic29sdXRlbHksIHRvIHdvcmsgZm9yIGJvdHRvbS9yaWdodCBwb3NpdGlvbmVkIGVsZW1lbnRzLlxuXHRcdFx0XHRfdXRpbC5leHRlbmQoc3BhY2VyQ1NTLCBfdXRpbC5jc3MoX3BpbiwgW1wid2lkdGhcIiwgXCJoZWlnaHRcIl0pKTtcblx0XHRcdH1cblxuXHRcdFx0X3V0aWwuY3NzKHNwYWNlciwgc3BhY2VyQ1NTKTtcblx0XHRcdHNwYWNlci5zZXRBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUsIFwiXCIpO1xuXHRcdFx0X3V0aWwuYWRkQ2xhc3Moc3BhY2VyLCBzZXR0aW5ncy5zcGFjZXJDbGFzcyk7XG5cblx0XHRcdC8vIHNldCB0aGUgcGluIE9wdGlvbnNcblx0XHRcdF9waW5PcHRpb25zID0ge1xuXHRcdFx0XHRzcGFjZXI6IHNwYWNlcixcblx0XHRcdFx0cmVsU2l6ZTogeyAvLyBzYXZlIGlmIHNpemUgaXMgZGVmaW5lZCB1c2luZyAlIHZhbHVlcy4gaWYgc28sIGhhbmRsZSBzcGFjZXIgcmVzaXplIGRpZmZlcmVudGx5Li4uXG5cdFx0XHRcdFx0d2lkdGg6IHNpemVDU1Mud2lkdGguc2xpY2UoLTEpID09PSBcIiVcIixcblx0XHRcdFx0XHRoZWlnaHQ6IHNpemVDU1MuaGVpZ2h0LnNsaWNlKC0xKSA9PT0gXCIlXCIsXG5cdFx0XHRcdFx0YXV0b0Z1bGxXaWR0aDogc2l6ZUNTUy53aWR0aCA9PT0gXCJhdXRvXCIgJiYgaW5GbG93ICYmIF91dGlsLmlzTWFyZ2luQ29sbGFwc2VUeXBlKHBpbkNTUy5kaXNwbGF5KVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwdXNoRm9sbG93ZXJzOiBzZXR0aW5ncy5wdXNoRm9sbG93ZXJzLFxuXHRcdFx0XHRpbkZsb3c6IGluRmxvdyAvLyBzdG9yZXMgaWYgdGhlIGVsZW1lbnQgdGFrZXMgdXAgc3BhY2UgaW4gdGhlIGRvY3VtZW50IGZsb3dcblx0XHRcdH07XG5cblx0XHRcdGlmICghX3Bpbi5fX19vcmlnU3R5bGUpIHtcblx0XHRcdFx0X3Bpbi5fX19vcmlnU3R5bGUgPSB7fTtcblx0XHRcdFx0dmFyIHBpbklubGluZUNTUyA9IF9waW4uc3R5bGUsXG5cdFx0XHRcdCAgICBjb3B5U3R5bGVzID0gYm91bmRzUGFyYW1zLmNvbmNhdChbXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInBvc2l0aW9uXCIsIFwiYm94U2l6aW5nXCIsIFwibW96Qm94U2l6aW5nXCIsIFwid2Via2l0Qm94U2l6aW5nXCJdKTtcblx0XHRcdFx0Y29weVN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdFx0XHRfcGluLl9fX29yaWdTdHlsZVt2YWxdID0gcGluSW5saW5lQ1NTW3ZhbF0gfHwgXCJcIjtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlmIHJlbGF0aXZlIHNpemUsIHRyYW5zZmVyIGl0IHRvIHNwYWNlciBhbmQgbWFrZSBwaW4gY2FsY3VsYXRlIGl0Li4uXG5cdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS53aWR0aCkge1xuXHRcdFx0XHRfdXRpbC5jc3Moc3BhY2VyLCB7XG5cdFx0XHRcdFx0d2lkdGg6IHNpemVDU1Mud2lkdGhcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS5oZWlnaHQpIHtcblx0XHRcdFx0X3V0aWwuY3NzKHNwYWNlciwge1xuXHRcdFx0XHRcdGhlaWdodDogc2l6ZUNTUy5oZWlnaHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIG5vdyBwbGFjZSB0aGUgcGluIGVsZW1lbnQgaW5zaWRlIHRoZSBzcGFjZXJcdFxuXHRcdFx0c3BhY2VyLmFwcGVuZENoaWxkKF9waW4pO1xuXHRcdFx0Ly8gYW5kIHNldCBuZXcgY3NzXG5cdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xuXHRcdFx0XHRwb3NpdGlvbjogaW5GbG93ID8gXCJyZWxhdGl2ZVwiIDogXCJhYnNvbHV0ZVwiLFxuXHRcdFx0XHRtYXJnaW46IFwiYXV0b1wiLFxuXHRcdFx0XHR0b3A6IFwiYXV0b1wiLFxuXHRcdFx0XHRsZWZ0OiBcImF1dG9cIixcblx0XHRcdFx0Ym90dG9tOiBcImF1dG9cIixcblx0XHRcdFx0cmlnaHQ6IFwiYXV0b1wiXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSB7XG5cdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XG5cdFx0XHRcdFx0Ym94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcblx0XHRcdFx0XHRtb3pCb3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuXHRcdFx0XHRcdHdlYmtpdEJveFNpemluZzogXCJib3JkZXItYm94XCJcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFkZCBsaXN0ZW5lciB0byBkb2N1bWVudCB0byB1cGRhdGUgcGluIHBvc2l0aW9uIGluIGNhc2UgY29udHJvbGxlciBpcyBub3QgdGhlIGRvY3VtZW50LlxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlUmVsYXRpdmVQaW5TcGFjZXIpO1xuXHRcdFx0Ly8gYWRkIG1vdXNld2hlZWwgbGlzdGVuZXIgdG8gY2F0Y2ggc2Nyb2xscyBvdmVyIGZpeGVkIGVsZW1lbnRzXG5cdFx0XHRfcGluLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xuXHRcdFx0X3Bpbi5hZGRFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgb25Nb3VzZXdoZWVsT3ZlclBpbik7XG5cblx0XHRcdGxvZygzLCBcImFkZGVkIHBpblwiKTtcblxuXHRcdFx0Ly8gZmluYWxseSB1cGRhdGUgdGhlIHBpbiB0byBpbml0XG5cdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xuXG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgcGluIGZyb20gdGhlIHNjZW5lLlxyXG4gICAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlUGluXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyByZW1vdmUgdGhlIHBpbiBmcm9tIHRoZSBzY2VuZSB3aXRob3V0IHJlc2V0dGluZyBpdCAodGhlIHNwYWNlciBpcyBub3QgcmVtb3ZlZClcclxuICAgKiBzY2VuZS5yZW1vdmVQaW4oKTtcclxuICAgKlxyXG4gICAqIC8vIHJlbW92ZSB0aGUgcGluIGZyb20gdGhlIHNjZW5lIGFuZCByZXNldCB0aGUgcGluIGVsZW1lbnQgdG8gaXRzIGluaXRpYWwgcG9zaXRpb24gKHNwYWNlciBpcyByZW1vdmVkKVxyXG4gICAqIHNjZW5lLnJlbW92ZVBpbih0cnVlKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGBmYWxzZWAgdGhlIHNwYWNlciB3aWxsIG5vdCBiZSByZW1vdmVkIGFuZCB0aGUgZWxlbWVudCdzIHBvc2l0aW9uIHdpbGwgbm90IGJlIHJlc2V0LlxyXG4gICAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcbiAgICovXG5cdFx0dGhpcy5yZW1vdmVQaW4gPSBmdW5jdGlvbiAocmVzZXQpIHtcblx0XHRcdGlmIChfcGluKSB7XG5cdFx0XHRcdGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykge1xuXHRcdFx0XHRcdHVwZGF0ZVBpblN0YXRlKHRydWUpOyAvLyBmb3JjZSB1bnBpbiBhdCBwb3NpdGlvblxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXNldCB8fCAhX2NvbnRyb2xsZXIpIHtcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSdzIG5vIGNvbnRyb2xsZXIgbm8gcHJvZ3Jlc3Mgd2FzIG1hZGUgYW55d2F5Li4uXG5cdFx0XHRcdFx0dmFyIHBpblRhcmdldCA9IF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkOyAvLyB1c3VhbGx5IHRoZSBwaW4gZWxlbWVudCwgYnV0IG1heSBiZSBhbm90aGVyIHNwYWNlciAoY2FzY2FkZWQgcGlucykuLi5cblx0XHRcdFx0XHRpZiAocGluVGFyZ2V0Lmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHtcblx0XHRcdFx0XHRcdC8vIGNvcHkgbWFyZ2lucyB0byBjaGlsZCBzcGFjZXJcblx0XHRcdFx0XHRcdHZhciBzdHlsZSA9IF9waW5PcHRpb25zLnNwYWNlci5zdHlsZSxcblx0XHRcdFx0XHRcdCAgICB2YWx1ZXMgPSBbXCJtYXJnaW5cIiwgXCJtYXJnaW5MZWZ0XCIsIFwibWFyZ2luUmlnaHRcIiwgXCJtYXJnaW5Ub3BcIiwgXCJtYXJnaW5Cb3R0b21cIl0sXG5cdFx0XHRcdFx0XHQgICAgbWFyZ2lucyA9IHt9O1xuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW5zW3ZhbF0gPSBzdHlsZVt2YWxdIHx8IFwiXCI7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhwaW5UYXJnZXQsIG1hcmdpbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRfcGluT3B0aW9ucy5zcGFjZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocGluVGFyZ2V0LCBfcGluT3B0aW9ucy5zcGFjZXIpO1xuXHRcdFx0XHRcdF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9waW5PcHRpb25zLnNwYWNlcik7XG5cdFx0XHRcdFx0aWYgKCFfcGluLnBhcmVudE5vZGUuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkge1xuXHRcdFx0XHRcdFx0Ly8gaWYgaXQncyB0aGUgbGFzdCBwaW4gZm9yIHRoaXMgZWxlbWVudCAtPiByZXN0b3JlIGlubGluZSBzdHlsZXNcblx0XHRcdFx0XHRcdC8vIFRPRE86IG9ubHkgY29ycmVjdGx5IHNldCBmb3IgZmlyc3QgcGluICh3aGVuIGNhc2NhZGluZykgLSBob3cgdG8gZml4P1xuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIF9waW4uX19fb3JpZ1N0eWxlKTtcblx0XHRcdFx0XHRcdGRlbGV0ZSBfcGluLl9fX29yaWdTdHlsZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyKTtcblx0XHRcdFx0X3Bpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBvbk1vdXNld2hlZWxPdmVyUGluKTtcblx0XHRcdFx0X3Bpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgb25Nb3VzZXdoZWVsT3ZlclBpbik7XG5cdFx0XHRcdF9waW4gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdGxvZygzLCBcInJlbW92ZWQgcGluIChyZXNldDogXCIgKyAocmVzZXQgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblxuXHRcdHZhciBfY3NzQ2xhc3Nlcyxcblx0XHQgICAgX2Nzc0NsYXNzRWxlbXMgPSBbXTtcblxuXHRcdFNjZW5lLm9uKFwiZGVzdHJveS5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0U2NlbmUucmVtb3ZlQ2xhc3NUb2dnbGUoZS5yZXNldCk7XG5cdFx0fSk7XG5cdFx0LyoqXHJcbiAgICogRGVmaW5lIGEgY3NzIGNsYXNzIG1vZGlmaWNhdGlvbiB3aGlsZSB0aGUgc2NlbmUgaXMgYWN0aXZlLiAgXHJcbiAgICogV2hlbiB0aGUgc2NlbmUgdHJpZ2dlcnMgdGhlIGNsYXNzZXMgd2lsbCBiZSBhZGRlZCB0byB0aGUgc3VwcGxpZWQgZWxlbWVudCBhbmQgcmVtb3ZlZCwgd2hlbiB0aGUgc2NlbmUgaXMgb3Zlci5cclxuICAgKiBJZiB0aGUgc2NlbmUgZHVyYXRpb24gaXMgMCB0aGUgY2xhc3NlcyB3aWxsIG9ubHkgYmUgcmVtb3ZlZCBpZiB0aGUgdXNlciBzY3JvbGxzIGJhY2sgcGFzdCB0aGUgc3RhcnQgcG9zaXRpb24uXHJcbiAgICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzZXRDbGFzc1RvZ2dsZVxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLy8gYWRkIHRoZSBjbGFzcyAnbXljbGFzcycgdG8gdGhlIGVsZW1lbnQgd2l0aCB0aGUgaWQgJ215LWVsZW0nIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lXHJcbiAgICogc2NlbmUuc2V0Q2xhc3NUb2dnbGUoXCIjbXktZWxlbVwiLCBcIm15Y2xhc3NcIik7XHJcbiAgICpcclxuICAgKiAvLyBhZGQgbXVsdGlwbGUgY2xhc3NlcyB0byBtdWx0aXBsZSBlbGVtZW50cyBkZWZpbmVkIGJ5IHRoZSBzZWxlY3RvciAnLmNsYXNzQ2hhbmdlJ1xyXG4gICAqIHNjZW5lLnNldENsYXNzVG9nZ2xlKFwiLmNsYXNzQ2hhbmdlXCIsIFwiY2xhc3MxIGNsYXNzMiBjbGFzczNcIik7XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gZWxlbWVudCAtIEEgU2VsZWN0b3IgdGFyZ2V0aW5nIG9uZSBvciBtb3JlIGVsZW1lbnRzIG9yIGEgRE9NIG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIG1vZGlmaWVkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzIC0gT25lIG9yIG1vcmUgQ2xhc3NuYW1lcyAoc2VwYXJhdGVkIGJ5IHNwYWNlKSB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byB0aGUgZWxlbWVudCBkdXJpbmcgdGhlIHNjZW5lLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuICAgKi9cblx0XHR0aGlzLnNldENsYXNzVG9nZ2xlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzZXMpIHtcblx0XHRcdHZhciBlbGVtcyA9IF91dGlsLmdldC5lbGVtZW50cyhlbGVtZW50KTtcblx0XHRcdGlmIChlbGVtcy5sZW5ndGggPT09IDAgfHwgIV91dGlsLnR5cGUuU3RyaW5nKGNsYXNzZXMpKSB7XG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIGNhbGxpbmcgbWV0aG9kICdzZXRDbGFzc1RvZ2dsZSgpJzogSW52YWxpZCBcIiArIChlbGVtcy5sZW5ndGggPT09IDAgPyBcImVsZW1lbnRcIiA6IFwiY2xhc3Nlc1wiKSArIFwiIHN1cHBsaWVkLlwiKTtcblx0XHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKF9jc3NDbGFzc0VsZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Ly8gcmVtb3ZlIG9sZCBvbmVzXG5cdFx0XHRcdFNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKCk7XG5cdFx0XHR9XG5cdFx0XHRfY3NzQ2xhc3NlcyA9IGNsYXNzZXM7XG5cdFx0XHRfY3NzQ2xhc3NFbGVtcyA9IGVsZW1zO1xuXHRcdFx0U2NlbmUub24oXCJlbnRlci5pbnRlcm5hbF9jbGFzcyBsZWF2ZS5pbnRlcm5hbF9jbGFzc1wiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHR2YXIgdG9nZ2xlID0gZS50eXBlID09PSBcImVudGVyXCIgPyBfdXRpbC5hZGRDbGFzcyA6IF91dGlsLnJlbW92ZUNsYXNzO1xuXHRcdFx0XHRfY3NzQ2xhc3NFbGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBrZXkpIHtcblx0XHRcdFx0XHR0b2dnbGUoZWxlbSwgX2Nzc0NsYXNzZXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBSZW1vdmUgdGhlIGNsYXNzIGJpbmRpbmcgZnJvbSB0aGUgc2NlbmUuXHJcbiAgICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZW1vdmVDbGFzc1RvZ2dsZVxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLy8gcmVtb3ZlIGNsYXNzIGJpbmRpbmcgZnJvbSB0aGUgc2NlbmUgd2l0aG91dCByZXNldFxyXG4gICAqIHNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKCk7XHJcbiAgICpcclxuICAgKiAvLyByZW1vdmUgY2xhc3MgYmluZGluZyBhbmQgcmVtb3ZlIHRoZSBjaGFuZ2VzIGl0IGNhdXNlZFxyXG4gICAqIHNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKHRydWUpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVzZXQ9ZmFsc2VdIC0gSWYgYGZhbHNlYCBhbmQgdGhlIGNsYXNzZXMgYXJlIGN1cnJlbnRseSBhY3RpdmUsIHRoZXkgd2lsbCByZW1haW4gb24gdGhlIGVsZW1lbnQuIElmIGB0cnVlYCB0aGV5IHdpbGwgYmUgcmVtb3ZlZC5cclxuICAgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3NUb2dnbGUgPSBmdW5jdGlvbiAocmVzZXQpIHtcblx0XHRcdGlmIChyZXNldCkge1xuXHRcdFx0XHRfY3NzQ2xhc3NFbGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBrZXkpIHtcblx0XHRcdFx0XHRfdXRpbC5yZW1vdmVDbGFzcyhlbGVtLCBfY3NzQ2xhc3Nlcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0U2NlbmUub2ZmKFwic3RhcnQuaW50ZXJuYWxfY2xhc3MgZW5kLmludGVybmFsX2NsYXNzXCIpO1xuXHRcdFx0X2Nzc0NsYXNzZXMgPSB1bmRlZmluZWQ7XG5cdFx0XHRfY3NzQ2xhc3NFbGVtcyA9IFtdO1xuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvLyBJTklUXG5cdFx0Y29uc3RydWN0KCk7XG5cdFx0cmV0dXJuIFNjZW5lO1xuXHR9O1xuXG5cdC8vIHN0b3JlIHBhZ2V3aWRlIHNjZW5lIG9wdGlvbnNcblx0dmFyIFNDRU5FX09QVElPTlMgPSB7XG5cdFx0ZGVmYXVsdHM6IHtcblx0XHRcdGR1cmF0aW9uOiAwLFxuXHRcdFx0b2Zmc2V0OiAwLFxuXHRcdFx0dHJpZ2dlckVsZW1lbnQ6IHVuZGVmaW5lZCxcblx0XHRcdHRyaWdnZXJIb29rOiAwLjUsXG5cdFx0XHRyZXZlcnNlOiB0cnVlLFxuXHRcdFx0bG9nbGV2ZWw6IDJcblx0XHR9LFxuXHRcdHZhbGlkYXRlOiB7XG5cdFx0XHRvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldCh2YWwpIHtcblx0XHRcdFx0dmFsID0gcGFyc2VGbG9hdCh2YWwpO1xuXHRcdFx0XHRpZiAoIV91dGlsLnR5cGUuTnVtYmVyKHZhbCkpIHtcblx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcIm9mZnNldFxcXCI6XCIsIHZhbF07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbDtcblx0XHRcdH0sXG5cdFx0XHR0cmlnZ2VyRWxlbWVudDogZnVuY3Rpb24gdHJpZ2dlckVsZW1lbnQodmFsKSB7XG5cdFx0XHRcdHZhbCA9IHZhbCB8fCB1bmRlZmluZWQ7XG5cdFx0XHRcdGlmICh2YWwpIHtcblx0XHRcdFx0XHR2YXIgZWxlbSA9IF91dGlsLmdldC5lbGVtZW50cyh2YWwpWzBdO1xuXHRcdFx0XHRcdGlmIChlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSkge1xuXHRcdFx0XHRcdFx0dmFsID0gZWxlbTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhyb3cgW1wiRWxlbWVudCBkZWZpbmVkIGluIG9wdGlvbiBcXFwidHJpZ2dlckVsZW1lbnRcXFwiIHdhcyBub3QgZm91bmQ6XCIsIHZhbF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0dHJpZ2dlckhvb2s6IGZ1bmN0aW9uIHRyaWdnZXJIb29rKHZhbCkge1xuXHRcdFx0XHR2YXIgdHJhbnNsYXRlID0ge1xuXHRcdFx0XHRcdFwib25DZW50ZXJcIjogMC41LFxuXHRcdFx0XHRcdFwib25FbnRlclwiOiAxLFxuXHRcdFx0XHRcdFwib25MZWF2ZVwiOiAwXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChfdXRpbC50eXBlLk51bWJlcih2YWwpKSB7XG5cdFx0XHRcdFx0dmFsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocGFyc2VGbG9hdCh2YWwpLCAxKSk7IC8vICBtYWtlIHN1cmUgaXRzIGJldHdlZWVuIDAgYW5kIDFcblx0XHRcdFx0fSBlbHNlIGlmICh2YWwgaW4gdHJhbnNsYXRlKSB7XG5cdFx0XHRcdFx0dmFsID0gdHJhbnNsYXRlW3ZhbF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJ0cmlnZ2VySG9va1xcXCI6IFwiLCB2YWxdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0cmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSh2YWwpIHtcblx0XHRcdFx0cmV0dXJuICEhdmFsOyAvLyBmb3JjZSBib29sZWFuXG5cdFx0XHR9LFxuXHRcdFx0bG9nbGV2ZWw6IGZ1bmN0aW9uIGxvZ2xldmVsKHZhbCkge1xuXHRcdFx0XHR2YWwgPSBwYXJzZUludCh2YWwpO1xuXHRcdFx0XHRpZiAoIV91dGlsLnR5cGUuTnVtYmVyKHZhbCkgfHwgdmFsIDwgMCB8fCB2YWwgPiAzKSB7XG5cdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJsb2dsZXZlbFxcXCI6XCIsIHZhbF07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbDtcblx0XHRcdH1cblx0XHR9LCAvLyBob2xkZXIgZm9yICB2YWxpZGF0aW9uIG1ldGhvZHMuIGR1cmF0aW9uIHZhbGlkYXRpb24gaXMgaGFuZGxlZCBpbiAnZ2V0dGVycy1zZXR0ZXJzLmpzJ1xuXHRcdHNoaWZ0czogW1wiZHVyYXRpb25cIiwgXCJvZmZzZXRcIiwgXCJ0cmlnZ2VySG9va1wiXSAvLyBsaXN0IG9mIG9wdGlvbnMgdGhhdCB0cmlnZ2VyIGEgYHNoaWZ0YCBldmVudFxuXHR9O1xuXHQvKlxyXG4gICogbWV0aG9kIHVzZWQgdG8gYWRkIGFuIG9wdGlvbiB0byBTY3JvbGxNYWdpYyBTY2VuZXMuXHJcbiAgKiBUT0RPOiBET0MgKHByaXZhdGUgZm9yIGRldilcclxuICAqL1xuXHRTY3JvbGxNYWdpYy5TY2VuZS5hZGRPcHRpb24gPSBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCB2YWxpZGF0aW9uQ2FsbGJhY2ssIHNoaWZ0cykge1xuXHRcdGlmICghKG5hbWUgaW4gU0NFTkVfT1BUSU9OUy5kZWZhdWx0cykpIHtcblx0XHRcdFNDRU5FX09QVElPTlMuZGVmYXVsdHNbbmFtZV0gPSBkZWZhdWx0VmFsdWU7XG5cdFx0XHRTQ0VORV9PUFRJT05TLnZhbGlkYXRlW25hbWVdID0gdmFsaWRhdGlvbkNhbGxiYWNrO1xuXHRcdFx0aWYgKHNoaWZ0cykge1xuXHRcdFx0XHRTQ0VORV9PUFRJT05TLnNoaWZ0cy5wdXNoKG5hbWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgXCJbc3RhdGljXSBTY3JvbGxNYWdpYy5TY2VuZSAtPiBDYW5ub3QgYWRkIFNjZW5lIG9wdGlvbiAnXCIgKyBuYW1lICsgXCInLCBiZWNhdXNlIGl0IGFscmVhZHkgZXhpc3RzLlwiKTtcblx0XHR9XG5cdH07XG5cdC8vIGluc3RhbmNlIGV4dGVuc2lvbiBmdW5jdGlvbiBmb3IgcGx1Z2luc1xuXHQvLyBUT0RPOiBET0MgKHByaXZhdGUgZm9yIGRldilcblx0U2Nyb2xsTWFnaWMuU2NlbmUuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuc2lvbikge1xuXHRcdHZhciBvbGRDbGFzcyA9IHRoaXM7XG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRvbGRDbGFzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0dGhpcy4kc3VwZXIgPSBfdXRpbC5leHRlbmQoe30sIHRoaXMpOyAvLyBjb3B5IHBhcmVudCBzdGF0ZVxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG5cdFx0fTtcblx0XHRfdXRpbC5leHRlbmQoU2Nyb2xsTWFnaWMuU2NlbmUsIG9sZENsYXNzKTsgLy8gY29weSBwcm9wZXJ0aWVzXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlID0gb2xkQ2xhc3MucHJvdG90eXBlOyAvLyBjb3B5IHByb3RvdHlwZVxuXHRcdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNjcm9sbE1hZ2ljLlNjZW5lOyAvLyByZXN0b3JlIGNvbnN0cnVjdG9yXG5cdH07XG5cblx0LyoqXHJcbiAgKiBUT0RPOiBET0NTIChwcml2YXRlIGZvciBkZXYpXHJcbiAgKiBAY2xhc3NcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cblxuXHRTY3JvbGxNYWdpYy5FdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lc3BhY2UsIHRhcmdldCwgdmFycykge1xuXHRcdHZhcnMgPSB2YXJzIHx8IHt9O1xuXHRcdGZvciAodmFyIGtleSBpbiB2YXJzKSB7XG5cdFx0XHR0aGlzW2tleV0gPSB2YXJzW2tleV07XG5cdFx0fVxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy50YXJnZXQgPSB0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0dGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2UgfHwgJyc7XG5cdFx0dGhpcy50aW1lU3RhbXAgPSB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LypcclxuICAqIFRPRE86IERPQ1MgKHByaXZhdGUgZm9yIGRldilcclxuICAqL1xuXG5cdHZhciBfdXRpbCA9IFNjcm9sbE1hZ2ljLl91dGlsID0gZnVuY3Rpb24gKHdpbmRvdykge1xuXHRcdHZhciBVID0ge30sXG5cdFx0ICAgIGk7XG5cblx0XHQvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBpbnRlcm5hbCBoZWxwZXJzXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cblx0XHQvLyBwYXJzZSBmbG9hdCBhbmQgZmFsbCBiYWNrIHRvIDAuXG5cdFx0dmFyIGZsb2F0dmFsID0gZnVuY3Rpb24gZmxvYXR2YWwobnVtYmVyKSB7XG5cdFx0XHRyZXR1cm4gcGFyc2VGbG9hdChudW1iZXIpIHx8IDA7XG5cdFx0fTtcblx0XHQvLyBnZXQgY3VycmVudCBzdHlsZSBJRSBzYWZlIChvdGhlcndpc2UgSUUgd291bGQgcmV0dXJuIGNhbGN1bGF0ZWQgdmFsdWVzIGZvciAnYXV0bycpXG5cdFx0dmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUoZWxlbSkge1xuXHRcdFx0cmV0dXJuIGVsZW0uY3VycmVudFN0eWxlID8gZWxlbS5jdXJyZW50U3R5bGUgOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcblx0XHR9O1xuXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgZGltZW5zaW9uICh3aWR0aCBvciBoZWlnaHQpXG5cdFx0dmFyIF9kaW1lbnNpb24gPSBmdW5jdGlvbiBfZGltZW5zaW9uKHdoaWNoLCBlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbikge1xuXHRcdFx0ZWxlbSA9IGVsZW0gPT09IGRvY3VtZW50ID8gd2luZG93IDogZWxlbTtcblx0XHRcdGlmIChlbGVtID09PSB3aW5kb3cpIHtcblx0XHRcdFx0aW5jbHVkZU1hcmdpbiA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmICghX3R5cGUuRG9tRWxlbWVudChlbGVtKSkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblx0XHRcdHdoaWNoID0gd2hpY2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3aGljaC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcblx0XHRcdHZhciBkaW1lbnNpb24gPSAob3V0ZXIgPyBlbGVtWydvZmZzZXQnICsgd2hpY2hdIHx8IGVsZW1bJ291dGVyJyArIHdoaWNoXSA6IGVsZW1bJ2NsaWVudCcgKyB3aGljaF0gfHwgZWxlbVsnaW5uZXInICsgd2hpY2hdKSB8fCAwO1xuXHRcdFx0aWYgKG91dGVyICYmIGluY2x1ZGVNYXJnaW4pIHtcblx0XHRcdFx0dmFyIHN0eWxlID0gX2dldENvbXB1dGVkU3R5bGUoZWxlbSk7XG5cdFx0XHRcdGRpbWVuc2lvbiArPSB3aGljaCA9PT0gJ0hlaWdodCcgPyBmbG9hdHZhbChzdHlsZS5tYXJnaW5Ub3ApICsgZmxvYXR2YWwoc3R5bGUubWFyZ2luQm90dG9tKSA6IGZsb2F0dmFsKHN0eWxlLm1hcmdpbkxlZnQpICsgZmxvYXR2YWwoc3R5bGUubWFyZ2luUmlnaHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRpbWVuc2lvbjtcblx0XHR9O1xuXHRcdC8vIGNvbnZlcnRzICdtYXJnaW4tdG9wJyBpbnRvICdtYXJnaW5Ub3AnXG5cdFx0dmFyIF9jYW1lbENhc2UgPSBmdW5jdGlvbiBfY2FtZWxDYXNlKHN0cikge1xuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9eW15hLXpdKyhbYS16XSkvZywgJyQxJykucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKGcpIHtcblx0XHRcdFx0cmV0dXJuIGdbMV0udG9VcHBlckNhc2UoKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBleHRlcm5hbCBoZWxwZXJzXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cblx0XHQvLyBleHRlbmQgb2JqIOKAkyBzYW1lIGFzIGpRdWVyeS5leHRlbmQoe30sIG9iakEsIG9iakIpXG5cdFx0VS5leHRlbmQgPSBmdW5jdGlvbiAob2JqKSB7XG5cdFx0XHRvYmogPSBvYmogfHwge307XG5cdFx0XHRmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICghYXJndW1lbnRzW2ldKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuXHRcdFx0XHRcdGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdFx0b2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fTtcblxuXHRcdC8vIGNoZWNrIGlmIGEgY3NzIGRpc3BsYXkgdHlwZSByZXN1bHRzIGluIG1hcmdpbi1jb2xsYXBzZSBvciBub3Rcblx0XHRVLmlzTWFyZ2luQ29sbGFwc2VUeXBlID0gZnVuY3Rpb24gKHN0cikge1xuXHRcdFx0cmV0dXJuIFtcImJsb2NrXCIsIFwiZmxleFwiLCBcImxpc3QtaXRlbVwiLCBcInRhYmxlXCIsIFwiLXdlYmtpdC1ib3hcIl0uaW5kZXhPZihzdHIpID4gLTE7XG5cdFx0fTtcblxuXHRcdC8vIGltcGxlbWVudGF0aW9uIG9mIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuXHRcdC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxXG5cdFx0dmFyIGxhc3RUaW1lID0gMCxcblx0XHQgICAgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG5cdFx0dmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdHZhciBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cdFx0Ly8gdHJ5IHZlbmRvciBwcmVmaXhlcyBpZiB0aGUgYWJvdmUgZG9lc24ndCB3b3JrXG5cdFx0Zm9yIChpID0gMDsgIV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcblx0XHRcdF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG5cdFx0fVxuXG5cdFx0Ly8gZmFsbGJhY2tzXG5cdFx0aWYgKCFfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHRfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gX3JlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuXHRcdFx0XHR2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcblx0XHRcdFx0ICAgIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSksXG5cdFx0XHRcdCAgICBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuXHRcdFx0XHR9LCB0aW1lVG9DYWxsKTtcblx0XHRcdFx0bGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG5cdFx0XHRcdHJldHVybiBpZDtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmICghX2NhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHRfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiBfY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpIHtcblx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dChpZCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRVLnJBRiA9IF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xuXHRcdFUuY0FGID0gX2NhbmNlbEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTtcblxuXHRcdHZhciBsb2dsZXZlbHMgPSBbXCJlcnJvclwiLCBcIndhcm5cIiwgXCJsb2dcIl0sXG5cdFx0ICAgIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fTtcblxuXHRcdGNvbnNvbGUubG9nID0gY29uc29sZS5sb2cgfHwgZnVuY3Rpb24gKCkge307IC8vIG5vIGNvbnNvbGUgbG9nLCB3ZWxsIC0gZG8gbm90aGluZyB0aGVuLi4uXG5cdFx0Ly8gbWFrZSBzdXJlIG1ldGhvZHMgZm9yIGFsbCBsZXZlbHMgZXhpc3QuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxvZ2xldmVscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIG1ldGhvZCA9IGxvZ2xldmVsc1tpXTtcblx0XHRcdGlmICghY29uc29sZVttZXRob2RdKSB7XG5cdFx0XHRcdGNvbnNvbGVbbWV0aG9kXSA9IGNvbnNvbGUubG9nOyAvLyBwcmVmZXIgLmxvZyBvdmVyIG5vdGhpbmdcblx0XHRcdH1cblx0XHR9XG5cdFx0VS5sb2cgPSBmdW5jdGlvbiAobG9nbGV2ZWwpIHtcblx0XHRcdGlmIChsb2dsZXZlbCA+IGxvZ2xldmVscy5sZW5ndGggfHwgbG9nbGV2ZWwgPD0gMCkgbG9nbGV2ZWwgPSBsb2dsZXZlbHMubGVuZ3RoO1xuXHRcdFx0dmFyIG5vdyA9IG5ldyBEYXRlKCksXG5cdFx0XHQgICAgdGltZSA9IChcIjBcIiArIG5vdy5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIG5vdy5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgbm93LmdldFNlY29uZHMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwMFwiICsgbm93LmdldE1pbGxpc2Vjb25kcygpKS5zbGljZSgtMyksXG5cdFx0XHQgICAgbWV0aG9kID0gbG9nbGV2ZWxzW2xvZ2xldmVsIC0gMV0sXG5cdFx0XHQgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuXHRcdFx0ICAgIGZ1bmMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKGNvbnNvbGVbbWV0aG9kXSwgY29uc29sZSk7XG5cdFx0XHRhcmdzLnVuc2hpZnQodGltZSk7XG5cdFx0XHRmdW5jLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiB0eXBlIHRlc3RpbmdcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuXHRcdHZhciBfdHlwZSA9IFUudHlwZSA9IGZ1bmN0aW9uICh2KSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpLnJlcGxhY2UoL15cXFtvYmplY3QgKC4rKVxcXSQvLCBcIiQxXCIpLnRvTG93ZXJDYXNlKCk7XG5cdFx0fTtcblx0XHRfdHlwZS5TdHJpbmcgPSBmdW5jdGlvbiAodikge1xuXHRcdFx0cmV0dXJuIF90eXBlKHYpID09PSAnc3RyaW5nJztcblx0XHR9O1xuXHRcdF90eXBlLkZ1bmN0aW9uID0gZnVuY3Rpb24gKHYpIHtcblx0XHRcdHJldHVybiBfdHlwZSh2KSA9PT0gJ2Z1bmN0aW9uJztcblx0XHR9O1xuXHRcdF90eXBlLkFycmF5ID0gZnVuY3Rpb24gKHYpIHtcblx0XHRcdHJldHVybiBBcnJheS5pc0FycmF5KHYpO1xuXHRcdH07XG5cdFx0X3R5cGUuTnVtYmVyID0gZnVuY3Rpb24gKHYpIHtcblx0XHRcdHJldHVybiAhX3R5cGUuQXJyYXkodikgJiYgdiAtIHBhcnNlRmxvYXQodikgKyAxID49IDA7XG5cdFx0fTtcblx0XHRfdHlwZS5Eb21FbGVtZW50ID0gZnVuY3Rpb24gKG8pIHtcblx0XHRcdHJldHVybiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoSFRNTEVsZW1lbnQpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIiA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBvIGluc3RhbmNlb2YgU1ZHRWxlbWVudCA6IC8vRE9NMlxuXHRcdFx0byAmJiAodHlwZW9mIG8gPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvKSkgPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBET00gRWxlbWVudCBpbmZvXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cdFx0Ly8gYWx3YXlzIHJldHVybnMgYSBsaXN0IG9mIG1hdGNoaW5nIERPTSBlbGVtZW50cywgZnJvbSBhIHNlbGVjdG9yLCBhIERPTSBlbGVtZW50IG9yIGFuIGxpc3Qgb2YgZWxlbWVudHMgb3IgZXZlbiBhbiBhcnJheSBvZiBzZWxlY3RvcnNcblx0XHR2YXIgX2dldCA9IFUuZ2V0ID0ge307XG5cdFx0X2dldC5lbGVtZW50cyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXHRcdFx0dmFyIGFyciA9IFtdO1xuXHRcdFx0aWYgKF90eXBlLlN0cmluZyhzZWxlY3RvcikpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly8gaW52YWxpZCBzZWxlY3RvclxuXHRcdFx0XHRcdHJldHVybiBhcnI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChfdHlwZShzZWxlY3RvcikgPT09ICdub2RlbGlzdCcgfHwgX3R5cGUuQXJyYXkoc2VsZWN0b3IpIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIHJlZiA9IGFyci5sZW5ndGggPSBzZWxlY3Rvci5sZW5ndGg7IGkgPCByZWY7IGkrKykge1xuXHRcdFx0XHRcdC8vIGxpc3Qgb2YgZWxlbWVudHNcblx0XHRcdFx0XHR2YXIgZWxlbSA9IHNlbGVjdG9yW2ldO1xuXHRcdFx0XHRcdGFycltpXSA9IF90eXBlLkRvbUVsZW1lbnQoZWxlbSkgPyBlbGVtIDogX2dldC5lbGVtZW50cyhlbGVtKTsgLy8gaWYgbm90IGFuIGVsZW1lbnQsIHRyeSB0byByZXNvbHZlIHJlY3Vyc2l2ZWx5XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoX3R5cGUuRG9tRWxlbWVudChzZWxlY3RvcikgfHwgc2VsZWN0b3IgPT09IGRvY3VtZW50IHx8IHNlbGVjdG9yID09PSB3aW5kb3cpIHtcblx0XHRcdFx0YXJyID0gW3NlbGVjdG9yXTsgLy8gb25seSB0aGUgZWxlbWVudFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFycjtcblx0XHR9O1xuXHRcdC8vIGdldCBzY3JvbGwgdG9wIHZhbHVlXG5cdFx0X2dldC5zY3JvbGxUb3AgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0cmV0dXJuIGVsZW0gJiYgdHlwZW9mIGVsZW0uc2Nyb2xsVG9wID09PSAnbnVtYmVyJyA/IGVsZW0uc2Nyb2xsVG9wIDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IDA7XG5cdFx0fTtcblx0XHQvLyBnZXQgc2Nyb2xsIGxlZnQgdmFsdWVcblx0XHRfZ2V0LnNjcm9sbExlZnQgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0cmV0dXJuIGVsZW0gJiYgdHlwZW9mIGVsZW0uc2Nyb2xsTGVmdCA9PT0gJ251bWJlcicgPyBlbGVtLnNjcm9sbExlZnQgOiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgMDtcblx0XHR9O1xuXHRcdC8vIGdldCBlbGVtZW50IGhlaWdodFxuXHRcdF9nZXQud2lkdGggPSBmdW5jdGlvbiAoZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcblx0XHRcdHJldHVybiBfZGltZW5zaW9uKCd3aWR0aCcsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKTtcblx0XHR9O1xuXHRcdC8vIGdldCBlbGVtZW50IHdpZHRoXG5cdFx0X2dldC5oZWlnaHQgPSBmdW5jdGlvbiAoZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcblx0XHRcdHJldHVybiBfZGltZW5zaW9uKCdoZWlnaHQnLCBlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbik7XG5cdFx0fTtcblxuXHRcdC8vIGdldCBlbGVtZW50IHBvc2l0aW9uIChvcHRpb25hbGx5IHJlbGF0aXZlIHRvIHZpZXdwb3J0KVxuXHRcdF9nZXQub2Zmc2V0ID0gZnVuY3Rpb24gKGVsZW0sIHJlbGF0aXZlVG9WaWV3cG9ydCkge1xuXHRcdFx0dmFyIG9mZnNldCA9IHtcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRsZWZ0OiAwXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGVsZW0gJiYgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcblx0XHRcdFx0Ly8gY2hlY2sgaWYgYXZhaWxhYmxlXG5cdFx0XHRcdHZhciByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0b2Zmc2V0LnRvcCA9IHJlY3QudG9wO1xuXHRcdFx0XHRvZmZzZXQubGVmdCA9IHJlY3QubGVmdDtcblx0XHRcdFx0aWYgKCFyZWxhdGl2ZVRvVmlld3BvcnQpIHtcblx0XHRcdFx0XHQvLyBjbGllbnRSZWN0IGlzIGJ5IGRlZmF1bHQgcmVsYXRpdmUgdG8gdmlld3BvcnQuLi5cblx0XHRcdFx0XHRvZmZzZXQudG9wICs9IF9nZXQuc2Nyb2xsVG9wKCk7XG5cdFx0XHRcdFx0b2Zmc2V0LmxlZnQgKz0gX2dldC5zY3JvbGxMZWZ0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBvZmZzZXQ7XG5cdFx0fTtcblxuXHRcdC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIERPTSBFbGVtZW50IG1hbmlwdWxhdGlvblxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG5cdFx0VS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjbGFzc25hbWUpIHtcblx0XHRcdGlmIChjbGFzc25hbWUpIHtcblx0XHRcdFx0aWYgKGVsZW0uY2xhc3NMaXN0KSBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NuYW1lKTtlbHNlIGVsZW0uY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzbmFtZTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdFUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbSwgY2xhc3NuYW1lKSB7XG5cdFx0XHRpZiAoY2xhc3NuYW1lKSB7XG5cdFx0XHRcdGlmIChlbGVtLmNsYXNzTGlzdCkgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzbmFtZSk7ZWxzZSBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzbmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8vIGlmIG9wdGlvbnMgaXMgc3RyaW5nIC0+IHJldHVybnMgY3NzIHZhbHVlXG5cdFx0Ly8gaWYgb3B0aW9ucyBpcyBhcnJheSAtPiByZXR1cm5zIG9iamVjdCB3aXRoIGNzcyB2YWx1ZSBwYWlyc1xuXHRcdC8vIGlmIG9wdGlvbnMgaXMgb2JqZWN0IC0+IHNldCBuZXcgY3NzIHZhbHVlc1xuXHRcdFUuY3NzID0gZnVuY3Rpb24gKGVsZW0sIG9wdGlvbnMpIHtcblx0XHRcdGlmIChfdHlwZS5TdHJpbmcob3B0aW9ucykpIHtcblx0XHRcdFx0cmV0dXJuIF9nZXRDb21wdXRlZFN0eWxlKGVsZW0pW19jYW1lbENhc2Uob3B0aW9ucyldO1xuXHRcdFx0fSBlbHNlIGlmIChfdHlwZS5BcnJheShvcHRpb25zKSkge1xuXHRcdFx0XHR2YXIgb2JqID0ge30sXG5cdFx0XHRcdCAgICBzdHlsZSA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuXHRcdFx0XHRvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbiwga2V5KSB7XG5cdFx0XHRcdFx0b2JqW29wdGlvbl0gPSBzdHlsZVtfY2FtZWxDYXNlKG9wdGlvbildO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIG9iajtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdFx0dmFyIHZhbCA9IG9wdGlvbnNbb3B0aW9uXTtcblx0XHRcdFx0XHRpZiAodmFsID09IHBhcnNlRmxvYXQodmFsKSkge1xuXHRcdFx0XHRcdFx0Ly8gYXNzdW1lIHBpeGVsIGZvciBzZWVtaW5nbHkgbnVtZXJpY2FsIHZhbHVlc1xuXHRcdFx0XHRcdFx0dmFsICs9ICdweCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsZW0uc3R5bGVbX2NhbWVsQ2FzZShvcHRpb24pXSA9IHZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gVTtcblx0fSh3aW5kb3cgfHwge30pO1xuXG5cdHJldHVybiBTY3JvbGxNYWdpYztcbn0pKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gd2luZG93TW9jayA6IHdpbmRvdywgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyA/IHt9IDogZG9jdW1lbnQpO1xuXG52YXIgQ29udHJvbGxlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG52YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKENvbnRyb2xsZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbnRyb2xsZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udHJvbGxlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBDb250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29udHJvbGxlcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgY29udHJvbGxlcjogbnVsbFxuICAgIH0sIF90ZW1wKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjb250cm9sbGVyUHJvcHMgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nXSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250cm9sbGVyOiBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcihjb250cm9sbGVyUHJvcHMpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5jb250cm9sbGVyID0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIGNvbnRyb2xsZXIgPSB0aGlzLnN0YXRlLmNvbnRyb2xsZXI7XG5cblxuICAgICAgaWYgKCFjb250cm9sbGVyKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIENvbnRyb2xsZXJDb250ZXh0LlByb3ZpZGVyLFxuICAgICAgICB7IHZhbHVlOiBjb250cm9sbGVyIH0sXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ29udHJvbGxlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuLyohXHJcbiAqIFNjcm9sbE1hZ2ljIHYyLjAuNyAoMjAxOS0wNS0wNylcclxuICogVGhlIGphdmFzY3JpcHQgbGlicmFyeSBmb3IgbWFnaWNhbCBzY3JvbGwgaW50ZXJhY3Rpb25zLlxyXG4gKiAoYykgMjAxOSBKYW4gUGFlcGtlIChAamFucGFlcGtlKVxyXG4gKiBQcm9qZWN0IFdlYnNpdGU6IGh0dHA6Ly9zY3JvbGxtYWdpYy5pb1xyXG4gKiBcclxuICogQHZlcnNpb24gMi4wLjdcclxuICogQGxpY2Vuc2UgRHVhbCBsaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZSBhbmQgR1BMLlxyXG4gKiBAYXV0aG9yIEphbiBQYWVwa2UgLSBlLW1haWxAamFucGFlcGtlLmRlXHJcbiAqXHJcbiAqIEBmaWxlIERlYnVnIEV4dGVuc2lvbiBmb3IgU2Nyb2xsTWFnaWMuXHJcbiAqL1xuZnVuY3Rpb24gZGVidWdBZGRJbmRpY2F0b3JzIChTY3JvbGxNYWdpYykge1xuXHR2YXIgTkFNRVNQQUNFID0gXCJkZWJ1Zy5hZGRJbmRpY2F0b3JzXCI7XG5cblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dmFyIHdpbmRvdyA9IHt9O1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKCkge307XG5cdH1cblxuXHR2YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9LFxuXHQgICAgZXJyID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChjb25zb2xlLmVycm9yIHx8IGNvbnNvbGUubG9nIHx8IGZ1bmN0aW9uICgpIHt9LCBjb25zb2xlKTtcblx0aWYgKCFTY3JvbGxNYWdpYykge1xuXHRcdGVycihcIihcIiArIE5BTUVTUEFDRSArIFwiKSAtPiBFUlJPUjogVGhlIFNjcm9sbE1hZ2ljIG1haW4gbW9kdWxlIGNvdWxkIG5vdCBiZSBmb3VuZC4gUGxlYXNlIG1ha2Ugc3VyZSBpdCdzIGxvYWRlZCBiZWZvcmUgdGhpcyBwbHVnaW4gb3IgdXNlIGFuIGFzeW5jaHJvbm91cyBsb2FkZXIgbGlrZSByZXF1aXJlanMuXCIpO1xuXHR9XG5cblx0Ly8gcGx1Z2luIHNldHRpbmdzXG5cdHZhciBGT05UX1NJWkUgPSBcIjAuODVlbVwiLFxuXHQgICAgWklOREVYID0gXCI5OTk5XCIsXG5cdCAgICBFREdFX09GRlNFVCA9IDE1OyAvLyBtaW5pbXVtIGVkZ2UgZGlzdGFuY2UsIGFkZGVkIHRvIGluZGVudGF0aW9uXG5cblx0Ly8gb3ZlcmFsbCB2YXJzXG5cdHZhciBfdXRpbCA9IFNjcm9sbE1hZ2ljLl91dGlsLFxuXHQgICAgX2F1dG9pbmRleCA9IDA7XG5cblx0U2Nyb2xsTWFnaWMuU2NlbmUuZXh0ZW5kKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgU2NlbmUgPSB0aGlzLFxuXHRcdCAgICBfaW5kaWNhdG9yO1xuXG5cdFx0LyoqXHJcbiAgICogQWRkIHZpc3VhbCBpbmRpY2F0b3JzIGZvciBhIFNjcm9sbE1hZ2ljLlNjZW5lLiAgXHJcbiAgICogQG1lbWJlcm9mISBkZWJ1Zy5hZGRJbmRpY2F0b3JzI1xyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyBhZGQgYmFzaWMgaW5kaWNhdG9yc1xyXG4gICAqIHNjZW5lLmFkZEluZGljYXRvcnMoKVxyXG4gICAqXHJcbiAgICogLy8gcGFzc2luZyBvcHRpb25zXHJcbiAgICogc2NlbmUuYWRkSW5kaWNhdG9ycyh7bmFtZTogXCJwaW4gc2NlbmVcIiwgY29sb3JFbmQ6IFwiI0ZGRkZGRlwifSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgb3B0aW9ucyBmb3IgdGhlIGluZGljYXRvcnMuXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IFtvcHRpb25zLnBhcmVudF0gLSBBIHNlbGVjdG9yLCBET00gT2JqZWN0IG9yIGEgalF1ZXJ5IG9iamVjdCB0aGF0IHRoZSBpbmRpY2F0b3JzIHNob3VsZCBiZSBhZGRlZCB0by4gIFxyXG4gICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgSWYgdW5kZWZpbmVkLCB0aGUgY29udHJvbGxlcidzIGNvbnRhaW5lciB3aWxsIGJlIHVzZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm5hbWU9XCJcIl0gLSBUaGlzIHN0cmluZyB3aWxsIGJlIGRpc3BsYXllZCBhdCB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2F0b3JzIG9mIHRoZSBzY2VuZSBmb3IgaWRlbnRpZmljYXRpb24gcHVycG9zZXMuIElmIG5vIG5hbWUgaXMgc3VwcGxpZWQgYW4gYXV0b21hdGljIGluZGV4IHdpbGwgYmUgdXNlZC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuaW5kZW50PTBdIC0gQWRkaXRpb25hbCBwb3NpdGlvbiBvZmZzZXQgZm9yIHRoZSBpbmRpY2F0b3JzICh1c2VmdWwsIHdoZW4gaGF2aW5nIG11bHRpcGxlIHNjZW5lcyBzdGFydGluZyBhdCB0aGUgc2FtZSBwb3NpdGlvbikuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNvbG9yU3RhcnQ9Z3JlZW5dIC0gQ1NTIGNvbG9yIGRlZmluaXRpb24gZm9yIHRoZSBzdGFydCBpbmRpY2F0b3IuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNvbG9yRW5kPXJlZF0gLSBDU1MgY29sb3IgZGVmaW5pdGlvbiBmb3IgdGhlIGVuZCBpbmRpY2F0b3IuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNvbG9yVHJpZ2dlcj1ibHVlXSAtIENTUyBjb2xvciBkZWZpbml0aW9uIGZvciB0aGUgdHJpZ2dlciBpbmRpY2F0b3IuXHJcbiAgICovXG5cdFx0U2NlbmUuYWRkSW5kaWNhdG9ycyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0XHRpZiAoIV9pbmRpY2F0b3IpIHtcblx0XHRcdFx0dmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHRcdGluZGVudDogMCxcblx0XHRcdFx0XHRwYXJlbnQ6IHVuZGVmaW5lZCxcblx0XHRcdFx0XHRjb2xvclN0YXJ0OiBcImdyZWVuXCIsXG5cdFx0XHRcdFx0Y29sb3JFbmQ6IFwicmVkXCIsXG5cdFx0XHRcdFx0Y29sb3JUcmlnZ2VyOiBcImJsdWVcIlxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdG9wdGlvbnMgPSBfdXRpbC5leHRlbmQoe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyk7XG5cblx0XHRcdFx0X2F1dG9pbmRleCsrO1xuXHRcdFx0XHRfaW5kaWNhdG9yID0gbmV3IEluZGljYXRvcihTY2VuZSwgb3B0aW9ucyk7XG5cblx0XHRcdFx0U2NlbmUub24oXCJhZGQucGx1Z2luX2FkZEluZGljYXRvcnNcIiwgX2luZGljYXRvci5hZGQpO1xuXHRcdFx0XHRTY2VuZS5vbihcInJlbW92ZS5wbHVnaW5fYWRkSW5kaWNhdG9yc1wiLCBfaW5kaWNhdG9yLnJlbW92ZSk7XG5cdFx0XHRcdFNjZW5lLm9uKFwiZGVzdHJveS5wbHVnaW5fYWRkSW5kaWNhdG9yc1wiLCBTY2VuZS5yZW1vdmVJbmRpY2F0b3JzKTtcblxuXHRcdFx0XHQvLyBpdCB0aGUgc2NlbmUgYWxyZWFkeSBoYXMgYSBjb250cm9sbGVyIHdlIGNhbiBzdGFydCByaWdodCBhd2F5LlxuXHRcdFx0XHRpZiAoU2NlbmUuY29udHJvbGxlcigpKSB7XG5cdFx0XHRcdFx0X2luZGljYXRvci5hZGQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvKipcclxuICAgKiBSZW1vdmVzIHZpc3VhbCBpbmRpY2F0b3JzIGZyb20gYSBTY3JvbGxNYWdpYy5TY2VuZS5cclxuICAgKiBAbWVtYmVyb2YhIGRlYnVnLmFkZEluZGljYXRvcnMjXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIHJlbW92ZSBwcmV2aW91c2x5IGFkZGVkIGluZGljYXRvcnNcclxuICAgKiBzY2VuZS5yZW1vdmVJbmRpY2F0b3JzKClcclxuICAgKlxyXG4gICAqL1xuXHRcdFNjZW5lLnJlbW92ZUluZGljYXRvcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoX2luZGljYXRvcikge1xuXHRcdFx0XHRfaW5kaWNhdG9yLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLm9mZihcIioucGx1Z2luX2FkZEluZGljYXRvcnNcIik7XG5cdFx0XHRcdF9pbmRpY2F0b3IgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblx0fSk7XG5cblx0LypcclxuICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAqIEV4dGVuc2lvbiBmb3IgY29udHJvbGxlciB0byBzdG9yZSBhbmQgdXBkYXRlIHJlbGF0ZWQgaW5kaWNhdG9yc1xyXG4gICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICovXG5cdC8vIGFkZCBvcHRpb24gdG8gZ2xvYmFsbHkgYXV0by1hZGQgaW5kaWNhdG9ycyB0byBzY2VuZXNcblx0LyoqXHJcbiAgKiBFdmVyeSBTY3JvbGxNYWdpYy5Db250cm9sbGVyIGluc3RhbmNlIG5vdyBhY2NlcHRzIGFuIGFkZGl0aW9uYWwgb3B0aW9uLiAgXHJcbiAgKiBTZWUge0BsaW5rIFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXJ9IGZvciBhIGNvbXBsZXRlIGxpc3Qgb2YgdGhlIHN0YW5kYXJkIG9wdGlvbnMuXHJcbiAgKiBAbWVtYmVyb2YhIGRlYnVnLmFkZEluZGljYXRvcnMjXHJcbiAgKiBAbWV0aG9kIG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKG9wdGlvbnMpXHJcbiAgKiBAZXhhbXBsZVxyXG4gICogLy8gbWFrZSBhIGNvbnRyb2xsZXIgYW5kIGFkZCBpbmRpY2F0b3JzIHRvIGFsbCBzY2VuZXMgYXR0YWNoZWRcclxuICAqIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoe2FkZEluZGljYXRvcnM6IHRydWV9KTtcclxuICAqIC8vIHRoaXMgc2NlbmUgd2lsbCBhdXRvbWF0aWNhbGx5IGhhdmUgaW5kaWNhdG9ycyBhZGRlZCB0byBpdFxyXG4gICogbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKClcclxuICAqICAgICAgICAgICAgICAgIC5hZGRUbyhjb250cm9sbGVyKTtcclxuICAqXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9ucyBmb3IgdGhlIENvbnRyb2xsZXIuXHJcbiAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmFkZEluZGljYXRvcnM9ZmFsc2VdIC0gSWYgc2V0IHRvIGB0cnVlYCBldmVyeSBzY2VuZSB0aGF0IGlzIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyIHdpbGwgYXV0b21hdGljYWxseSBnZXQgaW5kaWNhdG9ycyBhZGRlZCB0byBpdC5cclxuICAqL1xuXHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLmFkZE9wdGlvbihcImFkZEluZGljYXRvcnNcIiwgZmFsc2UpO1xuXHQvLyBleHRlbmQgQ29udHJvbGxlclxuXHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLmV4dGVuZChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIENvbnRyb2xsZXIgPSB0aGlzLFxuXHRcdCAgICBfaW5mbyA9IENvbnRyb2xsZXIuaW5mbygpLFxuXHRcdCAgICBfY29udGFpbmVyID0gX2luZm8uY29udGFpbmVyLFxuXHRcdCAgICBfaXNEb2N1bWVudCA9IF9pbmZvLmlzRG9jdW1lbnQsXG5cdFx0ICAgIF92ZXJ0aWNhbCA9IF9pbmZvLnZlcnRpY2FsLFxuXHRcdCAgICBfaW5kaWNhdG9ycyA9IHsgLy8gY29udGFpbmVyIGZvciBhbGwgaW5kaWNhdG9ycyBhbmQgbWV0aG9kc1xuXHRcdFx0Z3JvdXBzOiBbXVxuXHRcdH07XG5cblx0XHR2YXIgbG9nID0gZnVuY3Rpb24gbG9nKCkge1xuXHRcdFx0aWYgKENvbnRyb2xsZXIuX2xvZykge1xuXHRcdFx0XHQvLyBub3QgYXZhaWxhYmxlLCB3aGVuIG1haW4gc291cmNlIG1pbmlmaWVkXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEsIDAsIFwiKFwiICsgTkFNRVNQQUNFICsgXCIpXCIsIFwiLT5cIik7XG5cdFx0XHRcdENvbnRyb2xsZXIuX2xvZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0aWYgKENvbnRyb2xsZXIuX2luZGljYXRvcnMpIHtcblx0XHRcdGxvZygyLCBcIldBUk5JTkc6IFNjZW5lIGFscmVhZHkgaGFzIGEgcHJvcGVydHkgJ19pbmRpY2F0b3JzJywgd2hpY2ggd2lsbCBiZSBvdmVyd3JpdHRlbiBieSBwbHVnaW4uXCIpO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBpbmRpY2F0b3JzIGNvbnRhaW5lclxuXHRcdHRoaXMuX2luZGljYXRvcnMgPSBfaW5kaWNhdG9ycztcblx0XHQvKlxyXG4gIFx0bmVlZGVkIHVwZGF0ZXM6XHJcbiAgXHQrKysrKysrKysrKysrKytcclxuICBcdHN0YXJ0L2VuZCBwb3NpdGlvbiBvbiBzY2VuZSBzaGlmdCAoaGFuZGxlZCBpbiBJbmRpY2F0b3IgY2xhc3MpXHJcbiAgXHR0cmlnZ2VyIHBhcmFtZXRlcnMgb24gdHJpZ2dlckhvb2sgdmFsdWUgY2hhbmdlIChoYW5kbGVkIGluIEluZGljYXRvciBjbGFzcylcclxuICBcdGJvdW5kcyBwb3NpdGlvbiBvbiBjb250YWluZXIgc2Nyb2xsIG9yIHJlc2l6ZSAodG8ga2VlcCBhbGlnbm1lbnQgdG8gYm90dG9tL3JpZ2h0KVxyXG4gIFx0dHJpZ2dlciBwb3NpdGlvbiBvbiBjb250YWluZXIgcmVzaXplLCB3aW5kb3cgcmVzaXplIChpZiBjb250YWluZXIgaXNuJ3QgZG9jdW1lbnQpIGFuZCB3aW5kb3cgc2Nyb2xsIChpZiBjb250YWluZXIgaXNuJ3QgZG9jdW1lbnQpXHJcbiAgKi9cblxuXHRcdC8vIGV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gYXNzb2NpYXRlZCBib3VuZHMgbWFya2VycyBuZWVkIHRvIGJlIHJlcG9zaXRpb25lZFxuXHRcdHZhciBoYW5kbGVCb3VuZHNQb3NpdGlvbkNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUJvdW5kc1Bvc2l0aW9uQ2hhbmdlKCkge1xuXHRcdFx0X2luZGljYXRvcnMudXBkYXRlQm91bmRzUG9zaXRpb25zKCk7XG5cdFx0fTtcblxuXHRcdC8vIGV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gYXNzb2NpYXRlZCB0cmlnZ2VyIGdyb3VwcyBuZWVkIHRvIGJlIHJlcG9zaXRpb25lZFxuXHRcdHZhciBoYW5kbGVUcmlnZ2VyUG9zaXRpb25DaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVUcmlnZ2VyUG9zaXRpb25DaGFuZ2UoKSB7XG5cdFx0XHRfaW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBQb3NpdGlvbnMoKTtcblx0XHR9O1xuXG5cdFx0X2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVRyaWdnZXJQb3NpdGlvbkNoYW5nZSk7XG5cdFx0aWYgKCFfaXNEb2N1bWVudCkge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVHJpZ2dlclBvc2l0aW9uQ2hhbmdlKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVRyaWdnZXJQb3NpdGlvbkNoYW5nZSk7XG5cdFx0fVxuXHRcdC8vIHVwZGF0ZSBhbGwgcmVsYXRlZCBib3VuZHMgY29udGFpbmVyc1xuXHRcdF9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVCb3VuZHNQb3NpdGlvbkNoYW5nZSk7XG5cdFx0X2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZUJvdW5kc1Bvc2l0aW9uQ2hhbmdlKTtcblxuXHRcdC8vIHVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBib3VuZHMgY29udGFpbmVyIHRvIGFsaWduZWQgdG8gdGhlIHJpZ2h0IGZvciB2ZXJ0aWNhbCBjb250YWluZXJzIGFuZCB0byB0aGUgYm90dG9tIGZvciBob3Jpem9udGFsXG5cdFx0dGhpcy5faW5kaWNhdG9ycy51cGRhdGVCb3VuZHNQb3NpdGlvbnMgPSBmdW5jdGlvbiAoc3BlY2lmaWNJbmRpY2F0b3IpIHtcblx0XHRcdHZhciAvLyBjb25zdGFudCBmb3IgYWxsIGJvdW5kc1xuXHRcdFx0Z3JvdXBzID0gc3BlY2lmaWNJbmRpY2F0b3IgPyBbX3V0aWwuZXh0ZW5kKHt9LCBzcGVjaWZpY0luZGljYXRvci50cmlnZ2VyR3JvdXAsIHtcblx0XHRcdFx0bWVtYmVyczogW3NwZWNpZmljSW5kaWNhdG9yXVxuXHRcdFx0fSldIDogLy8gY3JlYXRlIGEgZ3JvdXAgd2l0aCBvbmx5IG9uZSBlbGVtZW50XG5cdFx0XHRfaW5kaWNhdG9ycy5ncm91cHMsXG5cdFx0XHQgICAgLy8gdXNlIGFsbFxuXHRcdFx0ZyA9IGdyb3Vwcy5sZW5ndGgsXG5cdFx0XHQgICAgY3NzID0ge30sXG5cdFx0XHQgICAgcGFyYW1Qb3MgPSBfdmVydGljYWwgPyBcImxlZnRcIiA6IFwidG9wXCIsXG5cdFx0XHQgICAgcGFyYW1EaW1lbnNpb24gPSBfdmVydGljYWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiLFxuXHRcdFx0ICAgIGVkZ2UgPSBfdmVydGljYWwgPyBfdXRpbC5nZXQuc2Nyb2xsTGVmdChfY29udGFpbmVyKSArIF91dGlsLmdldC53aWR0aChfY29udGFpbmVyKSAtIEVER0VfT0ZGU0VUIDogX3V0aWwuZ2V0LnNjcm9sbFRvcChfY29udGFpbmVyKSArIF91dGlsLmdldC5oZWlnaHQoX2NvbnRhaW5lcikgLSBFREdFX09GRlNFVCxcblx0XHRcdCAgICBiLFxuXHRcdFx0ICAgIHRyaWdnZXJTaXplLFxuXHRcdFx0ICAgIGdyb3VwO1xuXHRcdFx0d2hpbGUgKGctLSkge1xuXHRcdFx0XHQvLyBncm91cCBsb29wXG5cdFx0XHRcdGdyb3VwID0gZ3JvdXBzW2ddO1xuXHRcdFx0XHRiID0gZ3JvdXAubWVtYmVycy5sZW5ndGg7XG5cdFx0XHRcdHRyaWdnZXJTaXplID0gX3V0aWwuZ2V0W3BhcmFtRGltZW5zaW9uXShncm91cC5lbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHR3aGlsZSAoYi0tKSB7XG5cdFx0XHRcdFx0Ly8gaW5kaWNhdG9ycyBsb29wXG5cdFx0XHRcdFx0Y3NzW3BhcmFtUG9zXSA9IGVkZ2UgLSB0cmlnZ2VyU2l6ZTtcblx0XHRcdFx0XHRfdXRpbC5jc3MoZ3JvdXAubWVtYmVyc1tiXS5ib3VuZHMsIGNzcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gdXBkYXRlcyB0aGUgcG9zaXRpb25zIG9mIGFsbCB0cmlnZ2VyIGdyb3VwcyBhdHRhY2hlZCB0byBhIGNvbnRyb2xsZXIgb3IgYSBzcGVjaWZpYyBvbmUsIGlmIHByb3ZpZGVkXG5cdFx0dGhpcy5faW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBQb3NpdGlvbnMgPSBmdW5jdGlvbiAoc3BlY2lmaWNHcm91cCkge1xuXHRcdFx0dmFyIC8vIGNvbnN0YW50IHZhcnNcblx0XHRcdGdyb3VwcyA9IHNwZWNpZmljR3JvdXAgPyBbc3BlY2lmaWNHcm91cF0gOiBfaW5kaWNhdG9ycy5ncm91cHMsXG5cdFx0XHQgICAgaSA9IGdyb3Vwcy5sZW5ndGgsXG5cdFx0XHQgICAgY29udGFpbmVyID0gX2lzRG9jdW1lbnQgPyBkb2N1bWVudC5ib2R5IDogX2NvbnRhaW5lcixcblx0XHRcdCAgICBjb250YWluZXJPZmZzZXQgPSBfaXNEb2N1bWVudCA/IHtcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRsZWZ0OiAwXG5cdFx0XHR9IDogX3V0aWwuZ2V0Lm9mZnNldChjb250YWluZXIsIHRydWUpLFxuXHRcdFx0ICAgIGVkZ2UgPSBfdmVydGljYWwgPyBfdXRpbC5nZXQud2lkdGgoX2NvbnRhaW5lcikgLSBFREdFX09GRlNFVCA6IF91dGlsLmdldC5oZWlnaHQoX2NvbnRhaW5lcikgLSBFREdFX09GRlNFVCxcblx0XHRcdCAgICBwYXJhbURpbWVuc2lvbiA9IF92ZXJ0aWNhbCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCIsXG5cdFx0XHQgICAgcGFyYW1UcmFuc2Zvcm0gPSBfdmVydGljYWwgPyBcIllcIiA6IFwiWFwiO1xuXHRcdFx0dmFyIC8vIGNoYW5naW5nIHZhcnNcblx0XHRcdGdyb3VwLCBlbGVtLCBwb3MsIGVsZW1TaXplLCB0cmFuc2Zvcm07XG5cdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdGdyb3VwID0gZ3JvdXBzW2ldO1xuXHRcdFx0XHRlbGVtID0gZ3JvdXAuZWxlbWVudDtcblx0XHRcdFx0cG9zID0gZ3JvdXAudHJpZ2dlckhvb2sgKiBDb250cm9sbGVyLmluZm8oXCJzaXplXCIpO1xuXHRcdFx0XHRlbGVtU2l6ZSA9IF91dGlsLmdldFtwYXJhbURpbWVuc2lvbl0oZWxlbS5maXJzdENoaWxkLmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHR0cmFuc2Zvcm0gPSBwb3MgPiBlbGVtU2l6ZSA/IFwidHJhbnNsYXRlXCIgKyBwYXJhbVRyYW5zZm9ybSArIFwiKC0xMDAlKVwiIDogXCJcIjtcblxuXHRcdFx0XHRfdXRpbC5jc3MoZWxlbSwge1xuXHRcdFx0XHRcdHRvcDogY29udGFpbmVyT2Zmc2V0LnRvcCArIChfdmVydGljYWwgPyBwb3MgOiBlZGdlIC0gZ3JvdXAubWVtYmVyc1swXS5vcHRpb25zLmluZGVudCksXG5cdFx0XHRcdFx0bGVmdDogY29udGFpbmVyT2Zmc2V0LmxlZnQgKyAoX3ZlcnRpY2FsID8gZWRnZSAtIGdyb3VwLm1lbWJlcnNbMF0ub3B0aW9ucy5pbmRlbnQgOiBwb3MpXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRfdXRpbC5jc3MoZWxlbS5maXJzdENoaWxkLmZpcnN0Q2hpbGQsIHtcblx0XHRcdFx0XHRcIi1tcy10cmFuc2Zvcm1cIjogdHJhbnNmb3JtLFxuXHRcdFx0XHRcdFwiLXdlYmtpdC10cmFuc2Zvcm1cIjogdHJhbnNmb3JtLFxuXHRcdFx0XHRcdFwidHJhbnNmb3JtXCI6IHRyYW5zZm9ybVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gdXBkYXRlcyB0aGUgbGFiZWwgZm9yIHRoZSBncm91cCB0byBjb250YWluIHRoZSBuYW1lLCBpZiBpdCBvbmx5IGhhcyBvbmUgbWVtYmVyXG5cdFx0dGhpcy5faW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBMYWJlbCA9IGZ1bmN0aW9uIChncm91cCkge1xuXHRcdFx0dmFyIHRleHQgPSBcInRyaWdnZXJcIiArIChncm91cC5tZW1iZXJzLmxlbmd0aCA+IDEgPyBcIlwiIDogXCIgXCIgKyBncm91cC5tZW1iZXJzWzBdLm9wdGlvbnMubmFtZSksXG5cdFx0XHQgICAgZWxlbSA9IGdyb3VwLmVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLFxuXHRcdFx0ICAgIGRvVXBkYXRlID0gZWxlbS50ZXh0Q29udGVudCAhPT0gdGV4dDtcblx0XHRcdGlmIChkb1VwZGF0ZSkge1xuXHRcdFx0XHRlbGVtLnRleHRDb250ZW50ID0gdGV4dDtcblx0XHRcdFx0aWYgKF92ZXJ0aWNhbCkge1xuXHRcdFx0XHRcdC8vIGJvdW5kcyBwb3NpdGlvbiBpcyBkZXBlbmRlbnQgb24gdGV4dCBsZW5ndGgsIHNvIHVwZGF0ZVxuXHRcdFx0XHRcdF9pbmRpY2F0b3JzLnVwZGF0ZUJvdW5kc1Bvc2l0aW9ucygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8vIGFkZCBpbmRpY2F0b3JzIGlmIGdsb2JhbCBvcHRpb24gaXMgc2V0XG5cdFx0dGhpcy5hZGRTY2VuZSA9IGZ1bmN0aW9uIChuZXdTY2VuZSkge1xuXG5cdFx0XHRpZiAodGhpcy5fb3B0aW9ucy5hZGRJbmRpY2F0b3JzICYmIG5ld1NjZW5lIGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuU2NlbmUgJiYgbmV3U2NlbmUuY29udHJvbGxlcigpID09PSBDb250cm9sbGVyKSB7XG5cdFx0XHRcdG5ld1NjZW5lLmFkZEluZGljYXRvcnMoKTtcblx0XHRcdH1cblx0XHRcdC8vIGNhbGwgb3JpZ2luYWwgZGVzdHJveSBtZXRob2Rcblx0XHRcdHRoaXMuJHN1cGVyLmFkZFNjZW5lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fTtcblxuXHRcdC8vIHJlbW92ZSBhbGwgcHJldmlvdXNseSBzZXQgbGlzdGVuZXJzIG9uIGRlc3Ryb3lcblx0XHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRfY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVHJpZ2dlclBvc2l0aW9uQ2hhbmdlKTtcblx0XHRcdGlmICghX2lzRG9jdW1lbnQpIHtcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVHJpZ2dlclBvc2l0aW9uQ2hhbmdlKTtcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlVHJpZ2dlclBvc2l0aW9uQ2hhbmdlKTtcblx0XHRcdH1cblx0XHRcdF9jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVCb3VuZHNQb3NpdGlvbkNoYW5nZSk7XG5cdFx0XHRfY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlQm91bmRzUG9zaXRpb25DaGFuZ2UpO1xuXHRcdFx0Ly8gY2FsbCBvcmlnaW5hbCBkZXN0cm95IG1ldGhvZFxuXHRcdFx0dGhpcy4kc3VwZXIuZGVzdHJveS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH07XG5cdFx0cmV0dXJuIENvbnRyb2xsZXI7XG5cdH0pO1xuXG5cdC8qXHJcbiAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgKiBJbnRlcm5hbCBjbGFzcyBmb3IgdGhlIGNvbnN0cnVjdGlvbiBvZiBJbmRpY2F0b3JzXHJcbiAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgKi9cblx0dmFyIEluZGljYXRvciA9IGZ1bmN0aW9uIEluZGljYXRvcihTY2VuZSwgb3B0aW9ucykge1xuXHRcdHZhciBJbmRpY2F0b3IgPSB0aGlzLFxuXHRcdCAgICBfZWxlbUJvdW5kcyA9IFRQTC5ib3VuZHMoKSxcblx0XHQgICAgX2VsZW1TdGFydCA9IFRQTC5zdGFydChvcHRpb25zLmNvbG9yU3RhcnQpLFxuXHRcdCAgICBfZWxlbUVuZCA9IFRQTC5lbmQob3B0aW9ucy5jb2xvckVuZCksXG5cdFx0ICAgIF9ib3VuZHNDb250YWluZXIgPSBvcHRpb25zLnBhcmVudCAmJiBfdXRpbC5nZXQuZWxlbWVudHMob3B0aW9ucy5wYXJlbnQpWzBdLFxuXHRcdCAgICBfdmVydGljYWwsXG5cdFx0ICAgIF9jdHJsO1xuXG5cdFx0dmFyIGxvZyA9IGZ1bmN0aW9uIGxvZygpIHtcblx0XHRcdGlmIChTY2VuZS5fbG9nKSB7XG5cdFx0XHRcdC8vIG5vdCBhdmFpbGFibGUsIHdoZW4gbWFpbiBzb3VyY2UgbWluaWZpZWRcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgMCwgXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIilcIiwgXCItPlwiKTtcblx0XHRcdFx0U2NlbmUuX2xvZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgX2F1dG9pbmRleDtcblxuXHRcdC8vIHByZXBhcmUgYm91bmRzIGVsZW1lbnRzXG5cdFx0X2VsZW1TdGFydC5maXJzdENoaWxkLnRleHRDb250ZW50ICs9IFwiIFwiICsgb3B0aW9ucy5uYW1lO1xuXHRcdF9lbGVtRW5kLnRleHRDb250ZW50ICs9IFwiIFwiICsgb3B0aW9ucy5uYW1lO1xuXHRcdF9lbGVtQm91bmRzLmFwcGVuZENoaWxkKF9lbGVtU3RhcnQpO1xuXHRcdF9lbGVtQm91bmRzLmFwcGVuZENoaWxkKF9lbGVtRW5kKTtcblxuXHRcdC8vIHNldCBwdWJsaWMgdmFyaWFibGVzXG5cdFx0SW5kaWNhdG9yLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdEluZGljYXRvci5ib3VuZHMgPSBfZWxlbUJvdW5kcztcblx0XHQvLyB3aWxsIGJlIHNldCBsYXRlclxuXHRcdEluZGljYXRvci50cmlnZ2VyR3JvdXAgPSB1bmRlZmluZWQ7XG5cblx0XHQvLyBhZGQgaW5kaWNhdG9ycyB0byBET01cblx0XHR0aGlzLmFkZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdF9jdHJsID0gU2NlbmUuY29udHJvbGxlcigpO1xuXHRcdFx0X3ZlcnRpY2FsID0gX2N0cmwuaW5mbyhcInZlcnRpY2FsXCIpO1xuXG5cdFx0XHR2YXIgaXNEb2N1bWVudCA9IF9jdHJsLmluZm8oXCJpc0RvY3VtZW50XCIpO1xuXG5cdFx0XHRpZiAoIV9ib3VuZHNDb250YWluZXIpIHtcblx0XHRcdFx0Ly8gbm8gcGFyZW50IHN1cHBsaWVkIG9yIGRvZXNudCBleGlzdFxuXHRcdFx0XHRfYm91bmRzQ29udGFpbmVyID0gaXNEb2N1bWVudCA/IGRvY3VtZW50LmJvZHkgOiBfY3RybC5pbmZvKFwiY29udGFpbmVyXCIpOyAvLyBjaGVjayBpZiB3aW5kb3cvZG9jdW1lbnQgKHRoZW4gdXNlIGJvZHkpXG5cdFx0XHR9XG5cdFx0XHRpZiAoIWlzRG9jdW1lbnQgJiYgX3V0aWwuY3NzKF9ib3VuZHNDb250YWluZXIsIFwicG9zaXRpb25cIikgPT09ICdzdGF0aWMnKSB7XG5cdFx0XHRcdC8vIHBvc2l0aW9uIG1vZGUgbmVlZGVkIGZvciBjb3JyZWN0IHBvc2l0aW9uaW5nIG9mIGluZGljYXRvcnNcblx0XHRcdFx0X3V0aWwuY3NzKF9ib3VuZHNDb250YWluZXIsIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhZGQgbGlzdGVuZXJzIGZvciB1cGRhdGVzXG5cdFx0XHRTY2VuZS5vbihcImNoYW5nZS5wbHVnaW5fYWRkSW5kaWNhdG9yc1wiLCBoYW5kbGVUcmlnZ2VyUGFyYW1zQ2hhbmdlKTtcblx0XHRcdFNjZW5lLm9uKFwic2hpZnQucGx1Z2luX2FkZEluZGljYXRvcnNcIiwgaGFuZGxlQm91bmRzUGFyYW1zQ2hhbmdlKTtcblxuXHRcdFx0Ly8gdXBkYXRlcyB0cmlnZ2VyICYgYm91bmRzICh3aWxsIGFkZCBlbGVtZW50cyBpZiBuZWVkZWQpXG5cdFx0XHR1cGRhdGVUcmlnZ2VyR3JvdXAoKTtcblx0XHRcdHVwZGF0ZUJvdW5kcygpO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Ly8gZG8gYWZ0ZXIgYWxsIGV4ZWN1dGlvbiBpcyBmaW5pc2hlZCBvdGhlcndpc2Ugc29tZXRpbWVzIHNpemUgY2FsY3VsYXRpb25zIGFyZSBvZmZcblx0XHRcdFx0X2N0cmwuX2luZGljYXRvcnMudXBkYXRlQm91bmRzUG9zaXRpb25zKEluZGljYXRvcik7XG5cdFx0XHR9LCAwKTtcblxuXHRcdFx0bG9nKDMsIFwiYWRkZWQgaW5kaWNhdG9yc1wiKTtcblx0XHR9O1xuXG5cdFx0Ly8gcmVtb3ZlIGluZGljYXRvcnMgZnJvbSBET01cblx0XHR0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChJbmRpY2F0b3IudHJpZ2dlckdyb3VwKSB7XG5cdFx0XHRcdC8vIGlmIG5vdCBzZXQgdGhlcmUncyBub3RoaW5nIHRvIHJlbW92ZVxuXHRcdFx0XHRTY2VuZS5vZmYoXCJjaGFuZ2UucGx1Z2luX2FkZEluZGljYXRvcnNcIiwgaGFuZGxlVHJpZ2dlclBhcmFtc0NoYW5nZSk7XG5cdFx0XHRcdFNjZW5lLm9mZihcInNoaWZ0LnBsdWdpbl9hZGRJbmRpY2F0b3JzXCIsIGhhbmRsZUJvdW5kc1BhcmFtc0NoYW5nZSk7XG5cblx0XHRcdFx0aWYgKEluZGljYXRvci50cmlnZ2VyR3JvdXAubWVtYmVycy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0Ly8ganVzdCByZW1vdmUgZnJvbSBtZW1iZXJsaXN0IG9mIG9sZCBncm91cFxuXHRcdFx0XHRcdHZhciBncm91cCA9IEluZGljYXRvci50cmlnZ2VyR3JvdXA7XG5cdFx0XHRcdFx0Z3JvdXAubWVtYmVycy5zcGxpY2UoZ3JvdXAubWVtYmVycy5pbmRleE9mKEluZGljYXRvciksIDEpO1xuXHRcdFx0XHRcdF9jdHJsLl9pbmRpY2F0b3JzLnVwZGF0ZVRyaWdnZXJHcm91cExhYmVsKGdyb3VwKTtcblx0XHRcdFx0XHRfY3RybC5faW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBQb3NpdGlvbnMoZ3JvdXApO1xuXHRcdFx0XHRcdEluZGljYXRvci50cmlnZ2VyR3JvdXAgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIGNvbXBsZXRlIGdyb3VwXG5cdFx0XHRcdFx0cmVtb3ZlVHJpZ2dlckdyb3VwKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVtb3ZlQm91bmRzKCk7XG5cblx0XHRcdFx0bG9nKDMsIFwicmVtb3ZlZCBpbmRpY2F0b3JzXCIpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBpbnRlcm5hbCBFdmVudCBIYW5kbGVyc1xyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuXHRcdC8vIGV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gYm91bmRzIHBhcmFtcyBjaGFuZ2Vcblx0XHR2YXIgaGFuZGxlQm91bmRzUGFyYW1zQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQm91bmRzUGFyYW1zQ2hhbmdlKCkge1xuXHRcdFx0dXBkYXRlQm91bmRzKCk7XG5cdFx0fTtcblxuXHRcdC8vIGV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gdHJpZ2dlciBwYXJhbXMgY2hhbmdlXG5cdFx0dmFyIGhhbmRsZVRyaWdnZXJQYXJhbXNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVUcmlnZ2VyUGFyYW1zQ2hhbmdlKGUpIHtcblx0XHRcdGlmIChlLndoYXQgPT09IFwidHJpZ2dlckhvb2tcIikge1xuXHRcdFx0XHR1cGRhdGVUcmlnZ2VyR3JvdXAoKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LypcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQm91bmRzIChzdGFydCAvIHN0b3ApIG1hbmFnZW1lbnRcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cblx0XHQvLyBhZGRzIGFuIG5ldyBib3VuZHMgZWxlbWVudHMgdG8gdGhlIGFycmF5IGFuZCB0byB0aGUgRE9NXG5cdFx0dmFyIGFkZEJvdW5kcyA9IGZ1bmN0aW9uIGFkZEJvdW5kcygpIHtcblx0XHRcdHZhciB2ID0gX2N0cmwuaW5mbyhcInZlcnRpY2FsXCIpO1xuXHRcdFx0Ly8gYXBwbHkgc3R1ZmYgd2UgZGlkbid0IGtub3cgYmVmb3JlLi4uXG5cdFx0XHRfdXRpbC5jc3MoX2VsZW1TdGFydC5maXJzdENoaWxkLCB7XG5cdFx0XHRcdFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiOiB2ID8gMSA6IDAsXG5cdFx0XHRcdFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCI6IHYgPyAwIDogMSxcblx0XHRcdFx0XCJib3R0b21cIjogdiA/IC0xIDogb3B0aW9ucy5pbmRlbnQsXG5cdFx0XHRcdFwicmlnaHRcIjogdiA/IG9wdGlvbnMuaW5kZW50IDogLTEsXG5cdFx0XHRcdFwicGFkZGluZ1wiOiB2ID8gXCIwIDhweFwiIDogXCIycHggNHB4XCJcblx0XHRcdH0pO1xuXHRcdFx0X3V0aWwuY3NzKF9lbGVtRW5kLCB7XG5cdFx0XHRcdFwiYm9yZGVyLXRvcC13aWR0aFwiOiB2ID8gMSA6IDAsXG5cdFx0XHRcdFwiYm9yZGVyLWxlZnQtd2lkdGhcIjogdiA/IDAgOiAxLFxuXHRcdFx0XHRcInRvcFwiOiB2ID8gXCIxMDAlXCIgOiBcIlwiLFxuXHRcdFx0XHRcInJpZ2h0XCI6IHYgPyBvcHRpb25zLmluZGVudCA6IFwiXCIsXG5cdFx0XHRcdFwiYm90dG9tXCI6IHYgPyBcIlwiIDogb3B0aW9ucy5pbmRlbnQsXG5cdFx0XHRcdFwibGVmdFwiOiB2ID8gXCJcIiA6IFwiMTAwJVwiLFxuXHRcdFx0XHRcInBhZGRpbmdcIjogdiA/IFwiMCA4cHhcIiA6IFwiMnB4IDRweFwiXG5cdFx0XHR9KTtcblx0XHRcdC8vIGFwcGVuZFxuXHRcdFx0X2JvdW5kc0NvbnRhaW5lci5hcHBlbmRDaGlsZChfZWxlbUJvdW5kcyk7XG5cdFx0fTtcblxuXHRcdC8vIHJlbW92ZSBib3VuZHMgZnJvbSBsaXN0IGFuZCBET01cblx0XHR2YXIgcmVtb3ZlQm91bmRzID0gZnVuY3Rpb24gcmVtb3ZlQm91bmRzKCkge1xuXHRcdFx0X2VsZW1Cb3VuZHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZWxlbUJvdW5kcyk7XG5cdFx0fTtcblxuXHRcdC8vIHVwZGF0ZSB0aGUgc3RhcnQgYW5kIGVuZCBwb3NpdGlvbnMgb2YgdGhlIHNjZW5lXG5cdFx0dmFyIHVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uIHVwZGF0ZUJvdW5kcygpIHtcblx0XHRcdGlmIChfZWxlbUJvdW5kcy5wYXJlbnROb2RlICE9PSBfYm91bmRzQ29udGFpbmVyKSB7XG5cdFx0XHRcdGFkZEJvdW5kcygpOyAvLyBBZGQgQm91bmRzIGVsZW1lbnRzIChzdGFydC9lbmQpXG5cdFx0XHR9XG5cdFx0XHR2YXIgY3NzID0ge307XG5cdFx0XHRjc3NbX3ZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiXSA9IFNjZW5lLnRyaWdnZXJQb3NpdGlvbigpO1xuXHRcdFx0Y3NzW192ZXJ0aWNhbCA/IFwiaGVpZ2h0XCIgOiBcIndpZHRoXCJdID0gU2NlbmUuZHVyYXRpb24oKTtcblx0XHRcdF91dGlsLmNzcyhfZWxlbUJvdW5kcywgY3NzKTtcblx0XHRcdF91dGlsLmNzcyhfZWxlbUVuZCwge1xuXHRcdFx0XHRkaXNwbGF5OiBTY2VuZS5kdXJhdGlvbigpID4gMCA/IFwiXCIgOiBcIm5vbmVcIlxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIHRyaWdnZXIgYW5kIHRyaWdnZXIgZ3JvdXAgbWFuYWdlbWVudFxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuXHRcdC8vIGFkZHMgYW4gbmV3IHRyaWdnZXIgZ3JvdXAgdG8gdGhlIGFycmF5IGFuZCB0byB0aGUgRE9NXG5cdFx0dmFyIGFkZFRyaWdnZXJHcm91cCA9IGZ1bmN0aW9uIGFkZFRyaWdnZXJHcm91cCgpIHtcblx0XHRcdHZhciB0cmlnZ2VyRWxlbSA9IFRQTC50cmlnZ2VyKG9wdGlvbnMuY29sb3JUcmlnZ2VyKTsgLy8gbmV3IHRyaWdnZXIgZWxlbWVudFxuXHRcdFx0dmFyIGNzcyA9IHt9O1xuXHRcdFx0Y3NzW192ZXJ0aWNhbCA/IFwicmlnaHRcIiA6IFwiYm90dG9tXCJdID0gMDtcblx0XHRcdGNzc1tfdmVydGljYWwgPyBcImJvcmRlci10b3Atd2lkdGhcIiA6IFwiYm9yZGVyLWxlZnQtd2lkdGhcIl0gPSAxO1xuXHRcdFx0X3V0aWwuY3NzKHRyaWdnZXJFbGVtLmZpcnN0Q2hpbGQsIGNzcyk7XG5cdFx0XHRfdXRpbC5jc3ModHJpZ2dlckVsZW0uZmlyc3RDaGlsZC5maXJzdENoaWxkLCB7XG5cdFx0XHRcdHBhZGRpbmc6IF92ZXJ0aWNhbCA/IFwiMCA4cHggM3B4IDhweFwiIDogXCIzcHggNHB4XCJcblx0XHRcdH0pO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0cmlnZ2VyRWxlbSk7IC8vIGRpcmVjdGx5IGFkZCB0byBib2R5XG5cdFx0XHR2YXIgbmV3R3JvdXAgPSB7XG5cdFx0XHRcdHRyaWdnZXJIb29rOiBTY2VuZS50cmlnZ2VySG9vaygpLFxuXHRcdFx0XHRlbGVtZW50OiB0cmlnZ2VyRWxlbSxcblx0XHRcdFx0bWVtYmVyczogW0luZGljYXRvcl1cblx0XHRcdH07XG5cdFx0XHRfY3RybC5faW5kaWNhdG9ycy5ncm91cHMucHVzaChuZXdHcm91cCk7XG5cdFx0XHRJbmRpY2F0b3IudHJpZ2dlckdyb3VwID0gbmV3R3JvdXA7XG5cdFx0XHQvLyB1cGRhdGUgcmlnaHQgYXdheVxuXHRcdFx0X2N0cmwuX2luZGljYXRvcnMudXBkYXRlVHJpZ2dlckdyb3VwTGFiZWwobmV3R3JvdXApO1xuXHRcdFx0X2N0cmwuX2luZGljYXRvcnMudXBkYXRlVHJpZ2dlckdyb3VwUG9zaXRpb25zKG5ld0dyb3VwKTtcblx0XHR9O1xuXG5cdFx0dmFyIHJlbW92ZVRyaWdnZXJHcm91cCA9IGZ1bmN0aW9uIHJlbW92ZVRyaWdnZXJHcm91cCgpIHtcblx0XHRcdF9jdHJsLl9pbmRpY2F0b3JzLmdyb3Vwcy5zcGxpY2UoX2N0cmwuX2luZGljYXRvcnMuZ3JvdXBzLmluZGV4T2YoSW5kaWNhdG9yLnRyaWdnZXJHcm91cCksIDEpO1xuXHRcdFx0SW5kaWNhdG9yLnRyaWdnZXJHcm91cC5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoSW5kaWNhdG9yLnRyaWdnZXJHcm91cC5lbGVtZW50KTtcblx0XHRcdEluZGljYXRvci50cmlnZ2VyR3JvdXAgPSB1bmRlZmluZWQ7XG5cdFx0fTtcblxuXHRcdC8vIHVwZGF0ZXMgdGhlIHRyaWdnZXIgZ3JvdXAgLT4gZWl0aGVyIGpvaW4gZXhpc3Rpbmcgb3IgYWRkIG5ldyBvbmVcblx0XHQvKlx0XHJcbiAgICogTG9naWM6XHJcbiAgICogMSBpZiBhIHRyaWdnZXIgZ3JvdXAgZXhpc3QsIGNoZWNrIGlmIGl0J3MgaW4gc3luYyB3aXRoIFNjZW5lIHNldHRpbmdzIOKAkyBpZiBzbywgbm90aGluZyBlbHNlIG5lZWRzIHRvIGhhcHBlblxyXG4gICAqIDIgdHJ5IHRvIGZpbmQgYW4gZXhpc3Rpbmcgb25lIHRoYXQgbWF0Y2hlcyBTY2VuZSBwYXJhbWV0ZXJzXHJcbiAgICogXHQgMi4xIElmIGEgbWF0Y2ggaXMgZm91bmQgY2hlY2sgaWYgYWxyZWFkeSBhc3NpZ25lZCB0byBhbiBleGlzdGluZyBncm91cFxyXG4gICAqXHRcdFx0IElmIHNvOlxyXG4gICAqICAgICAgIEE6IGl0IHdhcyB0aGUgbGFzdCBtZW1iZXIgb2YgZXhpc3RpbmcgZ3JvdXAgLT4ga2lsbCB3aG9sZSBncm91cFxyXG4gICAqICAgICAgIEI6IHRoZSBleGlzdGluZyBncm91cCBoYXMgb3RoZXIgbWVtYmVycyAtPiBqdXN0IHJlbW92ZSBmcm9tIG1lbWJlciBsaXN0XHJcbiAgICpcdCAyLjIgQXNzaWduIHRvIG1hdGNoaW5nIGdyb3VwXHJcbiAgICogMyBpZiBubyBuZXcgbWF0Y2ggY291bGQgYmUgZm91bmQsIGNoZWNrIGlmIGFzc2lnbmVkIHRvIGV4aXN0aW5nIGdyb3VwXHJcbiAgICogICBBOiB5ZXMsIGFuZCBpdCdzIHRoZSBvbmx5IG1lbWJlciAtPiBqdXN0IHVwZGF0ZSBwYXJhbWV0ZXJzIGFuZCBwb3NpdGlvbnMgYW5kIGtlZXAgdXNpbmcgdGhpcyBncm91cFxyXG4gICAqICAgQjogeWVzIGJ1dCB0aGVyZSBhcmUgb3RoZXIgbWVtYmVycyAtPiByZW1vdmUgZnJvbSBtZW1iZXIgbGlzdCBhbmQgY3JlYXRlIGEgbmV3IG9uZVxyXG4gICAqICAgQzogbm8sIHNvIGNyZWF0ZSBhIG5ldyBvbmVcclxuICAgKi9cblx0XHR2YXIgdXBkYXRlVHJpZ2dlckdyb3VwID0gZnVuY3Rpb24gdXBkYXRlVHJpZ2dlckdyb3VwKCkge1xuXHRcdFx0dmFyIHRyaWdnZXJIb29rID0gU2NlbmUudHJpZ2dlckhvb2soKSxcblx0XHRcdCAgICBjbG9zZUVub3VnaCA9IDAuMDAwMTtcblxuXHRcdFx0Ly8gSGF2ZSBhIGdyb3VwLCBjaGVjayBpZiBpdCBzdGlsbCBtYXRjaGVzXG5cdFx0XHRpZiAoSW5kaWNhdG9yLnRyaWdnZXJHcm91cCkge1xuXHRcdFx0XHRpZiAoTWF0aC5hYnMoSW5kaWNhdG9yLnRyaWdnZXJHcm91cC50cmlnZ2VySG9vayAtIHRyaWdnZXJIb29rKSA8IGNsb3NlRW5vdWdoKSB7XG5cdFx0XHRcdFx0Ly8gX3V0aWwubG9nKDAsIFwidHJpZ2dlclwiLCBvcHRpb25zLm5hbWUsIFwiLT5cIiwgXCJubyBuZWVkIHRvIGNoYW5nZSwgc3RpbGwgaW4gc3luY1wiKTtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFsbCBnb29kXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIERvbid0IGhhdmUgYSBncm91cCwgY2hlY2sgaWYgYSBtYXRjaGluZyBvbmUgZXhpc3RzXG5cdFx0XHQvLyBfdXRpbC5sb2coMCwgXCJ0cmlnZ2VyXCIsIG9wdGlvbnMubmFtZSwgXCItPlwiLCBcIm91dCBvZiBzeW5jIVwiKTtcblx0XHRcdHZhciBncm91cHMgPSBfY3RybC5faW5kaWNhdG9ycy5ncm91cHMsXG5cdFx0XHQgICAgZ3JvdXAsXG5cdFx0XHQgICAgaSA9IGdyb3Vwcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdGdyb3VwID0gZ3JvdXBzW2ldO1xuXHRcdFx0XHRpZiAoTWF0aC5hYnMoZ3JvdXAudHJpZ2dlckhvb2sgLSB0cmlnZ2VySG9vaykgPCBjbG9zZUVub3VnaCkge1xuXHRcdFx0XHRcdC8vIGZvdW5kIGEgbWF0Y2ghXG5cdFx0XHRcdFx0Ly8gX3V0aWwubG9nKDAsIFwidHJpZ2dlclwiLCBvcHRpb25zLm5hbWUsIFwiLT5cIiwgXCJmb3VuZCBtYXRjaFwiKTtcblx0XHRcdFx0XHRpZiAoSW5kaWNhdG9yLnRyaWdnZXJHcm91cCkge1xuXHRcdFx0XHRcdFx0Ly8gZG8gSSBoYXZlIGFuIG9sZCBncm91cCB0aGF0IGlzIG91dCBvZiBzeW5jP1xuXHRcdFx0XHRcdFx0aWYgKEluZGljYXRvci50cmlnZ2VyR3JvdXAubWVtYmVycy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0Ly8gaXMgaXQgdGhlIG9ubHkgcmVtYWluaW5nIGdyb3VwP1xuXHRcdFx0XHRcdFx0XHQvLyBfdXRpbC5sb2coMCwgXCJ0cmlnZ2VyXCIsIG9wdGlvbnMubmFtZSwgXCItPlwiLCBcImtpbGxcIik7XG5cdFx0XHRcdFx0XHRcdC8vIHdhcyB0aGUgbGFzdCBtZW1iZXIsIHJlbW92ZSB0aGUgd2hvbGUgZ3JvdXBcblx0XHRcdFx0XHRcdFx0cmVtb3ZlVHJpZ2dlckdyb3VwKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRJbmRpY2F0b3IudHJpZ2dlckdyb3VwLm1lbWJlcnMuc3BsaWNlKEluZGljYXRvci50cmlnZ2VyR3JvdXAubWVtYmVycy5pbmRleE9mKEluZGljYXRvciksIDEpOyAvLyBqdXN0IHJlbW92ZSBmcm9tIG1lbWJlcmxpc3Qgb2Ygb2xkIGdyb3VwXG5cdFx0XHRcdFx0XHRcdF9jdHJsLl9pbmRpY2F0b3JzLnVwZGF0ZVRyaWdnZXJHcm91cExhYmVsKEluZGljYXRvci50cmlnZ2VyR3JvdXApO1xuXHRcdFx0XHRcdFx0XHRfY3RybC5faW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBQb3NpdGlvbnMoSW5kaWNhdG9yLnRyaWdnZXJHcm91cCk7XG5cdFx0XHRcdFx0XHRcdC8vIF91dGlsLmxvZygwLCBcInRyaWdnZXJcIiwgb3B0aW9ucy5uYW1lLCBcIi0+XCIsIFwicmVtb3ZpbmcgZnJvbSBwcmV2aW91cyBtZW1iZXIgbGlzdFwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gam9pbiBuZXcgZ3JvdXBcblx0XHRcdFx0XHRncm91cC5tZW1iZXJzLnB1c2goSW5kaWNhdG9yKTtcblx0XHRcdFx0XHRJbmRpY2F0b3IudHJpZ2dlckdyb3VwID0gZ3JvdXA7XG5cdFx0XHRcdFx0X2N0cmwuX2luZGljYXRvcnMudXBkYXRlVHJpZ2dlckdyb3VwTGFiZWwoZ3JvdXApO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBhdCB0aGlzIHBvaW50IEkgYW0gb2J2aW91c2x5IG91dCBvZiBzeW5jIGFuZCBkb24ndCBtYXRjaCBhbnkgb3RoZXIgZ3JvdXBcblx0XHRcdGlmIChJbmRpY2F0b3IudHJpZ2dlckdyb3VwKSB7XG5cdFx0XHRcdGlmIChJbmRpY2F0b3IudHJpZ2dlckdyb3VwLm1lbWJlcnMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0Ly8gX3V0aWwubG9nKDAsIFwidHJpZ2dlclwiLCBvcHRpb25zLm5hbWUsIFwiLT5cIiwgXCJ1cGRhdGluZyBleGlzdGluZ1wiKTtcblx0XHRcdFx0XHQvLyBvdXQgb2Ygc3luYyBidXQgaSdtIHRoZSBvbmx5IG1lbWJlciA9PiBqdXN0IGNoYW5nZSBhbmQgdXBkYXRlXG5cdFx0XHRcdFx0SW5kaWNhdG9yLnRyaWdnZXJHcm91cC50cmlnZ2VySG9vayA9IHRyaWdnZXJIb29rO1xuXHRcdFx0XHRcdF9jdHJsLl9pbmRpY2F0b3JzLnVwZGF0ZVRyaWdnZXJHcm91cFBvc2l0aW9ucyhJbmRpY2F0b3IudHJpZ2dlckdyb3VwKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gX3V0aWwubG9nKDAsIFwidHJpZ2dlclwiLCBvcHRpb25zLm5hbWUsIFwiLT5cIiwgXCJyZW1vdmluZyBmcm9tIHByZXZpb3VzIG1lbWJlciBsaXN0XCIpO1xuXHRcdFx0XHRcdEluZGljYXRvci50cmlnZ2VyR3JvdXAubWVtYmVycy5zcGxpY2UoSW5kaWNhdG9yLnRyaWdnZXJHcm91cC5tZW1iZXJzLmluZGV4T2YoSW5kaWNhdG9yKSwgMSk7IC8vIGp1c3QgcmVtb3ZlIGZyb20gbWVtYmVybGlzdCBvZiBvbGQgZ3JvdXBcblx0XHRcdFx0XHRfY3RybC5faW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBMYWJlbChJbmRpY2F0b3IudHJpZ2dlckdyb3VwKTtcblx0XHRcdFx0XHRfY3RybC5faW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBQb3NpdGlvbnMoSW5kaWNhdG9yLnRyaWdnZXJHcm91cCk7XG5cdFx0XHRcdFx0SW5kaWNhdG9yLnRyaWdnZXJHcm91cCA9IHVuZGVmaW5lZDsgLy8gbmVlZCBhIGJyYW5kIG5ldyBncm91cC4uLlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBfdXRpbC5sb2coMCwgXCJ0cmlnZ2VyXCIsIG9wdGlvbnMubmFtZSwgXCItPlwiLCBcImFkZCBhIG5ldyBvbmVcIik7XG5cdFx0XHQvLyBkaWQgbm90IGZpbmQgYW55IG1hdGNoLCBtYWtlIG5ldyB0cmlnZ2VyIGdyb3VwXG5cdFx0XHRhZGRUcmlnZ2VyR3JvdXAoKTtcblx0XHR9O1xuXHR9O1xuXG5cdC8qXHJcbiAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgKiBUZW1wbGF0ZXMgZm9yIHRoZSBpbmRpY2F0b3JzXHJcbiAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgKi9cblx0dmFyIFRQTCA9IHtcblx0XHRzdGFydDogZnVuY3Rpb24gc3RhcnQoY29sb3IpIHtcblx0XHRcdC8vIGlubmVyIGVsZW1lbnQgKGZvciBib3R0b20gb2Zmc2V0IC0xLCB3aGlsZSBrZWVwaW5nIHRvcCBwb3NpdGlvbiAwKVxuXHRcdFx0dmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGlubmVyLnRleHRDb250ZW50ID0gXCJzdGFydFwiO1xuXHRcdFx0X3V0aWwuY3NzKGlubmVyLCB7XG5cdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdG92ZXJmbG93OiBcInZpc2libGVcIixcblx0XHRcdFx0XCJib3JkZXItd2lkdGhcIjogMCxcblx0XHRcdFx0XCJib3JkZXItc3R5bGVcIjogXCJzb2xpZFwiLFxuXHRcdFx0XHRjb2xvcjogY29sb3IsXG5cdFx0XHRcdFwiYm9yZGVyLWNvbG9yXCI6IGNvbG9yXG5cdFx0XHR9KTtcblx0XHRcdHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHQvLyB3cmFwcGVyXG5cdFx0XHRfdXRpbC5jc3MoZSwge1xuXHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXHRcdFx0XHRvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXG5cdFx0XHRcdHdpZHRoOiAwLFxuXHRcdFx0XHRoZWlnaHQ6IDBcblx0XHRcdH0pO1xuXHRcdFx0ZS5hcHBlbmRDaGlsZChpbm5lcik7XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9LFxuXHRcdGVuZDogZnVuY3Rpb24gZW5kKGNvbG9yKSB7XG5cdFx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZS50ZXh0Q29udGVudCA9IFwiZW5kXCI7XG5cdFx0XHRfdXRpbC5jc3MoZSwge1xuXHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXHRcdFx0XHRvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXG5cdFx0XHRcdFwiYm9yZGVyLXdpZHRoXCI6IDAsXG5cdFx0XHRcdFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcblx0XHRcdFx0Y29sb3I6IGNvbG9yLFxuXHRcdFx0XHRcImJvcmRlci1jb2xvclwiOiBjb2xvclxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9LFxuXHRcdGJvdW5kczogZnVuY3Rpb24gYm91bmRzKCkge1xuXHRcdFx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdF91dGlsLmNzcyhlLCB7XG5cdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdG92ZXJmbG93OiBcInZpc2libGVcIixcblx0XHRcdFx0XCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxuXHRcdFx0XHRcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiLFxuXHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBGT05UX1NJWkVcblx0XHRcdH0pO1xuXHRcdFx0ZS5zdHlsZS56SW5kZXggPSBaSU5ERVg7XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9LFxuXHRcdHRyaWdnZXI6IGZ1bmN0aW9uIHRyaWdnZXIoY29sb3IpIHtcblx0XHRcdC8vIGlubmVyIHRvIGJlIGFib3ZlIG9yIGJlbG93IGxpbmUgYnV0IGtlZXAgcG9zaXRpb25cblx0XHRcdHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0aW5uZXIudGV4dENvbnRlbnQgPSBcInRyaWdnZXJcIjtcblx0XHRcdF91dGlsLmNzcyhpbm5lciwge1xuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cdFx0XHR9KTtcblx0XHRcdC8vIGlubmVyIHdyYXBwZXIgZm9yIHJpZ2h0OiAwIGFuZCBtYWluIGVsZW1lbnQgaGFzIG5vIHNpemVcblx0XHRcdHZhciB3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRfdXRpbC5jc3Modywge1xuXHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXHRcdFx0XHRvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXG5cdFx0XHRcdFwiYm9yZGVyLXdpZHRoXCI6IDAsXG5cdFx0XHRcdFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcblx0XHRcdFx0Y29sb3I6IGNvbG9yLFxuXHRcdFx0XHRcImJvcmRlci1jb2xvclwiOiBjb2xvclxuXHRcdFx0fSk7XG5cdFx0XHR3LmFwcGVuZENoaWxkKGlubmVyKTtcblx0XHRcdC8vIHdyYXBwZXJcblx0XHRcdHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRfdXRpbC5jc3MoZSwge1xuXHRcdFx0XHRwb3NpdGlvbjogXCJmaXhlZFwiLFxuXHRcdFx0XHRvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXG5cdFx0XHRcdFwid2hpdGUtc3BhY2VcIjogXCJub3dyYXBcIixcblx0XHRcdFx0XCJwb2ludGVyLWV2ZW50c1wiOiBcIm5vbmVcIixcblx0XHRcdFx0XCJmb250LXNpemVcIjogRk9OVF9TSVpFXG5cdFx0XHR9KTtcblx0XHRcdGUuc3R5bGUuekluZGV4ID0gWklOREVYO1xuXHRcdFx0ZS5hcHBlbmRDaGlsZCh3KTtcblx0XHRcdHJldHVybiBlO1xuXHRcdH1cblx0fTtcbn1cblxuZGVidWdBZGRJbmRpY2F0b3JzKFNjcm9sbE1hZ2ljKTtcblxudmFyIHJlZk9ySW5uZXJSZWYgPSBmdW5jdGlvbiByZWZPcklubmVyUmVmKGNoaWxkKSB7XG4gIGlmIChjaGlsZC50eXBlICYmIGNoaWxkLnR5cGUuJCR0eXBlb2YgJiYgY2hpbGQudHlwZS4kJHR5cGVvZi50b1N0cmluZygpID09PSAnU3ltYm9sKHJlYWN0LmZvcndhcmRfcmVmKScpIHtcbiAgICByZXR1cm4gJ3JlZic7XG4gIH1cblxuICAvLyBzdHlsZWQtY29tcG9uZW50cyA8IDRcbiAgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZS5zdHlsZWRDb21wb25lbnRJZCkge1xuICAgIHJldHVybiAnaW5uZXJSZWYnO1xuICB9XG5cbiAgcmV0dXJuICdyZWYnO1xufTtcblxudmFyIGlzR1NBUCA9IGZ1bmN0aW9uIGlzR1NBUChjaGlsZCkge1xuICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGQpID09PSAxICYmIGNoaWxkLnR5cGUgJiYgKGNoaWxkLnR5cGUuZGlzcGxheU5hbWUgPT09ICdUd2VlbicgfHwgY2hpbGQudHlwZS5kaXNwbGF5TmFtZSA9PT0gJ1RpbWVsaW5lJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgY29udHJvbEdTQVAgPSBmdW5jdGlvbiBjb250cm9sR1NBUChjaGlsZCwgcHJvZ3Jlc3MsIGV2ZW50KSB7XG4gIGlmIChpc0dTQVAoY2hpbGQpKSB7XG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIGNoaWxkLnByb3BzLCB7IHRvdGFsUHJvZ3Jlc3M6IHByb2dyZXNzLCBwYXVzZWQ6IHRydWUgfSk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIG51bGwsXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGNoaWxkLnR5cGUsIHByb3BzKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGNoaWxkO1xufTtcblxudmFyIGNhbGxDaGlsZEZ1bmN0aW9uID0gZnVuY3Rpb24gY2FsbENoaWxkRnVuY3Rpb24oY2hpbGRyZW4sIHByb2dyZXNzLCBldmVudCkge1xuICBpZiAoY2hpbGRyZW4gJiYgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuKHByb2dyZXNzLCBldmVudCk7XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuO1xufTtcblxudmFyIGdldENoaWxkID0gZnVuY3Rpb24gZ2V0Q2hpbGQoY2hpbGRyZW4sIHByb2dyZXNzLCBldmVudCkge1xuICBjaGlsZHJlbiA9IGNvbnRyb2xHU0FQKGNoaWxkcmVuLCBwcm9ncmVzcywgZXZlbnQpO1xuICBjaGlsZHJlbiA9IGNhbGxDaGlsZEZ1bmN0aW9uKGNoaWxkcmVuLCBwcm9ncmVzcywgZXZlbnQpO1xuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG59O1xuXG52YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyhlbGVtZW50KSB7XG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgfHwgZWxlbWVudCBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBTY2VuZUJhc2UgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgaW5oZXJpdHMoU2NlbmVCYXNlLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU2NlbmVCYXNlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNjZW5lQmFzZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBTY2VuZUJhc2UuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTY2VuZUJhc2UpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV2ZW50OiAnaW5pdCcsXG4gICAgICBwcm9ncmVzczogMFxuICAgIH0sIF90ZW1wKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhTY2VuZUJhc2UsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNvbnRyb2xsZXIgPSBfcHJvcHMuY29udHJvbGxlcixcbiAgICAgICAgICBjbGFzc1RvZ2dsZSA9IF9wcm9wcy5jbGFzc1RvZ2dsZSxcbiAgICAgICAgICBwaW4gPSBfcHJvcHMucGluLFxuICAgICAgICAgIHBpblNldHRpbmdzID0gX3Byb3BzLnBpblNldHRpbmdzLFxuICAgICAgICAgIGluZGljYXRvcnMgPSBfcHJvcHMuaW5kaWNhdG9ycyxcbiAgICAgICAgICBlbmFibGVkID0gX3Byb3BzLmVuYWJsZWQsXG4gICAgICAgICAgc2NlbmVQYXJhbXMgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nLCAnY29udHJvbGxlcicsICdjbGFzc1RvZ2dsZScsICdwaW4nLCAncGluU2V0dGluZ3MnLCAnaW5kaWNhdG9ycycsICdlbmFibGVkJ10pO1xuXG5cbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5yZWY7XG4gICAgICBzY2VuZVBhcmFtcy50cmlnZ2VyRWxlbWVudCA9IHNjZW5lUGFyYW1zLnRyaWdnZXJFbGVtZW50ID09PSBudWxsID8gbnVsbCA6IHNjZW5lUGFyYW1zLnRyaWdnZXJFbGVtZW50IHx8IGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoc2NlbmVQYXJhbXMpO1xuXG4gICAgICB0aGlzLmluaXRFdmVudEhhbmRsZXJzKCk7XG5cbiAgICAgIGlmIChjbGFzc1RvZ2dsZSkge1xuICAgICAgICB0aGlzLnNldENsYXNzVG9nZ2xlKHRoaXMuc2NlbmUsIGVsZW1lbnQsIGNsYXNzVG9nZ2xlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbiB8fCBwaW5TZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldFBpbih0aGlzLnNjZW5lLCBlbGVtZW50LCBwaW4sIHBpblNldHRpbmdzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGljYXRvcnMpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGRJbmRpY2F0b3JzKHsgbmFtZTogJyAnIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2NlbmUuZW5hYmxlZChlbmFibGVkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY2VuZS5hZGRUbyhjb250cm9sbGVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMyLmR1cmF0aW9uLFxuICAgICAgICAgIG9mZnNldCA9IF9wcm9wczIub2Zmc2V0LFxuICAgICAgICAgIHRyaWdnZXJFbGVtZW50ID0gX3Byb3BzMi50cmlnZ2VyRWxlbWVudCxcbiAgICAgICAgICB0cmlnZ2VySG9vayA9IF9wcm9wczIudHJpZ2dlckhvb2ssXG4gICAgICAgICAgcmV2ZXJzZSA9IF9wcm9wczIucmV2ZXJzZSxcbiAgICAgICAgICBlbmFibGVkID0gX3Byb3BzMi5lbmFibGVkO1xuXG5cbiAgICAgIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkICYmIGR1cmF0aW9uICE9PSBwcmV2UHJvcHMuZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5zY2VuZS5kdXJhdGlvbihkdXJhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IHByZXZQcm9wcy5vZmZzZXQpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5vZmZzZXQob2Zmc2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyaWdnZXJFbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgdHJpZ2dlckVsZW1lbnQgIT09IHByZXZQcm9wcy50cmlnZ2VyRWxlbWVudCkgO1xuXG4gICAgICBpZiAodHJpZ2dlckhvb2sgIT09IHVuZGVmaW5lZCAmJiB0cmlnZ2VySG9vayAhPT0gcHJldlByb3BzLnRyaWdnZXJIb29rKSB7XG4gICAgICAgIHRoaXMuc2NlbmUudHJpZ2dlckhvb2sodHJpZ2dlckhvb2spO1xuICAgICAgfVxuXG4gICAgICBpZiAocmV2ZXJzZSAhPT0gdW5kZWZpbmVkICYmIHJldmVyc2UgIT09IHByZXZQcm9wcy5yZXZlcnNlKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmV2ZXJzZShyZXZlcnNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBlbmFibGVkICE9PSBwcmV2UHJvcHMuZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnNjZW5lLmVuYWJsZWQoZW5hYmxlZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc2NlbmUuZGVzdHJveSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldENsYXNzVG9nZ2xlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q2xhc3NUb2dnbGUoc2NlbmUsIGVsZW1lbnQsIGNsYXNzVG9nZ2xlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc1RvZ2dsZSkgJiYgY2xhc3NUb2dnbGUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNjZW5lLnNldENsYXNzVG9nZ2xlKGNsYXNzVG9nZ2xlWzBdLCBjbGFzc1RvZ2dsZVsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2VuZS5zZXRDbGFzc1RvZ2dsZShlbGVtZW50LCBjbGFzc1RvZ2dsZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0UGluJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGluKHNjZW5lLCBlbGVtZW50LCBwaW4sIHBpblNldHRpbmdzKSB7XG4gICAgICBlbGVtZW50ID0gaXNTdHJpbmcocGluKSA/IHBpbiA6IGVsZW1lbnQ7XG4gICAgICBzY2VuZS5zZXRQaW4oZWxlbWVudCwgcGluU2V0dGluZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2luaXRFdmVudEhhbmRsZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMy5jaGlsZHJlbixcbiAgICAgICAgICBfcHJvcHMzJHByb2dyZXNzRXZlbnQgPSBfcHJvcHMzLnByb2dyZXNzRXZlbnRzLFxuICAgICAgICAgIHByb2dyZXNzRXZlbnRzID0gX3Byb3BzMyRwcm9ncmVzc0V2ZW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3Byb3BzMyRwcm9ncmVzc0V2ZW50O1xuXG5cbiAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gIT09ICdmdW5jdGlvbicgJiYgIWlzR1NBUChjYWxsQ2hpbGRGdW5jdGlvbihjaGlsZHJlbiwgMCwgJ2luaXQnKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjZW5lLm9uKCdzdGFydCBlbmQgZW50ZXIgbGVhdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICBldmVudDogZXZlbnRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByb2dyZXNzRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuc2NlbmUub24oJ3Byb2dyZXNzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHByb2dyZXNzOiBldmVudC5wcm9ncmVzc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHByb2dyZXNzID0gX3N0YXRlLnByb2dyZXNzLFxuICAgICAgICAgIGV2ZW50ID0gX3N0YXRlLmV2ZW50O1xuXG5cbiAgICAgIHZhciBjaGlsZCA9IGdldENoaWxkKGNoaWxkcmVuLCBwcm9ncmVzcywgZXZlbnQpO1xuXG4gICAgICAvLyBUT0RPOiBEb24ndCBhZGQgcmVmIHRvIHN0YXRlbGVzcyBvciBzdGF0ZWZ1bCBjb21wb25lbnRzIFxuXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBkZWZpbmVQcm9wZXJ0eSh7fSwgcmVmT3JJbm5lclJlZihjaGlsZCksIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5yZWYgPSByZWY7XG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTY2VuZUJhc2U7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG52YXIgU2NlbmVXcmFwcGVyID0gZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50Mikge1xuICBpbmhlcml0cyhTY2VuZVdyYXBwZXIsIF9SZWFjdCRQdXJlQ29tcG9uZW50Mik7XG5cbiAgZnVuY3Rpb24gU2NlbmVXcmFwcGVyKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNjZW5lV3JhcHBlcik7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNjZW5lV3JhcHBlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNjZW5lV3JhcHBlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoU2NlbmVXcmFwcGVyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5jb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBfY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICAgIHZhciBfcHJvZ3Jlc3MgPSAwO1xuICAgICAgICB2YXIgX2V2ZW50ID0gJ2luaXQnO1xuXG4gICAgICAgIHJldHVybiBnZXRDaGlsZChfY2hpbGRyZW4sIF9wcm9ncmVzcywgX2V2ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2NlbmVCYXNlLCB0aGlzLnByb3BzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNjZW5lV3JhcHBlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCk7XG5cblNjZW5lV3JhcHBlci5kaXNwbGF5TmFtZSA9ICdTY2VuZSc7XG52YXIgU2NlbmUgPSBmdW5jdGlvbiBTY2VuZShfcmVmMikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgIHByb3BzID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFsnY2hpbGRyZW4nXSk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIENvbnRyb2xsZXJDb250ZXh0LkNvbnN1bWVyLFxuICAgIG51bGwsXG4gICAgZnVuY3Rpb24gKGNvbnRyb2xsZXIpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBTY2VuZVdyYXBwZXIsXG4gICAgICAgIF9leHRlbmRzKHsgY29udHJvbGxlcjogY29udHJvbGxlciB9LCBwcm9wcyksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCB7IENvbnRyb2xsZXIsIFNjZW5lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lcy5qcy5tYXBcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJIb3ZlckxpbmsiLCJOYXYiLCJDb250cm9sbGVyIiwiU2NlbmUiLCJnYWxsZXJ5IiwibWFwIiwiaWQiLCJwaG90byIsInVybCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9