import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["cityList", "prefixCls", "disabled", "placeholder", "className", "disabledGroups", "loading", "tip", "onPanelVisibleChange", "defaultActiveGroup", "onCityGroupChange", "onCityChange", "defaultCityName", "popupContainerClassName", "size", "allowClear"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import CityPickerCore from "./city_picker_core";
import Input from "../input";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";
import { DownIcon } from "../icon";
var sizes = {
  "default": "default",
  small: "small",
  large: "large"
};

var CityPicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(CityPicker, _PureComponent);

  var _super = _createSuper(CityPicker);

  function CityPicker(props) {
    var _this;

    _classCallCheck(this, CityPicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: null,
      selectedCityGroup: _this.props.defaultActiveGroup || _this.props.activeGroup || 0,
      selectedCityName: _this.props.defaultCityName || _this.props.cityName || ""
    });

    _defineProperty(_assertThisInitialized(_this), "onCityGroupChange", function (selectedCityGroup, index) {
      if (_this.props.onCityGroupChange) {
        _this.props.onCityGroupChange(selectedCityGroup, index);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCityChange", function (selectedCity) {
      _this.setState({
        visible: false,
        selectedCityName: selectedCity.name
      });

      _this.props.onPanelVisibleChange(false);

      if (_this.props.onCityChange) {
        _this.props.onCityChange(selectedCity);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onOpenCityPicker", function () {
      var visible = !_this.state.visible;

      _this.setState({
        visible: visible
      });

      _this.props.onPanelVisibleChange(visible);

      if (visible) {
        scrollIntoViewIfNeeded(_this.wrapper.current, {
          scrollMode: "if-needed",
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickOutsideHandler", function (e) {
      e.stopPropagation();

      if (_this.state.visible && !_this.toggleContainer.current.contains(e.target)) {
        _this.setState({
          visible: false
        });

        _this.props.onPanelVisibleChange(false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClear", function () {
      _this.setState({
        selectedCityName: ""
      });

      if (_this.props.onCityChange) {
        _this.props.onCityChange({});
      }
    });

    _this.toggleContainer = /*#__PURE__*/createRef();
    _this.wrapper = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(CityPicker, [{
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
          attr = _objectWithoutProperties(_this$props, _excluded);

      var _this$state = this.state,
          visible = _this$state.visible,
          selectedCityName = _this$state.selectedCityName,
          selectedCityGroup = _this$state.selectedCityGroup;
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls("".concat(prefixCls), className)
      }, attr, {
        ref: this.toggleContainer
      }), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-inner"), _defineProperty({}, "".concat(prefixCls, "-active"), visible))
      }, /*#__PURE__*/React.createElement(Input, {
        disabled: disabled,
        readonly: true,
        placeholder: placeholder,
        className: cls("".concat(prefixCls, "-input")),
        onClick: this.onOpenCityPicker,
        value: selectedCityName,
        size: size,
        suffix: /*#__PURE__*/React.createElement(DownIcon, {
          className: "".concat(prefixCls, "-arrow")
        }),
        onClear: this.onClear,
        allowClear: allowClear
      })), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-content"), popupContainerClassName, (_cls2 = {}, _defineProperty(_cls2, "".concat(prefixCls, "-open"), visible), _defineProperty(_cls2, "".concat(prefixCls, "-close"), !visible), _defineProperty(_cls2, "ellyth-no-animate", visible === null), _cls2)),
        ref: this.wrapper
      }, /*#__PURE__*/React.createElement(CityPickerCore, {
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
}(PureComponent);

_defineProperty(CityPicker, "defaultProps", {
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

_defineProperty(CityPicker, "propTypes", {
  cityList: PropTypes.arrayOf(PropTypes.shape({
    group: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(PropTypes.object)
  })).isRequired,
  defaultActiveGroup: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultCityName: PropTypes.string,
  cityName: PropTypes.string,
  disabledGroups: PropTypes.array,
  activeGroup: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onCityGroupChange: PropTypes.func,
  onCityChange: PropTypes.func,
  onPanelVisibleChange: PropTypes.func,
  loading: PropTypes.bool,
  allowClear: PropTypes.bool,
  tip: PropTypes.any,
  popupContainerClassName: PropTypes.string,
  size: PropTypes.oneOf(Object.values(sizes))
});

export { CityPicker as default };