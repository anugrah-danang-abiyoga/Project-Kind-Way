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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/student/workspace/Project-Kind-Way/node_modules/react/index.js'");

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactSpeechRecognition = __webpack_require__(110);

var _reactSpeechRecognition2 = _interopRequireDefault(_reactSpeechRecognition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dictaphone(props) {
  var _props = this.props,
      transcript = _props.transcript,
      startListening = _props.startListening,
      stopListening = _props.stopListening,
      resetTranscript = _props.resetTranscript,
      browserSupportsSpeechRecognition = _props.browserSupportsSpeechRecognition,
      playerScores = _props.playerScores;

  if (!browserSupportsSpeechRecognition) {
    return _react2.default.createElement(
      'div',
      null,
      'Speech recog not supported'
    );
  }
  console.log(this.props);
  return _react2.default.createElement(
    'div',
    null,
    'Sound supported',
    _react2.default.createElement(
      'button',
      { className: 'button is-large is-success', onClick: function onClick() {
          return startListening();
        } },
      'Speak'
    ),
    _react2.default.createElement(
      'button',
      { className: 'button is-large is-danger', onClick: function onClick() {
          return stopListening();
        } },
      'Stop/Submit'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('input', { type: 'text', value: transcript, id: 'speech-field', className: 'speech-box' })
  );
}

var options = {
  autoStart: false
};

exports.default = (0, _reactSpeechRecognition2.default)(options)(Dictaphone);

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/student/workspace/Project-Kind-Way/node_modules/react-speech-recognition/lib/index.js'");

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactLoadingComponents = __webpack_require__(159);

var _reactLoadingComponents2 = _interopRequireDefault(_reactLoadingComponents);

var _Ready = __webpack_require__(68);

var _Ready2 = _interopRequireDefault(_Ready);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const Loader = () => (
//   <Loading type='rings' width={100} height={100} fill='#f44242' />
// );

var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader(props) {
        _classCallCheck(this, Loader);

        var _this = _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));

        _this.state = {
            isLoading: true,
            loaded: false
        };
        _this.startLoading = _this.startLoading.bind(_this);
        _this.isLoaded = _this.isLoaded.bind(_this);
        return _this;
    }

    _createClass(Loader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                return _this2.setState({ isLoading: false, loaded: true });
            }, 3000);
        }
    }, {
        key: 'startLoading',
        value: function startLoading() {
            this.setState({ isLoading: this.state.isLoading });
        }
    }, {
        key: 'isLoaded',
        value: function isLoaded() {
            this.setState({ loaded: this.state.loaded });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: (this.state.isLoading ? this.state.loaded : '') + ' ' },
                this.state.isLoading && _react2.default.createElement(_reactLoadingComponents2.default, { type: 'rings', width: 100, height: 100, fill: '#f44242' }),
                this.state.loaded && _react2.default.createElement(_Ready2.default, null)
            );
        }
    }]);

    return Loader;
}(_react2.default.Component);

// class Loader extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: true
//     };
//   }
// }

// export default class Loader extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state={
//         loading: true
//         }
//       }

//       componentDidMount() {
//           setTimeout(() => this.setState({ loading: false }), '/Ready')
//           .then();
//       }

//       render() {
//           return (
//               <div>
//                   <Loading type='rings' width={100} height={100} fill='#f44242' />        
//               </div>
//           )
//       }
//     }


exports.default = Loader;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/student/workspace/Project-Kind-Way/node_modules/react-loading-components/build/index.js'");

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ready = function Ready(props) {
    return _react2.default.createElement(
        'p',
        null,
        'Hello, Have you done any good deeds today?'
    );
};

exports.default = Ready;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(72);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(81);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  console.log("starting");
  _reactDom2.default.render(_react2.default.createElement(_App2.default, { width: window.innerWidth, height: window.innerHeight }), document.getElementById('app'));
});

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/student/workspace/Project-Kind-Way/node_modules/react-dom/index.js'");

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(82);

var _Dictaphone = __webpack_require__(109);

var _Dictaphone2 = _interopRequireDefault(_Dictaphone);

var _Loader = __webpack_require__(158);

var _Loader2 = _interopRequireDefault(_Loader);

var _Ready = __webpack_require__(68);

var _Ready2 = _interopRequireDefault(_Ready);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
    return _react2.default.createElement(
        _reactRouterDom.HashRouter,
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Dictaphone2.default, null),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Loader2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/Ready', component: _Ready2.default })
        )
    );
};

exports.default = App;

// export default class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             loading: true
//         }
//         this.startLoading = this.startLoading.bind(this)
//     }
//     startLoading() {
//         this.setState({loading: this.state.loading})
//     }

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/student/workspace/Project-Kind-Way/node_modules/react-router-dom/es/index.js'");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map