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

var _spin = _interopRequireDefault(require("../spin"));

var _excluded = ["title", "cover", "className", "extra", "prefixCls", "style", "shadow", "titleOverflowHidden", "actions", "showShadowWhenHover", "loading", "tip"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Card = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Card, _PureComponent);

  var _super = _createSuper(Card);

  function Card() {
    (0, _classCallCheck2["default"])(this, Card);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Card, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          title = _this$props.title,
          cover = _this$props.cover,
          className = _this$props.className,
          extra = _this$props.extra,
          prefixCls = _this$props.prefixCls,
          style = _this$props.style,
          shadow = _this$props.shadow,
          titleOverflowHidden = _this$props.titleOverflowHidden,
          actions = _this$props.actions,
          showShadowWhenHover = _this$props.showShadowWhenHover,
          loading = _this$props.loading,
          tip = _this$props.tip,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement("section", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-shadow"), shadow), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-hover"), showShadowWhenHover), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-cover"), cover), _cls)),
        style: style
      }, attr), /*#__PURE__*/_react["default"].createElement(_spin["default"], {
        spinning: loading,
        tip: tip
      }, (title || extra) && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-header"))
      }, cover && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-header-cover"))
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: cover,
        alt: title || cover
      })), title && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-header-title"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-overflow-hidden"), titleOverflowHidden))
      }, title), extra && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-header-extra"))
      }, extra)), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-content"))
      }, this.props.children), actions.length >= 1 && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-actions"))
      }, actions.map(function (action, key) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: key,
          className: (0, _classnames["default"])("".concat(prefixCls, "-actions-item"))
        }, action);
      }))));
    }
  }]);
  return Card;
}(_react.PureComponent);

exports["default"] = Card;
(0, _defineProperty2["default"])(Card, "defaultProps", {
  prefixCls: "ellyth-card",
  shadow: true,
  titleOverflowHidden: true,
  actions: [],
  showShadowWhenHover: false,
  cover: "",
  loading: false
});
(0, _defineProperty2["default"])(Card, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].any,
  extra: _propTypes["default"].any,
  shadow: _propTypes["default"].bool,
  titleOverflowHidden: _propTypes["default"].bool,
  showShadowWhenHover: _propTypes["default"].bool,
  cover: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  actions: _propTypes["default"].array
});