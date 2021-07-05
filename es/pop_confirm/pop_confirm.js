import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Popover from "../popover";
import Button from "../button";
import { WarningIcon } from "../icon";
var triggerTypes = {
  hover: "hover",
  click: "click"
};

var Popconfirm = /*#__PURE__*/function (_Component) {
  _inherits(Popconfirm, _Component);

  var _super = _createSuper(Popconfirm);

  function Popconfirm(props) {
    var _this;

    _classCallCheck(this, Popconfirm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: null
    });

    _defineProperty(_assertThisInitialized(_this), "_onVisibleChange", function (visible) {
      _this.setState({
        visible: visible
      }, function () {
        _this.props.onVisibleChange(visible);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onCancel", function () {
      _this.setState({
        visible: false
      });

      _this.props.onCancel();
    });

    _defineProperty(_assertThisInitialized(_this), "_onOk", function () {
      _this.setState({
        visible: false
      });

      _this.props.onOk();
    });

    _defineProperty(_assertThisInitialized(_this), "renderContent", function () {
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          title = _this$props.title,
          okText = _this$props.okText,
          cancelText = _this$props.cancelText,
          okButtonProps = _this$props.okButtonProps,
          cancelButtonProps = _this$props.cancelButtonProps,
          icon = _this$props.icon;
      return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-title-icon")
      }, icon), title), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-button-group")
      }, /*#__PURE__*/React.createElement(Button, _extends({
        size: "small"
      }, cancelButtonProps, {
        onClick: _this._onCancel
      }), cancelText), /*#__PURE__*/React.createElement(Button, _extends({
        size: "small",
        type: "primary"
      }, okButtonProps, {
        onClick: _this._onOk
      }), okText)));
    });

    return _this;
  }

  _createClass(Popconfirm, [{
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
      return /*#__PURE__*/React.createElement(Popover, {
        theme: theme,
        visible: this.state.visible,
        trigger: trigger,
        disabled: disabled,
        title: this.renderContent(),
        position: position,
        hiddenArrow: hiddenArrow,
        onVisibleChange: this._onVisibleChange,
        className: cls(prefixCls, className),
        wrapperClassName: cls("".concat(prefixCls, "-wrapper"), wrapperClassName),
        style: style
      }, children);
    }
  }]);

  return Popconfirm;
}(Component);

_defineProperty(Popconfirm, "defaultProps", {
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
  icon: /*#__PURE__*/React.createElement(WarningIcon, null)
});

_defineProperty(Popconfirm, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  onVisibleChange: PropTypes.func,
  title: PropTypes.any,
  okText: PropTypes.any,
  cancelText: PropTypes.any,
  trigger: PropTypes.oneOf(Object.values(triggerTypes)),
  position: PropTypes.oneOf(["top", "right", "left", "bottom"]),
  theme: PropTypes.oneOf(["light", "dark"]),
  okProps: PropTypes.object,
  cancelProps: PropTypes.object,
  icon: PropTypes.any,
  hiddenArrow: PropTypes.bool
});

export { Popconfirm as default };