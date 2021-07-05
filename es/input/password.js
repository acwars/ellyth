import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import { PasswordShowIcon, PasswordHideIcon } from "../icon";
import Input from "./input";

var InputPassword = /*#__PURE__*/function (_PureComponent) {
  _inherits(InputPassword, _PureComponent);

  var _super = _createSuper(InputPassword);

  function InputPassword() {
    var _this;

    _classCallCheck(this, InputPassword);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      passwordVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "onTogglePasswordVisible", function () {
      _this.setState({
        passwordVisible: !_this.state.passwordVisible
      });
    });

    return _this;
  }

  _createClass(InputPassword, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var passwordVisible = this.state.passwordVisible;
      var suffix = passwordVisible ? /*#__PURE__*/React.createElement(PasswordHideIcon, null) : /*#__PURE__*/React.createElement(PasswordShowIcon, null);
      var type = passwordVisible ? "text" : "password";
      return /*#__PURE__*/React.createElement(Input, _extends({}, attr, {
        type: type,
        className: prefixCls,
        suffix: /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-suffix"),
          onClick: this.onTogglePasswordVisible
        }, suffix)
      }));
    }
  }]);

  return InputPassword;
}(PureComponent);

_defineProperty(InputPassword, "defaultProps", {
  prefixCls: "ellyth-input-password"
});

export { InputPassword as default };