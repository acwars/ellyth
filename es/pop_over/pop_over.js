import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "title", "position", "theme", "trigger", "hiddenArrow", "wrapperClassName", "content", "onVisibleChange", "visible", "children", "disabled"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Tooltip from "../tooltip";

var Popover = /*#__PURE__*/function (_PureComponent) {
  _inherits(Popover, _PureComponent);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: _this.props.visible || null
    });

    _defineProperty(_assertThisInitialized(_this), "_onVisibleChange", function (visible) {
      _this.props.onVisibleChange(visible);
    });

    _defineProperty(_assertThisInitialized(_this), "renderContent", function () {
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          title = _this$props.title,
          content = _this$props.content;
      return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, title), content && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, content));
    });

    return _this;
  }

  _createClass(Popover, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          title = _this$props2.title,
          position = _this$props2.position,
          theme = _this$props2.theme,
          trigger = _this$props2.trigger,
          hiddenArrow = _this$props2.hiddenArrow,
          wrapperClassName = _this$props2.wrapperClassName,
          content = _this$props2.content,
          onVisibleChange = _this$props2.onVisibleChange,
          visible = _this$props2.visible,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          attr = _objectWithoutProperties(_this$props2, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className)
      }, attr), /*#__PURE__*/React.createElement(Tooltip, {
        theme: theme,
        visible: visible,
        trigger: trigger,
        disabled: disabled,
        hiddenArrow: hiddenArrow,
        title: this.renderContent(),
        position: position,
        onVisibleChange: this._onVisibleChange,
        wrapperClassName: cls("".concat(prefixCls, "-wrapper"), wrapperClassName)
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var visible = _ref.visible;

      if (!visible && state.visible === null) {
        return {
          visible: false
        };
      }

      return {
        visible: visible
      };
    }
  }]);

  return Popover;
}(PureComponent);

_defineProperty(Popover, "defaultProps", {
  prefixCls: "ellyth-popover",
  position: "top",
  title: "",
  theme: "light",
  trigger: "hover",
  disabled: false,
  onVisibleChange: function onVisibleChange() {},
  hiddenArrow: false
});

_defineProperty(Popover, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  onVisibleChange: PropTypes.func,
  title: PropTypes.any,
  content: PropTypes.any,
  hiddenArrow: PropTypes.bool,
  position: PropTypes.oneOf(["top", "right", "left", "bottom"]),
  trigger: PropTypes.oneOf(["click", "hover"]),
  theme: PropTypes.oneOf(["light", "dark"])
});

export { Popover as default };