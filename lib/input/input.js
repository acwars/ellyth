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

var _icon = require("../icon");

var _excluded = ["type", "placeholder", "prefixCls", "className", "disabled", "readonly", "addonBefore", "addonAfter", "addonClassName", "wrapperClassName", "size", "defaultValue", "onClear", "allowClear", "suffix", "prefix"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var sizes = {
  "default": "default",
  small: "small",
  large: "large"
};

var Input = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Input, _PureComponent);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Input);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value: _this.props.defaultValue || _this.props.value || ""
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (e) {
      _this.setState({
        value: e.target.value
      });

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClearValue", function () {
      _this.setState({
        value: ""
      });

      if (_this.props.onClear) {
        _this.props.onClear();
      }
    });
    _this.inputRef = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  (0, _createClass2["default"])(Input, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.inputRef = undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _cls, _cls2;

      var _this$props = this.props,
          type = _this$props.type,
          placeholder = _this$props.placeholder,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          disabled = _this$props.disabled,
          readonly = _this$props.readonly,
          addonBefore = _this$props.addonBefore,
          addonAfter = _this$props.addonAfter,
          addonClassName = _this$props.addonClassName,
          wrapperClassName = _this$props.wrapperClassName,
          size = _this$props.size,
          defaultValue = _this$props.defaultValue,
          onClear = _this$props.onClear,
          allowClear = _this$props.allowClear,
          suffix = _this$props.suffix,
          prefix = _this$props.prefix,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var value = this.state.value;
      var isShowWrapper = allowClear || /*#__PURE__*/(0, _react.isValidElement)(prefix) || /*#__PURE__*/(0, _react.isValidElement)(suffix);
      var hasSuffix = suffix || allowClear;

      var inputEle = /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
        type: type,
        disabled: disabled,
        readOnly: readonly,
        className: (0, _classnames["default"])(prefixCls, className, (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-").concat(size), size !== sizes["default"]), _cls)),
        placeholder: placeholder
      }, attr, {
        value: value,
        onChange: this._onChange,
        ref: this.inputRef
      }));

      var inputWrapper = /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), wrapperClassName, (_cls2 = {}, (0, _defineProperty2["default"])(_cls2, "".concat(prefixCls, "-has-prefix"), prefix), (0, _defineProperty2["default"])(_cls2, "".concat(prefixCls, "-has-suffix"), hasSuffix), _cls2))
      }, prefix && /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(prefixCls, "-prefix")
      }, prefix), inputEle, hasSuffix && /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(prefixCls, "-suffix")
      }, allowClear && value ? /*#__PURE__*/_react["default"].createElement(_icon.CloseCircleIcon, {
        className: (0, _classnames["default"])("".concat(prefixCls, "-clear")),
        onClick: this.onClearValue
      }) : suffix));

      if (addonBefore || addonAfter) {
        var _cls3;

        return /*#__PURE__*/_react["default"].createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-group"), (_cls3 = {}, (0, _defineProperty2["default"])(_cls3, "".concat(prefixCls, "-group-addon-before"), !!addonBefore), (0, _defineProperty2["default"])(_cls3, "".concat(prefixCls, "-group-addon-after"), !!addonAfter), (0, _defineProperty2["default"])(_cls3, "".concat(prefixCls, "-group-addon-all"), !!addonAfter && !!addonBefore), (0, _defineProperty2["default"])(_cls3, "".concat(prefixCls, "-group-").concat(size), size !== sizes["default"]), _cls3), addonClassName)
        }, addonBefore && /*#__PURE__*/_react["default"].createElement("span", {
          className: "".concat(prefixCls, "-group-addon")
        }, addonBefore), isShowWrapper && inputWrapper || inputEle, addonAfter && /*#__PURE__*/_react["default"].createElement("span", {
          className: "".concat(prefixCls, "-group-addon")
        }, addonAfter));
      }

      if (isShowWrapper) {
        return inputWrapper;
      }

      return inputEle;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (Reflect.has(nextProps, "value")) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);
  return Input;
}(_react.PureComponent);

exports["default"] = Input;
(0, _defineProperty2["default"])(Input, "defaultProps", {
  prefixCls: "ellyth-input",
  disabled: false,
  readonly: false,
  placeholder: "",
  type: "text",
  size: sizes["default"],
  onChange: function onChange() {},
  onClear: function onClear() {},
  allowClear: false,
  suffix: null,
  prefix: null
});
(0, _defineProperty2["default"])(Input, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]),
  addonClassName: _propTypes["default"].string,
  wrapperClassName: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(["text", "password", "range", "date", "number", "color", "email"]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  defaultValue: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onClear: _propTypes["default"].func,
  size: _propTypes["default"].oneOf(Object.values(sizes)),
  allowClear: _propTypes["default"].bool,
  suffix: _propTypes["default"].any,
  prefix: _propTypes["default"].any
});