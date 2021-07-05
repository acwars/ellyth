import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["type", "placeholder", "prefixCls", "className", "disabled", "readonly", "addonBefore", "addonAfter", "addonClassName", "wrapperClassName", "size", "defaultValue", "onClear", "allowClear", "suffix", "prefix"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, isValidElement, createRef } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { CloseCircleIcon } from "../icon";
var sizes = {
  "default": "default",
  small: "small",
  large: "large"
};

var Input = /*#__PURE__*/function (_PureComponent) {
  _inherits(Input, _PureComponent);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.defaultValue || _this.props.value || ""
    });

    _defineProperty(_assertThisInitialized(_this), "_onChange", function (e) {
      _this.setState({
        value: e.target.value
      });

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClearValue", function () {
      _this.setState({
        value: ""
      });

      if (_this.props.onClear) {
        _this.props.onClear();
      }
    });

    _this.inputRef = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(Input, [{
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
          attr = _objectWithoutProperties(_this$props, _excluded);

      var value = this.state.value;
      var isShowWrapper = allowClear || /*#__PURE__*/isValidElement(prefix) || /*#__PURE__*/isValidElement(suffix);
      var hasSuffix = suffix || allowClear;
      var inputEle = /*#__PURE__*/React.createElement("input", _extends({
        type: type,
        disabled: disabled,
        readOnly: readonly,
        className: cls(prefixCls, className, (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_cls, "".concat(prefixCls, "-").concat(size), size !== sizes["default"]), _cls)),
        placeholder: placeholder
      }, attr, {
        value: value,
        onChange: this._onChange,
        ref: this.inputRef
      }));
      var inputWrapper = /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-wrapper"), wrapperClassName, (_cls2 = {}, _defineProperty(_cls2, "".concat(prefixCls, "-has-prefix"), prefix), _defineProperty(_cls2, "".concat(prefixCls, "-has-suffix"), hasSuffix), _cls2))
      }, prefix && /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-prefix")
      }, prefix), inputEle, hasSuffix && /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-suffix")
      }, allowClear && value ? /*#__PURE__*/React.createElement(CloseCircleIcon, {
        className: cls("".concat(prefixCls, "-clear")),
        onClick: this.onClearValue
      }) : suffix));

      if (addonBefore || addonAfter) {
        var _cls3;

        return /*#__PURE__*/React.createElement("span", {
          className: cls("".concat(prefixCls, "-group"), (_cls3 = {}, _defineProperty(_cls3, "".concat(prefixCls, "-group-addon-before"), !!addonBefore), _defineProperty(_cls3, "".concat(prefixCls, "-group-addon-after"), !!addonAfter), _defineProperty(_cls3, "".concat(prefixCls, "-group-addon-all"), !!addonAfter && !!addonBefore), _defineProperty(_cls3, "".concat(prefixCls, "-group-").concat(size), size !== sizes["default"]), _cls3), addonClassName)
        }, addonBefore && /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-group-addon")
        }, addonBefore), isShowWrapper && inputWrapper || inputEle, addonAfter && /*#__PURE__*/React.createElement("span", {
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
}(PureComponent);

_defineProperty(Input, "defaultProps", {
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

_defineProperty(Input, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
  addonClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  type: PropTypes.oneOf(["text", "password", "range", "date", "number", "color", "email"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  size: PropTypes.oneOf(Object.values(sizes)),
  allowClear: PropTypes.bool,
  suffix: PropTypes.any,
  prefix: PropTypes.any
});

export { Input as default };