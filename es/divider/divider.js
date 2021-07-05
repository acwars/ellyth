import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "prefixCls", "type", "dashed", "children", "position"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
var types = {
  horizontal: "horizontal",
  vertical: "vertical"
};
var position = {
  left: "left",
  right: "right",
  center: "center"
};

var Divider = /*#__PURE__*/function (_PureComponent) {
  _inherits(Divider, _PureComponent);

  var _super = _createSuper(Divider);

  function Divider(props) {
    _classCallCheck(this, Divider);

    return _super.call(this, props);
  }

  _createClass(Divider, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          type = _this$props.type,
          dashed = _this$props.dashed,
          children = _this$props.children,
          position = _this$props.position,
          attr = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, "".concat(prefixCls, "-").concat(type), "".concat(prefixCls, "-horizontal-title-").concat(position), (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-dashed"), dashed), _defineProperty(_cls, "".concat(prefixCls, "-horizontal-title"), children && type === types.horizontal), _cls))
      }, attr), children && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-title-text")
      }, children), /*#__PURE__*/React.createElement("b", null)));
    }
  }]);

  return Divider;
}(PureComponent);

_defineProperty(Divider, "propsTypes", {
  prefixCls: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(types)),
  position: PropTypes.oneOf(Object.values(position)),
  dashed: PropTypes.bool
});

_defineProperty(Divider, "defaultProps", {
  prefixCls: "ellyth-divider",
  type: types.horizontal,
  dashed: false,
  position: position.center
});

export { Divider as default };