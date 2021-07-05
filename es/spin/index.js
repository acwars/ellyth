import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "indicator", "size", "tip", "children"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { LoadingIcon } from "../icon";

var Spin = /*#__PURE__*/function (_PureComponent) {
  _inherits(Spin, _PureComponent);

  var _super = _createSuper(Spin);

  function Spin(props) {
    var _this;

    _classCallCheck(this, Spin);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: true
    });

    return _this;
  }

  _createClass(Spin, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          indicator = _this$props.indicator,
          size = _this$props.size,
          tip = _this$props.tip,
          children = _this$props.children,
          attr = _objectWithoutProperties(_this$props, _excluded);

      if (children) {
        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-container")
        }, /*#__PURE__*/React.createElement("div", _extends({
          className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-wrap"), true))
        }, attr), /*#__PURE__*/React.createElement("span", {
          className: cls("".concat(prefixCls, "-indicator"), _defineProperty({}, "".concat(prefixCls, "-").concat(size), !!size))
        }, indicator), tip ? /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-tip")
        }, tip) : undefined), /*#__PURE__*/React.createElement("div", {
          className: cls("".concat(prefixCls, "-blur"))
        }, children));
      }

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, "".concat(prefixCls, "-spinning"))
      }, attr), /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-indicator"), _defineProperty({}, "".concat(prefixCls, "-").concat(size), !!size))
      }, indicator));
    }
  }]);

  return Spin;
}(PureComponent);

_defineProperty(Spin, "defaultProps", {
  prefixCls: "ellyth-spin",
  size: "",
  tip: "",
  indicator: /*#__PURE__*/React.createElement(LoadingIcon, null)
});

_defineProperty(Spin, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  tip: PropTypes.string,
  indicator: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.oneOf(["", "default", "small", "large"])
});

export { Spin as default };