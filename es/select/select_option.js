import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "className", "prefixCls", "disabled", "value", "selectedValue"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";

var Option = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Option, _React$PureComponent);

  var _super = _createSuper(Option);

  function Option() {
    var _this;

    _classCallCheck(this, Option);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (value, children) {
      if (_this.props.onChange) {
        _this.props.onChange(value, children);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "trim", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      var _value = Array.prototype.join.call(value, "");

      return _value.replace(/\s/g, "");
    });

    return _this;
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _cls,
          _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          value = _this$props.value,
          selectedValue = _this$props.selectedValue,
          attr = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-selected"), selectedValue === value || this.trim(selectedValue) === this.trim(children)), _defineProperty(_cls, "".concat(prefixCls, "-disabled"), disabled), _cls)),
        onClick: disabled ? undefined : function () {
          return _this2.onClick(value, children);
        }
      }, attr), children);
    }
  }]);

  return Option;
}(React.PureComponent);

_defineProperty(Option, "defaultProps", {
  prefixCls: "ellyth-select-option",
  disabled: false,
  value: ""
});

_defineProperty(Option, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});

export { Option as default };