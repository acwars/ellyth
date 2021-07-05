import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["gutter", "prefixCls", "className", "style", "span", "offset"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

var Col = /*#__PURE__*/function (_PureComponent) {
  _inherits(Col, _PureComponent);

  var _super = _createSuper(Col);

  function Col() {
    _classCallCheck(this, Col);

    return _super.apply(this, arguments);
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          gutter = _this$props.gutter,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          span = _this$props.span,
          offset = _this$props.offset,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var colStyle = gutter ? {
        paddingLeft: gutter / 2,
        paddingRight: gutter / 2
      } : {};
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, _defineProperty({}, "".concat(prefixCls, "-").concat(span), span), _defineProperty({}, "".concat(prefixCls, "-offset-").concat(offset), offset), className),
        style: _objectSpread(_objectSpread({}, style), colStyle)
      }, attr), this.props.children);
    }
  }]);

  return Col;
}(PureComponent);

_defineProperty(Col, "defaultProps", {
  prefixCls: "ellyth-col",
  gutter: 0
});

_defineProperty(Col, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});

export { Col as default };