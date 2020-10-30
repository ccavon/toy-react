/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react */ \"./toy-react.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n/**\r\n * @description 第三版\r\n */\n\nvar Square = /*#__PURE__*/function (_Component) {\n  _inherits(Square, _Component);\n\n  var _super = _createSuper(Square);\n\n  function Square() {\n    _classCallCheck(this, Square);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      console.log(this.props);\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n        className: \"square\",\n        onClick: this.props.onClick\n      }, this.props.value);\n    }\n  }]);\n\n  return Square;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Board = /*#__PURE__*/function (_Component2) {\n  _inherits(Board, _Component2);\n\n  var _super2 = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: \"renderSquare\",\n    value: function renderSquare(i) {\n      var _this = this;\n\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Square, {\n        value: this.props.squares[i],\n        onClick: function onClick() {\n          return _this.props.onClick(i);\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Game = /*#__PURE__*/function (_Component3) {\n  _inherits(Game, _Component3);\n\n  var _super3 = _createSuper(Game);\n\n  function Game(props) {\n    var _this2;\n\n    _classCallCheck(this, Game);\n\n    _this2 = _super3.call(this, props);\n    _this2.state = {\n      history: [{\n        squares: Array(9).fill(null)\n      }],\n      stepNumber: 0,\n      xIsNext: true\n    };\n    return _this2;\n  }\n\n  _createClass(Game, [{\n    key: \"handleClick\",\n    value: function handleClick(i) {\n      var history = this.state.history.slice(0, this.state.stepNumber + 1);\n      var current = history[history.length - 1];\n      var squares = current.squares.slice();\n\n      if (calculateWinner(squares) || squares[i]) {\n        return;\n      }\n\n      squares[i] = this.state.xIsNext ? \"X\" : \"O\";\n      this.setState({\n        history: history.concat([{\n          squares: squares\n        }]),\n        stepNumber: history.length,\n        xIsNext: !this.state.xIsNext\n      });\n    }\n  }, {\n    key: \"jumpTo\",\n    value: function jumpTo(step) {\n      this.setState({\n        stepNumber: step,\n        xIsNext: step % 2 === 0\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var history = this.state.history;\n      var current = history[this.state.stepNumber];\n      var winner = calculateWinner(current.squares);\n      var moves = history.map(function (step, move) {\n        var desc = move ? 'Go to move #' + move : 'Go to game start';\n        return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"li\", {\n          key: move\n        }, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n          onClick: function onClick() {\n            return _this3.jumpTo(move);\n          }\n        }, desc));\n      });\n      var status;\n\n      if (winner) {\n        status = \"Winner: \" + winner;\n      } else {\n        status = \"Next player: \" + (this.state.xIsNext ? \"X\" : \"O\");\n      }\n\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"game\"\n      }, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"game-board\"\n      }, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Board, {\n        squares: current.squares,\n        onClick: function onClick(i) {\n          return _this3.handleClick(i);\n        }\n      })), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"game-info\"\n      }, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, status), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"ol\", null, moves)));\n    }\n  }]);\n\n  return Game;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nObject(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Game, null), document.getElementById(\"root\")); // let game = <Game />;\n// console.log('this is flag game.vdom:', game.vdom);\n\nfunction calculateWinner(squares) {\n  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\n\n  for (var i = 0; i < lines.length; i++) {\n    var _lines$i = _slicedToArray(lines[i], 3),\n        a = _lines$i[0],\n        b = _lines$i[1],\n        c = _lines$i[2];\n\n    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n      return squares[a];\n    }\n  }\n\n  return null;\n}\n/**\r\n * @description 第二版\r\n */\n// class Square extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {\n//       value: null,\n//     };\n//   }\n//   render() {\n//     return (\n//       <button\n//         className=\"square\"\n//         onClick={() => this.setState({ value: 'X' })}\n//       >\n//         {this.state.value}\n//       </button>\n//     );\n//   }\n// }\n// class Board extends Component {\n//   renderSquare(i) {\n//     return <Square />\n//   }\n//   render() {\n//     const status = 'Next player: X';\n//     return (\n//       <div>\n//         <div className={'status'}>{status}</div>\n//         <div className={'board-row'}>\n//           {this.renderSquare(0)}\n//           {this.renderSquare(1)}\n//           {this.renderSquare(2)}\n//         </div>\n//         <div className={'board-row'}>\n//           {this.renderSquare(3)}\n//           {this.renderSquare(4)}\n//           {this.renderSquare(5)}\n//         </div>\n//         <div className={'board-row'}>\n//           {this.renderSquare(6)}\n//           {this.renderSquare(7)}\n//           {this.renderSquare(8)}\n//         </div>\n//       </div>\n//     )\n//   }\n// }\n// class Game extends Component {\n//   render() {\n//     return (\n//       <div className={'game'}>\n//         <div className={'game-board'}>\n//           <Board />\n//         </div>\n//         <div className={'game-info'}>\n//           <div>{/* status */}</div>\n//           <ol>{/* TODO */}</ol>\n//         </div>\n//       </div>\n//     )\n//   }\n// }\n// render(\n//   <Game />,\n//   document.getElementById('root')\n// )\n\n/**\r\n * @description 第一版\r\n */\n// 组件：根据最新的host api来写(可以是自己定义的对象、class，一般默认class；根据最新的host api也可以是函数)\n// class MyComponent extends Component { // 如果没有改写方法那就默认继承Component\n//   // 1.constructor用来自己实现state，由于跟render同一组。\n//   constructor() {\n//     super();\n//     this.state = {\n//       a: 1,\n//       b: 2\n//     }\n//   }\n//   // 给一个render接口\n//   render() {\n//     return (\n//       <div>\n//         <h1>MyComponent</h1>\n//         {/* <button onclick={() => { this.state.a++; this.rerender(); }}>add</button> */}\n//         <button onclick={() => { this.setState({ a: this.state.a + 1 }) }}>add</button>\n//         <span>{this.state.a.toString()}</span>\n//         <span>{this.state.b.toString()}</span>\n//       </div>\n//     )\n//   }\n// }\n// 组件使用\n// render(<MyComponent id='a' class='c'>\n//   <div>abc</div>\n//   <div></div>\n//   <div></div>\n// </MyComponent>, document.body)\n// 修改成直接在JavaScript里面去写html\n// document.body.appendChild(<div id='a' class='c'>\n//   <div>abc</div>\n//   <div></div>\n//   <div></div>\n// </div>)\n// 由于chrome控制台上找不到全局变量a，加上 window.a 这时候就能找到了\n// window.a = <div id='a' class='c'>\n//   <div>abc</div>\n//   <div></div>\n//   <div></div>\n// </div>\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! exports provided: Component, createElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RENDER_TO_DOM = Symbol('render to dom'); // 实现继承：承包了ElementWrepper()、TextWrepper()里面的逻辑\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.props = Object.create(null);\n    this.children = [];\n    this._root = null;\n    this._range = null;\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.props[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      this.children.push(component);\n    } // 由render决定\n\n  }, {\n    key: RENDER_TO_DOM,\n\n    /**\r\n     * 位置：range API重新操作渲染\r\n     * 私有函数\r\n     * @description 每次把Component创建出来，然后去给它render，需要调用到具体的位置。如果指定element是不够精确的，因为可能是在element的中间，要重新渲染，就不一定是插到最后了\r\n     */\n    // 相当于一个变量放在[]里面\n    value: function value(range) {\n      // 存range， 改变了range值\n      this._range = range; // 重要知识：RENDER_TO_DOM的逻辑render了之后一定要更新，\n      // 所以就会给这个RENDER_TO_DOM里面的当时用的vdom存下来\n      // 会重新render并且得到一棵新的vdom树\n\n      this._vdom = this.vdom; // 充当旧的vdom\n      // 给root做更新：私有函数\n\n      this._vdom[RENDER_TO_DOM](range);\n    } // 实现vdom的比对：把一棵新的vdom跟上次渲染得到的旧vdom去做一个对比，然后决定哪一个树的子树去做重新渲染\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      // 此处会用一个比较简单的vdom对比算法，只对比对应位置的vdom是不是同一个类型的节点，如果是就进行了，\n      // 如果不是，比如说两个节点调换了顺序，这个react里面是可以处理的，会用一个更好的vdom对比算法\n      // 递归的去访问vdom的内容\n      // 根节点对比函数处理\n      var isSameNode = function isSameNode(oldNode, newNode) {\n        // 1.对比根节点type，如果type不同就认为是两个完全不同的类型子节点\n        // 2.props，可以通过打patch的方式去更改，因为vdom树里面全是ElementWrapper老实的节点，所以不会有什么特殊的逻辑，可以把这个props打patch,\n        // 如果props不一样它的根节点不一样，只有根节点的type和props完全一致，那么根节点是不需要更新的，然后再去看所有的子节点是不是需要更新\n        // 3.children\n        // 4.#text/content，可以去通过打patch的方式更新，replace()方式\n        // 最终：对比type和对比children(各种各样不同的Diff算法) --> 同位置比较实现局部更新\n        // 1.类型不同\n        if (oldNode.type !== newNode.type) {\n          return false;\n        } // 2.节点不同\n\n\n        for (var name in newNode.props) {\n          if (newNode.props[name] !== oldNode.props[name]) {\n            return false;\n          }\n        } // 3.旧的属性比新的属性多\n\n\n        if (Object.keys(oldNode.props).length > Object.keys(newNode.props).length) {\n          return false;\n        } // 4.文本节点（content）\n\n\n        if (newNode.type === '#text') {\n          if (newNode.content !== oldNode.content) {\n            return false;\n          }\n        }\n\n        return true;\n      };\n\n      var update = function update(oldNode, newNode) {\n        // 如果不是一样的Node，直接对oldNode做一个覆盖\n        if (isSameNode(oldNode, newNode)) {\n          // 怎么覆盖？把oldNode的range取出来替换掉\n          newNode[RENDER_TO_DOM](oldNode._range); // 等于一个完全的全新渲染\n\n          return;\n        } // 如果新旧节点一样，就会强行将oldNode设置为newNode的range\n\n\n        newNode._range = oldNode._range; // newNode.children属性里面放的是Component，此时需要一个vchildren\n\n        var newChildren = newNode.children; // 也需要一个vchildren，靠get vdom逻辑取出来的\n\n        var oldChildren = oldNode.children;\n\n        if (!newChildren || !newChildren.length) {\n          return;\n        } // 初始化等于oldChildren的最后一个将range设到_range的尾巴上\n\n\n        var tailRange = oldChildren[oldChildren.length - 1]._range; // 双数组同时循环\n\n        for (var i = 0; i < newChildren.length; i++) {\n          var newChild = newChildren[i];\n          var oldChild = oldChildren[i];\n\n          if (i < oldChild.length) {\n            update(oldChild, newChild);\n          } else {\n            // 插入的range\n            var range = document.createRange(); // 插入的range会用tailRange的尾巴，所以start、end都会设成tailRange\n\n            range.setStart(tailRange.endContainer, tailRange.endOffset);\n            range.setEnd(tailRange.endContainer, tailRange.endOffset);\n            newChild[RENDER_TO_DOM](range); // 继续追加\n\n            tailRange = range;\n          }\n        }\n      };\n\n      var vdom = this.vdom;\n      update(this._vdom, vdom);\n      this._vdom = vdom; // 替换\n    }\n    /**\r\n     * 由于不再去重新渲染而是更新，所以rerender函数不再需要了，那么这里面vdom的创建和比对的逻辑都会在Component基类里面去实现\r\n      // 重新绘制的算法：简单的指令不需要任何参数发给class就会进行重新绘制\r\n      // rerender() {\r\n      // 把原来range里面的这些东西全删掉\r\n      // this._range.deleteContents();\r\n      // this[RENDER_TO_DOM](this._range);\r\n      // 首先对它做了deleteContents然后产生了一个全空的range，\r\n      // 而全空的range如果有相邻的range就会被吞进下一个range里面，\r\n      // 然后我们再插入的时候它就会被后边的range包含进去，\r\n      // 我们在rerender的时候是需要保证这个range是不空的，\r\n      // 所以先插入再去删除\r\n        // 保存老的range\r\n      let oldRange = this._range;\r\n      //先创建一个插入的range，插到内容之前，这样老的range就不会空\r\n      let range = document.createRange();\r\n      // 由于插入的点是没有范围的，所以是startContainer、startOffset，起点终点是一样的\r\n      range.setStart(oldRange.startContainer, oldRange.startOffset);\r\n      range.setEnd(oldRange.startContainer, oldRange.startOffset);\r\n      // 完成插入\r\n      this[RENDER_TO_DOM](range);\r\n        // 注意：我们创建新的插入点range的时候，因为是一个没有宽度的range，所以它其实也在老的range之内，所以插入老的range的时候范围也增大了\r\n      // 那么在我们deleteContents之前，要给老的range的Start的节点重设，插入到内容之后\r\n      oldRange.setStart(range.endContainer, range.endOffset);\r\n      // 再把它所有内容删除\r\n      oldRange.deleteContents();\r\n    }\r\n    */\n    // 会假设已经有了一个state方法，做一个深拷贝的合并\n\n  }, {\n    key: \"setState\",\n    value: function setState(newState) {\n      if (this.state === null || _typeof(this.state) !== 'object') {\n        // 替换\n        this.state = newState;\n        this.rerender();\n        return;\n      } // 假设已经有了state方法，但有可能是null，需要写一个递归的形式去访问它的每一个对象和属性\n\n\n      var merge = function merge(oldState, newState) {\n        // for所有的子节点, 假设oldState、newState都是object\n        for (var p in newState) {\n          if (oldState[p] === null || _typeof(oldState[p]) !== 'object') {\n            oldState[p] = newState[p];\n          } else {\n            merge(oldState[p], newState[p]);\n          }\n        }\n      };\n\n      merge(this.state, newState);\n      this.update();\n    } // 在这个结构里面, root就是跟渲染相关的东西\n    // get root() {\n    //   if (!this._root) {\n    //     // 取root的过程：如果它是render回来的结构，是一个Component的子类就会对root进行一个递归的调用；反之如果不是最后会变成ElementWrapper/TextWrapper；都是真正有root的情况下\n    //     this._root = this.render().root;\n    //   }\n    //   return this._root;\n    // }\n\n  }, {\n    key: \"vdom\",\n    get: function get() {\n      return this.render().vdom;\n    }\n  }]);\n\n  return Component;\n}(); // 封装 createElement()\n\nvar ElementWrepper = /*#__PURE__*/function (_Component) {\n  _inherits(ElementWrepper, _Component);\n\n  var _super = _createSuper(ElementWrepper);\n\n  // 简单的策略：创建的实体DOM放到属性上\n  function ElementWrepper(type) {\n    var _this;\n\n    _classCallCheck(this, ElementWrepper);\n\n    _this = _super.call(this, type); // this.root = document.createElement(type); // 实现实体dom就不需要这个了\n\n    _this.type = type;\n    return _this;\n  } // 注释之后在main.js打印vdom的时候会有children数据\n\n  /**\r\n  // 存this.props\r\n  setAttribute(name, value) {\r\n    // 事件绑定函数以on开头的做判断处理\r\n    if (name.match(/^on([\\s\\S]+)$/)) {\r\n      // 事件匹配驼峰命名，确保了以小写字母开头的\r\n      this.root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, c => c.toLowerCase()), value);\r\n    } else {\r\n      // 由于css没有生效，这时候需要将classname处理成class\r\n      if (name === 'className') {\r\n        this.root.setAttribute('class', value);\r\n      } else {\r\n        this.root.setAttribute(name, value);\r\n      }\r\n    }\r\n  }\r\n  // 存this.children\r\n  appendChild(component) {\r\n    // this.root.appendChild(component.root);\r\n    let range = document.createRange();\r\n    range.setStart(this.root, this.root.childNodes.length);\r\n    range.setEnd(this.root, this.root.childNodes.length);\r\n    component[RENDER_TO_DOM](range)\r\n  }\r\n  */\n  // 获取一个虚拟dom：返回一个新对象是为了让vdom树比较干净而操作的，如果这个对象上没有方法就没有办法完成重绘 \n\n\n  _createClass(ElementWrepper, [{\n    key: RENDER_TO_DOM,\n    // 整个虚拟dom到实体dom的更新\n    value: function value(range) {\n      this._range = range; // 1.内容删除\n      // range.deleteContents();\n      // 访问对象上有效的虚拟dom的所有属性: root props、children\n\n      var root = document.createElement(this.type); // 处理props{}\n\n      for (var name in this.props) {\n        var value = this.props[name];\n\n        if (name.match(/^on([\\s\\S]+)$/)) {\n          root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, function (c) {\n            return c.toLowerCase();\n          }), value);\n        } else {\n          if (name === 'className') {\n            root.setAttribute('class', value);\n          } else {\n            root.setAttribute(name, value);\n          }\n        }\n      } // 确保vchildren真正存在\n\n\n      if (this.vchildren) {\n        this.vchildren = this.children.map(function (child) {\n          return child.vdom;\n        });\n      } // 处理children[]：用vchildren渲染才算是一棵真正虚拟dom树操作\n\n\n      var _iterator = _createForOfIteratorHelper(this.vchildren),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var child = _step.value;\n          var childRange = document.createRange();\n          childRange.setStart(root, root.childNodes.length);\n          childRange.setEnd(root, root.childNodes.length);\n          child[RENDER_TO_DOM](childRange);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      replaceContent(range, root); // 2.插入节点\n      // range.insertNode(root);\n    }\n  }, {\n    key: \"vdom\",\n    get: function get() {\n      // 保证任何一个vdom属性的这个树里面取出来的children都有vchildren这属性，递归调用\n      this.vchildren = this.children.map(function (child) {\n        return child.vdom;\n      });\n      return this; // return {\n      //   type: this.type,\n      //   props: this.props,\n      //   children: this.children.map(child => child.vdom) // 组件的children变成vdom的children\n      // }\n    }\n  }]);\n\n  return ElementWrepper;\n}(Component); // 封装 createTextNode()\n\n\nvar TextWrepper = /*#__PURE__*/function (_Component2) {\n  _inherits(TextWrepper, _Component2);\n\n  var _super2 = _createSuper(TextWrepper);\n\n  function TextWrepper(content) {\n    var _this2;\n\n    _classCallCheck(this, TextWrepper);\n\n    _this2 = _super2.call(this, content); // this.root = document.createTextNode(content);\n\n    _this2.content = content;\n    _this2.type = '#text';\n    return _this2;\n  }\n\n  _createClass(TextWrepper, [{\n    key: RENDER_TO_DOM,\n    // get vchildren() {\n    //   return this.children.map(child => child.vdom);\n    // }\n    value: function value(range) {\n      this._range = range; // range.deleteContents();\n      // range.insertNode(this.root);\n\n      var root = document.createTextNode(this.content);\n      replaceContent(range, root);\n    }\n  }, {\n    key: \"vdom\",\n    get: function get() {\n      return this; // return {\n      //   type: '#text',\n      //   content: this.content\n      // }\n    }\n  }]);\n\n  return TextWrepper;\n}(Component); // 先插入后删除\n\n\nfunction replaceContent(range, node) {\n  // 出现在最前\n  range.insertNode(node); // 挪到之后\n\n  range.setStartAfter(node); // 内容删除\n\n  range.deleteContents(); // 设回range\n\n  range.setStartBefore(node);\n  range.setEndAfter(node);\n}\n/**\r\n * @param {String} type 类型\r\n * @param {Array} attributes 属性列表\r\n * @param {Array} children 子节点\r\n * @description 封装createElement、createTextNode与MyComponent组件一致\r\n */\n\n\nfunction createElement(type, attributes) {\n  // 当成一个普通的element处理\n  var e; // 由于MyComponent被当成对象所以需要处理一下\n\n  if (typeof type === 'string') {\n    // 当type被自定义成class的时候，我们无论如何也没办法让他能够变成一个真正的dom对象，所以需要对document.createElement(type)进行封装\n    e = new ElementWrepper(type);\n  } else {\n    e = new type();\n  } // 不管子节点有几层，都会把它翻译成createElement的函数调用\n\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  console.log(type, attributes, children); // let e = document.createElement(type);\n\n  for (var p in attributes) {\n    e.setAttribute(p, attributes[p]);\n  }\n\n  var insterChildren = function insterChildren(children) {\n    var _iterator2 = _createForOfIteratorHelper(children),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var child = _step2.value;\n\n        if (typeof child === 'string') {\n          child = new TextWrepper(child);\n        }\n\n        if (child === null) {\n          continue;\n        }\n\n        if (_typeof(child) === 'object' && child instanceof Array) {\n          insterChildren(child);\n        } else {\n          e.appendChild(child);\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  };\n\n  insterChildren(children);\n  return e;\n} // 组件更新的源头：render环节\n\nfunction render(component, praentElement) {\n  // 取root的过程：真实的渲染过程\n  // praentElement.appendChild(component.root);\n  // 在praentElement的尾巴上加上range：如果render认为要把整个Element的praentElement里面的内容给它替换掉，那么就应该把praentElement给清空\n  var range = document.createRange(); // range是由一个Start节点和一个End的节点组成的：praentElement, offset\n\n  range.setStart(praentElement, 0); // 选0是从Element第一个children到最后一个children\n\n  range.setEnd(praentElement, praentElement.childNodes.length); // 选他的childNodes的长度\n\n  range.deleteContents();\n  component[RENDER_TO_DOM](range);\n}\n\n//# sourceURL=webpack:///./toy-react.js?");

/***/ })

/******/ });