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

var _spin = _interopRequireDefault(require("../spin"));

var _moment = _interopRequireDefault(require("moment"));

var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));

var _utils = require("../utils");

var _icon = require("../icon");

var _excluded = ["prefixCls", "className", "disabled", "placeholder", "format", "extraFooter", "showToday", "allowClear", "tip", "showDayInPrevMonth", "showDayInNextMonth", "loading", "onSelectedDateChange", "onPanelVisibleChange", "disabledDate", "getPopupContainer", "position", "suffix", "size", "popupContainerClassName"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
  (0, _inherits2["default"])(DataPicker, _PureComponent);

  var _super = _createSuper(DataPicker);

  function DataPicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DataPicker);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      momentSelected: _this.props.defaultValue || _this.props.value || (0, _moment["default"])(),
      momentSelectedTemplate: _this.props.defaultValue || _this.props.value || (0, _moment["default"])(),
      visible: null,
      isSelected: false,
      extraFooter: null,
      //第一次没选择日期 并且没有初始值 就显示 placeholder
      isSelectedMoment: !!(_this.props.defaultValue || _this.props.value)
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onTogglePanel", function () {
      var visible = !_this.state.visible;

      _this.setState({
        visible: visible
      }, function () {
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

      _this.props.onPanelVisibleChange(visible);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "addMonth", function () {
      _this.setState({
        momentSelected: _this.state.momentSelected.clone().add(1, "month")
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "subtractMonth", function () {
      _this.setState({
        momentSelected: _this.state.momentSelected.clone().add(-1, "month")
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getWrapperBounding", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderCalendarContent", function () {
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
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, CALENDAR_HEADERS.map(function (day) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-item"), "".concat(prefixCls, "-day-title")),
          key: day
        }, day);
      })), new Array(weekdayInMonth - 1).fill().map(function (_, date) {
        var currentDate = dayOfFirstDate === 0 ? lastMonthDaysInMonth - WEEKDAY + date + 2 : lastMonthDaysInMonth - dayOfFirstDate + date + 2;
        var isDisabled = disabledDate(momentDateFirst.clone().date(date + 1));
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-item"), "".concat(prefixCls, "-last-month"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-disabled-date"), isDisabled)),
          key: "first-date-".concat(date),
          onClick: !isDisabled ? _this.selectedDate(currentDate)(false) : undefined
        }, showDayInPrevMonth && currentDate);
      }), new Array(daysInMonth).fill(null).map(function (_, date) {
        var _cls2;

        var currentDate = date + 1;
        var isDisabled = disabledDate(momentDateFirst.clone().date(currentDate));
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-item"), "".concat(prefixCls, "-current-month"), (_cls2 = {}, (0, _defineProperty2["default"])(_cls2, "".concat(prefixCls, "-selected-date"), _this.state.momentSelected.date() === currentDate), (0, _defineProperty2["default"])(_cls2, "".concat(prefixCls, "-disabled-date"), isDisabled), _cls2)),
          key: "date-".concat(date),
          onClick: !isDisabled ? _this.selectedDate(currentDate)() : undefined
        }, currentDate);
      }), new Array(lastDaysInMonth === 0 ? 0 : WEEKDAY - lastDaysInMonth).fill(null).map(function (_, date) {
        var currentDate = date + 1;
        var isDisabled = disabledDate(momentDateFirst.clone().add(1, "month").date(currentDate));
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-item"), "".concat(prefixCls, "-next-month"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-disabled-date"), isDisabled)),
          key: "next-date-".concat(date),
          onClick: showDayInNextMonth && !isDisabled ? _this.selectedDate(currentDate)(true) : undefined
        }, showDayInNextMonth && currentDate);
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSelectToday", function () {
      var currentMoment = (0, _moment["default"])();

      _this.setState({
        momentSelected: currentMoment,
        selectedDate: currentMoment.date()
      }, function () {
        _this.selectedDate(_this.state.selectedDate)()();
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClickOutsideHandler", function (e) {
      e.stopPropagation();

      if (_this.state.visible && !_this.props.disabled && !_this.toggleContainer.current.contains(e.target) && !_this.wrapper.current.contains(e.target)) {
        _this.setState({
          visible: false
        });

        _this.props.onPanelVisibleChange(false);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clearDate", function () {
      var momentSelected = (0, _moment["default"])();
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onResizeHandler", (0, _utils.debounce)(function () {
      _this.setWrapperBounding();
    }, 500));
    _this.toggleContainer = /*#__PURE__*/(0, _react.createRef)();
    _this.wrapper = /*#__PURE__*/(0, _react.createRef)();
    _this.triggerWrapper = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  (0, _createClass2["default"])(DataPicker, [{
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
          attr = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);
      var _this$state = this.state,
          visible = _this$state.visible,
          left = _this$state.left,
          top = _this$state.top,
          isSelectedMoment = _this$state.isSelectedMoment,
          momentSelectedTemplate = _this$state.momentSelectedTemplate;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-position-").concat(position), position))
      }, attr, {
        ref: this.toggleContainer
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-inner"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-active"), visible)),
        ref: this.triggerWrapper
      }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
        disabled: disabled,
        readonly: true,
        placeholder: placeholder,
        className: (0, _classnames["default"])("".concat(prefixCls, "-input")),
        value: isSelectedMoment ? momentSelectedTemplate.format(format) : "",
        onClick: disabled ? undefined : this.onTogglePanel,
        size: size,
        suffix: suffix,
        allowClear: allowClear,
        onClear: this.clearDate
      })), /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-content"), popupContainerClassName, (_cls6 = {}, (0, _defineProperty2["default"])(_cls6, "".concat(prefixCls, "-open"), visible), (0, _defineProperty2["default"])(_cls6, "".concat(prefixCls, "-close"), !visible), (0, _defineProperty2["default"])(_cls6, "ellyth-no-animate", visible === null), _cls6)),
        ref: this.wrapper,
        style: {
          left: left,
          top: top
        }
      }, /*#__PURE__*/_react["default"].createElement(_spin["default"], {
        size: "large",
        spinning: loading,
        tip: tip
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-header"))
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-date"))
      }, this.state.momentSelected.year(), "\u5E74 ", "  ", this.state.momentSelected.month() + 1, "\u6708"), /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-switch"))
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-switch-group")),
        onClick: this.subtractMonth
      }, /*#__PURE__*/_react["default"].createElement(_icon.ArrowLeftIcon, null)), /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-switch-group")),
        onClick: this.addMonth
      }, /*#__PURE__*/_react["default"].createElement(_icon.ArrowRightIcon, null)))), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-items"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-loading"), loading))
      }, this.renderCalendarContent()), extraFooter && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-footer-extra")
      }, extraFooter), showToday || allowClear ? /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-footer"), (_cls8 = {}, (0, _defineProperty2["default"])(_cls8, "".concat(prefixCls, "-has-extra-footer"), extraFooter), (0, _defineProperty2["default"])(_cls8, "".concat(prefixCls, "-has-border"), extraFooter || showToday || allowClear), _cls8))
      }, showToday && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-footer-today")),
        onClick: this.onSelectToday
      }, "\u4ECA\u5929"), allowClear && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-footer-clear")),
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
}(_react.PureComponent);

exports["default"] = DataPicker;
(0, _defineProperty2["default"])(DataPicker, "defaultProps", {
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
  suffix: /*#__PURE__*/_react["default"].createElement(_icon.CalendarIcon, null),
  size: sizes["default"],
  disabledDate: function disabledDate() {
    return false;
  }
});
(0, _defineProperty2["default"])(DataPicker, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  popupContainerClassName: _propTypes["default"].string,
  onPanelVisibleChange: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  format: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  allowClear: _propTypes["default"].bool,
  tip: _propTypes["default"].any,
  showToday: _propTypes["default"].bool,
  showDayInPrevMonth: _propTypes["default"].bool,
  showDayInNextMonth: _propTypes["default"].bool,
  position: _propTypes["default"].oneOf(Object.values(positions)),
  size: _propTypes["default"].oneOf(Object.values(sizes)),
  overlay: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object])
});