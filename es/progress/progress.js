import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "type", "animation", "className", "showInfo", "circle", "width", "format"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
var types = ["default", "warning", "success", "error", "progress"];

var Progress = /*#__PURE__*/function (_PureComponent) {
  _inherits(Progress, _PureComponent);

  var _super = _createSuper(Progress);

  function Progress(props) {
    var _this;

    _classCallCheck(this, Progress);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      percent: 0
    });

    _defineProperty(_assertThisInitialized(_this), "getStrokeDasharray", function () {
      var percent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.8;
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      var perimeter = parseFloat(Math.PI * 2 * r, 2); // 周长

      return "".concat(perimeter * percent, " ").concat(perimeter * (1 - percent));
    });

    return _this;
  }

  _createClass(Progress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          type = _this$props.type,
          animation = _this$props.animation,
          className = _this$props.className,
          showInfo = _this$props.showInfo,
          circle = _this$props.circle,
          width = _this$props.width,
          format = _this$props.format,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var percent = this.state.percent;
      var defaultPercent = "".concat(percent, "%");

      if (circle) {
        var _React$createElement;

        var cx = width / 2;
        var cy = width / 2;
        var r = width / 2 - 3;
        return /*#__PURE__*/React.createElement("div", _extends({
          className: cls("".concat(prefixCls, "-circle-wrapper"), className, "".concat(prefixCls, "-").concat(type))
        }, attr), /*#__PURE__*/React.createElement("svg", {
          width: width,
          height: width,
          viewBox: "0 0 ".concat(width, " ").concat(width),
          className: "".concat(prefixCls, "-circle")
        }, /*#__PURE__*/React.createElement("circle", {
          cx: cx,
          cy: cy,
          r: r,
          className: "".concat(prefixCls, "-circle-bg")
        }), /*#__PURE__*/React.createElement("circle", (_React$createElement = {
          cx: cx,
          cy: cy,
          r: r,
          className: "".concat(prefixCls, "-circle-stroke")
        }, _defineProperty(_React$createElement, "className", "".concat(prefixCls, "-circle-stroke-").concat(type)), _defineProperty(_React$createElement, "strokeDasharray", this.getStrokeDasharray(percent / 100, r)), _React$createElement))), /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-circle-percent")
        }, format && format(percent) || defaultPercent));
      }

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, "".concat(prefixCls, "-").concat(type))
      }, attr), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-enter")
      }, /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-bg"), _defineProperty({}, "".concat(prefixCls, "-bg-animation"), animation)),
        style: {
          width: defaultPercent
        }
      })), showInfo && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-num")
      }, defaultPercent));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var percent = _ref.percent;

      if (percent && percent !== state.percent) {
        return {
          percent: Math.max(0, Math.min(100, percent))
        };
      }

      return null;
    }
  }]);

  return Progress;
}(PureComponent);

_defineProperty(Progress, "defaultProps", {
  prefixCls: "ellyth-progress",
  type: "default",
  percent: 0,
  animation: false,
  showInfo: true,
  circle: false,
  width: 100 // 环形进度条 svg 的宽度

});

_defineProperty(Progress, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  animation: PropTypes.bool,
  circle: PropTypes.bool,
  percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(types),
  format: PropTypes.func
});

export { Progress as default };