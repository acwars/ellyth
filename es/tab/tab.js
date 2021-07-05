import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "type", "tabBarExtraContent", "children", "activeKey", "defaultActiveKey"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
var cardType = "card";

var Tabs = /*#__PURE__*/function (_PureComponent) {
  _inherits(Tabs, _PureComponent);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeKey: ~~(_this.props.activeKey || _this.props.defaultActiveKey),
      lineWidth: 0,
      lineOffsetLeft: 0
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveLineStyle", function () {
      var _ref = _this.activeTab && _this.activeTab.getBoundingClientRect() || {},
          width = _ref.width,
          left = _ref.left;

      var _ref2 = _this.tabsHeader.current && _this.tabsHeader.current.getBoundingClientRect() || {},
          headerOffset = _ref2.left;

      _this.setState({
        lineWidth: width,
        lineOffsetLeft: left - headerOffset
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTabChange", function (disabled) {
      return function (key) {
        return function () {
          if (!disabled) {
            _this.setState({
              activeKey: key
            }, function () {
              if (_this.props.type !== cardType) {
                _this.setActiveLineStyle();
              }
            });

            _this.props.onChange(key);
          }
        };
      };
    });

    _this.tabsHeader = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.type !== cardType) {
        setTimeout(function () {
          _this2.setActiveLineStyle();
        }, 0);
      }
    } // eslint-disable-next-line

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref3) {
      var activeKey = _ref3.activeKey;

      var _activeKey = ~~activeKey;

      if (_activeKey !== this.props.activeKey) {
        this.setState({
          activeKey: _activeKey
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          type = _this$props.type,
          tabBarExtraContent = _this$props.tabBarExtraContent,
          children = _this$props.children,
          _activeKey = _this$props.activeKey,
          defaultActiveKey = _this$props.defaultActiveKey,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var _this$state = this.state,
          activeKey = _this$state.activeKey,
          lineWidth = _this$state.lineWidth,
          lineOffsetLeft = _this$state.lineOffsetLeft;
      var content = React.Children.map(children, function (element, index) {
        var key = index + 1 >> 0;
        return /*#__PURE__*/cloneElement(element, {
          activeKey: activeKey,
          visible: activeKey === key,
          key: index
        });
      });
      var header = React.Children.map(children, function (_ref4, index) {
        var _cls;

        var _ref4$props = _ref4.props,
            tab = _ref4$props.tab,
            disabled = _ref4$props.disabled;
        var key = index + 1 >> 0;
        var bindActiveRef = activeKey === key ? {
          ref: function ref(node) {
            return _this3["activeTab"] = node;
          }
        } : {};
        return /*#__PURE__*/React.createElement("div", _extends({
          key: index,
          role: "tab",
          "aria-disabled": disabled,
          "aria-selected": true,
          className: cls("".concat(prefixCls, "-tab"), (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-tab-active"), activeKey === key), _defineProperty(_cls, "".concat(prefixCls, "-tab-disabled"), !!disabled), _cls))
        }, bindActiveRef, {
          onClick: _this3.onTabChange(disabled)(key)
        }), tab);
      });
      var isCardType = type === cardType;
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className)
      }, attr), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-card"), isCardType)),
        ref: this.tabsHeader
      }, header, !isCardType && /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-line")),
        style: {
          width: lineWidth,
          transform: "translate3d(".concat(lineOffsetLeft, "px,0,0)")
        }
      }), tabBarExtraContent && /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-extra"))
      }, tabBarExtraContent)), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-content"))
      }, content));
    }
  }]);

  return Tabs;
}(PureComponent);

_defineProperty(Tabs, "defaultProps", {
  prefixCls: "ellyth-tabs",
  defaultActiveKey: "1",
  onChange: function onChange() {}
});

_defineProperty(Tabs, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf([cardType]),
  tabBarExtraContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  onChange: PropTypes.func
});

export { Tabs as default };