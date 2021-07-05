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

var _excluded = ["prefixCls", "className", "type", "tabBarExtraContent", "children", "activeKey", "defaultActiveKey"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cardType = "card";

var Tabs = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Tabs, _PureComponent);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Tabs);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      activeKey: ~~(_this.props.activeKey || _this.props.defaultActiveKey),
      lineWidth: 0,
      lineOffsetLeft: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setActiveLineStyle", function () {
      var _ref = _this.activeTab && _this.activeTab.getBoundingClientRect() || {},
          width = _ref.width,
          left = _ref.left;

      var _ref2 = _this.tabsHeader.current && _this.tabsHeader.current.getBoundingClientRect() || {},
          headerOffset = _ref2.left;

      _this.setState({
        lineWidth: width,
        lineOffsetLeft: left - headerOffset
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onTabChange", function (disabled) {
      return function (key) {
        return function () {
          if (!disabled) {
            _this.setState({
              activeKey: key
            }, function () {
              if (_this.props.type !== cardType) {
                _this.setActiveLineStyle();
              }
            });

            _this.props.onChange(key);
          }
        };
      };
    });
    _this.tabsHeader = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.type !== cardType) {
        setTimeout(function () {
          _this2.setActiveLineStyle();
        }, 0);
      }
    } // eslint-disable-next-line

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref3) {
      var activeKey = _ref3.activeKey;

      var _activeKey = ~~activeKey;

      if (_activeKey !== this.props.activeKey) {
        this.setState({
          activeKey: _activeKey
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          type = _this$props.type,
          tabBarExtraContent = _this$props.tabBarExtraContent,
          children = _this$props.children,
          _activeKey = _this$props.activeKey,
          defaultActiveKey = _this$props.defaultActiveKey,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var _this$state = this.state,
          activeKey = _this$state.activeKey,
          lineWidth = _this$state.lineWidth,
          lineOffsetLeft = _this$state.lineOffsetLeft;

      var content = _react["default"].Children.map(children, function (element, index) {
        var key = index + 1 >> 0;
        return /*#__PURE__*/(0, _react.cloneElement)(element, {
          activeKey: activeKey,
          visible: activeKey === key,
          key: index
        });
      });

      var header = _react["default"].Children.map(children, function (_ref4, index) {
        var _cls;

        var _ref4$props = _ref4.props,
            tab = _ref4$props.tab,
            disabled = _ref4$props.disabled;
        var key = index + 1 >> 0;
        var bindActiveRef = activeKey === key ? {
          ref: function ref(node) {
            return _this3["activeTab"] = node;
          }
        } : {};
        return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
          key: index,
          role: "tab",
          "aria-disabled": disabled,
          "aria-selected": true,
          className: (0, _classnames["default"])("".concat(prefixCls, "-tab"), (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-tab-active"), activeKey === key), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-tab-disabled"), !!disabled), _cls))
        }, bindActiveRef, {
          onClick: _this3.onTabChange(disabled)(key)
        }), tab);
      });

      var isCardType = type === cardType;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className)
      }, attr), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-header"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-card"), isCardType)),
        ref: this.tabsHeader
      }, header, !isCardType && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-line")),
        style: {
          width: lineWidth,
          transform: "translate3d(".concat(lineOffsetLeft, "px,0,0)")
        }
      }), tabBarExtraContent && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-extra"))
      }, tabBarExtraContent)), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-content"))
      }, content));
    }
  }]);
  return Tabs;
}(_react.PureComponent);

exports["default"] = Tabs;
(0, _defineProperty2["default"])(Tabs, "defaultProps", {
  prefixCls: "ellyth-tabs",
  defaultActiveKey: "1",
  onChange: function onChange() {}
});
(0, _defineProperty2["default"])(Tabs, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  defaultActiveKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  activeKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  type: _propTypes["default"].oneOf([cardType]),
  tabBarExtraContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]),
  onChange: _propTypes["default"].func
});