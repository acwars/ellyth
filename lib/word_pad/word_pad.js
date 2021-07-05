"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var WordPad = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(WordPad, _PureComponent);

  var _super = _createSuper(WordPad);

  function WordPad(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, WordPad);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isMouseDown: false,
      lastCoordinate: {
        x: 0,
        y: 0
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(WordPad, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style;
      return /*#__PURE__*/_react["default"].createElement("canvas", {
        className: (0, _classnames["default"])(prefixCls, className),
        style: style,
        ref: function ref(node) {
          return _this2.canvas = node;
        }
      }, "\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas");
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "windowToCanvas",
    value: function windowToCanvas(x, y) {
      var _this$canvas$getBound = this.canvas.getBoundingClientRect(),
          left = _this$canvas$getBound.left,
          top = _this$canvas$getBound.top;

      return {
        x: Math.round(x - left),
        y: Math.round(y - top)
      };
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this3 = this;

      this.canvas.onmousedown = function (e) {
        e.preventDefault();

        _this3.setState({
          isMouseDown: true
        });

        _this3.setState({
          lastCoordinate: _this3.windowToCanvas(e.clientX, e.clientY)
        });
      };

      this.canvas.onmouseup = function (e) {
        e.preventDefault();

        _this3.setState({
          isMouseDown: false
        });
      };

      this.canvas.onmouseout = function (e) {
        e.preventDefault();

        _this3.setState({
          isMouseDown: false
        });
      };

      this.canvas.onmousemove = function (e) {
        e.preventDefault();
        var _this3$state = _this3.state,
            isMouseDown = _this3$state.isMouseDown,
            lastCoordinate = _this3$state.lastCoordinate;
        var _this3$props = _this3.props,
            strokeColor = _this3$props.strokeColor,
            strokeWidth = _this3$props.strokeWidth,
            lineCap = _this3$props.lineCap,
            lineJoin = _this3$props.lineJoin;

        if (isMouseDown) {
          var nowCoordinate = _this3.windowToCanvas(e.clientX, e.clientY);

          _this3.ctx.beginPath();

          _this3.ctx.moveTo(lastCoordinate.x, lastCoordinate.y);

          _this3.ctx.lineTo(nowCoordinate.x, nowCoordinate.y);

          _this3.ctx.lineWidth = strokeWidth;
          _this3.ctx.strokeStyle = strokeColor;
          _this3.ctx.lineCap = lineCap;
          _this3.ctx.lineJoin = lineJoin;

          _this3.ctx.stroke();

          _this3.setState({
            lastCoordinate: nowCoordinate
          });
        }
      };
    } // eslint-disable-next-line

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.clear) {
        this.clear();

        if (nextProps.onClearComplete) {
          nextProps.onClearComplete();
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = width;
      this.canvas.height = height;
      this.bindEvents();
      this.props.getCanvasRef(this.canvas, this.ctx);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.canvas = undefined;
    }
  }]);
  return WordPad;
}(_react.PureComponent);

exports["default"] = WordPad;
(0, _defineProperty2["default"])(WordPad, "defaultProps", {
  prefixCls: "ellyth-word-pad",
  clear: false,
  width: 700,
  height: 700,
  lineCap: "round",
  lineJoin: "round",
  strokeWidth: 10,
  strokeColor: "#444",
  getCanvasRef: function getCanvasRef() {},
  onClearComplete: function onClearComplete() {}
});
(0, _defineProperty2["default"])(WordPad, "propTypes", {
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  strokeColor: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  lineJoin: _propTypes["default"].string,
  lineCap: _propTypes["default"].string,
  getCanvasRef: _propTypes["default"].func,
  onClearComplete: _propTypes["default"].func,
  prefixCls: _propTypes["default"].string.isRequired,
  clear: _propTypes["default"].bool
});