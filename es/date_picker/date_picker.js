import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "disabled", "placeholder", "format", "extraFooter", "showToday", "allowClear", "tip", "showDayInPrevMonth", "showDayInNextMonth", "loading", "onSelectedDateChange", "onPanelVisibleChange", "disabledDate", "getPopupContainer", "position", "suffix", "size", "popupContainerClassName"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, createRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import cls from "classnames";
import Input from "../input";
import Spin from "../spin";
import moment from "moment";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";
import { debounce } from "../utils";
import { CalendarIcon, ArrowLeftIcon, ArrowRightIcon } from "../icon";
var positions = {
  top: "top",
  bottom: "bottom"
};
var sizes = {
  "default": "default",
  small: "small",
  large: "large"
};
var CALENDAR_HEADERS = ["一", "二", "三", "四", "五", "六", "日"];
var WEEKDAY = 7;

var DataPicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(DataPicker, _PureComponent);

  var _super = _createSuper(DataPicker);

  function DataPicker(props) {
    var _this;

    _classCallCheck(this, DataPicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      momentSelected: _this.props.defaultValue || _this.props.value || moment(),
      momentSelectedTemplate: _this.props.defaultValue || _this.props.value || moment(),
      visible: null,
      isSelected: false,
      extraFooter: null,
      //第一次没选择日期 并且没有初始值 就显示 placeholder
      isSelectedMoment: !!(_this.props.defaultValue || _this.props.value)
    });

    _defineProperty(_assertThisInitialized(_this), "onTogglePanel", function () {
      var visible = !_this.state.visible;

      _this.setState({
        visible: visible
      }, function () {
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

      _this.props.onPanelVisibleChange(visible);
    });

    _defineProperty(_assertThisInitialized(_this), "addMonth", function () {
      _this.setState({
        momentSelected: _this.state.momentSelected.clone().add(1, "month")
      });
    });

    _defineProperty(_assertThisInitialized(_this), "subtractMonth", function () {
      _this.setState({
        momentSelected: _this.state.momentSelected.clone().add(-1, "month")
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectedDate", function (date) {
      return function (isNextMonth) {
        return function () {
          var momentSelected = _this.state.momentSelected.clone();

          if (isNextMonth === true) {
            momentSelected.add(1, "month").date(date);
          } else if (isNextMonth === false) {
            momentSelected.subtract(1, "month").date(date);
          } else {
            momentSelected.date(date);
          }

          _this.setState({
            isSelected: true,
            momentSelected: momentSelected,
            momentSelectedTemplate: momentSelected.clone(),
            visible: false,
            isSelectedMoment: true
          }, function () {
            _this.props.onPanelVisibleChange(false);

            _this.props.onChange(date, _this.state.momentSelected, _this.state.momentSelected.format(_this.props.format));
          });
        };
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getWrapperBounding", function () {
      var _this$triggerWrapper$ = _this.triggerWrapper.current.getBoundingClientRect(),
          height = _this$triggerWrapper$.height,
          top = _this$triggerWrapper$.top,
          left = _this$triggerWrapper$.left;

      var _this$wrapper$current = _this.wrapper.current.getBoundingClientRect(),
          wrapperHeight = _this$wrapper$current.height;

      var _window = window,
          scrollY = _window.scrollY;
      var positions = {
        top: {
          top: top + scrollY - wrapperHeight - 10,
          left: left
        },
        bottom: {
          top: top + height + scrollY,
          left: left
        }
      };
      return positions[_this.props.position];
    });

    _defineProperty(_assertThisInitialized(_this), "renderCalendarContent", function () {
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          showDayInNextMonth = _this$props.showDayInNextMonth,
          showDayInPrevMonth = _this$props.showDayInPrevMonth,
          disabledDate = _this$props.disabledDate;

      var momentDateFirst = _this.state.momentSelected.clone().date(1);

      var daysInMonth = momentDateFirst.daysInMonth();
      var dayOfFirstDate = momentDateFirst.day();
      var weekdayInMonth = momentDateFirst.isoWeekday();
      var lastDaysInMonth = (daysInMonth + weekdayInMonth - 1) % WEEKDAY;
      var momentLastMonth = momentDateFirst.clone().add(-1, "months");
      var lastMonthDaysInMonth = momentLastMonth.daysInMonth();
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, CALENDAR_HEADERS.map(function (day) {
        return /*#__PURE__*/React.createElement("span", {
          className: cls("".concat(prefixCls, "-item"), "".concat(prefixCls, "-day-title")),
          key: day
        }, day);
      })), new Array(weekdayInMonth - 1).fill().map(function (_, date) {
        var currentDate = dayOfFirstDate === 0 ? lastMonthDaysInMonth - WEEKDAY + date + 2 : lastMonthDaysInMonth - dayOfFirstDate + date + 2;
        var isDisabled = disabledDate(momentDateFirst.clone().date(date + 1));
        return /*#__PURE__*/React.createElement("span", {
          className: cls("".concat(prefixCls, "-item"), "".concat(prefixCls, "-last-month"), _defineProperty({}, "".concat(prefixCls, "-disabled-date"), isDisabled)),
          key: "first-date-".concat(date),
          onClick: !isDisabled ? _this.selectedDate(currentDate)(false) : undefined
        }, showDayInPrevMonth && currentDate);
      }), new Array(daysInMonth).fill(null).map(function (_, date) {
        var _cls2;

        var currentDate = date + 1;
        var isDisabled = disabledDate(momentDateFirst.clone().date(currentDate));
        return /*#__PURE__*/React.createElement("span", {
          className: cls("".concat(prefixCls, "-item"), "".concat(prefixCls, "-current-month"), (_cls2 = {}, _defineProperty(_cls2, "".concat(prefixCls, "-selected-date"), _this.state.momentSelected.date() === currentDate), _defineProperty(_cls2, "".concat(prefixCls, "-disabled-date"), isDisabled), _cls2)),
          key: "date-".concat(date),
          onClick: !isDisabled ? _this.selectedDate(currentDate)() : undefined
        }, currentDate);
      }), new Array(lastDaysInMonth === 0 ? 0 : WEEKDAY - lastDaysInMonth).fill(null).map(function (_, date) {
        var currentDate = date + 1;
        var isDisabled = disabledDate(momentDateFirst.clone().add(1, "month").date(currentDate));
        return /*#__PURE__*/React.createElement("span", {
          className: cls("".concat(prefixCls, "-item"), "".concat(prefixCls, "-next-month"), _defineProperty({}, "".concat(prefixCls, "-disabled-date"), isDisabled)),
          key: "next-date-".concat(date),
          onClick: showDayInNextMonth && !isDisabled ? _this.selectedDate(currentDate)(true) : undefined
        }, showDayInNextMonth && currentDate);
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectToday", function () {
      var currentMoment = moment();

      _this.setState({
        momentSelected: currentMoment,
        selectedDate: currentMoment.date()
      }, function () {
        _this.selectedDate(_this.state.selectedDate)()();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClickOutsideHandler", function (e) {
      e.stopPropagation();

      if (_this.state.visible && !_this.props.disabled && !_this.toggleContainer.current.contains(e.target) && !_this.wrapper.current.contains(e.target)) {
        _this.setState({
          visible: false
        });

        _this.props.onPanelVisibleChange(false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clearDate", function () {
      var momentSelected = moment();
      var selectedDate = momentSelected.date();

      _this.setState({
        momentSelected: momentSelected,
        selectedDate: selectedDate,
        visible: _this.state.visible === null ? null : false,
        isSelectedMoment: false
      }, function () {
        _this.props.onChange(undefined, undefined, "");

        _this.props.onPanelVisibleChange(false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeHandler", debounce(function () {
      _this.setWrapperBounding();
    }, 500));

    _this.toggleContainer = /*#__PURE__*/createRef();
    _this.wrapper = /*#__PURE__*/createRef();
    _this.triggerWrapper = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(DataPicker, [{
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
      var _cls6, _cls8;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          placeholder = _this$props2.placeholder,
          format = _this$props2.format,
          extraFooter = _this$props2.extraFooter,
          showToday = _this$props2.showToday,
          allowClear = _this$props2.allowClear,
          tip = _this$props2.tip,
          showDayInPrevMonth = _this$props2.showDayInPrevMonth,
          showDayInNextMonth = _this$props2.showDayInNextMonth,
          loading = _this$props2.loading,
          onSelectedDateChange = _this$props2.onSelectedDateChange,
          onPanelVisibleChange = _this$props2.onPanelVisibleChange,
          disabledDate = _this$props2.disabledDate,
          getPopupContainer = _this$props2.getPopupContainer,
          position = _this$props2.position,
          suffix = _this$props2.suffix,
          size = _this$props2.size,
          popupContainerClassName = _this$props2.popupContainerClassName,
          attr = _objectWithoutProperties(_this$props2, _excluded);

      var _this$state = this.state,
          visible = _this$state.visible,
          left = _this$state.left,
          top = _this$state.top,
          isSelectedMoment = _this$state.isSelectedMoment,
          momentSelectedTemplate = _this$state.momentSelectedTemplate;
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-position-").concat(position), position))
      }, attr, {
        ref: this.toggleContainer
      }), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-inner"), _defineProperty({}, "".concat(prefixCls, "-active"), visible)),
        ref: this.triggerWrapper
      }, /*#__PURE__*/React.createElement(Input, {
        disabled: disabled,
        readonly: true,
        placeholder: placeholder,
        className: cls("".concat(prefixCls, "-input")),
        value: isSelectedMoment ? momentSelectedTemplate.format(format) : "",
        onClick: disabled ? undefined : this.onTogglePanel,
        size: size,
        suffix: suffix,
        allowClear: allowClear,
        onClear: this.clearDate
      })), /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-content"), popupContainerClassName, (_cls6 = {}, _defineProperty(_cls6, "".concat(prefixCls, "-open"), visible), _defineProperty(_cls6, "".concat(prefixCls, "-close"), !visible), _defineProperty(_cls6, "ellyth-no-animate", visible === null), _cls6)),
        ref: this.wrapper,
        style: {
          left: left,
          top: top
        }
      }, /*#__PURE__*/React.createElement(Spin, {
        size: "large",
        spinning: loading,
        tip: tip
      }, /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-header"))
      }, /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-date"))
      }, this.state.momentSelected.year(), "\u5E74 ", "  ", this.state.momentSelected.month() + 1, "\u6708"), /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-switch"))
      }, /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-switch-group")),
        onClick: this.subtractMonth
      }, /*#__PURE__*/React.createElement(ArrowLeftIcon, null)), /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-switch-group")),
        onClick: this.addMonth
      }, /*#__PURE__*/React.createElement(ArrowRightIcon, null)))), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-items"), _defineProperty({}, "".concat(prefixCls, "-loading"), loading))
      }, this.renderCalendarContent()), extraFooter && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer-extra")
      }, extraFooter), showToday || allowClear ? /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-footer"), (_cls8 = {}, _defineProperty(_cls8, "".concat(prefixCls, "-has-extra-footer"), extraFooter), _defineProperty(_cls8, "".concat(prefixCls, "-has-border"), extraFooter || showToday || allowClear), _cls8))
      }, showToday && /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-footer-today")),
        onClick: this.onSelectToday
      }, "\u4ECA\u5929"), allowClear && /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-footer-clear")),
        onClick: this.clearDate
      }, "\u6E05\u9664")) : undefined)), getPopupContainer()));
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
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, _ref2) {
      var value = _ref.value;
      var momentSelected = _ref2.momentSelected;

      if (!value || value.valueOf() === momentSelected.valueOf()) {
        return null;
      }

      return {
        momentSelected: value,
        isSelectedMoment: !!value
      };
    }
  }]);

  return DataPicker;
}(PureComponent);

_defineProperty(DataPicker, "defaultProps", {
  prefixCls: "ellyth-date-picker",
  format: "YYYY-MM-DD",
  onPanelVisibleChange: function onPanelVisibleChange() {},
  onChange: function onChange() {},
  placeholder: "请选择",
  loading: false,
  showToday: true,
  allowClear: true,
  tip: "",
  showDayInPrevMonth: true,
  showDayInNextMonth: true,
  position: positions.bottom,
  getPopupContainer: function getPopupContainer() {
    return document.body;
  },
  suffix: /*#__PURE__*/React.createElement(CalendarIcon, null),
  size: sizes["default"],
  disabledDate: function disabledDate() {
    return false;
  }
});

_defineProperty(DataPicker, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  popupContainerClassName: PropTypes.string,
  onPanelVisibleChange: PropTypes.func,
  onChange: PropTypes.func,
  format: PropTypes.string,
  loading: PropTypes.bool,
  allowClear: PropTypes.bool,
  tip: PropTypes.any,
  showToday: PropTypes.bool,
  showDayInPrevMonth: PropTypes.bool,
  showDayInNextMonth: PropTypes.bool,
  position: PropTypes.oneOf(Object.values(positions)),
  size: PropTypes.oneOf(Object.values(sizes)),
  overlay: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object])
});

export { DataPicker as default };