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

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../icon");

var _excluded = ["prefixCls", "children", "title", "visible", "onClose", "className", "getPopupContainer", "closable", "maskClosable", "showMask", "width", "height", "zIndex", "placement", "style", "footer", "wrapperClassName", "escClose"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var placements = {
  right: "right",
  top: "top",
  bottom: "bottom",
  left: "left"
};
var ESC_KEY_CODE = 27;

var Drawer = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Drawer, _PureComponent);

  var _super = _createSuper(Drawer);

  function Drawer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Drawer);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      init: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "disableScroll", function () {
      document.body.style.overflow = "hidden"; //滚动条的宽度 防止鬼畜

      document.body.style.paddingRight = "15px";
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "enableScroll", function () {
      document.body.style.overflow = "";
      document.body.style.paddingRight = 0;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onKeyDown", function (e) {
      if (!_this.props.escClose) {
        return;
      }

      if (e.keyCode === ESC_KEY_CODE) {
        e.stopPropagation();

        if (_this.props.onClose) {
          _this.props.onClose();
        }
      }
    });
    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  (0, _createClass2["default"])(Drawer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.visible === true) {
        this.disableScroll();

        if (this.wrapperRef.current) {
          this.wrapperRef.current.focus();
        }
      } else {
        this.enableScroll();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cls, _cls3;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children,
          title = _this$props.title,
          visible = _this$props.visible,
          onClose = _this$props.onClose,
          className = _this$props.className,
          getPopupContainer = _this$props.getPopupContainer,
          closable = _this$props.closable,
          maskClosable = _this$props.maskClosable,
          showMask = _this$props.showMask,
          width = _this$props.width,
          height = _this$props.height,
          zIndex = _this$props.zIndex,
          placement = _this$props.placement,
          style = _this$props.style,
          footer = _this$props.footer,
          wrapperClassName = _this$props.wrapperClassName,
          escClose = _this$props.escClose,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var init = this.state.init;
      var maskClickHandle = maskClosable ? {
        onClick: onClose
      } : {};
      return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showMask && /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])("".concat(prefixCls, "-mask"), (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-mask-show"), visible), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-mask-hide"), init && !visible), _cls))
      }, maskClickHandle)), /*#__PURE__*/_react["default"].createElement("div", {
        tabIndex: "-1",
        className: (0, _classnames["default"])("".concat(prefixCls, "-wrap"), wrapperClassName, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-wrap-visible"), visible)),
        onKeyDown: this.onKeyDown,
        ref: this.wrapperRef
      }, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (_cls3 = {}, (0, _defineProperty2["default"])(_cls3, "".concat(prefixCls, "-open"), visible), (0, _defineProperty2["default"])(_cls3, "".concat(prefixCls, "-close"), init && !visible), (0, _defineProperty2["default"])(_cls3, "".concat(prefixCls, "-no-title"), !title), _cls3), "".concat(prefixCls, "-").concat(placement)),
        style: _objectSpread(_objectSpread({}, style), {}, {
          width: width,
          height: placement === "bottom" || placement === "top" ? height : "100%",
          zIndex: zIndex
        })
      }, attr), /*#__PURE__*/_react["default"].createElement("section", {
        className: "".concat(prefixCls, "-header")
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "".concat(prefixCls, "-title")
      }, title), closable && /*#__PURE__*/_react["default"].createElement(_icon.CloseIcon, {
        className: "".concat(prefixCls, "-close"),
        onClick: onClose
      })), /*#__PURE__*/_react["default"].createElement("section", {
        className: "".concat(prefixCls, "-content")
      }, children), footer && /*#__PURE__*/_react["default"].createElement("section", {
        className: "".concat(prefixCls, "-footer")
      }, footer)))), getPopupContainer());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref) {
      var visible = _ref.visible;

      if (visible === true) {
        return {
          init: true,
          visible: visible
        };
      }

      return null;
    }
  }]);
  return Drawer;
}(_react.PureComponent);

exports["default"] = Drawer;
(0, _defineProperty2["default"])(Drawer, "defaultProps", {
  prefixCls: "ellyth-drawer",
  visible: false,
  getPopupContainer: function getPopupContainer() {
    return document.body;
  },
  title: "",
  onClose: function onClose() {},
  maskClosable: true,
  closable: true,
  showMask: true,
  width: 300,
  height: 300,
  zIndex: 999,
  placement: placements.right,
  footer: null,
  escClose: true
});
(0, _defineProperty2["default"])(Drawer, "propTypes", {
  title: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]),
  content: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]),
  confirmLoading: _propTypes["default"].bool,
  visible: _propTypes["default"].bool,
  closable: _propTypes["default"].bool,
  maskClosable: _propTypes["default"].bool,
  showMask: _propTypes["default"].bool,
  zIndex: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  placement: _propTypes["default"].oneOf(Object.values(placements)),
  getPopupContainer: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  wrapperClassName: _propTypes["default"].string,
  escClose: _propTypes["default"].bool
});