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

var _excluded = ["title", "children", "className", "prefixCls", "disabled", "hideArrow", "rightArrow", "icon", "visible", "accordion", "defaultActiveKey", "activeKey"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CollapseItem = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(CollapseItem, _React$PureComponent);

  var _super = _createSuper(CollapseItem);

  function CollapseItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, CollapseItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: _this.props.visible
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleContentPanel", function () {
      _this.setState({
        visible: !_this.state.visible
      });

      _this.props.onChange(_this.props.activeKey);
    });
    return _this;
  }

  (0, _createClass2["default"])(CollapseItem, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          hideArrow = _this$props.hideArrow,
          rightArrow = _this$props.rightArrow,
          icon = _this$props.icon,
          collapseVisible = _this$props.visible,
          accordion = _this$props.accordion,
          defaultActiveKey = _this$props.defaultActiveKey,
          activeKey = _this$props.activeKey,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var visible = this.state.visible;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-right-arrow"), rightArrow), _cls))
      }, attr), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-header"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-header-has-radius"), !visible)),
        onClick: disabled ? undefined : this.toggleContentPanel
      }, hideArrow ? undefined : /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-arrow"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-arrow-active"), visible))
      }, icon), title), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-content"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-hide"), !visible))
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: // 通过父组件 改变 非当前 active item 状态 实现手风琴效果
    function getDerivedStateFromProps(_ref, state) {
      var visible = _ref.visible,
          accordion = _ref.accordion;

      if (accordion && visible !== state.visible) {
        return {
          visible: visible ? !visible : visible
        };
      }

      return null;
    }
  }]);
  return CollapseItem;
}(_react["default"].PureComponent);

exports["default"] = CollapseItem;
(0, _defineProperty2["default"])(CollapseItem, "defaultProps", {
  prefixCls: "ellyth-collapse-item",
  hideArrow: false,
  disabled: false,
  rightArrow: false,
  icon: /*#__PURE__*/_react["default"].createElement(_icon.ArrowRightIcon, null),
  onChange: function onChange() {}
});
(0, _defineProperty2["default"])(CollapseItem, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  hideArrow: _propTypes["default"].bool,
  rightArrow: _propTypes["default"].bool,
  icon: _propTypes["default"].any
});