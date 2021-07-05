import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "children", "type", "disabled", "hollow", "dashed", "size", "style", "color", "onClick", "closable", "circle"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { CloseIcon } from "../icon";
var types = ["default", "primary", "warning", "success", "error", "info", "loading"];

var Tag = /*#__PURE__*/function (_PureComponent) {
  _inherits(Tag, _PureComponent);

  var _super = _createSuper(Tag);

  function Tag() {
    var _this;

    _classCallCheck(this, Tag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: true,
      animation: false
    });

    _defineProperty(_assertThisInitialized(_this), "ANIMATE_END_TIME", 500);

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        animation: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            visible: false
          });

          _this.props.onClose();
        }, _this.ANIMATE_END_TIME);
      });
    });

    return _this;
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          children = _this$props.children,
          type = _this$props.type,
          disabled = _this$props.disabled,
          hollow = _this$props.hollow,
          dashed = _this$props.dashed,
          size = _this$props.size,
          style = _this$props.style,
          color = _this$props.color,
          onClick = _this$props.onClick,
          closable = _this$props.closable,
          circle = _this$props.circle,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var _this$state = this.state,
          visible = _this$state.visible,
          animation = _this$state.animation;

      if (!visible) {
        return null;
      }

      return /*#__PURE__*/React.createElement("span", _extends({
        className: cls(prefixCls, className, (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_cls, "".concat(prefixCls, "-hollow"), hollow), _defineProperty(_cls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_cls, "".concat(prefixCls, "-large"), size === "large"), _defineProperty(_cls, "".concat(prefixCls, "-small"), size === "small"), _defineProperty(_cls, "".concat(prefixCls, "-dashed"), dashed), _defineProperty(_cls, "".concat(prefixCls, "-color"), color), _defineProperty(_cls, "".concat(prefixCls, "-circle"), circle), _defineProperty(_cls, "".concat(prefixCls, "-hide"), animation), _cls)),
        style: _objectSpread({
          backgroundColor: color
        }, style)
      }, attr, {
        onClick: !disabled ? onClick : undefined
      }), /*#__PURE__*/React.createElement("span", null, children), closable && /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-close")),
        onClick: this.onClose
      }, /*#__PURE__*/React.createElement(CloseIcon, null)));
    }
  }]);

  return Tag;
}(PureComponent);

_defineProperty(Tag, "defaultProps", {
  prefixCls: "ellyth-tag",
  type: types[0],
  color: "",
  hollow: false,
  dashed: false,
  disabled: false,
  size: "default",
  closable: false,
  circle: false,
  onClose: function onClose() {}
});

_defineProperty(Tag, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  type: PropTypes.oneOf(types),
  color: PropTypes.string,
  hollow: PropTypes.bool,
  disabled: PropTypes.bool,
  dashed: PropTypes.bool,
  closable: PropTypes.bool,
  circle: PropTypes.bool,
  onClose: PropTypes.func,
  size: PropTypes.oneOf(["small", "default", "large"])
});

export { Tag as default };