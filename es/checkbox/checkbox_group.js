import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "prefixCls", "disabled", "className", "size", "onChange", "value"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import Checkbox from "./checkbox";
import PropTypes from "prop-types";
import cls from "classnames";

var CheckboxGroup = /*#__PURE__*/function (_PureComponent) {
  _inherits(CheckboxGroup, _PureComponent);

  var _super = _createSuper(CheckboxGroup);

  function CheckboxGroup(props) {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      //默认选中的值
      value: _this.props.value || _this.props.defaultValue || _this.getCheckedValue(_this.props.children)
    });

    _defineProperty(_assertThisInitialized(_this), "onCheckboxChange", function (e) {
      var currentValue = e.target.value;
      var value = _this.state.value;
      var currentIndex = value.findIndex(function (v) {
        return v === currentValue;
      }); //如果没在就加入数组 否则就是 取消选中 删除掉

      if (currentIndex < 0) {
        value.push(currentValue);
      } else {
        value.splice(currentIndex, 1);
      }

      _this.setState({
        value: value
      });

      _this.props.onChange(value);
    });

    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "getCheckedValue",
    value: function getCheckedValue(children) {
      var checkedValue = []; //遍历子节点 看是否有选中的值

      React.Children.forEach(children, function (checkbox) {
        if (checkbox.props && checkbox.props.checked || checkbox.props.defaultChecked) {
          checkedValue.push(checkbox.props.value);
        }
      });
      return checkedValue;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          className = _this$props.className,
          size = _this$props.size,
          onChange = _this$props.onChange,
          currentValue = _this$props.value,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var value = this.state.value;
      var isChecked = value.find(function (v) {
        return v === currentValue;
      }); // 变量子节点 对比当前value 和  子节点 value 是否相同

      var items = React.Children.map(children, function (checkbox, index) {
        return /*#__PURE__*/React.createElement(Checkbox, _extends({
          key: index,
          size: size,
          disabled: disabled
        }, checkbox.props, {
          onChange: _this2.onCheckboxChange,
          checked: isChecked
        }));
      });
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className)
      }, attr), items);
    }
  }]);

  return CheckboxGroup;
}(PureComponent);

_defineProperty(CheckboxGroup, "defaultProps", {
  prefixCls: "cuke-checkbox-group",
  disabled: false,
  size: "default",
  onChange: function onChange() {}
});

_defineProperty(CheckboxGroup, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "default", "large"])
});

export { CheckboxGroup as default };