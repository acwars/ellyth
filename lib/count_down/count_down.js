"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var COUNT_DOWN_TYPE = {
  TIME: 'time',
  DATE: 'date'
};
var defaultCountDownDate = {
  d: 0,
  m: 0,
  h: 0,
  s: 0
};

var CountDown = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(CountDown, _PureComponent);

  var _super = _createSuper(CountDown);

  function CountDown() {
    var _this;

    (0, _classCallCheck2["default"])(this, CountDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      countDown: 0,
      countDownDate: defaultCountDownDate,
      autoStart: _this.props.autoStart || !_this.props.children
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "timerId", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onStartCountDown", function () {
      if (_this.props.disabled || _this.state.countDown > 0) {
        return;
      }

      _this.setState({
        countDown: _this.props.defaultCountDown || _this.props.countDown
      }, function () {
        var _this$props = _this.props,
            onStart = _this$props.onStart,
            type = _this$props.type;

        if (onStart) {
          onStart(_this.state.countDown);
        }

        if (type === COUNT_DOWN_TYPE.TIME) {
          return _this.startCountDownForTime();
        }

        if (type === COUNT_DOWN_TYPE.DATE) {
          return _this.startCountDownForDate();
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "startCountDownForDate", function () {
      var endTime = new Date(_this.props.defaultCountDown || _this.props.countDown).getTime();
      _this.timerId = setTimeout(function () {
        _this.setState(function (prevState) {
          if (_this.props.onChange) {
            _this.props.onChange(prevState.countDownDate);
          }

          var nowTime = Date.now();
          var time = endTime - nowTime;
          var d = Math.floor(time / 1000 / 60 / 60 / 24);
          time -= d * 1000 * 60 * 60 * 24;
          var h = Math.floor(time / 1000 / 60 / 60);
          time -= h * 1000 * 60 * 60;
          var m = Math.floor(time / 1000 / 60);
          time -= m * 1000 * 60;
          var s = Math.floor(time / 1000);
          var countDownDate = {
            d: _this.formatZero(d),
            h: _this.formatZero(h),
            m: _this.formatZero(m),
            s: _this.formatZero(s)
          };

          if (time === 0) {
            clearTimeout(_this.timerId);

            if (_this.props.onEnd) {
              _this.props.onEnd(prevState.countDownDate);
            }

            return {
              countDownDate: defaultCountDownDate
            };
          }

          _this.startCountDownForDate();

          return {
            countDownDate: countDownDate
          };
        });
      }, _this.props.interval * 1000);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "startCountDownForTime", function () {
      _this.timerId = setTimeout(function () {
        _this.setState(function (prevState) {
          if (_this.props.onChange) {
            _this.props.onChange(prevState.countDown);
          }

          if (prevState.countDown === 0) {
            clearTimeout(_this.timerId);

            if (_this.props.onEnd) {
              _this.props.onEnd(prevState.countDown);
            }

            return {
              countDown: 0
            };
          }

          _this.startCountDownForTime();

          return {
            countDown: prevState.countDown - 1
          };
        });
      }, _this.props.interval * 1000);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "formatDate", function (_ref) {
      var d = _ref.d,
          h = _ref.h,
          m = _ref.m,
          s = _ref.s;
      return "".concat(d, " \u5929 ").concat(h, " \u65F6 ").concat(m, " \u5206 ").concat(s, " \u79D2");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "formatZero", function (time) {
      if (time < 0) {
        return 0;
      }

      return time < 10 ? "0".concat(time) : time;
    });
    return _this;
  }

  (0, _createClass2["default"])(CountDown, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          countDown = _this$state.countDown,
          countDownDate = _this$state.countDownDate;
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          children = _this$props2.children,
          className = _this$props2.className,
          prefixCls = _this$props2.prefixCls,
          style = _this$props2.style,
          type = _this$props2.type;
      var btnDisabled = disabled || countDown > 0;
      return children ? /*#__PURE__*/_react["default"].createElement("span", {
        onClick: this.onStartCountDown,
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-disabled"), btnDisabled)),
        style: style
      }, this.props.children(type === COUNT_DOWN_TYPE.TIME ? countDown : countDownDate, btnDisabled)) : /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])(prefixCls, className),
        onClick: this.onStartCountDown,
        disabled: btnDisabled,
        style: style
      }, type === COUNT_DOWN_TYPE.TIME ? countDown : this.formatDate(countDownDate));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timerId);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.props.countDown !== nextProps.countDown && nextState.autoStart) {
        clearTimeout(this.timerId);
        this.onStartCountDown();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.autoStart) {
        this.onStartCountDown();
      }
    }
  }]);
  return CountDown;
}(_react.PureComponent);

exports["default"] = CountDown;
(0, _defineProperty2["default"])(CountDown, "defaultProps", {
  prefixCls: 'ellyth-count-down',
  defaultCountDown: 60,
  autoStart: false,
  interval: 1,
  // 1000 ms
  disabled: false,
  type: COUNT_DOWN_TYPE.TIME
});
(0, _defineProperty2["default"])(CountDown, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  defaultCountDown: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  countDown: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  interval: _propTypes["default"].number,
  autoStart: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf([COUNT_DOWN_TYPE.DATE, COUNT_DOWN_TYPE.TIME])
});