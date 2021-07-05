import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "description", "icon", "height", "style"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { EmptyIcon } from "../icon";

var Empty = /*#__PURE__*/function (_PureComponent) {
  _inherits(Empty, _PureComponent);

  var _super = _createSuper(Empty);

  function Empty() {
    _classCallCheck(this, Empty);

    return _super.apply(this, arguments);
  }

  _createClass(Empty, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          description = _this$props.description,
          icon = _this$props.icon,
          height = _this$props.height,
          style = _this$props.style,
          attr = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className)
      }, attr, {
        style: _objectSpread({
          height: height
        }, style)
      }), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-icon"))
      }, icon), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-description"))
      }, description), this.props.children);
    }
  }]);

  return Empty;
}(PureComponent);

_defineProperty(Empty, "defaultProps", {
  prefixCls: "ellyth-empty",
  description: "暂无数据",
  icon: /*#__PURE__*/React.createElement(EmptyIcon, null),
  height: 200
});

_defineProperty(Empty, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  description: PropTypes.any,
  height: PropTypes.number
});

export { Empty as default };