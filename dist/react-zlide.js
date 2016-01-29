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
	exports.ZlideThumbs = exports.ZlideNext = exports.ZlidePrev = exports.Zlide = undefined;
	
	var _zlide = __webpack_require__(1);
	
	var _zlide2 = _interopRequireDefault(_zlide);
	
	var _zlidePrev = __webpack_require__(3);
	
	var _zlidePrev2 = _interopRequireDefault(_zlidePrev);
	
	var _zlideNext = __webpack_require__(4);
	
	var _zlideNext2 = _interopRequireDefault(_zlideNext);
	
	var _zlideThumbs = __webpack_require__(5);
	
	var _zlideThumbs2 = _interopRequireDefault(_zlideThumbs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Zlide = _zlide2.default;
	exports.ZlidePrev = _zlidePrev2.default;
	exports.ZlideNext = _zlideNext2.default;
	exports.ZlideThumbs = _zlideThumbs2.default;

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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Zlide = function (_Component) {
	    _inherits(Zlide, _Component);
	
	    function Zlide() {
	        _classCallCheck(this, Zlide);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Zlide).apply(this, arguments));
	    }
	
	    _createClass(Zlide, [{
	        key: 'handleClick',
	        value: function handleClick(index) {
	            this.props.onClick(index);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var visibleSlides = _props.visibleSlides;
	            var currentSlide = _props.currentSlide;
	            var centerMode = _props.centerMode;
	
	            var offset = centerMode ? Math.floor(visibleSlides / 2) : 0;
	
	            var style = {
	                transform: 'translate3d(calc((100% / ' + visibleSlides + ') * -1 * ' + (currentSlide - offset) + '), 0, 0)',
	                position: 'relative',
	                display: 'flex'
	            };
	
	            var slideStyle = {
	                flex: '0 0 calc(100% / ' + visibleSlides + ')',
	                display: 'block'
	            };
	
	            var slides = this.props.children.map(function (slide, index) {
	                var slideClass = 'zlide_slide';
	
	                slideClass += index === currentSlide ? ' zlide_slide-current' : '';
	
	                return _react2.default.createElement(
	                    'li',
	                    { className: slideClass,
	                        key: 'zlide-slide-' + index,
	                        onClick: function onClick() {
	                            return _this2.handleClick(index);
	                        },
	                        style: slideStyle },
	                    slide
	                );
	            });
	
	            return _react2.default.createElement(
	                'ul',
	                { className: this.props.className,
	                    style: style },
	                slides
	            );
	        }
	    }]);
	
	    return Zlide;
	}(_react.Component);
	
	exports.default = Zlide;
	
	Zlide.propTypes = {
	    visibleSlides: _react.PropTypes.number,
	    currentSlide: _react.PropTypes.number,
	    centerMode: _react.PropTypes.bool
	};
	
	Zlide.defaultProps = {
	    visibleSlides: 3,
	    currentSlide: 0,
	    centerMode: true
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ZlidePrev = function (_Component) {
	    _inherits(ZlidePrev, _Component);
	
	    function ZlidePrev() {
	        _classCallCheck(this, ZlidePrev);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ZlidePrev).apply(this, arguments));
	    }
	
	    _createClass(ZlidePrev, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var onClick = _props.onClick;
	            var children = _props.children;
	
	            return _react2.default.createElement(
	                "div",
	                { className: "zlide_prev",
	                    onClick: onClick },
	                children
	            );
	        }
	    }]);
	
	    return ZlidePrev;
	}(_react.Component);
	
	exports.default = ZlidePrev;
	
	ZlidePrev.propTypes = {
	    onClick: _react.PropTypes.func
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ZlideNext = function (_Component) {
	    _inherits(ZlideNext, _Component);
	
	    function ZlideNext() {
	        _classCallCheck(this, ZlideNext);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ZlideNext).apply(this, arguments));
	    }
	
	    _createClass(ZlideNext, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var onClick = _props.onClick;
	            var children = _props.children;
	
	            return _react2.default.createElement(
	                "div",
	                { className: "zlide_next",
	                    onClick: onClick },
	                children
	            );
	        }
	    }]);
	
	    return ZlideNext;
	}(_react.Component);
	
	exports.default = ZlideNext;
	
	ZlideNext.propTypes = {
	    onClick: _react.PropTypes.func
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ZlideThumbs = function (_Component) {
	    _inherits(ZlideThumbs, _Component);
	
	    function ZlideThumbs() {
	        _classCallCheck(this, ZlideThumbs);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ZlideThumbs).apply(this, arguments));
	    }
	
	    _createClass(ZlideThumbs, [{
	        key: 'handleClick',
	        value: function handleClick(index) {
	            this.props.onClick(index);
	        }
	    }, {
	        key: 'handleOver',
	        value: function handleOver(index) {
	            this.props.onOver(index);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var children = this.props.children;
	
	            var thumbnails = children.map(function (thumb, index) {
	                return _react2.default.createElement(
	                    'li',
	                    { className: 'zlide_thumb',
	                        key: 'zlide-thumb-' + index,
	                        onClick: function onClick() {
	                            return _this2.handleClick(index);
	                        },
	                        onMouseEnter: function onMouseEnter() {
	                            return _this2.handleOver(index);
	                        } },
	                    thumb
	                );
	            });
	
	            return _react2.default.createElement(
	                'ul',
	                { className: 'zlide_thumbs' },
	                thumbnails
	            );
	        }
	    }]);
	
	    return ZlideThumbs;
	}(_react.Component);
	
	exports.default = ZlideThumbs;
	
	ZlideThumbs.propTypes = {
	    onClick: _react.PropTypes.func,
	    onOver: _react.PropTypes.func,
	    thumbs: _react.PropTypes.arrayOf(_react.PropTypes.string)
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-zlide.js.map