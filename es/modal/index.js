import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "children", "content", "title", "visible", "onCancel", "onOk", "className", "footer", "okText", "cancelText", "confirmLoading", "targetAtNode", "centered", "closable", "maskClosable", "showMask"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, Fragment } from "react";
import propTypes from "prop-types";
import { createPortal, render } from "react-dom";
import cls from "classnames";
import Button from "../button";
import { CloseIcon } from "../icon";

var Modal = /*#__PURE__*/function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      init: false
    });

    return _this;
  }

  _createClass(Modal, [{
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
          attr = _objectWithoutProperties(_this$props, _excluded);

      var init = this.state.init;
      var initModalAnimate = init ? (_ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls, "-open"), visible), _defineProperty(_ref2, "".concat(prefixCls, "-close"), !visible), _ref2) : _defineProperty({}, "".concat(prefixCls, "-open"), visible);
      var initMaskAnimate = init ? (_ref4 = {}, _defineProperty(_ref4, "".concat(prefixCls, "-mask-show"), visible), _defineProperty(_ref4, "".concat(prefixCls, "-mask-hide"), !visible), _ref4) : _defineProperty({}, "".concat(prefixCls, "-mask-show"), visible);
      var maskClickHandle = maskClosable ? {
        onClick: onCancel
      } : {};
      return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(Fragment, null, showMask ? /*#__PURE__*/React.createElement("div", _extends({
        className: cls("".concat(prefixCls, "-mask"), initMaskAnimate)
      }, maskClickHandle)) : undefined, /*#__PURE__*/React.createElement("div", {
        role: "dialog",
        tabIndex: "-1",
        className: cls("".concat(prefixCls, "-wrap"), _defineProperty({}, "".concat(prefixCls, "-centered"), centered))
      }, /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, initModalAnimate),
        ref: function ref(node) {
          return _this2.modal = node;
        }
      }, attr), /*#__PURE__*/React.createElement("section", {
        className: "".concat(prefixCls, "-header")
      }, /*#__PURE__*/React.createElement("h2", {
        className: "".concat(prefixCls, "-title")
      }, title), closable ? /*#__PURE__*/React.createElement(CloseIcon, {
        className: "".concat(prefixCls, "-close"),
        onClick: onCancel
      }) : undefined), /*#__PURE__*/React.createElement("section", {
        className: "".concat(prefixCls, "-content")
      }, content || children), footer && footer.length >= 1 ? /*#__PURE__*/React.createElement("section", {
        className: "".concat(prefixCls, "-footer")
      }, footer.map(function (buttonGroup) {
        return buttonGroup;
      })) : footer instanceof Array ? /*#__PURE__*/React.createElement("section", {
        className: "".concat(prefixCls, "-footer")
      }, /*#__PURE__*/React.createElement(Button, {
        onClick: onCancel
      }, cancelText), /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        loading: confirmLoading,
        onClick: onOk
      }, okText)) : undefined))), targetAtNode);
    }
  }]);

  return Modal;
}(PureComponent);

_defineProperty(Modal, "defaultProps", {
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

_defineProperty(Modal, "propTypes", {
  onCancel: propTypes.func,
  onOk: propTypes.func,
  title: propTypes.oneOfType([propTypes.string, propTypes.object]),
  okText: propTypes.oneOfType([propTypes.string, propTypes.object]),
  cancelText: propTypes.oneOfType([propTypes.string, propTypes.object]),
  content: propTypes.oneOfType([propTypes.string, propTypes.object]),
  confirmLoading: propTypes.bool,
  visible: propTypes.bool,
  centered: propTypes.bool,
  closable: propTypes.bool,
  maskClosable: propTypes.bool,
  showMask: propTypes.bool,
  footer: propTypes.oneOfType([//footer 不需要设置为 footer={null}
  propTypes.array, propTypes.bool, propTypes.object])
});

_defineProperty(Modal, "confirm", function (options) {
  render( /*#__PURE__*/React.createElement(Modal, _extends({
    className: "ellyth-modal-confirm",
    showMask: false,
    closable: false,
    visible: true
  }, options)), document.getElementById("root"));
});

export { Modal as default };