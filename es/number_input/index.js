import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["placeholder", "prefixCls", "className", "disabled", "readonly", "showStepper", "allowClear", "step", "decimal", "min", "max"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Input from "../input";
var DEFAULT_POINT = ".";
var DEFAULT_DECIMAL = 2;
export var getCleanString = function getCleanString() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return str.toString().replace(/[^\d|\\.]/g, "");
};
export var getTheValueLengthAfterTheDecimalPoint = function getTheValueLengthAfterTheDecimalPoint() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var decimal = arguments.length > 1 ? arguments[1] : undefined;
  var point = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_POINT;

  if (!decimal || !value.includes(point) || value.endsWith(point)) {
    return value;
  }

  var first = value.slice(0, 1);
  var other = value.slice(1);
  return first + other.split(point).map(function (str) {
    return str.substr(0, decimal);
  }).join(point);
};

var NumberInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(NumberInput, _PureComponent);

  var _super = _createSuper(NumberInput);

  function NumberInput() {
    var _this;

    _classCallCheck(this, NumberInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: getTheValueLengthAfterTheDecimalPoint(getCleanString(_this.props.defaultValue || _this.props.value || ""), _this.props.decimal),
      isDisabledSubTract: false,
      isDisabledSubAdd: false
    });

    _defineProperty(_assertThisInitialized(_this), "getValue", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          showStepper = _this$props.showStepper,
          decimal = _this$props.decimal;

      var _value = Math.min(max, Math.max(min, value));

      if (showStepper && _value.toString().includes(DEFAULT_POINT)) {
        // 0.1 + 0.2 = 0.3300000....4
        return _value.toFixed(decimal || DEFAULT_DECIMAL);
      }

      return _value;
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var value = getTheValueLengthAfterTheDecimalPoint(getCleanString(e.target.value), _this.props.decimal);
      var _this$props2 = _this.props,
          min = _this$props2.min,
          max = _this$props2.max;

      _this.setState({
        value: value
      }, function () {
        if (value && (value > max || value < min)) {
          _this.setState({
            value: _this.getValue()
          });

          return;
        }

        _this.props.onChange(value);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "add", function () {
      _this.setState(function (_ref) {
        var value = _ref.value;

        var newValue = _this.getValue(Number(value) + _this.props.step);

        return {
          value: newValue,
          isDisabledAdd: newValue === _this.props.max,
          isDisabledSubTract: newValue === _this.props.min
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "subtract", function () {
      _this.setState(function (_ref2) {
        var value = _ref2.value;

        var newValue = _this.getValue(Number(value) - _this.props.step);

        return {
          value: newValue,
          isDisabledSubTract: newValue === _this.props.min,
          isDisabledAdd: newValue === _this.props.max
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClear", function () {
      _this.setState({
        value: ""
      });

      _this.props.onChange("");
    });

    return _this;
  }

  _createClass(NumberInput, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: // eslint-disable-next-line
    function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setState({
          value: getTheValueLengthAfterTheDecimalPoint(getCleanString(nextProps.value), nextProps.decimal)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _cls4;

      var _this$props3 = this.props,
          placeholder = _this$props3.placeholder,
          prefixCls = _this$props3.prefixCls,
          className = _this$props3.className,
          disabled = _this$props3.disabled,
          readonly = _this$props3.readonly,
          showStepper = _this$props3.showStepper,
          allowClear = _this$props3.allowClear,
          step = _this$props3.step,
          decimal = _this$props3.decimal,
          min = _this$props3.min,
          max = _this$props3.max,
          attr = _objectWithoutProperties(_this$props3, _excluded);

      var AddStepper = function AddStepper() {
        return /*#__PURE__*/React.createElement("button", {
          className: cls("".concat(prefixCls, "-stepper"), _defineProperty({}, "".concat(prefixCls, "-disabled"), _this2.state.isDisabledAdd)),
          onClick: _this2.add,
          disabled: disabled
        }, "+");
      };

      var SubtractStepper = function SubtractStepper() {
        return /*#__PURE__*/React.createElement("button", {
          className: cls("".concat(prefixCls, "-stepper"), _defineProperty({}, "".concat(prefixCls, "-disabled"), _this2.state.isDisabledSubTract)),
          onClick: _this2.subtract,
          disabled: disabled
        }, "-");
      };

      var value = this.state.value;
      return /*#__PURE__*/React.createElement(Input, _extends({
        disabled: disabled,
        readOnly: readonly,
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled)),
        placeholder: placeholder
      }, attr, {
        onChange: this.onChange,
        value: value.toString(),
        allowClear: allowClear,
        onClear: this.onClear,
        addonBefore: showStepper && /*#__PURE__*/React.createElement(SubtractStepper, null),
        addonAfter: showStepper && /*#__PURE__*/React.createElement(AddStepper, null),
        addonClassName: cls("".concat(prefixCls, "-group"), (_cls4 = {}, _defineProperty(_cls4, "".concat(prefixCls, "-group-disabled"), disabled), _defineProperty(_cls4, "".concat(prefixCls, "-disabled-subtract"), this.state.isDisabledSubTract), _defineProperty(_cls4, "".concat(prefixCls, "-disabled-add"), this.state.isDisabledAdd), _cls4)),
        wrapperClassName: "".concat(prefixCls, "-wrapper")
      }));
    }
  }]);

  return NumberInput;
}(PureComponent);

_defineProperty(NumberInput, "defaultProps", {
  prefixCls: "ellyth-number-input",
  disabled: false,
  readonly: false,
  placeholder: "",
  showStepper: false,
  min: -Infinity,
  max: Infinity,
  step: 1,
  onChange: function onChange() {},
  allowClear: false
});

_defineProperty(NumberInput, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  allowClear: PropTypes.bool,
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  decimal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showStepper: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
});

export { NumberInput as default };