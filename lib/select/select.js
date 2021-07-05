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

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _input = _interopRequireDefault(require("../input"));

var _icon = require("../icon");

var _utils = require("../utils");

var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));

var _empty = _interopRequireDefault(require("../empty"));

var _excluded = ["prefixCls", "className", "disabled", "placeholder", "children", "getPopupContainer", "size", "style", "allowClear", "notFoundContent", "loading", "popupContainerClassName", "labelInValue", "onPanelVisibleChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var sizes = {
  "default": "default",
  small: "small",
  large: "large"
};

var Select = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Select, _PureComponent);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Select);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      selectedValue: _this.props.defaultValue || _this.props.value || "",
      visible: _this.props.visible || null,
      left: 0,
      top: 0,
      width: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (value, label) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClickHandler", function () {
      var visible = !_this.state.visible;

      _this.setState({
        visible: visible
      });

      _this.props.onPanelVisibleChange(visible);

      if (visible) {
        _this.setWrapperBounding(function () {
          (0, _scrollIntoViewIfNeeded["default"])(_this.wrapper.current, {
            scrollMode: "if-needed",
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
          });
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClickOutsideHandler", function (e) {
      e.stopPropagation();

      if (_this.state.visible && !_this.props.disabled && !_this.toggleContainer.current.contains(e.target) && !e.target.classList.contains("".concat(_this.props.prefixCls, "-option-disabled"))) {
        _this.setState({
          visible: false
        });

        _this.props.onPanelVisibleChange(false);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getWrapperBounding", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onResizeHandler", (0, _utils.debounce)(function () {
      _this.setWrapperBounding();
    }, 500));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClear", function () {
      _this.setState({
        selectedValue: "",
        visible: false
      });

      _this.props.onChange("");
    });
    _this.timeOutId = null;
    _this.toggleContainer = /*#__PURE__*/(0, _react.createRef)();
    _this.triggerWrapper = /*#__PURE__*/(0, _react.createRef)();
    _this.wrapper = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  (0, _createClass2["default"])(Select, [{
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
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])("".concat(prefixCls), className)
      }, attr, {
        style: style,
        ref: this.toggleContainer
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-inner"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-active"), visible)),
        ref: this.triggerWrapper
      }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
        disabled: disabled,
        readonly: true,
        placeholder: placeholder,
        className: (0, _classnames["default"])("".concat(prefixCls, "-input")),
        value: this.selectedValue,
        onClick: this.onClickHandler,
        size: size,
        style: {
          width: style && style.width
        },
        suffix: loading ? /*#__PURE__*/_react["default"].createElement(_icon.LoadingIcon, {
          className: "".concat(prefixCls, "-loading")
        }) : /*#__PURE__*/_react["default"].createElement(_icon.DownIcon, {
          className: "".concat(prefixCls, "-arrow")
        }),
        allowClear: allowClear,
        onClear: this.onClear
      })), /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-content"), popupContainerClassName, (_cls2 = {}, (0, _defineProperty2["default"])(_cls2, "".concat(prefixCls, "-open"), visible), (0, _defineProperty2["default"])(_cls2, "".concat(prefixCls, "-close"), !visible), (0, _defineProperty2["default"])(_cls2, "ellyth-no-animate", visible === null), _cls2)),
        ref: this.wrapper,
        style: {
          width: width,
          left: left,
          top: top
        }
      }, children ? _react["default"].Children.map(children, function (element, index) {
        return /*#__PURE__*/_react["default"].cloneElement(element, {
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
}(_react.PureComponent);

exports["default"] = Select;
(0, _defineProperty2["default"])(Select, "defaultProps", {
  prefixCls: "ellyth-select",
  onPanelVisibleChange: function onPanelVisibleChange() {},
  onChange: function onChange() {},
  getPopupContainer: function getPopupContainer() {
    return document.body;
  },
  position: "bottom",
  disabled: false,
  allowClear: false,
  notFoundContent: /*#__PURE__*/_react["default"].createElement(_empty["default"], {
    height: 120
  }),
  labelInValue: false,
  loading: false
});
(0, _defineProperty2["default"])(Select, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  onPanelVisibleChange: _propTypes["default"].func,
  getPopupContainer: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  allowClear: _propTypes["default"].bool,
  labelInValue: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(Object.values(sizes)),
  overlay: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]),
  popupContainerClassName: _propTypes["default"].string
});