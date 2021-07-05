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

var _icon = require("../icon");

var _excluded = ["className", "prefixCls", "loading", "disabled", "checkedChildren", "unCheckedChildren", "size"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SWITCH_SIZES = ["default", "large", "small"];

var Switch = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Switch, _React$PureComponent);

  var _super = _createSuper(Switch);

  function Switch() {
    var _this;

    (0, _classCallCheck2["default"])(this, Switch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      checked: _this.props.defaultChecked || _this.props.checked
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function () {
      var checked = !_this.state.checked;

      _this.setState({
        checked: checked
      });

      _this.props.onChange(checked);
    });
    return _this;
  }

  (0, _createClass2["default"])(Switch, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          loading = _this$props.loading,
          disabled = _this$props.disabled,
          checkedChildren = _this$props.checkedChildren,
          unCheckedChildren = _this$props.unCheckedChildren,
          size = _this$props.size,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var checked = this.state.checked;
      return /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-checked"), checked), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-").concat(size), !!size), _cls))
      }, attr, {
        onClick: disabled || loading ? undefined : this._onChange
      }), loading ? /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-loading-icon"))
      }, /*#__PURE__*/_react["default"].createElement(_icon.LoadingIcon, null)) : /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-inner"))
      }, checked ? checkedChildren : unCheckedChildren));
    }
  }]);
  return Switch;
}(_react["default"].PureComponent);

exports["default"] = Switch;
(0, _defineProperty2["default"])(Switch, "defaultProps", {
  checked: false,
  defaultChecked: false,
  disabled: false,
  loading: false,
  prefixCls: "ellyth-switch",
  onChange: function onChange() {}
});
(0, _defineProperty2["default"])(Switch, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].oneOf(SWITCH_SIZES),
  checked: _propTypes["default"].bool,
  defaultChecked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  checkedChildren: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]),
  unCheckedChildren: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object])
});