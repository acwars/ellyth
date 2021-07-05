import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "prefixCls", "children", "offsetTop", "style"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

var Affix = /*#__PURE__*/function (_PureComponent) {
  _inherits(Affix, _PureComponent);

  var _super = _createSuper(Affix);

  function Affix(props) {
    var _this;

    _classCallCheck(this, Affix);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      _this.props.onClick();
    });

    _defineProperty(_assertThisInitialized(_this), "bindScroll", function () {
      var offsetTop = _this.props.offsetTop;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      _this.setState({
        fixed: scrollTop >= _this.offsetTop - offsetTop
      });
    });

    return _this;
  }

  _createClass(Affix, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var fixed = this.state.fixed;

      var _this$props = this.props,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children,
          offsetTop = _this$props.offsetTop,
          style = _this$props.style,
          attr = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-fixed"), fixed)),
        style: _objectSpread(_objectSpread({}, style), {}, {
          top: offsetTop
        }),
        ref: function ref(node) {
          return _this2.container = node;
        }
      }, attr), children);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.offsetTop = this.container.getBoundingClientRect().top;
      window.addEventListener("scroll", this.bindScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.bindScroll);
    }
  }]);

  return Affix;
}(PureComponent);

_defineProperty(Affix, "propsTypes", {
  prefixCls: PropTypes.string.isRequired,
  offsetTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});

_defineProperty(Affix, "defaultProps", {
  prefixCls: "ellyth-affix",
  offsetTop: 0
});

export { Affix as default };