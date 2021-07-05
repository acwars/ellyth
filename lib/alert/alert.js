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

var _excluded = ["prefixCls", "type", "message", "description", "closable", "closeText", "showIcon", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Alert = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Alert, _PureComponent);

  var _super = _createSuper(Alert);

  function Alert(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Alert);
    _this = _super.call(this, props);
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderIcon", function (type) {
      switch (type) {
        case "success":
          return /*#__PURE__*/_react["default"].createElement(_icon.SuccessIcon, null);

        case "error":
          return /*#__PURE__*/_react["default"].createElement(_icon.ErrorIcon, null);

        case "warning":
          return /*#__PURE__*/_react["default"].createElement(_icon.WarningIcon, null);

        case "info":
          return /*#__PURE__*/_react["default"].createElement(_icon.InfoIcon, null);

        default:
          return /*#__PURE__*/_react["default"].createElement(_icon.SuccessIcon, null);
      }
    });
    _this.typeConfig = {
      info: "info",
      success: "success",
      error: "error",
      warning: "warning"
    };
    return _this;
  }

  (0, _createClass2["default"])(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          type = _this$props.type,
          message = _this$props.message,
          description = _this$props.description,
          closable = _this$props.closable,
          closeText = _this$props.closeText,
          showIcon = _this$props.showIcon,
          className = _this$props.className,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var _this$state = this.state,
          visible = _this$state.visible,
          animation = _this$state.animation;

      if (!visible) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, "".concat(prefixCls, "-").concat(type), (0, _defineProperty2["default"])({
          "has-description": !!description
        }, "".concat(prefixCls, "-hide"), animation))
      }, attr), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-message")
      }, showIcon ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, this.renderIcon(type)) : undefined, /*#__PURE__*/_react["default"].createElement("span", null, message), closable ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(prefixCls, "-close"),
        onClick: this.onClose
      }, closeText) : undefined), description ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-description")
      }, description) : undefined);
    }
  }]);
  return Alert;
}(_react.PureComponent);

exports["default"] = Alert;
(0, _defineProperty2["default"])(Alert, "defaultProps", {
  prefixCls: "ellyth-alert",
  closeText: /*#__PURE__*/_react["default"].createElement(_icon.CloseIcon, null),
  type: "success",
  message: "",
  description: "",
  closable: false,
  showIcon: false,
  onClose: function onClose() {}
});
(0, _defineProperty2["default"])(Alert, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  message: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]),
  closeText: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]),
  closable: _propTypes["default"].bool,
  showIcon: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  type: _propTypes["default"].oneOf(["warning", "success", "error", "info"])
});