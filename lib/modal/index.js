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

var _button = _interopRequireDefault(require("../button"));

var _icon = require("../icon");

var _excluded = ["prefixCls", "children", "content", "title", "visible", "onCancel", "onOk", "className", "footer", "okText", "cancelText", "confirmLoading", "targetAtNode", "centered", "closable", "maskClosable", "showMask"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Modal = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Modal, _PureComponent);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Modal);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      init: false
    });
    return _this;
  }

  (0, _createClass2["default"])(Modal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var visible = _ref.visible;

      if (visible === true) {
        this.setState({
          init: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _ref2,
          _ref4,
          _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children,
          content = _this$props.content,
          title = _this$props.title,
          visible = _this$props.visible,
          onCancel = _this$props.onCancel,
          onOk = _this$props.onOk,
          className = _this$props.className,
          footer = _this$props.footer,
          okText = _this$props.okText,
          cancelText = _this$props.cancelText,
          confirmLoading = _this$props.confirmLoading,
          targetAtNode = _this$props.targetAtNode,
          centered = _this$props.centered,
          closable = _this$props.closable,
          maskClosable = _this$props.maskClosable,
          showMask = _this$props.showMask,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var init = this.state.init;
      var initModalAnimate = init ? (_ref2 = {}, (0, _defineProperty2["default"])(_ref2, "".concat(prefixCls, "-open"), visible), (0, _defineProperty2["default"])(_ref2, "".concat(prefixCls, "-close"), !visible), _ref2) : (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-open"), visible);
      var initMaskAnimate = init ? (_ref4 = {}, (0, _defineProperty2["default"])(_ref4, "".concat(prefixCls, "-mask-show"), visible), (0, _defineProperty2["default"])(_ref4, "".concat(prefixCls, "-mask-hide"), !visible), _ref4) : (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-mask-show"), visible);
      var maskClickHandle = maskClosable ? {
        onClick: onCancel
      } : {};
      return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, showMask ? /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])("".concat(prefixCls, "-mask"), initMaskAnimate)
      }, maskClickHandle)) : undefined, /*#__PURE__*/_react["default"].createElement("div", {
        role: "dialog",
        tabIndex: "-1",
        className: (0, _classnames["default"])("".concat(prefixCls, "-wrap"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-centered"), centered))
      }, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, initModalAnimate),
        ref: function ref(node) {
          return _this2.modal = node;
        }
      }, attr), /*#__PURE__*/_react["default"].createElement("section", {
        className: "".concat(prefixCls, "-header")
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "".concat(prefixCls, "-title")
      }, title), closable ? /*#__PURE__*/_react["default"].createElement(_icon.CloseIcon, {
        className: "".concat(prefixCls, "-close"),
        onClick: onCancel
      }) : undefined), /*#__PURE__*/_react["default"].createElement("section", {
        className: "".concat(prefixCls, "-content")
      }, content || children), footer && footer.length >= 1 ? /*#__PURE__*/_react["default"].createElement("section", {
        className: "".concat(prefixCls, "-footer")
      }, footer.map(function (buttonGroup) {
        return buttonGroup;
      })) : footer instanceof Array ? /*#__PURE__*/_react["default"].createElement("section", {
        className: "".concat(prefixCls, "-footer")
      }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        onClick: onCancel
      }, cancelText), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "primary",
        loading: confirmLoading,
        onClick: onOk
      }, okText)) : undefined))), targetAtNode);
    }
  }]);
  return Modal;
}(_react.PureComponent);

exports["default"] = Modal;
(0, _defineProperty2["default"])(Modal, "defaultProps", {
  prefixCls: "ellyth-modal",
  visible: false,
  targetAtNode: document.body,
  title: "",
  onOk: function onOk() {},
  onCancel: function onCancel() {},
  okText: "确定",
  cancelText: "取消",
  footer: [],
  content: "",
  confirmLoading: false,
  maskClosable: true,
  centered: false,
  closable: true,
  showMask: true
});
(0, _defineProperty2["default"])(Modal, "propTypes", {
  onCancel: _propTypes["default"].func,
  onOk: _propTypes["default"].func,
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  okText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  cancelText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  confirmLoading: _propTypes["default"].bool,
  visible: _propTypes["default"].bool,
  centered: _propTypes["default"].bool,
  closable: _propTypes["default"].bool,
  maskClosable: _propTypes["default"].bool,
  showMask: _propTypes["default"].bool,
  footer: _propTypes["default"].oneOfType([//footer 不需要设置为 footer={null}
  _propTypes["default"].array, _propTypes["default"].bool, _propTypes["default"].object])
});
(0, _defineProperty2["default"])(Modal, "confirm", function (options) {
  (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(Modal, (0, _extends2["default"])({
    className: "ellyth-modal-confirm",
    showMask: false,
    closable: false,
    visible: true
  }, options)), document.getElementById("root"));
});