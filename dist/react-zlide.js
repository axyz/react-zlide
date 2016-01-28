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