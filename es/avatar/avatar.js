import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["shape", "className", "prefixCls", "size", "src", "icon"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
var sizes = {
  small: "small",
  "default": "default",
  large: "large"
};
var shape = {
  circle: "circle",
  square: "square"
};

var Avatar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Avatar, _PureComponent);

  var _super = _createSuper(Avatar);

  function Avatar(props) {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      scale: 1
    });

    _defineProperty(_assertThisInitialized(_this), "getChildren", function () {
      var _this$props = _this.props,
          src = _this$props.src,
          alt = _this$props.alt,
          icon = _this$props.icon,
          text = _this$props.text,
          prefixCls = _this$props.prefixCls;
      var children;

      if (src) {
        children = /*#__PURE__*/React.createElement("img", {
          src: src,
          alt: alt
        });
      } else if (icon) {
        children = icon;
      } else if (text) {
        var childrenStyle = {};
        var scale = _this.state.scale;

        if (scale !== 1) {
          var transformText = "scale(".concat(scale, ") translateX(-50%)");
          childrenStyle = {
            transform: transformText
          };
        }

        children = /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-text"),
          style: childrenStyle,
          ref: _this.avatarChildren
        }, text);
      } else {
        children = _this.props.children;
      }

      return children;
    });

    _defineProperty(_assertThisInitialized(_this), "setScale", function () {
      var childrenNode = _this.avatarChildren.current;

      if (childrenNode) {
        var _childrenNode$getBoun = childrenNode.getBoundingClientRect(),
            childrenWidth = _childrenNode$getBoun.width;

        var _this$avatar$current$ = _this.avatar.current.getBoundingClientRect(),
            avatarWidth = _this$avatar$current$.width;

        var scale = avatarWidth < childrenWidth ? avatarWidth / childrenWidth - 0.1 : 1;

        _this.setState({
          scale: scale
        });
      }
    });

    _this.avatarChildren = /*#__PURE__*/createRef();
    _this.avatar = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(Avatar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScale();
    }
  }, {
    key: "render",
    value: function render() {
      var _cls;

      var _this$props2 = this.props,
          shape = _this$props2.shape,
          className = _this$props2.className,
          prefixCls = _this$props2.prefixCls,
          size = _this$props2.size,
          src = _this$props2.src,
          icon = _this$props2.icon,
          attr = _objectWithoutProperties(_this$props2, _excluded);

      var children = this.getChildren();
      return /*#__PURE__*/React.createElement("span", _extends({
        className: cls(prefixCls, className, (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_cls, "".concat(prefixCls, "-size-").concat(size), typeof size === "string"), _defineProperty(_cls, "".concat(prefixCls, "-image"), src), _defineProperty(_cls, "".concat(prefixCls, "-icon"), icon), _cls)),
        ref: this.avatar
      }, attr), children);
    }
  }]);

  return Avatar;
}(PureComponent);

_defineProperty(Avatar, "defaultProps", {
  shape: shape.circle,
  prefixCls: "ellyth-avatar",
  alt: "ellyth-avatar",
  size: sizes["default"]
});

_defineProperty(Avatar, "propTypes", {
  shape: PropTypes.oneOf(Object.values(shape)),
  prefixCls: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(Object.values(sizes)),
  text: PropTypes.string
});

export { Avatar as default };