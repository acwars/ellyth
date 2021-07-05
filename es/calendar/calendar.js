import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "loading", "prefixCls", "tip", "onMonthChange", "dateCellRender", "miniMode"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import PropTypes from "prop-types";
import React from "react";
import cls from "classnames";
import moment from "moment";
import Spin from "../spin";
import { ArrowLeftIcon, ArrowRightIcon } from "../icon";
var CALENDAR_HEADERS = ["一", "二", "三", "四", "五", "六", "日"];
var WEEKDAY = 7;

var Calendar = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Calendar, _React$PureComponent);

  var _super = _createSuper(Calendar);

  function Calendar() {
    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      momentSelected: _this.props.defaultValue || _this.props.value || moment()
    });

    _defineProperty(_assertThisInitialized(_this), "addMonth", function () {
      _this.setState({
        momentSelected: _this.state.momentSelected.clone().add(1, "month")
      }, function () {
        if (_this.props.onMonthChange) {
          _this.props.onMonthChange(_this.state.momentSelected);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "subtractMonth", function () {
      _this.setState({
        momentSelected: _this.state.momentSelected.clone().add(-1, "month")
      }, function () {
        if (_this.props.onMonthChange) {
          _this.props.onMonthChange(_this.state.momentSelected);
        }
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
            momentSelected: momentSelected
          }, function () {
            if (_this.props.onChange) {
              _this.props.onChange(date, _this.state.momentSelected);
            }
          });
        };
      };
    });

    _defineProperty(_assertThisInitialized(_this), "renderCalendarContent", function () {
      var prefixCls = _this.props.prefixCls;

      var momentDateFirst = _this.state.momentSelected.clone().date(1);

      var daysInMonth = momentDateFirst.daysInMonth();
      var dayOfFirstDate = momentDateFirst.day();
      var weekdayInMonth = momentDateFirst.isoWeekday();
      var lastDaysInMonth = (daysInMonth + weekdayInMonth - 1) % WEEKDAY;
      var momentLastMonth = momentDateFirst.clone().add(-1, "months");
      var lastMonthDaysInMonth = momentLastMonth.daysInMonth();
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-day-header")
      }, CALENDAR_HEADERS.map(function (day) {
        return /*#__PURE__*/React.createElement("span", {
          className: cls("".concat(prefixCls, "-item"), "".concat(prefixCls, "-day-title")),
          key: day
        }, day);
      })), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, new Array(weekdayInMonth - 1).fill().map(function (_, date) {
        var currentDate = dayOfFirstDate === 0 ? lastMonthDaysInMonth - WEEKDAY + date + 2 : lastMonthDaysInMonth - dayOfFirstDate + date + 2;
        return /*#__PURE__*/React.createElement("span", {
          className: cls("".concat(prefixCls, "-item"), "".concat(prefixCls, "-last-month")),
          key: "first-date-".concat(date),
          onClick: _this.selectedDate(currentDate)(false)
        }, currentDate, /*#__PURE__*/React.createElement("div", {
          className: cls("".concat(prefixCls, "-item-content"))
        }, _this.props.dateCellRender && _this.props.dateCellRender(currentDate, _this.state.momentSelected.clone())));
      }), new Array(daysInMonth).fill(null).map(function (_, date) {
        return /*#__PURE__*/React.createElement("span", {
          className: cls("".concat(prefixCls, "-item"), "".concat(prefixCls, "-current-month"), _defineProperty({}, "".concat(prefixCls, "-selected-date"), _this.state.momentSelected.date() === date + 1)),
          key: "date-".concat(date),
          onClick: _this.selectedDate(date + 1)()
        }, date + 1, /*#__PURE__*/React.createElement("div", {
          className: cls("".concat(prefixCls, "-item-content"))
        }, _this.props.dateCellRender && _this.props.dateCellRender(date + 1, _this.state.momentSelected.clone())));
      }), new Array(lastDaysInMonth === 0 ? 0 : 7 - lastDaysInMonth).fill(null).map(function (_, date) {
        return /*#__PURE__*/React.createElement("span", {
          className: cls("".concat(prefixCls, "-item"), "".concat(prefixCls, "-next-month")),
          key: "next-date-".concat(date),
          onClick: _this.selectedDate(date + 1)(true)
        }, date + 1);
      })));
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          loading = _this$props.loading,
          prefixCls = _this$props.prefixCls,
          tip = _this$props.tip,
          onMonthChange = _this$props.onMonthChange,
          dateCellRender = _this$props.dateCellRender,
          miniMode = _this$props.miniMode,
          attr = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-mini"), miniMode))
      }, attr), /*#__PURE__*/React.createElement(Spin, {
        spinning: loading,
        tip: tip,
        size: "large"
      }, /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-header"))
      }, /*#__PURE__*/React.createElement(ArrowLeftIcon, {
        className: "".concat(prefixCls, "-button-icon"),
        onClick: this.subtractMonth
      }), /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-date"))
      }, this.state.momentSelected.year(), "\u5E74 ", "  ", this.state.momentSelected.month() + 1, "\u6708"), /*#__PURE__*/React.createElement(ArrowRightIcon, {
        className: "".concat(prefixCls, "-button-icon"),
        onClick: this.addMonth
      })), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-list"), _defineProperty({}, "".concat(prefixCls, "-loading"), loading))
      }, this.renderCalendarContent())));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, _ref2) {
      var value = _ref.value;
      var momentSelected = _ref2.momentSelected;

      if (value && !momentSelected.isSame(value)) {
        return {
          momentSelected: value
        };
      }

      return null;
    }
  }]);

  return Calendar;
}(React.PureComponent);

_defineProperty(Calendar, "defaultProps", {
  prefixCls: "ellyth-calendar",
  loading: false,
  miniMode: false
});

_defineProperty(Calendar, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onMonthChange: PropTypes.func,
  dateCellRender: PropTypes.func,
  format: PropTypes.string,
  loading: PropTypes.bool,
  tip: PropTypes.any,
  miniMode: PropTypes.bool
});

export { Calendar as default };