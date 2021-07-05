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

var _classnames = _interopRequireDefault(require("classnames"));

var _city_picker_core = _interopRequireDefault(require("./city_picker_core"));

var _input = _interopRequireDefault(require("../input"));

var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));

var _icon = require("../icon");

var _excluded = ["cityList", "prefixCls", "disabled", "placeholder", "className", "disabledGroups", "loading", "tip", "onPanelVisibleChange", "defaultActiveGroup", "onCityGroupChange", "onCityChange", "defaultCityName", "popupContainerClassName", "size", "allowClear"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var sizes = {
  "default": "default",
  small: "small",
  large: "large"
};

var CityPicker = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(CityPicker, _PureComponent);

  var _super = _createSuper(CityPicker);

  function CityPicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CityPicker);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: null,
      selectedCityGroup: _this.props.defaultActiveGroup || _this.props.activeGroup || 0,
      selectedCityName: _this.props.defaultCityName || _this.props.cityName || ""
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCityGroupChange", function (selectedCityGroup, index) {
      if (_this.props.onCityGroupChange) {
        _this.props.onCityGroupChange(selectedCityGroup, index);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCityChange", function (selectedCity) {
      _this.setState({
        visible: false,
        selectedCityName: selectedCity.name
      });

      _this.props.onPanelVisibleChange(false);

      if (_this.props.onCityChange) {
        _this.props.onCityChange(selectedCity);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onOpenCityPicker", function () {
      var visible = !_this.state.visible;

      _this.setState({
        visible: visible
      });

      _this.props.onPanelVisibleChange(visible);

      if (visible) {
        (0, _scrollIntoViewIfNeeded["default"])(_this.wrapper.current, {
          scrollMode: "if-needed",
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClickOutsideHandler", function (e) {
      e.stopPropagation();

      if (_this.state.visible && !_this.toggleContainer.current.contains(e.target)) {
        _this.setState({
          visible: false
        });

        _this.props.onPanelVisibleChange(false);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClear", function () {
      _this.setState({
        selectedCityName: ""
      });

      if (_this.props.onCityChange) {
        _this.props.onCityChange({});
      }
    });
    _this.toggleContainer = /*#__PURE__*/(0, _react.createRef)();
    _this.wrapper = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  (0, _createClass2["default"])(CityPicker, [{
    key: "render",
    value: function render() {
      var _cls2;

      var _this$props = this.props,
          cityList = _this$props.cityList,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          placeholder = _this$props.placeholder,
          className = _this$props.className,
          disabledGroups = _this$props.disabledGroups,
          loading = _this$props.loading,
          tip = _this$props.tip,
          onPanelVisibleChange = _this$props.onPanelVisibleChange,
          defaultActiveGroup = _this$props.defaultActiveGroup,
          onCityGroupChange = _this$props.onCityGroupChange,
          onCityChange = _this$props.onCityChange,
          defaultCityName = _this$props.defaultCityName,
          popupContainerClassName = _this$props.popupContainerClassName,
          size = _this$props.size,
          allowClear = _this$props.allowClear,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var _this$state = this.state,
          visible = _this$state.visible,
          selectedCityName = _this$state.selectedCityName,
          selectedCityGroup = _this$state.selectedCityGroup;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])("".concat(prefixCls), className)
      }, attr, {
        ref: this.toggleContainer
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-inner"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-active"), visible))
      }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
        disabled: disabled,
        readonly: true,
        placeholder: placeholder,
        className: (0, _classnames["default"])("".concat(prefixCls, "-input")),
        onClick: this.onOpenCityPicker,
        value: selectedCityName,
        size: size,
        suffix: /*#__PURE__*/_react["default"].createElement(_icon.DownIcon, {
          className: "".concat(prefixCls, "-arrow")
        }),
        onClear: this.onClear,
        allowClear: allowClear
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-content"), popupContainerClassName, (_cls2 = {}, (0, _defineProperty2["default"])(_cls2, "".concat(prefixCls, "-open"), visible), (0, _defineProperty2["default"])(_cls2, "".concat(prefixCls, "-close"), !visible), (0, _defineProperty2["default"])(_cls2, "ellyth-no-animate", visible === null), _cls2)),
        ref: this.wrapper
      }, /*#__PURE__*/_react["default"].createElement(_city_picker_core["default"], {
        cityList: cityList,
        onCityChange: this.onCityChange,
        defaultActiveGroup: selectedCityGroup,
        defaultCityName: selectedCityName,
        onCityGroupChange: this.onCityGroupChange,
        disabledGroups: disabledGroups,
        loading: loading,
        tip: tip
      })));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("click", this.onClickOutsideHandler, false);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("click", this.onClickOutsideHandler, false);
    }
  }]);
  return CityPicker;
}(_react.PureComponent);

exports["default"] = CityPicker;
(0, _defineProperty2["default"])(CityPicker, "defaultProps", {
  prefixCls: "ellyth-city-picker",
  cityList: [],
  disabled: false,
  placeholder: "请选择",
  disabledGroups: [],
  loading: false,
  onPanelVisibleChange: function onPanelVisibleChange() {},
  size: sizes["default"],
  allowClear: false
});
(0, _defineProperty2["default"])(CityPicker, "propTypes", {
  cityList: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    group: _propTypes["default"].string.isRequired,
    resources: _propTypes["default"].arrayOf(_propTypes["default"].object)
  })).isRequired,
  defaultActiveGroup: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  defaultCityName: _propTypes["default"].string,
  cityName: _propTypes["default"].string,
  disabledGroups: _propTypes["default"].array,
  activeGroup: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  disabled: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  onCityGroupChange: _propTypes["default"].func,
  onCityChange: _propTypes["default"].func,
  onPanelVisibleChange: _propTypes["default"].func,
  loading: _propTypes["default"].bool,
  allowClear: _propTypes["default"].bool,
  tip: _propTypes["default"].any,
  popupContainerClassName: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(Object.values(sizes))
});