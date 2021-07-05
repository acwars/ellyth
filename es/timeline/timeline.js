import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "separator", "children", "animate", "duration"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

var Timeline = /*#__PURE__*/function (_PureComponent) {
  _inherits(Timeline, _PureComponent);

  var _super = _createSuper(Timeline);

  function Timeline() {
    _classCallCheck(this, Timeline);

    return _super.apply(this, arguments);
  }

  _createClass(Timeline, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          separator = _this$props.separator,
          children = _this$props.children,
          animate = _this$props.animate,
          duration = _this$props.duration,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var items = React.Children.map(children, function (element, index) {
        return /*#__PURE__*/cloneElement(element, {
          separator: separator,
          key: index,
          style: {
            animationDelay: "".concat(index * duration / 1000, "s")
          }
        });
      });
      return /*#__PURE__*/React.createElement("ul", _extends({
        className: cls(prefixCls, className, (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-animated"), !!animate), _defineProperty(_cls, "".concat(prefixCls, "-").concat(animate), !!animate), _cls))
      }, attr), items);
    }
  }]);

  return Timeline;
}(PureComponent);

_defineProperty(Timeline, "defaultProps", {
  prefixCls: "ellyth-timeline",
  duration: 100
});

_defineProperty(Timeline, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  animate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
});

export { Timeline as default };