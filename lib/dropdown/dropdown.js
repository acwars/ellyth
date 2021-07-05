"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _popover = _interopRequireDefault(require("../popover"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var triggerTypes = {
  hover: "hover",
  click: "click"
};

var Dropdown = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Dropdown, _PureComponent);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Dropdown);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onVisibleChange", function (visible) {
      _this.setState({
        visible: visible
      }, function () {
        _this.props.onVisibleChange(visible);
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Dropdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          position = _this$props.position,
          trigger = _this$props.trigger,
          wrapperClassName = _this$props.wrapperClassName,
          children = _this$props.children,
          hiddenArrow = _this$props.hiddenArrow,
          overlay = _this$props.overlay,
          disabled = _this$props.disabled,
          style = _this$props.style;
      return /*#__PURE__*/_react["default"].createElement(_popover["default"], {
        visible: this.state.visible,
        trigger: trigger,
        content: overlay,
        position: position,
        disabled: disabled,
        hiddenArrow: hiddenArrow,
        onVisibleChange: this._onVisibleChange,
        className: (0, _classnames["default"])(prefixCls, className),
        wrapperClassName: (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), wrapperClassName),
        style: style
      }, children);
    }
  }]);
  return Dropdown;
}(_react.PureComponent);

exports["default"] = Dropdown;
(0, _defineProperty2["default"])(Dropdown, "defaultProps", {
  prefixCls: "ellyth-dropdown",
  trigger: triggerTypes.hover,
  position: "bottom",
  onVisibleChange: function onVisibleChange() {},
  getPopupContainer: function getPopupContainer() {
    return document.body;
  },
  hiddenArrow: false,
  disabled: false
});
(0, _defineProperty2["default"])(Dropdown, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  onVisibleChange: _propTypes["default"].func,
  trigger: _propTypes["default"].oneOf(Object.values(triggerTypes)),
  getPopupContainer: _propTypes["default"].func,
  overlay: _propTypes["default"].any,
  popupContainerClassName: _propTypes["default"].string
});