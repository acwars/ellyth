import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["title", "cover", "className", "extra", "prefixCls", "style", "shadow", "titleOverflowHidden", "actions", "showShadowWhenHover", "loading", "tip"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Spin from "../spin";

var Card = /*#__PURE__*/function (_PureComponent) {
  _inherits(Card, _PureComponent);

  var _super = _createSuper(Card);

  function Card() {
    _classCallCheck(this, Card);

    return _super.apply(this, arguments);
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          title = _this$props.title,
          cover = _this$props.cover,
          className = _this$props.className,
          extra = _this$props.extra,
          prefixCls = _this$props.prefixCls,
          style = _this$props.style,
          shadow = _this$props.shadow,
          titleOverflowHidden = _this$props.titleOverflowHidden,
          actions = _this$props.actions,
          showShadowWhenHover = _this$props.showShadowWhenHover,
          loading = _this$props.loading,
          tip = _this$props.tip,
          attr = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("section", _extends({
        className: cls(prefixCls, className, (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-shadow"), shadow), _defineProperty(_cls, "".concat(prefixCls, "-hover"), showShadowWhenHover), _defineProperty(_cls, "".concat(prefixCls, "-loading"), loading), _defineProperty(_cls, "".concat(prefixCls, "-cover"), cover), _cls)),
        style: style
      }, attr), /*#__PURE__*/React.createElement(Spin, {
        spinning: loading,
        tip: tip
      }, (title || extra) && /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-header"))
      }, cover && /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-header-cover"))
      }, /*#__PURE__*/React.createElement("img", {
        src: cover,
        alt: title || cover
      })), title && /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-header-title"), _defineProperty({}, "".concat(prefixCls, "-overflow-hidden"), titleOverflowHidden))
      }, title), extra && /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-header-extra"))
      }, extra)), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-content"))
      }, this.props.children), actions.length >= 1 && /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-actions"))
      }, actions.map(function (action, key) {
        return /*#__PURE__*/React.createElement("div", {
          key: key,
          className: cls("".concat(prefixCls, "-actions-item"))
        }, action);
      }))));
    }
  }]);

  return Card;
}(PureComponent);

_defineProperty(Card, "defaultProps", {
  prefixCls: "ellyth-card",
  shadow: true,
  titleOverflowHidden: true,
  actions: [],
  showShadowWhenHover: false,
  cover: "",
  loading: false
});

_defineProperty(Card, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  title: PropTypes.any,
  extra: PropTypes.any,
  shadow: PropTypes.bool,
  titleOverflowHidden: PropTypes.bool,
  showShadowWhenHover: PropTypes.bool,
  cover: PropTypes.string,
  loading: PropTypes.bool,
  actions: PropTypes.array
});

export { Card as default };