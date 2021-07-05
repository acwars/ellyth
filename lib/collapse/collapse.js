"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _excluded = ["className", "prefixCls", "children", "accordion", "defaultActiveKey", "activeKey", "disabled", "hideArrow", "rightArrow"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Collapse = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Collapse, _React$PureComponent);

  var _super = _createSuper(Collapse);

  function Collapse() {
    var _this;

    (0, _classCallCheck2["default"])(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      activeKey: [],
      currentActiveKey: ""
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (key) {
      var activeKey = (0, _toConsumableArray2["default"])(_this.state.activeKey);

      if (!activeKey.includes(key)) {
        activeKey.push(key);
      } else {
        activeKey = activeKey.filter(function (_activeKey) {
          return _activeKey !== key;
        });
      }

      _this.setState({
        activeKey: activeKey,
        currentActiveKey: key
      });

      if (_this.props.onChange) {
        _this.props.onChange(activeKey);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Collapse, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children,
          accordion = _this$props.accordion,
          defaultActiveKey = _this$props.defaultActiveKey,
          activeKey = _this$props.activeKey,
          disabled = _this$props.disabled,
          hideArrow = _this$props.hideArrow,
          rightArrow = _this$props.rightArrow,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var currentActiveKey = this.state.currentActiveKey;

      var items = _react["default"].Children.map(children, function (element, index) {
        return /*#__PURE__*/_react["default"].cloneElement(element, {
          key: index,
          accordion: accordion,
          rightArrow: rightArrow,
          activeKey: String(index),
          disabled: element.props.disabled || disabled,
          hideArrow: element.props.hideArrow || hideArrow,
          visible: accordion ? String(currentActiveKey) === String(index) : String(defaultActiveKey).includes(String(index)) || String(activeKey).includes(String(index)),
          //eslint-disable-line
          onChange: _this2.onChange
        });
      });

      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-accordion"), accordion))
      }, attr), items);
    }
  }]);
  return Collapse;
}(_react["default"].PureComponent);

exports["default"] = Collapse;
(0, _defineProperty2["default"])(Collapse, "defaultProps", {
  prefixCls: "ellyth-collapse",
  defaultActiveKey: [],
  activeKey: [],
  disabled: false,
  hideArrow: false,
  accordion: false,
  rightArrow: false,
  onChange: function onChange() {}
});
(0, _defineProperty2["default"])(Collapse, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  defaultActiveKey: _propTypes["default"].array,
  activeKey: _propTypes["default"].array,
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  hideArrow: _propTypes["default"].bool,
  accordion: _propTypes["default"].bool,
  rightArrow: _propTypes["default"].bool,
  icon: _propTypes["default"].any
});