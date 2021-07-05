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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../icon");

var _excluded = ["loading", "disabled", "block", "prefixCls", "children", "type", "className", "htmlType", "onClick", "hollow", "size", "href", "dashed", "circle", "plain"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var sizes = {
  small: "small",
  "default": "default",
  large: "large"
};
var types = {
  primary: "primary",
  "default": "default",
  warning: "warning",
  success: "success",
  error: "error",
  info: "info",
  disabled: "disabled"
};

var Button = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Button, _PureComponent);

  var _super = _createSuper(Button);

  function Button() {
    (0, _classCallCheck2["default"])(this, Button);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Button, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          loading = _this$props.loading,
          disabled = _this$props.disabled,
          block = _this$props.block,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children,
          type = _this$props.type,
          className = _this$props.className,
          htmlType = _this$props.htmlType,
          onClick = _this$props.onClick,
          hollow = _this$props.hollow,
          size = _this$props.size,
          href = _this$props.href,
          dashed = _this$props.dashed,
          circle = _this$props.circle,
          plain = _this$props.plain,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var isDisabled = disabled || loading ? {
        disabled: true
      } : {
        onClick: onClick
      };

      var baseProps = _objectSpread(_objectSpread(_objectSpread({}, attr), isDisabled), {}, {
        type: htmlType,
        className: (0, _classnames["default"])(prefixCls, className, (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-").concat(type), type), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-default"), !disabled && type === types["default"]), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-normal"), type === types["default"]), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-block"), block), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-hollow"), hollow), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-size-").concat(size), size !== sizes["default"]), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-dashed"), dashed), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-circle"), circle), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-plain"), plain), _cls))
      });

      var content = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, loading && !circle && /*#__PURE__*/_react["default"].createElement(_icon.LoadingIcon, {
        className: "ellyth-loading"
      }), /*#__PURE__*/_react["default"].createElement("span", null, children));

      if (href) {
        return /*#__PURE__*/_react["default"].createElement("a", (0, _extends2["default"])({
          href: disabled ? "javascript:void(0);" : href,
          disabled: disabled,
          className: (0, _classnames["default"])("".concat(prefixCls, "-link"), className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-link-disabled"), disabled))
        }, attr), content);
      }

      return /*#__PURE__*/_react["default"].createElement("button", baseProps, content);
    }
  }]);
  return Button;
}(_react.PureComponent);

exports["default"] = Button;
(0, _defineProperty2["default"])(Button, "defaultProps", {
  prefixCls: "ellyth-button",
  href: "",
  type: types["default"],
  htmlType: "button",
  size: sizes["default"],
  loading: false,
  block: false,
  disabled: false,
  hollow: false,
  dashed: false,
  circle: false,
  plain: false
});
(0, _defineProperty2["default"])(Button, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  block: _propTypes["default"].bool,
  hollow: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  dashed: _propTypes["default"].bool,
  circle: _propTypes["default"].bool,
  plain: _propTypes["default"].bool,
  htmlType: _propTypes["default"].string,
  href: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(Object.values(types)),
  size: _propTypes["default"].oneOf(Object.values(sizes))
});