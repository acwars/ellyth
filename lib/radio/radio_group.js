"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _Radio = _interopRequireDefault(require("./Radio"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["children", "prefixCls", "disabled", "size", "className", "onChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RadioGroup = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(RadioGroup, _PureComponent);

  var _super = _createSuper(RadioGroup);

  function RadioGroup(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RadioGroup);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value: _this.props.value || _this.props.defaultValue
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRadioChange", function (e) {
      _this.setState({
        value: e.target.value
      });

      _this.props.onChange(e);
    });
    return _this;
  }

  (0, _createClass2["default"])(RadioGroup, [{
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
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var value = this.state.value; // 变量子节点 对比当前value 和  子节点 value 是否相同

      var radios = _react["default"].Children.map(children, function (radio, index) {
        return /*#__PURE__*/_react["default"].createElement(_Radio["default"], (0, _extends2["default"])({
          key: index,
          disabled: disabled,
          size: size
        }, radio.props, {
          onChange: _this2.onRadioChange,
          checked: value === radio.props.value
        }));
      });

      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className)
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
}(_react.PureComponent);

exports["default"] = RadioGroup;
(0, _defineProperty2["default"])(RadioGroup, "defaultProps", {
  prefixCls: "ellyth-radio-group",
  disabled: false,
  onChange: function onChange() {},
  size: "default"
});
(0, _defineProperty2["default"])(RadioGroup, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["small", "default", "large"])
});