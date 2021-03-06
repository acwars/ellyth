import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["gutter", "prefixCls", "className", "style", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

var Row = /*#__PURE__*/function (_PureComponent) {
  _inherits(Row, _PureComponent);

  var _super = _createSuper(Row);

  function Row() {
    _classCallCheck(this, Row);

    return _super.apply(this, arguments);
  }

  _createClass(Row, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          gutter = _this$props.gutter,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          children = _this$props.children,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var rowStyle = gutter ? {
        marginLeft: -gutter / 2,
        marginRight: -gutter / 2
      } : {};
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className),
        style: _objectSpread(_objectSpread({}, style), rowStyle)
      }, attr), React.Children.map(children, function (element, index) {
        return /*#__PURE__*/cloneElement(element, {
          gutter: gutter,
          key: index
        });
      }));
    }
  }]);

  return Row;
}(PureComponent);

_defineProperty(Row, "defaultProps", {
  prefixCls: "ellyth-row",
  gutter: 0
});

_defineProperty(Row, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});

export { Row as default };