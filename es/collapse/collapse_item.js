import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["title", "children", "className", "prefixCls", "disabled", "hideArrow", "rightArrow", "icon", "visible", "accordion", "defaultActiveKey", "activeKey"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { ArrowRightIcon } from "../icon";

var CollapseItem = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(CollapseItem, _React$PureComponent);

  var _super = _createSuper(CollapseItem);

  function CollapseItem() {
    var _this;

    _classCallCheck(this, CollapseItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: _this.props.visible
    });

    _defineProperty(_assertThisInitialized(_this), "toggleContentPanel", function () {
      _this.setState({
        visible: !_this.state.visible
      });

      _this.props.onChange(_this.props.activeKey);
    });

    return _this;
  }

  _createClass(CollapseItem, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          hideArrow = _this$props.hideArrow,
          rightArrow = _this$props.rightArrow,
          icon = _this$props.icon,
          collapseVisible = _this$props.visible,
          accordion = _this$props.accordion,
          defaultActiveKey = _this$props.defaultActiveKey,
          activeKey = _this$props.activeKey,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var visible = this.state.visible;
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_cls, "".concat(prefixCls, "-right-arrow"), rightArrow), _cls))
      }, attr), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-header-has-radius"), !visible)),
        onClick: disabled ? undefined : this.toggleContentPanel
      }, hideArrow ? undefined : /*#__PURE__*/React.createElement("span", {
        className: cls("".concat(prefixCls, "-arrow"), _defineProperty({}, "".concat(prefixCls, "-arrow-active"), visible))
      }, icon), title), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-content"), _defineProperty({}, "".concat(prefixCls, "-hide"), !visible))
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: // 通过父组件 改变 非当前 active item 状态 实现手风琴效果
    function getDerivedStateFromProps(_ref, state) {
      var visible = _ref.visible,
          accordion = _ref.accordion;

      if (accordion && visible !== state.visible) {
        return {
          visible: visible ? !visible : visible
        };
      }

      return null;
    }
  }]);

  return CollapseItem;
}(React.PureComponent);

_defineProperty(CollapseItem, "defaultProps", {
  prefixCls: "ellyth-collapse-item",
  hideArrow: false,
  disabled: false,
  rightArrow: false,
  icon: /*#__PURE__*/React.createElement(ArrowRightIcon, null),
  onChange: function onChange() {}
});

_defineProperty(CollapseItem, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  rightArrow: PropTypes.bool,
  icon: PropTypes.any
});

export { CollapseItem as default };