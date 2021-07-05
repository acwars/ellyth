"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getTheValueLengthAfterTheDecimalPoint = exports.getCleanString = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _input = _interopRequireDefault(require("../input"));

var _excluded = ["placeholder", "prefixCls", "className", "disabled", "readonly", "showStepper", "allowClear", "step", "decimal", "min", "max"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DEFAULT_POINT = ".";
var DEFAULT_DECIMAL = 2;

var getCleanString = function getCleanString() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return str.toString().replace(/[^\d|\\.]/g, "");
};

exports.getCleanString = getCleanString;

var getTheValueLengthAfterTheDecimalPoint = function getTheValueLengthAfterTheDecimalPoint() {
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

exports.getTheValueLengthAfterTheDecimalPoint = getTheValueLengthAfterTheDecimalPoint;

var NumberInput = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(NumberInput, _PureComponent);

  var _super = _createSuper(NumberInput);

  function NumberInput() {
    var _this;

    (0, _classCallCheck2["default"])(this, NumberInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value: getTheValueLengthAfterTheDecimalPoint(getCleanString(_this.props.defaultValue || _this.props.value || ""), _this.props.decimal),
      isDisabledSubTract: false,
      isDisabledSubAdd: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getValue", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "add", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "subtract", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClear", function () {
      _this.setState({
        value: ""
      });

      _this.props.onChange("");
    });
    return _this;
  }

  (0, _createClass2["default"])(NumberInput, [{
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
          attr = (0, _objectWithoutProperties2["default"])(_this$props3, _excluded);

      var AddStepper = function AddStepper() {
        return /*#__PURE__*/_react["default"].createElement("button", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-stepper"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-disabled"), _this2.state.isDisabledAdd)),
          onClick: _this2.add,
          disabled: disabled
        }, "+");
      };

      var SubtractStepper = function SubtractStepper() {
        return /*#__PURE__*/_react["default"].createElement("button", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-stepper"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-disabled"), _this2.state.isDisabledSubTract)),
          onClick: _this2.subtract,
          disabled: disabled
        }, "-");
      };

      var value = this.state.value;
      return /*#__PURE__*/_react["default"].createElement(_input["default"], (0, _extends2["default"])({
        disabled: disabled,
        readOnly: readonly,
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-disabled"), disabled)),
        placeholder: placeholder
      }, attr, {
        onChange: this.onChange,
        value: value.toString(),
        allowClear: allowClear,
        onClear: this.onClear,
        addonBefore: showStepper && /*#__PURE__*/_react["default"].createElement(SubtractStepper, null),
        addonAfter: showStepper && /*#__PURE__*/_react["default"].createElement(AddStepper, null),
        addonClassName: (0, _classnames["default"])("".concat(prefixCls, "-group"), (_cls4 = {}, (0, _defineProperty2["default"])(_cls4, "".concat(prefixCls, "-group-disabled"), disabled), (0, _defineProperty2["default"])(_cls4, "".concat(prefixCls, "-disabled-subtract"), this.state.isDisabledSubTract), (0, _defineProperty2["default"])(_cls4, "".concat(prefixCls, "-disabled-add"), this.state.isDisabledAdd), _cls4)),
        wrapperClassName: "".concat(prefixCls, "-wrapper")
      }));
    }
  }]);
  return NumberInput;
}(_react.PureComponent);

exports["default"] = NumberInput;
(0, _defineProperty2["default"])(NumberInput, "defaultProps", {
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
(0, _defineProperty2["default"])(NumberInput, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]),
  disabled: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  allowClear: _propTypes["default"].bool,
  max: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  min: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  decimal: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  step: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  showStepper: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  defaultValue: _propTypes["default"].string,
  onChange: _propTypes["default"].func
});