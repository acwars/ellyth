import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "prefixCls", "disabled", "size", "className", "onChange"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import Radio from "./Radio";
import PropTypes from "prop-types";
import cls from "classnames";

var RadioGroup = /*#__PURE__*/function (_PureComponent) {
  _inherits(RadioGroup, _PureComponent);

  var _super = _createSuper(RadioGroup);

  function RadioGroup(props) {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.value || _this.props.defaultValue
    });

    _defineProperty(_assertThisInitialized(_this), "onRadioChange", function (e) {
      _this.setState({
        value: e.target.value
      });

      _this.props.onChange(e);
    });

    return _this;
  }

  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          size = _this$props.size,
          className = _this$props.className,
          onChange = _this$props.onChange,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var value = this.state.value; // 变量子节点 对比当前value 和  子节点 value 是否相同

      var radios = React.Children.map(children, function (radio, index) {
        return /*#__PURE__*/React.createElement(Radio, _extends({
          key: index,
          disabled: disabled,
          size: size
        }, radio.props, {
          onChange: _this2.onRadioChange,
          checked: value === radio.props.value
        }));
      });
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className)
      }, attr), radios);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var value = _ref.value;

      //当传入的 value 值改变时 重置下 value 值
      if (value === state.value) {
        return null;
      }

      return {
        value: value
      };
    }
  }]);

  return RadioGroup;
}(PureComponent);

_defineProperty(RadioGroup, "defaultProps", {
  prefixCls: "ellyth-radio-group",
  disabled: false,
  onChange: function onChange() {},
  size: "default"
});

_defineProperty(RadioGroup, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "default", "large"])
});

export { RadioGroup as default };