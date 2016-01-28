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
	
	var _controls = __webpack_require__(5);
	
	var _controls2 = _interopRequireDefault(_controls);
	
	var _thumbs = __webpack_require__(7);
	
	var _thumbs2 = _interopRequireDefault(_thumbs);
	
	__webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Zlide = function (_Component) {
	    _inherits(Zlide, _Component);
	
	    function Zlide(props) {
	        _classCallCheck(this, Zlide);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Zlide).call(this, props));
	    }
	
	    _createClass(Zlide, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var onNextClick = _props.onNextClick;
	            var onPrevClick = _props.onPrevClick;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'zlide' },
	                _react2.default.createElement(_slides2.default, this.props),
	                _react2.default.createElement(_controls2.default, {
	                    onPrevClick: onPrevClick,
	                    onNextClick: onNextClick
	                }),
	                _react2.default.createElement(_thumbs2.default, this.props)
	            );
	        }
	    }]);
	
	    return Zlide;
	}(_react.Component);
	
	exports.default = Zlide;
	
	Zlide.propTypes = {
	    currentSlide: _react.PropTypes.number,
	    visibleSlides: _react.PropTypes.number,
	    centerMode: _react.PropTypes.bool,
	    step: _react.PropTypes.number,
	    slides: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    thumbs: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    onPrevClick: _react.PropTypes.func,
	    onNextClick: _react.PropTypes.func,
	    onThumbOver: _react.PropTypes.func,
	    onThumbClick: _react.PropTypes.func
	};
	
	Zlide.defaultProps = {
	    currentSlide: 0,
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
	
	var Slides = function (_Component) {
	    _inherits(Slides, _Component);
	
	    function Slides() {
	        _classCallCheck(this, Slides);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Slides).apply(this, arguments));
	    }
	
	    _createClass(Slides, [{
	        key: 'handleSlideClick',
	        value: function handleSlideClick(index) {
	            this.props.onSlideClick(index);
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
	
	            var slidesStyle = {
	                transform: 'translate3d(calc((100% / ' + visibleSlides + ') * -1 * ' + (currentSlide - offset) + '), 0, 0)'
	            };
	
	            var slideStyle = {
	                flex: '0 0 calc(100% / ' + visibleSlides + ')'
	            };
	
	            var images = this.props.slides.map(function (image, index) {
	                var slideClass = 'zlide_slide';
	
	                // find out the slide at the border and add a fade modifier
	                if (centerMode) {
	                    slideClass += Math.abs(index - currentSlide) === Math.floor(visibleSlides / 2) ? ' zlide_slide-fade' : '';
	                }
	
	                slideClass += index === currentSlide ? ' zlide_slide-current' : '';
	
	                return _react2.default.createElement(
	                    'li',
	                    { className: slideClass,
	                        key: 'carousel-slide-' + index,
	                        onClick: function onClick() {
	                            return _this2.handleSlideClick(index);
	                        },
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
	}(_react.Component);
	
	exports.default = Slides;
	
	Slides.propTypes = {
	    visibleSlides: _react.PropTypes.number,
	    currentSlide: _react.PropTypes.number,
	    centerMode: _react.PropTypes.bool
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

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
	
	__webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Controls = function (_Component) {
	    _inherits(Controls, _Component);
	
	    function Controls() {
	        _classCallCheck(this, Controls);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Controls).apply(this, arguments));
	    }
	
	    _createClass(Controls, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var onNextClick = _props.onNextClick;
	            var onPrevClick = _props.onPrevClick;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'zlide_controls' },
	                _react2.default.createElement('a', { className: 'zlide_controls_prev', href: '#', onClick: onPrevClick }),
	                _react2.default.createElement('a', { className: 'zlide_controls_next', href: '#', onClick: onNextClick })
	            );
	        }
	    }]);
	
	    return Controls;
	}(_react.Component);
	
	exports.default = Controls;
	
	Controls.propTypes = {
	    goPreviousSlide: _react.PropTypes.func,
	    goNextSlide: _react.PropTypes.func
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Thumbs = function (_Component) {
	    _inherits(Thumbs, _Component);
	
	    function Thumbs() {
	        _classCallCheck(this, Thumbs);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Thumbs).apply(this, arguments));
	    }
	
	    _createClass(Thumbs, [{
	        key: 'handleThumbClick',
	        value: function handleThumbClick(index) {
	            this.props.onThumbClick(index);
	        }
	    }, {
	        key: 'handleThumbOver',
	        value: function handleThumbOver(index) {
	            this.props.onThumbOver(index);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
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
	                        onClick: function onClick() {
	                            return _this2.handleThumbClick(index);
	                        },
	                        onMouseEnter: function onMouseEnter() {
	                            return _this2.handleThumbOver(index);
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
	}(_react.Component);
	
	exports.default = Thumbs;
	
	Thumbs.propTypes = {
	    onThumbClick: _react.PropTypes.func,
	    onThumbOver: _react.PropTypes.func,
	    thumbs: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    centerMode: _react.PropTypes.bool,
	    visibleSlides: _react.PropTypes.number
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-zlide.js.map