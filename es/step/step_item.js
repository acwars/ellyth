import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "children", "current", "icon", "status", "showProcessSpin"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Spin from "../spin";
import { LoadingIcon, SuccessIcon, ErrorIcon } from "../icon";
var statusConfig = {
  wait: "wait",
  process: "process",
  error: "error",
  done: "done"
};

var Steps = /*#__PURE__*/function (_PureComponent) {
  _inherits(Steps, _PureComponent);

  var _super = _createSuper(Steps);

  function Steps(props) {
    var _this;

    _classCallCheck(this, Steps);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      current: 0
    });

    return _this;
  }

  _createClass(Steps, [{
    key: "renderStatusIcon",
    value: function renderStatusIcon(status) {
      switch (status) {
        case statusConfig["wait"]:
          return /*#__PURE__*/React.createElement(SuccessIcon, null);

        case statusConfig["process"]:
          return /*#__PURE__*/React.createElement(LoadingIcon, null);

        case statusConfig["error"]:
          return /*#__PURE__*/React.createElement(ErrorIcon, null);

        case statusConfig["done"]:
          return /*#__PURE__*/React.createElement(SuccessIcon, null);

        default:
          return /*#__PURE__*/React.createElement(SuccessIcon, null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          children = _this$props.children,
          current = _this$props.current,
          stepsIcon = _this$props.icon,
          stepsStatus = _this$props.status,
          showProcessSpin = _this$props.showProcessSpin,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var content = React.Children.map(children, function (element, index) {
        return /*#__PURE__*/cloneElement(element, {
          visible: _this2.state.current === index,
          key: index
        });
      });
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className)
      }, attr), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-header")),
        ref: this.tabsHeader
      }, React.Children.map(children, function (_ref, index) {
        var _cls;

        var _ref$props = _ref.props,
            title = _ref$props.title,
            description = _ref$props.description,
            status = _ref$props.status,
            icon = _ref$props.icon;
        var isDone = stepsStatus === statusConfig["done"] || status === statusConfig["done"] || index < current;
        var isProcess = stepsStatus === statusConfig["process"] || status === statusConfig["process"] || index === current;
        var isWait = stepsStatus === statusConfig["wait"] || status === statusConfig["wait"] || index > current;
        var hasCustomStatus = !!(stepsStatus || status) && index === current;
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          role: "step",
          "aria-selected": true,
          className: cls("".concat(prefixCls, "-step"), (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-step-active"), current === index), _defineProperty(_cls, "".concat(prefixCls, "-step-done"), isDone), _defineProperty(_cls, "".concat(prefixCls, "-step-wait"), isWait), _defineProperty(_cls, "".concat(prefixCls, "-step-process"), isProcess), _defineProperty(_cls, "".concat(prefixCls, "-step-").concat(stepsStatus || status), hasCustomStatus), _cls))
        }, /*#__PURE__*/React.createElement("div", {
          className: cls("".concat(prefixCls, "-step-icon"))
        }, isDone && (stepsIcon || icon || (hasCustomStatus ? _this2.renderStatusIcon(stepsStatus || status) : /*#__PURE__*/React.createElement(SuccessIcon, null))), isProcess && (stepsIcon || icon || (hasCustomStatus ? _this2.renderStatusIcon(stepsStatus || status) : showProcessSpin ? /*#__PURE__*/React.createElement(Spin, null) : /*#__PURE__*/React.createElement(LoadingIcon, null))), isWait && (stepsIcon || icon || (hasCustomStatus ? _this2.renderStatusIcon(stepsStatus || status) : /*#__PURE__*/React.createElement(SuccessIcon, null)))), /*#__PURE__*/React.createElement("div", {
          className: cls("".concat(prefixCls, "-step-content"))
        }, /*#__PURE__*/React.createElement("div", {
          className: cls("".concat(prefixCls, "-step-content-title"), _defineProperty({}, "".concat(prefixCls, "-no-description"), !description))
        }, title), description && /*#__PURE__*/React.createElement("p", {
          className: cls("".concat(prefixCls, "-step-content-description"))
        }, description)));
      })), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-content"))
      }, content));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var current = _ref2.current;

      if (current !== state.current) {
        return {
          current: current
        };
      }

      return null;
    }
  }]);

  return Steps;
}(PureComponent);

_defineProperty(Steps, "defaultProps", {
  prefixCls: "ellyth-steps",
  current: 0,
  onChange: function onChange() {},
  showProcessSpin: true
});

_defineProperty(Steps, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  description: PropTypes.any,
  title: PropTypes.any,
  icon: PropTypes.any,
  status: PropTypes.string,
  showProcessSpin: PropTypes.bool
});

export { Steps as default };