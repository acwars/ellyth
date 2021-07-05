"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _popover = _interopRequireDefault(require("../popover"));

var _button = _interopRequireDefault(require("../button"));

var _icon = require("../icon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var triggerTypes = {
  hover: "hover",
  click: "click"
};

var Popconfirm = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Popconfirm, _Component);

  var _super = _createSuper(Popconfirm);

  function Popconfirm(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Popconfirm);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onVisibleChange", function (visible) {
      _this.setState({
        visible: visible
      }, function () {
        _this.props.onVisibleChange(visible);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCancel", function () {
      _this.setState({
        visible: false
      });

      _this.props.onCancel();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOk", function () {
      _this.setState({
        visible: false
      });

      _this.props.onOk();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderContent", function () {
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          title = _this$props.title,
          okText = _this$props.okText,
          cancelText = _this$props.cancelText,
          okButtonProps = _this$props.okButtonProps,
          cancelButtonProps = _this$props.cancelButtonProps,
          icon = _this$props.icon;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, title && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(prefixCls, "-title-icon")
      }, icon), title), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-button-group")
      }, /*#__PURE__*/_react["default"].createElement(_button["default"], (0, _extends2["default"])({
        size: "small"
      }, cancelButtonProps, {
        onClick: _this._onCancel
      }), cancelText), /*#__PURE__*/_react["default"].createElement(_button["default"], (0, _extends2["default"])({
        size: "small",
        type: "primary"
      }, okButtonProps, {
        onClick: _this._onOk
      }), okText)));
    });
    return _this;
  }

  (0, _createClass2["default"])(Popconfirm, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          position = _this$props2.position,
          theme = _this$props2.theme,
          trigger = _this$props2.trigger,
          wrapperClassName = _this$props2.wrapperClassName,
          children = _this$props2.children,
          hiddenArrow = _this$props2.hiddenArrow,
          style = _this$props2.style,
          disabled = _this$props2.disabled;
      return /*#__PURE__*/_react["default"].createElement(_popover["default"], {
        theme: theme,
        visible: this.state.visible,
        trigger: trigger,
        disabled: disabled,
        title: this.renderContent(),
        position: position,
        hiddenArrow: hiddenArrow,
        onVisibleChange: this._onVisibleChange,
        className: (0, _classnames["default"])(prefixCls, className),
        wrapperClassName: (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), wrapperClassName),
        style: style
      }, children);
    }
  }]);
  return Popconfirm;
}(_react.Component);

exports["default"] = Popconfirm;
(0, _defineProperty2["default"])(Popconfirm, "defaultProps", {
  prefixCls: "ellyth-popconfirm",
  position: "top",
  title: "",
  theme: "light",
  okText: "确定",
  cancelText: "取消",
  trigger: triggerTypes.click,
  onVisibleChange: function onVisibleChange() {},
  okButtonProps: {},
  cancelButtonProps: {},
  onOk: function onOk() {},
  onCancel: function onCancel() {},
  disabled: false,
  hiddenArrow: false,
  // 隐藏三角箭头
  icon: /*#__PURE__*/_react["default"].createElement(_icon.WarningIcon, null)
});
(0, _defineProperty2["default"])(Popconfirm, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  onVisibleChange: _propTypes["default"].func,
  title: _propTypes["default"].any,
  okText: _propTypes["default"].any,
  cancelText: _propTypes["default"].any,
  trigger: _propTypes["default"].oneOf(Object.values(triggerTypes)),
  position: _propTypes["default"].oneOf(["top", "right", "left", "bottom"]),
  theme: _propTypes["default"].oneOf(["light", "dark"]),
  okProps: _propTypes["default"].object,
  cancelProps: _propTypes["default"].object,
  icon: _propTypes["default"].any,
  hiddenArrow: _propTypes["default"].bool
});