import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "disabled", "placeholder", "children", "getPopupContainer", "size", "style", "allowClear", "notFoundContent", "loading", "popupContainerClassName", "labelInValue", "onPanelVisibleChange"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, createRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import cls from "classnames";
import Input from "../input";
import { DownIcon, LoadingIcon } from "../icon";
import { debounce } from "../utils";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";
import Empty from "../empty";
var sizes = {
  "default": "default",
  small: "small",
  large: "large"
};

var Select = /*#__PURE__*/function (_PureComponent) {
  _inherits(Select, _PureComponent);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedValue: _this.props.defaultValue || _this.props.value || "",
      visible: _this.props.visible || null,
      left: 0,
      top: 0,
      width: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value, label) {
      var labelInValue = _this.props.labelInValue;

      _this.setState({
        selectedValue: value,
        visible: false
      });

      _this.props.onPanelVisibleChange(false);

      if (labelInValue) {
        _this.props.onChange({
          key: value,
          label: label
        });
      } else {
        _this.props.onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickHandler", function () {
      var visible = !_this.state.visible;

      _this.setState({
        visible: visible
      });

      _this.props.onPanelVisibleChange(visible);

      if (visible) {
        _this.setWrapperBounding(function () {
          scrollIntoViewIfNeeded(_this.wrapper.current, {
            scrollMode: "if-needed",
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickOutsideHandler", function (e) {
      e.stopPropagation();

      if (_this.state.visible && !_this.props.disabled && !_this.toggleContainer.current.contains(e.target) && !e.target.classList.contains("".concat(_this.props.prefixCls, "-option-disabled"))) {
        _this.setState({
          visible: false
        });

        _this.props.onPanelVisibleChange(false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getWrapperBounding", function () {
      var _this$triggerWrapper$ = _this.triggerWrapper.current.getBoundingClientRect(),
          width = _this$triggerWrapper$.width,
          height = _this$triggerWrapper$.height,
          top = _this$triggerWrapper$.top,
          left = _this$triggerWrapper$.left;

      var _this$wrapper$current = _this.wrapper.current.getBoundingClientRect(),
          wrapperHeight = _this$wrapper$current.height;

      var _window = window,
          scrollX = _window.scrollX,
          scrollY = _window.scrollY;
      var positions = {
        top: {
          top: top + scrollY - wrapperHeight - 10,
          left: left + scrollX,
          width: width
        },
        bottom: {
          top: top + height + scrollY,
          left: left + scrollX,
          width: width
        }
      };
      return positions[_this.props.position];
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeHandler", debounce(function () {
      _this.setWrapperBounding();
    }, 500));

    _defineProperty(_assertThisInitialized(_this), "onClear", function () {
      _this.setState({
        selectedValue: "",
        visible: false
      });

      _this.props.onChange("");
    });

    _this.timeOutId = null;
    _this.toggleContainer = /*#__PURE__*/createRef();
    _this.triggerWrapper = /*#__PURE__*/createRef();
    _this.wrapper = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(Select, [{
    key: "selectedValue",
    get: function get() {
      var selectedValue = this.state.selectedValue;
      var labelInValue = this.props.labelInValue;

      if (labelInValue) {
        // children 如果有空格 会被解析成数组 有可能是 [10,"条数据"] 所以需要 join 一下
        return Array.prototype.join.call((this.selectOptions.find(function (_ref) {
          var key = _ref.key;
          return key === (selectedValue && selectedValue.key || selectedValue);
        }) || {}).value, "");
      }

      return selectedValue;
    }
  }, {
    key: "selectOptions",
    get: function get() {
      return this.props.children.map(function (_ref2) {
        var props = _ref2.props;
        return {
          key: props.value,
          value: props.children
        };
      });
    }
  }, {
    key: "setWrapperBounding",
    value: function setWrapperBounding() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var _this$getWrapperBound = this.getWrapperBounding(),
          left = _this$getWrapperBound.left,
          top = _this$getWrapperBound.top,
          width = _this$getWrapperBound.width;

      this.setState({
        left: left,
        top: top,
        width: width
      }, cb);
    }
  }, {
    key: "render",
    value: function render() {
      var _cls2,
          _this2 = this;

      var _this$state = this.state,
          visible = _this$state.visible,
          left = _this$state.left,
          top = _this$state.top,
          width = _this$state.width;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          disabled = _this$props.disabled,
          placeholder = _this$props.placeholder,
          children = _this$props.children,
          getPopupContainer = _this$props.getPopupContainer,
          size = _this$props.size,
          style = _this$props.style,
          allowClear = _this$props.allowClear,
          notFoundContent = _this$props.notFoundContent,
          loading = _this$props.loading,
          popupContainerClassName = _this$props.popupContainerClassName,
          labelInValue = _this$props.labelInValue,
          onPanelVisibleChange = _this$props.onPanelVisibleChange,
          attr = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls("".concat(prefixCls), className)
      }, attr, {
        style: style,
        ref: this.toggleContainer
      }), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-inner"), _defineProperty({}, "".concat(prefixCls, "-active"), visible)),
        ref: this.triggerWrapper
      }, /*#__PURE__*/React.createElement(Input, {
        disabled: disabled,
        readonly: true,
        placeholder: placeholder,
        className: cls("".concat(prefixCls, "-input")),
        value: this.selectedValue,
        onClick: this.onClickHandler,
        size: size,
        style: {
          width: style && style.width
        },
        suffix: loading ? /*#__PURE__*/React.createElement(LoadingIcon, {
          className: "".concat(prefixCls, "-loading")
        }) : /*#__PURE__*/React.createElement(DownIcon, {
          className: "".concat(prefixCls, "-arrow")
        }),
        allowClear: allowClear,
        onClear: this.onClear
      })), /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-content"), popupContainerClassName, (_cls2 = {}, _defineProperty(_cls2, "".concat(prefixCls, "-open"), visible), _defineProperty(_cls2, "".concat(prefixCls, "-close"), !visible), _defineProperty(_cls2, "ellyth-no-animate", visible === null), _cls2)),
        ref: this.wrapper,
        style: {
          width: width,
          left: left,
          top: top
        }
      }, children ? React.Children.map(children, function (element, index) {
        return /*#__PURE__*/React.cloneElement(element, {
          key: index,
          selectedValue: _this2.selectedValue,
          onChange: _this2.onChange
        });
      }) : notFoundContent), getPopupContainer()));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("click", this.onClickOutsideHandler, false);
      window.removeEventListener("resize", this.onResizeHandler);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("click", this.onClickOutsideHandler, false);
      window.addEventListener("resize", this.onResizeHandler);

      if (this.props.visible) {
        this.setWrapperBounding();
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      if (Reflect.has(props, "value")) {
        return {
          selectedValue: props.value
        };
      }

      return null;
    }
  }]);

  return Select;
}(PureComponent);

_defineProperty(Select, "defaultProps", {
  prefixCls: "ellyth-select",
  onPanelVisibleChange: function onPanelVisibleChange() {},
  onChange: function onChange() {},
  getPopupContainer: function getPopupContainer() {
    return document.body;
  },
  position: "bottom",
  disabled: false,
  allowClear: false,
  notFoundContent: /*#__PURE__*/React.createElement(Empty, {
    height: 120
  }),
  labelInValue: false,
  loading: false
});

_defineProperty(Select, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  onPanelVisibleChange: PropTypes.func,
  getPopupContainer: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  allowClear: PropTypes.bool,
  labelInValue: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(sizes)),
  overlay: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
  popupContainerClassName: PropTypes.string
});

export { Select as default };