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

var _excluded = ["prefixCls", "darkTheme", "type", "title", "className", "duration"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Message = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Message, _PureComponent);

  var _super = _createSuper(Message);

  function Message(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Message);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: true
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "animationTime", 500);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_containerRef", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_currentNodeRef", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "destroy", function () {
      if (_this._containerRef) {
        _reactDom["default"].unmountComponentAtNode(_this._containerRef);
      }

      if (_this._currentNodeRef) {
        _this._currentNodeRef.remove();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "disableScroll", function () {
      document.body.style.overflow = "hidden"; //滚动条的宽度 防止鬼畜

      document.body.style.paddingRight = "15px";
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "enableScroll", function () {
      document.body.style.overflow = "";
      document.body.style.paddingRight = 0;
    });
    _this.typeConfig = {
      info: "info",
      success: "success",
      error: "error",
      warning: "warning",
      loading: "loading"
    };
    return _this;
  }

  (0, _createClass2["default"])(Message, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          duration = _this$props.duration,
          onClose = _this$props.onClose;
      this.timer = setTimeout(function () {
        _this2.setState({
          visible: false
        }, function () {
          setTimeout(function () {
            _this2.destroy();
          }, _this2.animationTime);
          onClose();
        });
      }, duration * 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroy();
      clearTimeout(this.timer);
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
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          darkTheme = _this$props2.darkTheme,
          type = _this$props2.type,
          title = _this$props2.title,
          className = _this$props2.className,
          duration = _this$props2.duration,
          attr = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);
      var visible = this.state.visible;
      var typeConfig = this.typeConfig;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-theme-dark"), darkTheme), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-open"), visible && duration), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-close"), !visible))
      }, attr), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-title-custom"), "".concat(prefixCls, "-").concat(typeConfig[type]))
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "".concat(prefixCls, "-icon")
      }, type === typeConfig["info"] ? /*#__PURE__*/_react["default"].createElement(_icon.InfoIcon, null) : undefined, type === typeConfig["success"] ? /*#__PURE__*/_react["default"].createElement(_icon.SuccessIcon, null) : undefined, type === typeConfig["error"] ? /*#__PURE__*/_react["default"].createElement(_icon.ErrorIcon, null) : undefined, type === typeConfig["warning"] ? /*#__PURE__*/_react["default"].createElement(_icon.WarningIcon, null) : undefined, type === typeConfig["loading"] ? /*#__PURE__*/_react["default"].createElement(_icon.LoadingIcon, null) : undefined), /*#__PURE__*/_react["default"].createElement("p", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/_react["default"].createElement("span", null, title))));
    }
  }], [{
    key: "error",
    value: function error(title, duration, onClose, darkTheme) {
      return this.renderElement("error", title, duration, onClose, darkTheme);
    }
  }, {
    key: "info",
    value: function info(title, duration, onClose, darkTheme) {
      return this.renderElement("info", title, duration, onClose, darkTheme);
    }
  }, {
    key: "success",
    value: function success(title, duration, onClose, darkTheme) {
      return this.renderElement("success", title, duration, onClose, darkTheme);
    }
  }, {
    key: "warning",
    value: function warning(title, duration, onClose, darkTheme) {
      return this.renderElement("warning", title, duration, onClose, darkTheme);
    }
  }, {
    key: "loading",
    value: function loading(title, duration, onClose, darkTheme) {
      return this.renderElement("loading", title, duration, onClose, darkTheme);
    }
  }]);
  return Message;
}(_react.PureComponent);

exports["default"] = Message;
(0, _defineProperty2["default"])(Message, "propTypes", {
  title: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]).isRequired,
  duration: _propTypes["default"].number.isRequired,
  darkTheme: _propTypes["default"].bool,
  onClose: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Message, "defaultProps", {
  prefixCls: "ellyth-message",
  duration: 2,
  darkTheme: false,
  onClose: function onClose() {}
});
(0, _defineProperty2["default"])(Message, "renderElement", function (type, title, duration, onClose, darkTheme) {
  var container = document.createElement("div");
  var currentNode = document.body.appendChild(container);

  var _message = _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Message, {
    type: type,
    title: title,
    darkTheme: darkTheme,
    duration: duration,
    onClose: onClose
  }), container);

  if (_message) {
    _message._containerRef = container;
    _message._currentNodeRef = currentNode;
    return {
      destroy: _message.destroy
    };
  }

  return {
    destroy: function destroy() {}
  };
});