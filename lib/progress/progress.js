"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

var _excluded = ["prefixCls", "type", "animation", "className", "showInfo", "circle", "width", "format"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var types = ["default", "warning", "success", "error", "progress"];

var Progress = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Progress, _PureComponent);

  var _super = _createSuper(Progress);

  function Progress(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Progress);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      percent: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getStrokeDasharray", function () {
      var percent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.8;
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      var perimeter = parseFloat(Math.PI * 2 * r, 2); // 周长

      return "".concat(perimeter * percent, " ").concat(perimeter * (1 - percent));
    });
    return _this;
  }

  (0, _createClass2["default"])(Progress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          type = _this$props.type,
          animation = _this$props.animation,
          className = _this$props.className,
          showInfo = _this$props.showInfo,
          circle = _this$props.circle,
          width = _this$props.width,
          format = _this$props.format,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var percent = this.state.percent;
      var defaultPercent = "".concat(percent, "%");

      if (circle) {
        var _React$createElement;

        var cx = width / 2;
        var cy = width / 2;
        var r = width / 2 - 3;
        return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
          className: (0, _classnames["default"])("".concat(prefixCls, "-circle-wrapper"), className, "".concat(prefixCls, "-").concat(type))
        }, attr), /*#__PURE__*/_react["default"].createElement("svg", {
          width: width,
          height: width,
          viewBox: "0 0 ".concat(width, " ").concat(width),
          className: "".concat(prefixCls, "-circle")
        }, /*#__PURE__*/_react["default"].createElement("circle", {
          cx: cx,
          cy: cy,
          r: r,
          className: "".concat(prefixCls, "-circle-bg")
        }), /*#__PURE__*/_react["default"].createElement("circle", (_React$createElement = {
          cx: cx,
          cy: cy,
          r: r,
          className: "".concat(prefixCls, "-circle-stroke")
        }, (0, _defineProperty2["default"])(_React$createElement, "className", "".concat(prefixCls, "-circle-stroke-").concat(type)), (0, _defineProperty2["default"])(_React$createElement, "strokeDasharray", this.getStrokeDasharray(percent / 100, r)), _React$createElement))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-circle-percent")
        }, format && format(percent) || defaultPercent));
      }

      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, "".concat(prefixCls, "-").concat(type))
      }, attr), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-enter")
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-bg"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-bg-animation"), animation)),
        style: {
          width: defaultPercent
        }
      })), showInfo && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-num")
      }, defaultPercent));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var percent = _ref.percent;

      if (percent && percent !== state.percent) {
        return {
          percent: Math.max(0, Math.min(100, percent))
        };
      }

      return null;
    }
  }]);
  return Progress;
}(_react.PureComponent);

exports["default"] = Progress;
(0, _defineProperty2["default"])(Progress, "defaultProps", {
  prefixCls: "ellyth-progress",
  type: "default",
  percent: 0,
  animation: false,
  showInfo: true,
  circle: false,
  width: 100 // 环形进度条 svg 的宽度

});
(0, _defineProperty2["default"])(Progress, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  animation: _propTypes["default"].bool,
  circle: _propTypes["default"].bool,
  percent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  type: _propTypes["default"].oneOf(types),
  format: _propTypes["default"].func
});