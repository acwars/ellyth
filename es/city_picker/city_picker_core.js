import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["cityList", "prefixCls", "className", "defaultActiveGroup", "onCityGroupChange", "onCityChange", "disabledGroups", "defaultCityName", "loading", "notFoundContent", "tip"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Spin from "../spin";
import Empty from "../empty";

var CityPickerCore = /*#__PURE__*/function (_PureComponent) {
  _inherits(CityPickerCore, _PureComponent);

  var _super = _createSuper(CityPickerCore);

  function CityPickerCore() {
    var _this;

    _classCallCheck(this, CityPickerCore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedCityGroup: _this.props.defaultActiveGroup || _this.props.activeGroup || 0,
      selectedCityName: _this.props.defaultCityName || _this.props.cityName || ""
    });

    _defineProperty(_assertThisInitialized(_this), "onCityGroupChange", function (selectedCityGroup, index) {
      return function () {
        _this.setState({
          selectedCityGroup: selectedCityGroup
        });

        if (_this.props.onCityGroupChange) {
          _this.props.onCityGroupChange(selectedCityGroup, index);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onCityChange", function (selectedCity) {
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

  _createClass(CityPickerCore, [{
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
          attr = _objectWithoutProperties(_this$props, _excluded);

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
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className)
      }, attr), /*#__PURE__*/React.createElement(Spin, {
        size: "large",
        spinning: loading,
        tip: tip
      }, /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-panel"))
      }, cityGroups.length >= 1 && /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-panel-header"))
      }, /*#__PURE__*/React.createElement("ul", {
        className: cls("".concat(prefixCls, "-panel-header-wrap"))
      }, cityGroups.map(function (cityGroup, i) {
        var _cls;

        var isDisabled = disabledGroups.some(function (group) {
          return group === cityGroup || group === i;
        });
        return /*#__PURE__*/React.createElement("li", {
          onClick: isDisabled ? undefined : _this2.onCityGroupChange(cityGroup, i),
          className: cls("".concat(prefixCls, "-item"), (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-active"), !isDisabled && (selectedCityGroup === cityGroup || selectedCityGroup === i)), _defineProperty(_cls, "".concat(prefixCls, "-disabled"), isDisabled), _cls)),
          key: i
        }, /*#__PURE__*/React.createElement("span", null, cityGroup));
      }))), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-panel-content"))
      }, /*#__PURE__*/React.createElement("ul", {
        className: cls("".concat(prefixCls, "-panel-content-wrap"))
      }, cityList.length >= 1 ? currentCityList.length >= 1 ? currentCityList.map(function (city, i) {
        return /*#__PURE__*/React.createElement("li", {
          className: cls("".concat(prefixCls, "-city"), _defineProperty({}, "".concat(prefixCls, "-city-selected"), selectedCityName === city.name)),
          key: i,
          onClick: _this2.onCityChange(city)
        }, city.name);
      }) : notFoundContent : notFoundContent)))));
    }
  }]);

  return CityPickerCore;
}(PureComponent);

_defineProperty(CityPickerCore, "defaultProps", {
  prefixCls: "ellyth-city-picker-core",
  disabledGroups: [],
  loading: false,
  cityList: [],
  notFoundContent: /*#__PURE__*/React.createElement(Empty, null)
});

_defineProperty(CityPickerCore, "propTypes", {
  cityList: PropTypes.arrayOf(PropTypes.shape({
    group: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(PropTypes.object)
  })).isRequired,
  disabledGroups: PropTypes.array,
  onCityGroupChange: PropTypes.func,
  onCityChange: PropTypes.func,
  loading: PropTypes.bool,
  tip: PropTypes.any,
  defaultActiveGroup: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  activeGroup: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  notFoundContent: PropTypes.any
});

export { CityPickerCore as default };