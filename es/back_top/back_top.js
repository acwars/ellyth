import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "prefixCls", "children", "onClick", "visibilityHeight"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { UpIcon } from "../icon";

var scrollToTop = function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    document.body.scrollTop = c - c / 8;
    document.documentElement.scrollTop = c - c / 8;
  }
};

var BackTop = /*#__PURE__*/function (_PureComponent) {
  _inherits(BackTop, _PureComponent);

  var _super = _createSuper(BackTop);

  function BackTop(props) {
    var _this;

    _classCallCheck(this, BackTop);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: null,
      animateLock: true
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      _this.props.onClick();

      scrollToTop();
    });

    _defineProperty(_assertThisInitialized(_this), "bindScroll", function () {
      var c = document.documentElement.scrollTop || document.body.scrollTop;
      var visible = c >= _this.props.visibilityHeight;

      if (!visible && _this.state.animateLock) {
        _this.setState({
          visible: null
        });
      } else {
        _this.setState({
          visible: visible,
          animateLock: false
        });
      }
    });

    return _this;
  }

  _createClass(BackTop, [{
    key: "render",
    value: function render() {
      var _cls;

      var visible = this.state.visible;

      var _this$props = this.props,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children,
          onClick = _this$props.onClick,
          visibilityHeight = _this$props.visibilityHeight,
          attr = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-open"), visible), _defineProperty(_cls, "".concat(prefixCls, "-close"), !visible), _defineProperty(_cls, "ellyth-no-animate", visible === null), _cls))
      }, attr), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-inner"),
        onClick: this.onClick
      }, children || /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-inner-icon")
      }, /*#__PURE__*/React.createElement(UpIcon, null))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.bindScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.bindScroll);
    }
  }]);

  return BackTop;
}(PureComponent);

_defineProperty(BackTop, "propsTypes", {
  prefixCls: PropTypes.string.isRequired,
  visibilityHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
});

_defineProperty(BackTop, "defaultProps", {
  prefixCls: "ellyth-back-top",
  visibilityHeight: 400,
  onClick: function onClick() {}
});

export { BackTop as default };