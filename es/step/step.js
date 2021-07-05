import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "children", "visible"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";

var Step = /*#__PURE__*/function (_PureComponent) {
  _inherits(Step, _PureComponent);

  var _super = _createSuper(Step);

  function Step() {
    _classCallCheck(this, Step);

    return _super.apply(this, arguments);
  }

  _createClass(Step, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          children = _this$props.children,
          visible = _this$props.visible,
          attr = _objectWithoutProperties(_this$props, _excluded);

      if (!visible || !children) {
        return null;
      }

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className)
      }, attr), children);
    }
  }]);

  return Step;
}(PureComponent);

_defineProperty(Step, "defaultProps", {
  prefixCls: "cuke-step"
});

export default Step;