import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "value", "className", "children", "disabled", "isButton", "size", "onChange"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

var Radio = /*#__PURE__*/function (_PureComponent) {
  _inherits(Radio, _PureComponent);

  var _super = _createSuper(Radio);

  function Radio(props) {
    var _this;

    _classCallCheck(this, Radio);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      checked: _this.props.checked || _this.props.defaultChecked || false
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState({
        checked: true
      });

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    return _this;
  }

  _createClass(Radio, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: // eslint-disable-next-line
    function UNSAFE_componentWillReceiveProps(_ref) {
      var checked = _ref.checked;

      if (checked !== this.props.checked) {
        this.setState({
          checked: checked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          value = _this$props.value,
          className = _this$props.className,
          children = _this$props.children,
          disabled = _this$props.disabled,
          isButton = _this$props.isButton,
          size = _this$props.size,
          onChange = _this$props.onChange,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var checked = this.state.checked;
      return /*#__PURE__*/React.createElement("label", _extends({
        className: cls("".concat(prefixCls, "-wrapper"), (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-button-wrapper"), isButton), _defineProperty(_cls, "".concat(prefixCls, "-checked"), checked), _defineProperty(_cls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_cls, "".concat(prefixCls, "-").concat(size), isButton), _cls))
      }, attr), /*#__PURE__*/React.createElement("span", {
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-button"), isButton))
      }, /*#__PURE__*/React.createElement("input", {
        type: "radio",
        value: value,
        checked: checked,
        className: cls("".concat(prefixCls, "-input")),
        onChange: this.onChange,
        disabled: disabled
      }), /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-inner"))
      })), /*#__PURE__*/React.createElement("span", null, children));
    }
  }]);

  return Radio;
}(PureComponent);

_defineProperty(Radio, "defaultProps", {
  prefixCls: "ellyth-radio",
  defaultChecked: false,
  checked: false,
  size: "default"
});

_defineProperty(Radio, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  size: PropTypes.oneOf(["small", "default", "large"])
});

export { Radio as default };