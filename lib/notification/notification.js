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

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../icon");

var _excluded = ["prefixCls", "darkTheme", "type", "title", "className", "duration", "message", "onClick", "closable", "position", "offset", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var POSITIONS = {
  TOP_RIGHT: "top-right",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_LEFT: "bottom-left"
};
var TYPES = {
  OPEN: "open",
  INFO: "info",
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  LOADING: "loading"
};
var DEFAULT_OFFSET = 20;
var ANIMATION_TIME = 500;
var SINGLE_NODE = {
  notification: null,
  containerRef: null,
  currentNodeRef: null
};

var Notification = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Notification, _PureComponent);

  var _super = _createSuper(Notification);

  function Notification(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Notification);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: true
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "disableScroll", function () {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "enableScroll", function () {
      document.body.style.overflow = "";
      document.body.style.paddingRight = 0;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "destroy", function () {
      if (SINGLE_NODE.containerRef) {
        _reactDom["default"].unmountComponentAtNode(SINGLE_NODE.containerRef);

        SINGLE_NODE.currentNodeRef.remove();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClose", function (e) {
      // 防止 onClick 事件  触发
      e.stopPropagation();

      _this.setState({
        visible: false
      });

      clearTimeout(_this.timer);

      _this.props.onClose();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getPositionStyle", function () {
      var _this$props = _this.props,
          position = _this$props.position,
          offset = _this$props.offset;
      var style = {
        top: offset
      };

      switch (position) {
        case POSITIONS.TOP_RIGHT:
          style = {
            top: offset
          };
          break;

        case POSITIONS.TOP_LEFT:
          style = {
            left: offset,
            top: offset
          };
          break;

        case POSITIONS.BOTTOM_RIGHT:
          style = {
            bottom: offset
          };
          break;

        case POSITIONS.BOTTOM_LEFT:
          style = {
            bottom: offset,
            left: offset
          };
          break;

        default:
          style = {
            top: offset
          };
          break;
      }

      return style;
    });
    _this.timer = null;
    return _this;
  }

  (0, _createClass2["default"])(Notification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props2 = this.props,
          duration = _this$props2.duration,
          onClose = _this$props2.onClose;

      if (duration <= 0) {
        return;
      }

      this.timer = setTimeout(function () {
        _this2.setState({
          visible: false
        }, function () {
          setTimeout(function () {
            _this2.destroy();
          }, ANIMATION_TIME);
          onClose();
        });
      }, duration * 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroy();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.visible === true) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          darkTheme = _this$props3.darkTheme,
          type = _this$props3.type,
          title = _this$props3.title,
          className = _this$props3.className,
          duration = _this$props3.duration,
          message = _this$props3.message,
          onClick = _this$props3.onClick,
          closable = _this$props3.closable,
          position = _this$props3.position,
          offset = _this$props3.offset,
          style = _this$props3.style,
          attr = (0, _objectWithoutProperties2["default"])(_this$props3, _excluded);
      var visible = this.state.visible;
      var isShow = visible && duration >= 0;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-theme-dark"), darkTheme), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-open"), isShow), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-open-").concat(position), isShow), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-close"), !visible), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-close-").concat(position), !visible))
      }, attr, {
        style: _objectSpread(_objectSpread({}, style), this.getPositionStyle()),
        onClick: onClick
      }), closable && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-close-btn"),
        onClick: this.onClose
      }, /*#__PURE__*/_react["default"].createElement(_icon.CloseIcon, null)), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-icon"), "".concat(prefixCls, "-").concat(type))
      }, type === TYPES.INFO ? /*#__PURE__*/_react["default"].createElement(_icon.InfoIcon, null) : undefined, type === TYPES.SUCCESS ? /*#__PURE__*/_react["default"].createElement(_icon.SuccessIcon, null) : undefined, type === TYPES.ERROR ? /*#__PURE__*/_react["default"].createElement(_icon.ErrorIcon, null) : undefined, type === TYPES.WARNING ? /*#__PURE__*/_react["default"].createElement(_icon.WarningIcon, null) : undefined, type === TYPES.LOADING ? /*#__PURE__*/_react["default"].createElement(_icon.LoadingIcon, null) : undefined), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-title-custom"))
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/_react["default"].createElement("span", null, title)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-message")
      }, message)));
    }
  }], [{
    key: "open",
    value: function open(options) {
      return this.renderElement(TYPES.OPEN, options);
    }
  }, {
    key: "error",
    value: function error(options) {
      return this.renderElement(TYPES.ERROR, options);
    }
  }, {
    key: "info",
    value: function info(options) {
      return this.renderElement(TYPES.INFO, options);
    }
  }, {
    key: "success",
    value: function success(options) {
      return this.renderElement(TYPES.SUCCESS, options);
    }
  }, {
    key: "warning",
    value: function warning(options) {
      return this.renderElement(TYPES.WARNING, options);
    }
  }, {
    key: "loading",
    value: function loading(options) {
      return this.renderElement(TYPES.LOADING, options);
    }
  }]);
  return Notification;
}(_react.PureComponent);

exports["default"] = Notification;
(0, _defineProperty2["default"])(Notification, "propTypes", {
  title: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]).isRequired,
  position: _propTypes["default"].oneOf(Object.values(POSITIONS)),
  duration: _propTypes["default"].number.isRequired,
  darkTheme: _propTypes["default"].bool,
  top: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  closable: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  onClick: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Notification, "defaultProps", {
  prefixCls: "ellyth-notification",
  duration: 2,
  darkTheme: false,
  offset: DEFAULT_OFFSET,
  position: POSITIONS.TOP_RIGHT,
  closable: true,
  onClose: function onClose() {},
  onClick: function onClick() {}
});
(0, _defineProperty2["default"])(Notification, "renderElement", function (type, options) {
  // if notification exist , destroy
  if (SINGLE_NODE.notification) {
    SINGLE_NODE.notification.destroy();
  }

  var container = document.createElement("div");
  var currentNode = document.body.appendChild(container);

  var _notification = _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Notification, (0, _extends2["default"])({
    type: type
  }, options)), container);

  SINGLE_NODE.containerRef = container;
  SINGLE_NODE.currentNodeRef = currentNode;
  SINGLE_NODE.notification = _notification;
  return {
    destroy: _notification.destroy
  };
});