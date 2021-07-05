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

var _icon = require("../icon");

var _excluded = ["prefixCls", "className", "indicator", "size", "tip", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Spin = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Spin, _PureComponent);

  var _super = _createSuper(Spin);

  function Spin(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Spin);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: true
    });
    return _this;
  }

  (0, _createClass2["default"])(Spin, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          indicator = _this$props.indicator,
          size = _this$props.size,
          tip = _this$props.tip,
          children = _this$props.children,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      if (children) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-container")
        }, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
          className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-wrap"), true))
        }, attr), /*#__PURE__*/_react["default"].createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-indicator"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(size), !!size))
        }, indicator), tip ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-tip")
        }, tip) : undefined), /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-blur"))
        }, children));
      }

      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, "".concat(prefixCls, "-spinning"))
      }, attr), /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-indicator"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(size), !!size))
      }, indicator));
    }
  }]);
  return Spin;
}(_react.PureComponent);

exports["default"] = Spin;
(0, _defineProperty2["default"])(Spin, "defaultProps", {
  prefixCls: "ellyth-spin",
  size: "",
  tip: "",
  indicator: /*#__PURE__*/_react["default"].createElement(_icon.LoadingIcon, null)
});
(0, _defineProperty2["default"])(Spin, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  tip: _propTypes["default"].string,
  indicator: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  size: _propTypes["default"].oneOf(["", "default", "small", "large"])
});