import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
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
  _inherits(CountDown, _PureComponent);

  var _super = _createSuper(CountDown);

  function CountDown() {
    var _this;

    _classCallCheck(this, CountDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      countDown: 0,
      countDownDate: defaultCountDownDate,
      autoStart: _this.props.autoStart || !_this.props.children
    });

    _defineProperty(_assertThisInitialized(_this), "timerId", null);

    _defineProperty(_assertThisInitialized(_this), "onStartCountDown", function () {
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

    _defineProperty(_assertThisInitialized(_this), "startCountDownForDate", function () {
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

    _defineProperty(_assertThisInitialized(_this), "startCountDownForTime", function () {
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

    _defineProperty(_assertThisInitialized(_this), "formatDate", function (_ref) {
      var d = _ref.d,
          h = _ref.h,
          m = _ref.m,
          s = _ref.s;
      return "".concat(d, " \u5929 ").concat(h, " \u65F6 ").concat(m, " \u5206 ").concat(s, " \u79D2");
    });

    _defineProperty(_assertThisInitialized(_this), "formatZero", function (time) {
      if (time < 0) {
        return 0;
      }

      return time < 10 ? "0".concat(time) : time;
    });

    return _this;
  }

  _createClass(CountDown, [{
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
      return children ? /*#__PURE__*/React.createElement("span", {
        onClick: this.onStartCountDown,
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-disabled"), btnDisabled)),
        style: style
      }, this.props.children(type === COUNT_DOWN_TYPE.TIME ? countDown : countDownDate, btnDisabled)) : /*#__PURE__*/React.createElement("span", {
        className: cls(prefixCls, className),
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
}(PureComponent);

_defineProperty(CountDown, "defaultProps", {
  prefixCls: 'ellyth-count-down',
  defaultCountDown: 60,
  autoStart: false,
  interval: 1,
  // 1000 ms
  disabled: false,
  type: COUNT_DOWN_TYPE.TIME
});

_defineProperty(CountDown, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  defaultCountDown: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  countDown: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  interval: PropTypes.number,
  autoStart: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([COUNT_DOWN_TYPE.DATE, COUNT_DOWN_TYPE.TIME])
});

export { CountDown as default };