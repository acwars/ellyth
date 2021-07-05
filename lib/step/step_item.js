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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _spin = _interopRequireDefault(require("../spin"));

var _icon = require("../icon");

var _excluded = ["prefixCls", "className", "children", "current", "icon", "status", "showProcessSpin"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var statusConfig = {
  wait: "wait",
  process: "process",
  error: "error",
  done: "done"
};

var Steps = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Steps, _PureComponent);

  var _super = _createSuper(Steps);

  function Steps(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Steps);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      current: 0
    });
    return _this;
  }

  (0, _createClass2["default"])(Steps, [{
    key: "renderStatusIcon",
    value: function renderStatusIcon(status) {
      switch (status) {
        case statusConfig["wait"]:
          return /*#__PURE__*/_react["default"].createElement(_icon.SuccessIcon, null);

        case statusConfig["process"]:
          return /*#__PURE__*/_react["default"].createElement(_icon.LoadingIcon, null);

        case statusConfig["error"]:
          return /*#__PURE__*/_react["default"].createElement(_icon.ErrorIcon, null);

        case statusConfig["done"]:
          return /*#__PURE__*/_react["default"].createElement(_icon.SuccessIcon, null);

        default:
          return /*#__PURE__*/_react["default"].createElement(_icon.SuccessIcon, null);
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
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      var content = _react["default"].Children.map(children, function (element, index) {
        return /*#__PURE__*/(0, _react.cloneElement)(element, {
          visible: _this2.state.current === index,
          key: index
        });
      });

      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className)
      }, attr), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-header")),
        ref: this.tabsHeader
      }, _react["default"].Children.map(children, function (_ref, index) {
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
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: index,
          role: "step",
          "aria-selected": true,
          className: (0, _classnames["default"])("".concat(prefixCls, "-step"), (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-step-active"), current === index), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-step-done"), isDone), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-step-wait"), isWait), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-step-process"), isProcess), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-step-").concat(stepsStatus || status), hasCustomStatus), _cls))
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-step-icon"))
        }, isDone && (stepsIcon || icon || (hasCustomStatus ? _this2.renderStatusIcon(stepsStatus || status) : /*#__PURE__*/_react["default"].createElement(_icon.SuccessIcon, null))), isProcess && (stepsIcon || icon || (hasCustomStatus ? _this2.renderStatusIcon(stepsStatus || status) : showProcessSpin ? /*#__PURE__*/_react["default"].createElement(_spin["default"], null) : /*#__PURE__*/_react["default"].createElement(_icon.LoadingIcon, null))), isWait && (stepsIcon || icon || (hasCustomStatus ? _this2.renderStatusIcon(stepsStatus || status) : /*#__PURE__*/_react["default"].createElement(_icon.SuccessIcon, null)))), /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-step-content"))
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-step-content-title"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-no-description"), !description))
        }, title), description && /*#__PURE__*/_react["default"].createElement("p", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-step-content-description"))
        }, description)));
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-content"))
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
}(_react.PureComponent);

exports["default"] = Steps;
(0, _defineProperty2["default"])(Steps, "defaultProps", {
  prefixCls: "ellyth-steps",
  current: 0,
  onChange: function onChange() {},
  showProcessSpin: true
});
(0, _defineProperty2["default"])(Steps, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].any,
  title: _propTypes["default"].any,
  icon: _propTypes["default"].any,
  status: _propTypes["default"].string,
  showProcessSpin: _propTypes["default"].bool
});