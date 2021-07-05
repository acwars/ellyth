import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "prefixCls", "disabled", "children", "value", "isButton", "size", "onChange", "indeterminate"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

var Checkbox = /*#__PURE__*/function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      checked: _this.props.checked || _this.props.defaultChecked
    });

    _defineProperty(_assertThisInitialized(_this), "_onChange", function (e) {
      _this.setState(function (_ref) {
        var checked = _ref.checked;
        return {
          checked: !checked
        };
      });

      _this.props.onChange(e);
    });

    return _this;
  }

  _createClass(Checkbox, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: // eslint-disable-next-line
    function UNSAFE_componentWillReceiveProps(_ref2) {
      var checked = _ref2.checked;

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
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          children = _this$props.children,
          value = _this$props.value,
          isButton = _this$props.isButton,
          size = _this$props.size,
          onChange = _this$props.onChange,
          indeterminate = _this$props.indeterminate,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var checked = this.state.checked;
      return /*#__PURE__*/React.createElement("label", _extends({
        className: cls("".concat(prefixCls, "-wrapper"), (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-button-wrapper"), isButton), _defineProperty(_cls, "".concat(prefixCls, "-checked"), checked), _defineProperty(_cls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_cls, "".concat(prefixCls, "-indeterminate"), checked && indeterminate), _defineProperty(_cls, "".concat(prefixCls, "-").concat(size), isButton), _cls))
      }, attr), /*#__PURE__*/React.createElement("span", {
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-button"), isButton))
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        value: value,
        checked: checked,
        className: cls("".concat(prefixCls, "-input")),
        onChange: this._onChange,
        disabled: disabled
      }), /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-inner"))
      })), /*#__PURE__*/React.createElement("span", null, children));
    }
  }]);

  return Checkbox;
}(PureComponent);

_defineProperty(Checkbox, "defaultProps", {
  prefixCls: "cuke-checkbox",
  defaultChecked: false,
  indeterminate: false,
  checked: false,
  isButton: false,
  onChange: function onChange() {},
  size: "default"
});

_defineProperty(Checkbox, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  size: PropTypes.oneOf(["small", "default", "large"])
});

export { Checkbox as default };