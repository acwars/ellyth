import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "children", "title", "visible", "onClose", "className", "getPopupContainer", "closable", "maskClosable", "showMask", "width", "height", "zIndex", "placement", "style", "footer", "wrapperClassName", "escClose"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom"; //传送门 将节点挂载在root 节点之外

import cls from "classnames";
import { CloseIcon } from "../icon";
var placements = {
  right: "right",
  top: "top",
  bottom: "bottom",
  left: "left"
};
var ESC_KEY_CODE = 27;

var Drawer = /*#__PURE__*/function (_PureComponent) {
  _inherits(Drawer, _PureComponent);

  var _super = _createSuper(Drawer);

  function Drawer(props) {
    var _this;

    _classCallCheck(this, Drawer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      init: false
    });

    _defineProperty(_assertThisInitialized(_this), "disableScroll", function () {
      document.body.style.overflow = "hidden"; //滚动条的宽度 防止鬼畜

      document.body.style.paddingRight = "15px";
    });

    _defineProperty(_assertThisInitialized(_this), "enableScroll", function () {
      document.body.style.overflow = "";
      document.body.style.paddingRight = 0;
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
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

    _this.wrapperRef = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(Drawer, [{
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
          attr = _objectWithoutProperties(_this$props, _excluded);

      var init = this.state.init;
      var maskClickHandle = maskClosable ? {
        onClick: onClose
      } : {};
      return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, showMask && /*#__PURE__*/React.createElement("div", _extends({
        className: cls("".concat(prefixCls, "-mask"), (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-mask-show"), visible), _defineProperty(_cls, "".concat(prefixCls, "-mask-hide"), init && !visible), _cls))
      }, maskClickHandle)), /*#__PURE__*/React.createElement("div", {
        tabIndex: "-1",
        className: cls("".concat(prefixCls, "-wrap"), wrapperClassName, _defineProperty({}, "".concat(prefixCls, "-wrap-visible"), visible)),
        onKeyDown: this.onKeyDown,
        ref: this.wrapperRef
      }, /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, (_cls3 = {}, _defineProperty(_cls3, "".concat(prefixCls, "-open"), visible), _defineProperty(_cls3, "".concat(prefixCls, "-close"), init && !visible), _defineProperty(_cls3, "".concat(prefixCls, "-no-title"), !title), _cls3), "".concat(prefixCls, "-").concat(placement)),
        style: _objectSpread(_objectSpread({}, style), {}, {
          width: width,
          height: placement === "bottom" || placement === "top" ? height : "100%",
          zIndex: zIndex
        })
      }, attr), /*#__PURE__*/React.createElement("section", {
        className: "".concat(prefixCls, "-header")
      }, /*#__PURE__*/React.createElement("h2", {
        className: "".concat(prefixCls, "-title")
      }, title), closable && /*#__PURE__*/React.createElement(CloseIcon, {
        className: "".concat(prefixCls, "-close"),
        onClick: onClose
      })), /*#__PURE__*/React.createElement("section", {
        className: "".concat(prefixCls, "-content")
      }, children), footer && /*#__PURE__*/React.createElement("section", {
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
}(PureComponent);

_defineProperty(Drawer, "defaultProps", {
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

_defineProperty(Drawer, "propTypes", {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
  confirmLoading: PropTypes.bool,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
  showMask: PropTypes.bool,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placement: PropTypes.oneOf(Object.values(placements)),
  getPopupContainer: PropTypes.func,
  onClose: PropTypes.func,
  wrapperClassName: PropTypes.string,
  escClose: PropTypes.bool
});

export { Drawer as default };