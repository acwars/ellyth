import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "prefixCls", "loading", "disabled", "checkedChildren", "unCheckedChildren", "size"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { LoadingIcon } from "../icon";
var SWITCH_SIZES = ["default", "large", "small"];

var Switch = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Switch, _React$PureComponent);

  var _super = _createSuper(Switch);

  function Switch() {
    var _this;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      checked: _this.props.defaultChecked || _this.props.checked
    });

    _defineProperty(_assertThisInitialized(_this), "_onChange", function () {
      var checked = !_this.state.checked;

      _this.setState({
        checked: checked
      });

      _this.props.onChange(checked);
    });

    return _this;
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          loading = _this$props.loading,
          disabled = _this$props.disabled,
          checkedChildren = _this$props.checkedChildren,
          unCheckedChildren = _this$props.unCheckedChildren,
          size = _this$props.size,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var checked = this.state.checked;
      return /*#__PURE__*/React.createElement("span", _extends({
        className: cls(prefixCls, className, (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-checked"), checked), _defineProperty(_cls, "".concat(prefixCls, "-loading"), loading), _defineProperty(_cls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_cls, "".concat(prefixCls, "-").concat(size), !!size), _cls))
      }, attr, {
        onClick: disabled || loading ? undefined : this._onChange
      }), loading ? /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-loading-icon"))
      }, /*#__PURE__*/React.createElement(LoadingIcon, null)) : /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-inner"))
      }, checked ? checkedChildren : unCheckedChildren));
    }
  }]);

  return Switch;
}(React.PureComponent);

_defineProperty(Switch, "defaultProps", {
  checked: false,
  defaultChecked: false,
  disabled: false,
  loading: false,
  prefixCls: "ellyth-switch",
  onChange: function onChange() {}
});

_defineProperty(Switch, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  size: PropTypes.oneOf(SWITCH_SIZES),
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  checkedChildren: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
  unCheckedChildren: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object])
});

export { Switch as default };