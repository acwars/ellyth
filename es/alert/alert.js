import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "type", "message", "description", "closable", "closeText", "showIcon", "className"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { InfoIcon, SuccessIcon, ErrorIcon, CloseIcon, WarningIcon } from "../icon";

var Alert = /*#__PURE__*/function (_PureComponent) {
  _inherits(Alert, _PureComponent);

  var _super = _createSuper(Alert);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: true,
      animation: false
    });

    _defineProperty(_assertThisInitialized(_this), "ANIMATE_END_TIME", 500);

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
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

    _defineProperty(_assertThisInitialized(_this), "renderIcon", function (type) {
      switch (type) {
        case "success":
          return /*#__PURE__*/React.createElement(SuccessIcon, null);

        case "error":
          return /*#__PURE__*/React.createElement(ErrorIcon, null);

        case "warning":
          return /*#__PURE__*/React.createElement(WarningIcon, null);

        case "info":
          return /*#__PURE__*/React.createElement(InfoIcon, null);

        default:
          return /*#__PURE__*/React.createElement(SuccessIcon, null);
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

  _createClass(Alert, [{
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
          attr = _objectWithoutProperties(_this$props, _excluded);

      var _this$state = this.state,
          visible = _this$state.visible,
          animation = _this$state.animation;

      if (!visible) {
        return null;
      }

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, "".concat(prefixCls, "-").concat(type), _defineProperty({
          "has-description": !!description
        }, "".concat(prefixCls, "-hide"), animation))
      }, attr), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-message")
      }, showIcon ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, this.renderIcon(type)) : undefined, /*#__PURE__*/React.createElement("span", null, message), closable ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-close"),
        onClick: this.onClose
      }, closeText) : undefined), description ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-description")
      }, description) : undefined);
    }
  }]);

  return Alert;
}(PureComponent);

_defineProperty(Alert, "defaultProps", {
  prefixCls: "ellyth-alert",
  closeText: /*#__PURE__*/React.createElement(CloseIcon, null),
  type: "success",
  message: "",
  description: "",
  closable: false,
  showIcon: false,
  onClose: function onClose() {}
});

_defineProperty(Alert, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
  closeText: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
  closable: PropTypes.bool,
  showIcon: PropTypes.bool,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(["warning", "success", "error", "info"])
});

export { Alert as default };