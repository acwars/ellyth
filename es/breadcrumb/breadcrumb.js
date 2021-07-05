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

import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

var Breadcrumb = /*#__PURE__*/function (_PureComponent) {
  _inherits(Breadcrumb, _PureComponent);

  var _super = _createSuper(Breadcrumb);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _super.apply(this, arguments);
  }

  _createClass(Breadcrumb, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          separator = _this$props.separator,
          children = _this$props.children,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var items = React.Children.map(children, function (element, index) {
        return /*#__PURE__*/cloneElement(element, {
          separator: separator,
          key: index
        });
      });
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className)
      }, attr), items);
    }
  }]);

  return Breadcrumb;
}(PureComponent);

_defineProperty(Breadcrumb, "defaultProps", {
  prefixCls: "ellyth-breadcrumb",
  separator: "/"
});

_defineProperty(Breadcrumb, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  separator: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object])
});

export { Breadcrumb as default };