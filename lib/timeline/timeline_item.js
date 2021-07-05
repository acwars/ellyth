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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = require("../icon");

var _excluded = ["prefixCls", "className", "dot", "children", "type", "color", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DefaultDot = function DefaultDot() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ellyth-timeline-dot"
  });
};

var types = ["primary", "warning", "success", "error", "info", "disabled", "loading"];

var TimelineItem = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TimelineItem, _PureComponent);

  var _super = _createSuper(TimelineItem);

  function TimelineItem() {
    (0, _classCallCheck2["default"])(this, TimelineItem);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TimelineItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          dot = _this$props.dot,
          children = _this$props.children,
          type = _this$props.type,
          color = _this$props.color,
          style = _this$props.style,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement("li", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(type), type))
      }, attr), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-line")
      }), type === "loading" ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-dot-loading")
      }, /*#__PURE__*/_react["default"].createElement(_icon.LoadingIcon, {
        style: {
          color: color
        }
      })) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-dot"),
        style: {
          borderColor: color
        }
      }, dot), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-content"),
        style: {
          animationDelay: style.animationDelay
        }
      }, children));
    }
  }]);
  return TimelineItem;
}(_react.PureComponent);

exports["default"] = TimelineItem;
(0, _defineProperty2["default"])(TimelineItem, "defaultProps", {
  prefixCls: "ellyth-timeline-item",
  dot: /*#__PURE__*/_react["default"].createElement(DefaultDot, null),
  type: types[0],
  color: ""
});
(0, _defineProperty2["default"])(TimelineItem, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  types: _propTypes["default"].oneOf(types),
  color: _propTypes["default"].string,
  dot: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string, _propTypes["default"].number])
});