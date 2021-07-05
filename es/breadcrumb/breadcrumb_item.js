import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "separator", "children"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";

var BreadcrumbItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(BreadcrumbItem, _PureComponent);

  var _super = _createSuper(BreadcrumbItem);

  function BreadcrumbItem() {
    _classCallCheck(this, BreadcrumbItem);

    return _super.apply(this, arguments);
  }

  _createClass(BreadcrumbItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          separator = _this$props.separator,
          children = _this$props.children,
          attr = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("span", _extends({
        className: cls(prefixCls, className)
      }, attr), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-text")
      }, children), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-separator")
      }, separator));
    }
  }]);

  return BreadcrumbItem;
}(PureComponent);

_defineProperty(BreadcrumbItem, "defaultProps", {
  prefixCls: "ellyth-breadcrumb-item",
  separator: "/"
});

export { BreadcrumbItem as default };