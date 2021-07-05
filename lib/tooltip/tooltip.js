"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TooltipPortal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _utils = require("../utils");

var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));

var _excluded = ["prefixCls", "className", "title", "theme", "trigger", "position", "hiddenArrow", "wrapperClassName", "getPopupContainer", "disabled", "onVisibleChange", "visible"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TooltipPortal = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TooltipPortal, _PureComponent);

  var _super = _createSuper(TooltipPortal);

  function TooltipPortal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TooltipPortal);
    _this = _super.call(this, props);
    _this.el = document.createElement("div");
    _this.container = _this.props.getPopupContainer();
    return _this;
  }

  (0, _createClass2["default"])(TooltipPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.container.appendChild(this.el);

      if (this.props.onChange) {
        this.props.onChange();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.container.removeChild(this.el);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _reactDom.createPortal)(this.props.children, this.el);
    }
  }]);
  return TooltipPortal;
}(_react.PureComponent);

exports.TooltipPortal = TooltipPortal;
(0, _defineProperty2["default"])(TooltipPortal, "defaultProps", {
  getPopupContainer: function getPopupContainer() {
    return document.body;
  }
});
var triggerTypes = {
  hover: "hover",
  click: "click"
};
var themes = ["dark", "light"];

var Tooltip = /*#__PURE__*/function (_PureComponent2) {
  (0, _inherits2["default"])(Tooltip, _PureComponent2);

  var _super2 = _createSuper(Tooltip);

  function Tooltip(props) {
    var _this2;

    (0, _classCallCheck2["default"])(this, Tooltip);
    _this2 = _super2.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "closeTimeDelay", 100);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "state", {
      visible: null,
      left: 0,
      top: 0,
      openLock: false,
      closeLock: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "getWrapperBounding", function () {
      var _this2$triggerWrapper = _this2.triggerWrapper.current.getBoundingClientRect(),
          width = _this2$triggerWrapper.width,
          height = _this2$triggerWrapper.height,
          top = _this2$triggerWrapper.top,
          left = _this2$triggerWrapper.left;

      var _this2$wrapper$curren = _this2.wrapper.current.getBoundingClientRect(),
          wrapperHeight = _this2$wrapper$curren.height,
          wrapperWidth = _this2$wrapper$curren.width;

      var _window = window,
          scrollX = _window.scrollX,
          scrollY = _window.scrollY;
      var positions = {
        top: {
          top: top + scrollY - wrapperHeight,
          left: left + scrollX + width / 2 - wrapperWidth / 2
        },
        bottom: {
          top: top + height + scrollY,
          left: left + scrollX + width / 2 - wrapperWidth / 2
        },
        left: {
          top: top + scrollY + height / 2 - wrapperHeight / 2,
          left: left + scrollX - wrapperWidth
        },
        right: {
          top: top + scrollY + height / 2 - wrapperHeight / 2,
          left: left + scrollX + width
        }
      };
      return positions[_this2.props.position];
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "onClickOutsideHandler", function (e) {
      e.stopPropagation(); // 如果默认显示 则不做任何操作

      if (_this2.props.visible) {
        return;
      }

      if (_this2.state.visible && !_this2.wrapper.current.contains(e.target) && !_this2.toggleContainer.current.contains(e.target)) {
        _this2.setState({
          visible: false,
          closeLock: false,
          openLock: false
        });

        _this2.props.onVisibleChange(false);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "onOpenTooltip", function () {
      if (_this2.props.visible) {
        return;
      } // 如果 鼠标离开了当前目标 (或者划过了间隙) 马上 focus 上去 就取消关闭


      if (_this2.closeTimer) {
        clearTimeout(_this2.closeTimer);
      }

      _this2.setState({
        visible: true,
        closeLock: false
      }, function () {
        if (!_this2.state.openLock) {
          _this2.setWrapperBounding(function () {
            _this2.props.onVisibleChange(true);

            _this2.setState({
              openLock: true,
              closeLock: false
            }, function () {
              (0, _scrollIntoViewIfNeeded["default"])(_this2.wrapper.current, {
                scrollMode: "if-needed",
                behavior: "smooth",
                block: "nearest",
                inline: "nearest"
              });
            });
          });
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "onCloseTooltip", function () {
      if (_this2.props.visible) {
        return;
      }

      _this2.closeTimer = setTimeout(function () {
        _this2.setState({
          visible: false,
          openLock: false
        }, function () {
          if (!_this2.state.closeLock) {
            _this2.setWrapperBounding();

            _this2.props.onVisibleChange(false);

            _this2.setState({
              openLock: false,
              closeLock: true
            });
          }
        });
      }, _this2.closeTimeDelay);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "onRestWrapperPosition", function () {
      if (_this2.state.visible) {
        setTimeout(function () {
          _this2.setWrapperBounding();
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "onResizeHandler", (0, _utils.debounce)(function () {
      _this2.setWrapperBounding();
    }, 500));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "setDefaultPositionIfHaveDefaultVisible", function () {
      var visible = _this2.props.visible;

      if (visible) {
        _this2.setState({
          visible: visible
        }, _this2.setWrapperBounding);
      }
    });
    _this2.wrapper = /*#__PURE__*/(0, _react.createRef)();
    _this2.triggerWrapper = /*#__PURE__*/(0, _react.createRef)();
    _this2.toggleContainer = /*#__PURE__*/(0, _react.createRef)();
    _this2.closeTimer = null;
    return _this2;
  } // eslint-disable-next-line


  (0, _createClass2["default"])(Tooltip, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({
        visible: nextProps.visible,
        openLock: !nextProps.visible,
        closeLock: !nextProps.visible
      });

      if (nextProps.visible) {
        this.setDefaultPositionIfHaveDefaultVisible();
      }
    }
  }, {
    key: "setWrapperBounding",
    value: function setWrapperBounding() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var _this$getWrapperBound = this.getWrapperBounding(),
          left = _this$getWrapperBound.left,
          top = _this$getWrapperBound.top;

      this.setState({
        left: left,
        top: top
      }, cb);
    }
  }, {
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          title = _this$props.title,
          theme = _this$props.theme,
          trigger = _this$props.trigger,
          position = _this$props.position,
          hiddenArrow = _this$props.hiddenArrow,
          wrapperClassName = _this$props.wrapperClassName,
          getPopupContainer = _this$props.getPopupContainer,
          disabled = _this$props.disabled,
          onVisibleChange = _this$props.onVisibleChange,
          visibleFromProps = _this$props.visible,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var _this$state = this.state,
          visible = _this$state.visible,
          left = _this$state.left,
          top = _this$state.top;
      var isHover = trigger === triggerTypes["hover"];
      var bindTriggerEvents = !disabled && (isHover ? {
        onMouseEnter: this.onOpenTooltip,
        onMouseLeave: this.onCloseTooltip
      } : {
        onClick: this.onOpenTooltip
      });
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className)
      }, attr, bindTriggerEvents, {
        ref: this.toggleContainer
      }), /*#__PURE__*/_react["default"].createElement(TooltipPortal, {
        onChange: this.onRestWrapperPosition,
        getPopupContainer: getPopupContainer
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), "".concat(prefixCls, "-position-").concat(position), "".concat(prefixCls, "-").concat(theme), wrapperClassName, (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-show"), visible), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-hide"), !visible), (0, _defineProperty2["default"])(_cls, "cuke-ui-no-animate", visible === null), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-hidden-arrow"), hiddenArrow), _cls)),
        style: {
          left: left,
          top: top
        },
        ref: this.wrapper,
        onMouseEnter: isHover ? this.onOpenTooltip : undefined,
        onMouseLeave: isHover ? this.onCloseTooltip : undefined
      }, title)), /*#__PURE__*/_react["default"].createElement("span", {
        ref: this.triggerWrapper,
        className: (0, _classnames["default"])("".concat(prefixCls, "-trigger-wrapper"))
      }, this.props.children));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("click", this.onClickOutsideHandler, false);
      window.removeEventListener("resize", this.onResizeHandler);
      this.closeTimer = undefined;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("click", this.onClickOutsideHandler, false);
      window.addEventListener("resize", this.onResizeHandler);
      this.setDefaultPositionIfHaveDefaultVisible();
    }
  }]);
  return Tooltip;
}(_react.PureComponent);

exports["default"] = Tooltip;
(0, _defineProperty2["default"])(Tooltip, "defaultProps", {
  prefixCls: "cuke-tooltip",
  position: "top",
  title: "",
  trigger: triggerTypes.hover,
  theme: themes[0],
  onVisibleChange: function onVisibleChange() {},
  getPopupContainer: function getPopupContainer() {
    return document.body;
  },
  hiddenArrow: false,
  // 隐藏三角箭头
  disabled: false
});
(0, _defineProperty2["default"])(Tooltip, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  onVisibleChange: _propTypes["default"].func,
  title: _propTypes["default"].node,
  trigger: _propTypes["default"].oneOf(Object.values(triggerTypes)),
  position: _propTypes["default"].oneOf(["top", "right", "left", "bottom"]),
  theme: _propTypes["default"].oneOf(themes),
  getPopupContainer: _propTypes["default"].func,
  hiddenArrow: _propTypes["default"].any,
  disabled: _propTypes["default"].bool
});