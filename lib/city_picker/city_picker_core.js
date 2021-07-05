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

var _spin = _interopRequireDefault(require("../spin"));

var _empty = _interopRequireDefault(require("../empty"));

var _excluded = ["cityList", "prefixCls", "className", "defaultActiveGroup", "onCityGroupChange", "onCityChange", "disabledGroups", "defaultCityName", "loading", "notFoundContent", "tip"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CityPickerCore = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(CityPickerCore, _PureComponent);

  var _super = _createSuper(CityPickerCore);

  function CityPickerCore() {
    var _this;

    (0, _classCallCheck2["default"])(this, CityPickerCore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      selectedCityGroup: _this.props.defaultActiveGroup || _this.props.activeGroup || 0,
      selectedCityName: _this.props.defaultCityName || _this.props.cityName || ""
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCityGroupChange", function (selectedCityGroup, index) {
      return function () {
        _this.setState({
          selectedCityGroup: selectedCityGroup
        });

        if (_this.props.onCityGroupChange) {
          _this.props.onCityGroupChange(selectedCityGroup, index);
        }
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCityChange", function (selectedCity) {
      return function () {
        _this.setState({
          selectedCityName: selectedCity.name
        });

        if (_this.props.onCityChange) {
          _this.props.onCityChange(selectedCity);
        }
      };
    });
    return _this;
  }

  (0, _createClass2["default"])(CityPickerCore, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          cityList = _this$props.cityList,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          defaultActiveGroup = _this$props.defaultActiveGroup,
          onCityGroupChange = _this$props.onCityGroupChange,
          onCityChange = _this$props.onCityChange,
          disabledGroups = _this$props.disabledGroups,
          defaultCityName = _this$props.defaultCityName,
          loading = _this$props.loading,
          notFoundContent = _this$props.notFoundContent,
          tip = _this$props.tip,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var _this$state = this.state,
          selectedCityGroup = _this$state.selectedCityGroup,
          selectedCityName = _this$state.selectedCityName;
      var cityGroups = cityList.length >= 1 ? cityList.map(function (_ref) {
        var group = _ref.group;
        return group;
      }) : [];
      var currentCityList = (cityList.find(function (item, i) {
        return item.group === selectedCityGroup || i === selectedCityGroup;
      }) || {}).resources || [];
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className)
      }, attr), /*#__PURE__*/_react["default"].createElement(_spin["default"], {
        size: "large",
        spinning: loading,
        tip: tip
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-panel"))
      }, cityGroups.length >= 1 && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-panel-header"))
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-panel-header-wrap"))
      }, cityGroups.map(function (cityGroup, i) {
        var _cls;

        var isDisabled = disabledGroups.some(function (group) {
          return group === cityGroup || group === i;
        });
        return /*#__PURE__*/_react["default"].createElement("li", {
          onClick: isDisabled ? undefined : _this2.onCityGroupChange(cityGroup, i),
          className: (0, _classnames["default"])("".concat(prefixCls, "-item"), (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-active"), !isDisabled && (selectedCityGroup === cityGroup || selectedCityGroup === i)), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-disabled"), isDisabled), _cls)),
          key: i
        }, /*#__PURE__*/_react["default"].createElement("span", null, cityGroup));
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-panel-content"))
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-panel-content-wrap"))
      }, cityList.length >= 1 ? currentCityList.length >= 1 ? currentCityList.map(function (city, i) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-city"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-city-selected"), selectedCityName === city.name)),
          key: i,
          onClick: _this2.onCityChange(city)
        }, city.name);
      }) : notFoundContent : notFoundContent)))));
    }
  }]);
  return CityPickerCore;
}(_react.PureComponent);

exports["default"] = CityPickerCore;
(0, _defineProperty2["default"])(CityPickerCore, "defaultProps", {
  prefixCls: "ellyth-city-picker-core",
  disabledGroups: [],
  loading: false,
  cityList: [],
  notFoundContent: /*#__PURE__*/_react["default"].createElement(_empty["default"], null)
});
(0, _defineProperty2["default"])(CityPickerCore, "propTypes", {
  cityList: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    group: _propTypes["default"].string.isRequired,
    resources: _propTypes["default"].arrayOf(_propTypes["default"].object)
  })).isRequired,
  disabledGroups: _propTypes["default"].array,
  onCityGroupChange: _propTypes["default"].func,
  onCityChange: _propTypes["default"].func,
  loading: _propTypes["default"].bool,
  tip: _propTypes["default"].any,
  defaultActiveGroup: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  activeGroup: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  notFoundContent: _propTypes["default"].any
});