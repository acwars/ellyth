import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "prefixCls", "children", "overflowCount", "showZero", "dot", "count"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

var Badge = /*#__PURE__*/function (_PureComponent) {
  _inherits(Badge, _PureComponent);

  var _super = _createSuper(Badge);

  function Badge(props) {
    _classCallCheck(this, Badge);

    return _super.call(this, props);
  }

  _createClass(Badge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children,
          overflowCount = _this$props.overflowCount,
          showZero = _this$props.showZero,
          dot = _this$props.dot,
          count = _this$props.count,
          attr = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("div", {
        className: cls(prefixCls, className)
      }, count > 0 || showZero ? /*#__PURE__*/React.createElement("span", _extends({
        className: cls("".concat(prefixCls, "-inner"), _defineProperty({}, "".concat(prefixCls, "-dot"), dot))
      }, attr), dot ? undefined : count >= overflowCount ? "".concat(overflowCount, "+") : count) : undefined, children);
    }
  }]);

  return Badge;
}(PureComponent);

_defineProperty(Badge, "propsTypes", {
  prefixCls: PropTypes.string.isRequired,
  overflowCount: PropTypes.number,
  dot: PropTypes.bool,
  showZero: PropTypes.bool,
  onClick: PropTypes.func
});

_defineProperty(Badge, "defaultProps", {
  prefixCls: "ellyth-badge",
  overflowCount: 99,
  showZero: false,
  dot: false,
  onClick: function onClick() {}
});

export { Badge as default };