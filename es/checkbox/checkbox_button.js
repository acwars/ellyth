import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import Checkbox from "./checkbox";

var CheckboxButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(CheckboxButton, _PureComponent);

  var _super = _createSuper(CheckboxButton);

  function CheckboxButton() {
    _classCallCheck(this, CheckboxButton);

    return _super.apply(this, arguments);
  }

  _createClass(CheckboxButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Checkbox, this.props);
    }
  }]);

  return CheckboxButton;
}(PureComponent);

_defineProperty(CheckboxButton, "defaultProps", {
  isButton: true
});

export { CheckboxButton as default };