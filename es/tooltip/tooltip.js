import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "title", "theme", "trigger", "position", "hiddenArrow", "wrapperClassName", "getPopupContainer", "disabled", "onVisibleChange", "visible"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, createRef } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { debounce } from "../utils";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";
export var TooltipPortal = /*#__PURE__*/function (_PureComponent) {
  _inherits(TooltipPortal, _PureComponent);

  var _super = _createSuper(TooltipPortal);

  function TooltipPortal(props) {
    var _this;

    _classCallCheck(this, TooltipPortal);

    _this = _super.call(this, props);
    _this.el = document.createElement("div");
    _this.container = _this.props.getPopupContainer();
    return _this;
  }

  _createClass(TooltipPortal, [{
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
      return /*#__PURE__*/createPortal(this.props.children, this.el);
    }
  }]);

  return TooltipPortal;
}(PureComponent);

_defineProperty(TooltipPortal, "defaultProps", {
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
  _inherits(Tooltip, _PureComponent2);

  var _super2 = _createSuper(Tooltip);

  function Tooltip(props) {
    var _this2;

    _classCallCheck(this, Tooltip);

    _this2 = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this2), "closeTimeDelay", 100);

    _defineProperty(_assertThisInitialized(_this2), "state", {
      visible: null,
      left: 0,
      top: 0,
      openLock: false,
      closeLock: false
    });

    _defineProperty(_assertThisInitialized(_this2), "getWrapperBounding", function () {
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

    _defineProperty(_assertThisInitialized(_this2), "onClickOutsideHandler", function (e) {
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

    _defineProperty(_assertThisInitialized(_this2), "onOpenTooltip", function () {
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
              scrollIntoViewIfNeeded(_this2.wrapper.current, {
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

    _defineProperty(_assertThisInitialized(_this2), "onCloseTooltip", function () {
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

    _defineProperty(_assertThisInitialized(_this2), "onRestWrapperPosition", function () {
      if (_this2.state.visible) {
        setTimeout(function () {
          _this2.setWrapperBounding();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "onResizeHandler", debounce(function () {
      _this2.setWrapperBounding();
    }, 500));

    _defineProperty(_assertThisInitialized(_this2), "setDefaultPositionIfHaveDefaultVisible", function () {
      var visible = _this2.props.visible;

      if (visible) {
        _this2.setState({
          visible: visible
        }, _this2.setWrapperBounding);
      }
    });

    _this2.wrapper = /*#__PURE__*/createRef();
    _this2.triggerWrapper = /*#__PURE__*/createRef();
    _this2.toggleContainer = /*#__PURE__*/createRef();
    _this2.closeTimer = null;
    return _this2;
  } // eslint-disable-next-line


  _createClass(Tooltip, [{
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
          attr = _objectWithoutProperties(_this$props, _excluded);

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
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className)
      }, attr, bindTriggerEvents, {
        ref: this.toggleContainer
      }), /*#__PURE__*/React.createElement(TooltipPortal, {
        onChange: this.onRestWrapperPosition,
        getPopupContainer: getPopupContainer
      }, /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-wrapper"), "".concat(prefixCls, "-position-").concat(position), "".concat(prefixCls, "-").concat(theme), wrapperClassName, (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-show"), visible), _defineProperty(_cls, "".concat(prefixCls, "-hide"), !visible), _defineProperty(_cls, "cuke-ui-no-animate", visible === null), _defineProperty(_cls, "".concat(prefixCls, "-hidden-arrow"), hiddenArrow), _cls)),
        style: {
          left: left,
          top: top
        },
        ref: this.wrapper,
        onMouseEnter: isHover ? this.onOpenTooltip : undefined,
        onMouseLeave: isHover ? this.onCloseTooltip : undefined
      }, title)), /*#__PURE__*/React.createElement("span", {
        ref: this.triggerWrapper,
        className: cls("".concat(prefixCls, "-trigger-wrapper"))
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
}(PureComponent);

_defineProperty(Tooltip, "defaultProps", {
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

_defineProperty(Tooltip, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  onVisibleChange: PropTypes.func,
  title: PropTypes.node,
  trigger: PropTypes.oneOf(Object.values(triggerTypes)),
  position: PropTypes.oneOf(["top", "right", "left", "bottom"]),
  theme: PropTypes.oneOf(themes),
  getPopupContainer: PropTypes.func,
  hiddenArrow: PropTypes.any,
  disabled: PropTypes.bool
});

export { Tooltip as default };