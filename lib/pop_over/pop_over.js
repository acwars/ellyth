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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _excluded = ["prefixCls", "className", "title", "position", "theme", "trigger", "hiddenArrow", "wrapperClassName", "content", "onVisibleChange", "visible", "children", "disabled"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Popover = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Popover, _PureComponent);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Popover);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: _this.props.visible || null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onVisibleChange", function (visible) {
      _this.props.onVisibleChange(visible);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderContent", function () {
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          title = _this$props.title,
          content = _this$props.content;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, title && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, title), content && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, content));
    });
    return _this;
  }

  (0, _createClass2["default"])(Popover, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          title = _this$props2.title,
          position = _this$props2.position,
          theme = _this$props2.theme,
          trigger = _this$props2.trigger,
          hiddenArrow = _this$props2.hiddenArrow,
          wrapperClassName = _this$props2.wrapperClassName,
          content = _this$props2.content,
          onVisibleChange = _this$props2.onVisibleChange,
          visible = _this$props2.visible,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          attr = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className)
      }, attr), /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
        theme: theme,
        visible: visible,
        trigger: trigger,
        disabled: disabled,
        hiddenArrow: hiddenArrow,
        title: this.renderContent(),
        position: position,
        onVisibleChange: this._onVisibleChange,
        wrapperClassName: (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), wrapperClassName)
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var visible = _ref.visible;

      if (!visible && state.visible === null) {
        return {
          visible: false
        };
      }

      return {
        visible: visible
      };
    }
  }]);
  return Popover;
}(_react.PureComponent);

exports["default"] = Popover;
(0, _defineProperty2["default"])(Popover, "defaultProps", {
  prefixCls: "ellyth-popover",
  position: "top",
  title: "",
  theme: "light",
  trigger: "hover",
  disabled: false,
  onVisibleChange: function onVisibleChange() {},
  hiddenArrow: false
});
(0, _defineProperty2["default"])(Popover, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  onVisibleChange: _propTypes["default"].func,
  title: _propTypes["default"].any,
  content: _propTypes["default"].any,
  hiddenArrow: _propTypes["default"].bool,
  position: _propTypes["default"].oneOf(["top", "right", "left", "bottom"]),
  trigger: _propTypes["default"].oneOf(["click", "hover"]),
  theme: _propTypes["default"].oneOf(["light", "dark"])
});