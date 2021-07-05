import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "darkTheme", "type", "title", "className", "duration", "message", "onClick", "closable", "position", "offset", "style"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import cls from "classnames";
import { InfoIcon, LoadingIcon, SuccessIcon, ErrorIcon, WarningIcon, CloseIcon } from "../icon";
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
  _inherits(Notification, _PureComponent);

  var _super = _createSuper(Notification);

  function Notification(props) {
    var _this;

    _classCallCheck(this, Notification);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: true
    });

    _defineProperty(_assertThisInitialized(_this), "disableScroll", function () {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    });

    _defineProperty(_assertThisInitialized(_this), "enableScroll", function () {
      document.body.style.overflow = "";
      document.body.style.paddingRight = 0;
    });

    _defineProperty(_assertThisInitialized(_this), "destroy", function () {
      if (SINGLE_NODE.containerRef) {
        ReactDOM.unmountComponentAtNode(SINGLE_NODE.containerRef);
        SINGLE_NODE.currentNodeRef.remove();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function (e) {
      // 防止 onClick 事件  触发
      e.stopPropagation();

      _this.setState({
        visible: false
      });

      clearTimeout(_this.timer);

      _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "getPositionStyle", function () {
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

  _createClass(Notification, [{
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
          attr = _objectWithoutProperties(_this$props3, _excluded);

      var visible = this.state.visible;
      var isShow = visible && duration >= 0;
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-theme-dark"), darkTheme), _defineProperty({}, "".concat(prefixCls, "-open"), isShow), _defineProperty({}, "".concat(prefixCls, "-open-").concat(position), isShow), _defineProperty({}, "".concat(prefixCls, "-close"), !visible), _defineProperty({}, "".concat(prefixCls, "-close-").concat(position), !visible))
      }, attr, {
        style: _objectSpread(_objectSpread({}, style), this.getPositionStyle()),
        onClick: onClick
      }), closable && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-close-btn"),
        onClick: this.onClose
      }, /*#__PURE__*/React.createElement(CloseIcon, null)), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-icon"), "".concat(prefixCls, "-").concat(type))
      }, type === TYPES.INFO ? /*#__PURE__*/React.createElement(InfoIcon, null) : undefined, type === TYPES.SUCCESS ? /*#__PURE__*/React.createElement(SuccessIcon, null) : undefined, type === TYPES.ERROR ? /*#__PURE__*/React.createElement(ErrorIcon, null) : undefined, type === TYPES.WARNING ? /*#__PURE__*/React.createElement(WarningIcon, null) : undefined, type === TYPES.LOADING ? /*#__PURE__*/React.createElement(LoadingIcon, null) : undefined), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-title-custom"))
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/React.createElement("span", null, title)), /*#__PURE__*/React.createElement("div", {
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
}(PureComponent);

_defineProperty(Notification, "propTypes", {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]).isRequired,
  position: PropTypes.oneOf(Object.values(POSITIONS)),
  duration: PropTypes.number.isRequired,
  darkTheme: PropTypes.bool,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func
});

_defineProperty(Notification, "defaultProps", {
  prefixCls: "ellyth-notification",
  duration: 2,
  darkTheme: false,
  offset: DEFAULT_OFFSET,
  position: POSITIONS.TOP_RIGHT,
  closable: true,
  onClose: function onClose() {},
  onClick: function onClick() {}
});

_defineProperty(Notification, "renderElement", function (type, options) {
  // if notification exist , destroy
  if (SINGLE_NODE.notification) {
    SINGLE_NODE.notification.destroy();
  }

  var container = document.createElement("div");
  var currentNode = document.body.appendChild(container);

  var _notification = ReactDOM.render( /*#__PURE__*/React.createElement(Notification, _extends({
    type: type
  }, options)), container);

  SINGLE_NODE.containerRef = container;
  SINGLE_NODE.currentNodeRef = currentNode;
  SINGLE_NODE.notification = _notification;
  return {
    destroy: _notification.destroy
  };
});

export { Notification as default };