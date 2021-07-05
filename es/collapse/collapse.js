import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "prefixCls", "children", "accordion", "defaultActiveKey", "activeKey", "disabled", "hideArrow", "rightArrow"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";

var Collapse = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Collapse, _React$PureComponent);

  var _super = _createSuper(Collapse);

  function Collapse() {
    var _this;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeKey: [],
      currentActiveKey: ""
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (key) {
      var activeKey = _toConsumableArray(_this.state.activeKey);

      if (!activeKey.includes(key)) {
        activeKey.push(key);
      } else {
        activeKey = activeKey.filter(function (_activeKey) {
          return _activeKey !== key;
        });
      }

      _this.setState({
        activeKey: activeKey,
        currentActiveKey: key
      });

      if (_this.props.onChange) {
        _this.props.onChange(activeKey);
      }
    });

    return _this;
  }

  _createClass(Collapse, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children,
          accordion = _this$props.accordion,
          defaultActiveKey = _this$props.defaultActiveKey,
          activeKey = _this$props.activeKey,
          disabled = _this$props.disabled,
          hideArrow = _this$props.hideArrow,
          rightArrow = _this$props.rightArrow,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var currentActiveKey = this.state.currentActiveKey;
      var items = React.Children.map(children, function (element, index) {
        return /*#__PURE__*/React.cloneElement(element, {
          key: index,
          accordion: accordion,
          rightArrow: rightArrow,
          activeKey: String(index),
          disabled: element.props.disabled || disabled,
          hideArrow: element.props.hideArrow || hideArrow,
          visible: accordion ? String(currentActiveKey) === String(index) : String(defaultActiveKey).includes(String(index)) || String(activeKey).includes(String(index)),
          //eslint-disable-line
          onChange: _this2.onChange
        });
      });
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-accordion"), accordion))
      }, attr), items);
    }
  }]);

  return Collapse;
}(React.PureComponent);

_defineProperty(Collapse, "defaultProps", {
  prefixCls: "ellyth-collapse",
  defaultActiveKey: [],
  activeKey: [],
  disabled: false,
  hideArrow: false,
  accordion: false,
  rightArrow: false,
  onChange: function onChange() {}
});

_defineProperty(Collapse, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  defaultActiveKey: PropTypes.array,
  activeKey: PropTypes.array,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  accordion: PropTypes.bool,
  rightArrow: PropTypes.bool,
  icon: PropTypes.any
});

export { Collapse as default };