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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = require("../icon");

var _excluded = ["prefixCls", "className", "children", "type", "disabled", "hollow", "dashed", "size", "style", "color", "onClick", "closable", "circle"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var types = ["default", "primary", "warning", "success", "error", "info", "loading"];

var Tag = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Tag, _PureComponent);

  var _super = _createSuper(Tag);

  function Tag() {
    var _this;

    (0, _classCallCheck2["default"])(this, Tag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: true,
      animation: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ANIMATE_END_TIME", 500);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClose", function () {
      _this.setState({
        animation: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            visible: false
          });

          _this.props.onClose();
        }, _this.ANIMATE_END_TIME);
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Tag, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          children = _this$props.children,
          type = _this$props.type,
          disabled = _this$props.disabled,
          hollow = _this$props.hollow,
          dashed = _this$props.dashed,
          size = _this$props.size,
          style = _this$props.style,
          color = _this$props.color,
          onClick = _this$props.onClick,
          closable = _this$props.closable,
          circle = _this$props.circle,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var _this$state = this.state,
          visible = _this$state.visible,
          animation = _this$state.animation;

      if (!visible) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-").concat(type), type), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-hollow"), hollow), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-large"), size === "large"), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-small"), size === "small"), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-dashed"), dashed), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-color"), color), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-circle"), circle), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-hide"), animation), _cls)),
        style: _objectSpread({
          backgroundColor: color
        }, style)
      }, attr, {
        onClick: !disabled ? onClick : undefined
      }), /*#__PURE__*/_react["default"].createElement("span", null, children), closable && /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-close")),
        onClick: this.onClose
      }, /*#__PURE__*/_react["default"].createElement(_icon.CloseIcon, null)));
    }
  }]);
  return Tag;
}(_react.PureComponent);

exports["default"] = Tag;
(0, _defineProperty2["default"])(Tag, "defaultProps", {
  prefixCls: "ellyth-tag",
  type: types[0],
  color: "",
  hollow: false,
  dashed: false,
  disabled: false,
  size: "default",
  closable: false,
  circle: false,
  onClose: function onClose() {}
});
(0, _defineProperty2["default"])(Tag, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].oneOf(types),
  color: _propTypes["default"].string,
  hollow: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  dashed: _propTypes["default"].bool,
  closable: _propTypes["default"].bool,
  circle: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  size: _propTypes["default"].oneOf(["small", "default", "large"])
});