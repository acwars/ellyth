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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className", "prefixCls", "disabled", "children", "value", "isButton", "size", "onChange", "indeterminate"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Checkbox = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Checkbox, _PureComponent);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    (0, _classCallCheck2["default"])(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      checked: _this.props.checked || _this.props.defaultChecked
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (e) {
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

  (0, _createClass2["default"])(Checkbox, [{
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
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var checked = this.state.checked;
      return /*#__PURE__*/_react["default"].createElement("label", (0, _extends2["default"])({
        className: (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-button-wrapper"), isButton), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-checked"), checked), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-indeterminate"), checked && indeterminate), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-").concat(size), isButton), _cls))
      }, attr), /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-button"), isButton))
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        value: value,
        checked: checked,
        className: (0, _classnames["default"])("".concat(prefixCls, "-input")),
        onChange: this._onChange,
        disabled: disabled
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-inner"))
      })), /*#__PURE__*/_react["default"].createElement("span", null, children));
    }
  }]);
  return Checkbox;
}(_react.PureComponent);

exports["default"] = Checkbox;
(0, _defineProperty2["default"])(Checkbox, "defaultProps", {
  prefixCls: "cuke-checkbox",
  defaultChecked: false,
  indeterminate: false,
  checked: false,
  isButton: false,
  onChange: function onChange() {},
  size: "default"
});
(0, _defineProperty2["default"])(Checkbox, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  checked: _propTypes["default"].bool,
  defaultChecked: _propTypes["default"].bool,
  indeterminate: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["small", "default", "large"])
});