import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["loading", "disabled", "block", "prefixCls", "children", "type", "className", "htmlType", "onClick", "hollow", "size", "href", "dashed", "circle", "plain"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { LoadingIcon } from "../icon";
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
  _inherits(Button, _PureComponent);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
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
          attr = _objectWithoutProperties(_this$props, _excluded);

      var isDisabled = disabled || loading ? {
        disabled: true
      } : {
        onClick: onClick
      };

      var baseProps = _objectSpread(_objectSpread(_objectSpread({}, attr), isDisabled), {}, {
        type: htmlType,
        className: cls(prefixCls, className, (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_cls, "".concat(prefixCls, "-default"), !disabled && type === types["default"]), _defineProperty(_cls, "".concat(prefixCls, "-normal"), type === types["default"]), _defineProperty(_cls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_cls, "".concat(prefixCls, "-loading"), loading), _defineProperty(_cls, "".concat(prefixCls, "-block"), block), _defineProperty(_cls, "".concat(prefixCls, "-hollow"), hollow), _defineProperty(_cls, "".concat(prefixCls, "-size-").concat(size), size !== sizes["default"]), _defineProperty(_cls, "".concat(prefixCls, "-dashed"), dashed), _defineProperty(_cls, "".concat(prefixCls, "-circle"), circle), _defineProperty(_cls, "".concat(prefixCls, "-plain"), plain), _cls))
      });

      var content = /*#__PURE__*/React.createElement(React.Fragment, null, loading && !circle && /*#__PURE__*/React.createElement(LoadingIcon, {
        className: "ellyth-loading"
      }), /*#__PURE__*/React.createElement("span", null, children));

      if (href) {
        return /*#__PURE__*/React.createElement("a", _extends({
          href: disabled ? "javascript:void(0);" : href,
          disabled: disabled,
          className: cls("".concat(prefixCls, "-link"), className, _defineProperty({}, "".concat(prefixCls, "-link-disabled"), disabled))
        }, attr), content);
      }

      return /*#__PURE__*/React.createElement("button", baseProps, content);
    }
  }]);

  return Button;
}(PureComponent);

_defineProperty(Button, "defaultProps", {
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

_defineProperty(Button, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  block: PropTypes.bool,
  hollow: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  dashed: PropTypes.bool,
  circle: PropTypes.bool,
  plain: PropTypes.bool,
  htmlType: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.oneOf(Object.values(types)),
  size: PropTypes.oneOf(Object.values(sizes))
});

export { Button as default };