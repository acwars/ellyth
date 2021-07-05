"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["children", "className", "prefixCls", "disabled", "value", "selectedValue"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Option = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Option, _React$PureComponent);

  var _super = _createSuper(Option);

  function Option() {
    var _this;

    (0, _classCallCheck2["default"])(this, Option);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function (value, children) {
      if (_this.props.onChange) {
        _this.props.onChange(value, children);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "trim", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      var _value = Array.prototype.join.call(value, "");

      return _value.replace(/\s/g, "");
    });
    return _this;
  }

  (0, _createClass2["default"])(Option, [{
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
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-selected"), selectedValue === value || this.trim(selectedValue) === this.trim(children)), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-disabled"), disabled), _cls)),
        onClick: disabled ? undefined : function () {
          return _this2.onClick(value, children);
        }
      }, attr), children);
    }
  }]);
  return Option;
}(_react["default"].PureComponent);

exports["default"] = Option;
(0, _defineProperty2["default"])(Option, "defaultProps", {
  prefixCls: "ellyth-select-option",
  disabled: false,
  value: ""
});
(0, _defineProperty2["default"])(Option, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
});