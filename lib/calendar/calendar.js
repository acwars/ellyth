"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _moment = _interopRequireDefault(require("moment"));

var _spin = _interopRequireDefault(require("../spin"));

var _icon = require("../icon");

var _excluded = ["className", "loading", "prefixCls", "tip", "onMonthChange", "dateCellRender", "miniMode"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CALENDAR_HEADERS = ["一", "二", "三", "四", "五", "六", "日"];
var WEEKDAY = 7;

var Calendar = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Calendar, _React$PureComponent);

  var _super = _createSuper(Calendar);

  function Calendar() {
    var _this;

    (0, _classCallCheck2["default"])(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      momentSelected: _this.props.defaultValue || _this.props.value || (0, _moment["default"])()
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "addMonth", function () {
      _this.setState({
        momentSelected: _this.state.momentSelected.clone().add(1, "month")
      }, function () {
        if (_this.props.onMonthChange) {
          _this.props.onMonthChange(_this.state.momentSelected);
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "subtractMonth", function () {
      _this.setState({
        momentSelected: _this.state.momentSelected.clone().add(-1, "month")
      }, function () {
        if (_this.props.onMonthChange) {
          _this.props.onMonthChange(_this.state.momentSelected);
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedDate", function (date) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderCalendarContent", function () {
      var prefixCls = _this.props.prefixCls;

      var momentDateFirst = _this.state.momentSelected.clone().date(1);

      var daysInMonth = momentDateFirst.daysInMonth();
      var dayOfFirstDate = momentDateFirst.day();
      var weekdayInMonth = momentDateFirst.isoWeekday();
      var lastDaysInMonth = (daysInMonth + weekdayInMonth - 1) % WEEKDAY;
      var momentLastMonth = momentDateFirst.clone().add(-1, "months");
      var lastMonthDaysInMonth = momentLastMonth.daysInMonth();
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-day-header")
      }, CALENDAR_HEADERS.map(function (day) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-item"), "".concat(prefixCls, "-day-title")),
          key: day
        }, day);
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, new Array(weekdayInMonth - 1).fill().map(function (_, date) {
        var currentDate = dayOfFirstDate === 0 ? lastMonthDaysInMonth - WEEKDAY + date + 2 : lastMonthDaysInMonth - dayOfFirstDate + date + 2;
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-item"), "".concat(prefixCls, "-last-month")),
          key: "first-date-".concat(date),
          onClick: _this.selectedDate(currentDate)(false)
        }, currentDate, /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-item-content"))
        }, _this.props.dateCellRender && _this.props.dateCellRender(currentDate, _this.state.momentSelected.clone())));
      }), new Array(daysInMonth).fill(null).map(function (_, date) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-item"), "".concat(prefixCls, "-current-month"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-selected-date"), _this.state.momentSelected.date() === date + 1)),
          key: "date-".concat(date),
          onClick: _this.selectedDate(date + 1)()
        }, date + 1, /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-item-content"))
        }, _this.props.dateCellRender && _this.props.dateCellRender(date + 1, _this.state.momentSelected.clone())));
      }), new Array(lastDaysInMonth === 0 ? 0 : 7 - lastDaysInMonth).fill(null).map(function (_, date) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-item"), "".concat(prefixCls, "-next-month")),
          key: "next-date-".concat(date),
          onClick: _this.selectedDate(date + 1)(true)
        }, date + 1);
      })));
    });
    return _this;
  }

  (0, _createClass2["default"])(Calendar, [{
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
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-mini"), miniMode))
      }, attr), /*#__PURE__*/_react["default"].createElement(_spin["default"], {
        spinning: loading,
        tip: tip,
        size: "large"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-header"))
      }, /*#__PURE__*/_react["default"].createElement(_icon.ArrowLeftIcon, {
        className: "".concat(prefixCls, "-button-icon"),
        onClick: this.subtractMonth
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-date"))
      }, this.state.momentSelected.year(), "\u5E74 ", "  ", this.state.momentSelected.month() + 1, "\u6708"), /*#__PURE__*/_react["default"].createElement(_icon.ArrowRightIcon, {
        className: "".concat(prefixCls, "-button-icon"),
        onClick: this.addMonth
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-list"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-loading"), loading))
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
}(_react["default"].PureComponent);

exports["default"] = Calendar;
(0, _defineProperty2["default"])(Calendar, "defaultProps", {
  prefixCls: "ellyth-calendar",
  loading: false,
  miniMode: false
});
(0, _defineProperty2["default"])(Calendar, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func,
  onMonthChange: _propTypes["default"].func,
  dateCellRender: _propTypes["default"].func,
  format: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  tip: _propTypes["default"].any,
  miniMode: _propTypes["default"].bool
});