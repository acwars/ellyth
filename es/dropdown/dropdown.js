import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Popover from "../popover";
var triggerTypes = {
  hover: "hover",
  click: "click"
};

var Dropdown = /*#__PURE__*/function (_PureComponent) {
  _inherits(Dropdown, _PureComponent);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false
    });

    _defineProperty(_assertThisInitialized(_this), "_onVisibleChange", function (visible) {
      _this.setState({
        visible: visible
      }, function () {
        _this.props.onVisibleChange(visible);
      });
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          position = _this$props.position,
          trigger = _this$props.trigger,
          wrapperClassName = _this$props.wrapperClassName,
          children = _this$props.children,
          hiddenArrow = _this$props.hiddenArrow,
          overlay = _this$props.overlay,
          disabled = _this$props.disabled,
          style = _this$props.style;
      return /*#__PURE__*/React.createElement(Popover, {
        visible: this.state.visible,
        trigger: trigger,
        content: overlay,
        position: position,
        disabled: disabled,
        hiddenArrow: hiddenArrow,
        onVisibleChange: this._onVisibleChange,
        className: cls(prefixCls, className),
        wrapperClassName: cls("".concat(prefixCls, "-wrapper"), wrapperClassName),
        style: style
      }, children);
    }
  }]);

  return Dropdown;
}(PureComponent);

_defineProperty(Dropdown, "defaultProps", {
  prefixCls: "ellyth-dropdown",
  trigger: triggerTypes.hover,
  position: "bottom",
  onVisibleChange: function onVisibleChange() {},
  getPopupContainer: function getPopupContainer() {
    return document.body;
  },
  hiddenArrow: false,
  disabled: false
});

_defineProperty(Dropdown, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  onVisibleChange: PropTypes.func,
  trigger: PropTypes.oneOf(Object.values(triggerTypes)),
  getPopupContainer: PropTypes.func,
  overlay: PropTypes.any,
  popupContainerClassName: PropTypes.string
});

export { Dropdown as default };