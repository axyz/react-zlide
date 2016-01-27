(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-zlide"] = factory(require("react"));
	else
		root["react-zlide"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _zlide = __webpack_require__(1);

	var _zlide2 = _interopRequireDefault(_zlide);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _zlide2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _slides = __webpack_require__(3);
	
	var _slides2 = _interopRequireDefault(_slides);
	
	var _controls = __webpack_require__(8);
	
	var _controls2 = _interopRequireDefault(_controls);
	
	var _thumbs = __webpack_require__(11);
	
	var _thumbs2 = _interopRequireDefault(_thumbs);
	
	__webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Zlide = function (_React$Component) {
	    _inherits(Zlide, _React$Component);
	
	    function Zlide(props) {
	        _classCallCheck(this, Zlide);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Zlide).call(this, props));
	
	        _this.state = {
	            currentSlide: props.initialSlide
	        };
	        return _this;
	    }
	
	    _createClass(Zlide, [{
	        key: 'goNextSlide',
	        value: function goNextSlide() {
	            var _props = this.props;
	            var visibleSlides = _props.visibleSlides;
	            var slides = _props.slides;
	            var centerMode = _props.centerMode;
	            var step = _props.step;
	            var currentSlide = this.state.currentSlide;
	
	            var maximumIndex = centerMode ? slides.length - step : slides.length - visibleSlides + step;
	
	            if (currentSlide + step <= maximumIndex) {
	                this.setState({
	                    currentSlide: currentSlide + step
	                });
	            }
	        }
	    }, {
	        key: 'goPreviousSlide',
	        value: function goPreviousSlide() {
	            if (this.state.currentSlide >= this.props.step) {
	                this.setState({
	                    currentSlide: this.state.currentSlide - this.props.step
	                });
	            }
	        }
	    }, {
	        key: 'goToSlide',
	        value: function goToSlide(index) {
	            this.setState({
	                currentSlide: index
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props2 = this.props;
	            var slides = _props2.slides;
	            var thumbs = _props2.thumbs;
	            var visibleSlides = _props2.visibleSlides;
	            var centerMode = _props2.centerMode;
	            var currentSlide = this.state.currentSlide;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'zlide' },
	                _react2.default.createElement(_slides2.default, {
	                    images: slides,
	                    visibleSlides: visibleSlides,
	                    currentSlide: currentSlide,
	                    centerMode: centerMode
	                }),
	                _react2.default.createElement(_controls2.default, {
	                    goPreviousSlide: function goPreviousSlide() {
	                        return _this2.goPreviousSlide();
	                    },
	                    goNextSlide: function goNextSlide() {
	                        return _this2.goNextSlide();
	                    }
	                }),
	                _react2.default.createElement(_thumbs2.default, {
	                    thumbs: thumbs,
	                    visibleSlides: visibleSlides,
	                    centerMode: centerMode,
	                    goToSlide: function goToSlide(slide) {
	                        return _this2.goToSlide(slide);
	                    }
	                })
	            );
	        }
	    }]);
	
	    return Zlide;
	}(_react2.default.Component);
	
	exports.default = Zlide;
	
	Zlide.propTypes = {
	    initialSlide: _react2.default.PropTypes.number,
	    visibleSlides: _react2.default.PropTypes.number,
	    centerMode: _react2.default.PropTypes.bool,
	    step: _react2.default.PropTypes.number,
	    slides: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
	    thumbs: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)
	};
	
	Zlide.defaultProps = {
	    initialSlide: 0,
	    visibleSlides: 3,
	    centerMode: true,
	    step: 1,
	    slides: [],
	    thumbs: []
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Slides = function (_React$Component) {
	    _inherits(Slides, _React$Component);
	
	    function Slides() {
	        _classCallCheck(this, Slides);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Slides).apply(this, arguments));
	    }
	
	    _createClass(Slides, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var visibleSlides = _props.visibleSlides;
	            var currentSlide = _props.currentSlide;
	            var centerMode = _props.centerMode;
	
	            var offset = centerMode ? Math.floor(visibleSlides / 2) : 0;
	
	            var slidesStyle = {
	                transform: 'translate3d(calc((100% / ' + visibleSlides + ') * -1 * ' + (currentSlide - offset) + '), 0, 0)'
	            };
	
	            var slideStyle = {
	                flex: '0 0 calc(100% / ' + visibleSlides + ')'
	            };
	
	            var images = this.props.images.map(function (image, index) {
	                var slideClass = 'zlide_slide';
	
	                // find out the slide at the border and add a fade modifier
	                if (centerMode) {
	                    slideClass += Math.abs(index - currentSlide) === Math.floor(visibleSlides / 2) ? ' zlide_slide-fade' : '';
	                }
	
	                slideClass += index === currentSlide ? ' zlide_slide-current' : '';
	
	                return _react2.default.createElement(
	                    'li',
	                    { className: slideClass, key: 'carousel-slide-' + index,
	                        style: slideStyle },
	                    _react2.default.createElement('img', { className: 'zlide_slide_img', src: image })
	                );
	            });
	
	            return _react2.default.createElement(
	                'ul',
	                { className: 'zlide_slides',
	                    style: slidesStyle },
	                images
	            );
	        }
	    }]);
	
	    return Slides;
	}(_react2.default.Component);
	
	exports.default = Slides;
	
	Slides.propTypes = {
	    visibleSlides: _react2.default.PropTypes.number,
	    currentSlide: _react2.default.PropTypes.number,
	    centerMode: _react2.default.PropTypes.bool
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/postcss-loader/index.js!./slides.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/postcss-loader/index.js!./slides.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".zlide_slides {\n    position: relative;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.zlide_slide {\n    display: block;\n}\n\n.zlide_slide_img {\n    width: 100%;\n    height: auto;\n}\n", "", {"version":3,"sources":["/./src/slides.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,qBAAc;IAAd,sBAAc;IAAd,qBAAc;IAAd,cAAc;CACjB;;AAED;IACI,eAAe;CAClB;;AAED;IACI,YAAY;IACZ,aAAa;CAChB","file":"slides.css","sourcesContent":[".zlide_slides {\n    position: relative;\n    display: flex;\n}\n\n.zlide_slide {\n    display: block;\n}\n\n.zlide_slide_img {\n    width: 100%;\n    height: auto;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Controls = function (_React$Component) {
	    _inherits(Controls, _React$Component);
	
	    function Controls() {
	        _classCallCheck(this, Controls);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Controls).apply(this, arguments));
	    }
	
	    _createClass(Controls, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var goPreviousSlide = _props.goPreviousSlide;
	            var goNextSlide = _props.goNextSlide;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'zlide_controls' },
	                _react2.default.createElement('a', { className: 'zlide_controls_prev', href: '#', onClick: goPreviousSlide }),
	                _react2.default.createElement('a', { className: 'zlide_controls_next', href: '#', onClick: goNextSlide })
	            );
	        }
	    }]);
	
	    return Controls;
	}(_react2.default.Component);
	
	exports.default = Controls;
	
	Controls.propTypes = {
	    goPreviousSlide: _react2.default.PropTypes.func,
	    goNextSlide: _react2.default.PropTypes.func
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/postcss-loader/index.js!./controls.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/postcss-loader/index.js!./controls.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".zlide_controls {\n  position: relative;\n}\n", "", {"version":3,"sources":["/./src/controls.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;CACpB","file":"controls.css","sourcesContent":[".zlide_controls {\n  position: relative;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Thumbs = function (_React$Component) {
	    _inherits(Thumbs, _React$Component);
	
	    function Thumbs() {
	        _classCallCheck(this, Thumbs);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Thumbs).apply(this, arguments));
	    }
	
	    _createClass(Thumbs, [{
	        key: 'handleMouseEnter',
	        value: function handleMouseEnter(index) {
	            this.props.goToSlide(index);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var handleMouseEnter = _props.handleMouseEnter;
	            var thumbs = _props.thumbs;
	            var centerMode = _props.centerMode;
	            var visibleSlides = _props.visibleSlides;
	
	            var thumbsStyle = centerMode ? {
	                width: 'calc(100% / ' + visibleSlides + ')',
	                margin: 'auto'
	            } : {};
	
	            var thumbnails = thumbs.map(function (thumb, index) {
	                return _react2.default.createElement(
	                    'li',
	                    { className: 'zlide_thumb',
	                        key: 'zlide-thumb-' + index,
	                        onMouseEnter: function onMouseEnter() {
	                            return _this2.handleMouseEnter(index);
	                        } },
	                    _react2.default.createElement('img', { className: 'zlide_thumb_img', src: thumb })
	                );
	            });
	
	            return _react2.default.createElement(
	                'ul',
	                { className: 'zlide_thumbs',
	                    style: thumbsStyle },
	                thumbnails
	            );
	        }
	    }]);
	
	    return Thumbs;
	}(_react2.default.Component);
	
	exports.default = Thumbs;
	
	Thumbs.propTypes = {
	    goToSlide: _react2.default.PropTypes.func,
	    thumbs: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
	    centerMode: _react2.default.PropTypes.bool,
	    visibleSlides: _react2.default.PropTypes.number
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/postcss-loader/index.js!./thumbs.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/postcss-loader/index.js!./thumbs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".zlide_thumbs {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.zlide_thumb {\n  display: block;\n}\n\n.zlide_thumb_img {\n  width: 100%;\n  height: auto;\n}\n", "", {"version":3,"sources":["/./src/thumbs.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;CACf;;AAED;EACE,eAAe;CAChB;;AAED;EACE,YAAY;EACZ,aAAa;CACd","file":"thumbs.css","sourcesContent":[".zlide_thumbs {\n  display: flex;\n}\n\n.zlide_thumb {\n  display: block;\n}\n\n.zlide_thumb_img {\n  width: 100%;\n  height: auto;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/postcss-loader/index.js!./zlide.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/postcss-loader/index.js!./zlide.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".zlide * {\n    margin: 0;\n    padding: 0;\n}\n\n.zlide {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n}\n", "", {"version":3,"sources":["/./src/zlide.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,WAAW;CACd;;AAED;IACI,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,aAAa;CAChB","file":"zlide.css","sourcesContent":[".zlide * {\n    margin: 0;\n    padding: 0;\n}\n\n.zlide {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-zlide.js.map