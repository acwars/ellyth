import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import Radio from "./Radio";

var RadioButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(RadioButton, _PureComponent);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    _classCallCheck(this, RadioButton);

    return _super.apply(this, arguments);
  }

  _createClass(RadioButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Radio, this.props);
    }
  }]);

  return RadioButton;
}(PureComponent);

_defineProperty(RadioButton, "defaultProps", {
  isButton: true
});

export { RadioButton as default };