import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "dot", "children", "type", "color", "style"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { LoadingIcon } from "../icon";

var DefaultDot = function DefaultDot() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ellyth-timeline-dot"
  });
};

var types = ["primary", "warning", "success", "error", "info", "disabled", "loading"];

var TimelineItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimelineItem, _PureComponent);

  var _super = _createSuper(TimelineItem);

  function TimelineItem() {
    _classCallCheck(this, TimelineItem);

    return _super.apply(this, arguments);
  }

  _createClass(TimelineItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          dot = _this$props.dot,
          children = _this$props.children,
          type = _this$props.type,
          color = _this$props.color,
          style = _this$props.style,
          attr = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("li", _extends({
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-").concat(type), type))
      }, attr), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-line")
      }), type === "loading" ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-dot-loading")
      }, /*#__PURE__*/React.createElement(LoadingIcon, {
        style: {
          color: color
        }
      })) : /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-dot"),
        style: {
          borderColor: color
        }
      }, dot), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content"),
        style: {
          animationDelay: style.animationDelay
        }
      }, children));
    }
  }]);

  return TimelineItem;
}(PureComponent);

_defineProperty(TimelineItem, "defaultProps", {
  prefixCls: "ellyth-timeline-item",
  dot: /*#__PURE__*/React.createElement(DefaultDot, null),
  type: types[0],
  color: ""
});

_defineProperty(TimelineItem, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  types: PropTypes.oneOf(types),
  color: PropTypes.string,
  dot: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number])
});

export { TimelineItem as default };