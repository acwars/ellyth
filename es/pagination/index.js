import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "total", "separator", "locale", "className", "size", "showTotal", "pageSize", "simple", "showSizeChanger", "pageSizeOptions", "showQuickJumper", "onPageSizeChange", "onChange"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Select from "../select";
import Button from "../button";
import { ArrowLeftIcon, ArrowRightIcon } from "../icon";
import NumberInput from "../number_input";
var sizes = {
  small: "small",
  "default": "default",
  large: "large"
};

var Pagination = /*#__PURE__*/function (_PureComponent) {
  _inherits(Pagination, _PureComponent);

  var _super = _createSuper(Pagination);

  function Pagination() {
    var _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "defaultCurrent", 1);

    _defineProperty(_assertThisInitialized(_this), "defaultPageSize", 1);

    _defineProperty(_assertThisInitialized(_this), "typeConfig", {
      prev: "prev",
      next: "next"
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      current: _this.props.defaultCurrent || _this.props.current || _this.defaultCurrent,
      pageSize: _this.props.defaultPageSize || _this.props.pageSize || _this.defaultPageSize,
      quickJumperValue: ""
    });

    _defineProperty(_assertThisInitialized(_this), "onSimpleChange", function (type) {
      return function () {
        var current = _this.state.current;
        var prev = _this.typeConfig.prev;

        var _current = type === prev ? --current : ++current;

        _this.props.onChange(_current, _this.state.pageSize);

        _this.setState({
          current: _current
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (page) {
      return function () {
        _this.setState({
          current: page
        });

        _this.props.onChange(page, _this.state.pageSize);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onPageSizeChange", function (_ref) {
      var pageSize = _ref.key;

      _this.setState({
        pageSize: pageSize
      });

      _this.props.onPageSizeChange(_this.state.current, pageSize);
    });

    _defineProperty(_assertThisInitialized(_this), "onQuickJumperKeyUp", function (e) {
      var page = Number(e.target.value);
      var current = Math.min(page, _this.pageCount);

      if (e.keyCode === 13) {
        _this.setState({
          current: current,
          quickJumperValue: ""
        });

        if (page <= _this.pageCount && page !== _this.state.current) {
          _this.props.onChange(current, _this.state.pageSize);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onQuickJumperChange", function (value) {
      _this.setState({
        quickJumperValue: value
      });
    });

    return _this;
  }

  _createClass(Pagination, [{
    key: "pageCount",
    get: function get() {
      return Math.ceil(this.props.total / this.state.pageSize);
    }
  }, {
    key: "current",
    get: function get() {
      return Math.min(this.state.current, this.pageCount);
    }
  }, {
    key: "render",
    value: function render() {
      var _cls2,
          _this2 = this,
          _cls4;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          total = _this$props.total,
          separator = _this$props.separator,
          _this$props$locale = _this$props.locale,
          prevText = _this$props$locale.prevText,
          nextText = _this$props$locale.nextText,
          className = _this$props.className,
          size = _this$props.size,
          showTotal = _this$props.showTotal,
          _pageSize = _this$props.pageSize,
          simple = _this$props.simple,
          showSizeChanger = _this$props.showSizeChanger,
          pageSizeOptions = _this$props.pageSizeOptions,
          showQuickJumper = _this$props.showQuickJumper,
          onPageSizeChange = _this$props.onPageSizeChange,
          onChange = _this$props.onChange,
          attr = _objectWithoutProperties(_this$props, _excluded);

      var _this$typeConfig = this.typeConfig,
          prev = _this$typeConfig.prev,
          next = _this$typeConfig.next;
      var _this$state = this.state,
          current = _this$state.current,
          pageSize = _this$state.pageSize,
          quickJumperValue = _this$state.quickJumperValue;
      var isDisabledPrev = simple ? current <= this.defaultCurrent : this.current <= this.defaultCurrent;
      var isDisabledNext = simple ? current >= total : this.current >= this.pageCount;

      if (simple) {
        return /*#__PURE__*/React.createElement("div", _extends({
          className: cls(prefixCls, className, "".concat(prefixCls, "-simple"))
        }, attr), /*#__PURE__*/React.createElement(Button, {
          type: isDisabledPrev ? "default" : "primary",
          disabled: isDisabledPrev,
          onClick: this.onSimpleChange(prev),
          size: sizes.small
        }, prevText), /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-simple-pages")
        }, /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-simple-page-index")
        }, current), /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-simple-page-separator")
        }, separator), /*#__PURE__*/React.createElement("span", null, total)), /*#__PURE__*/React.createElement(Button, {
          type: isDisabledNext ? "default" : "primary",
          disabled: isDisabledNext,
          size: sizes.small,
          onClick: this.onSimpleChange(next)
        }, nextText));
      }

      return /*#__PURE__*/React.createElement("ul", _extends({
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-").concat(size), size))
      }, attr), /*#__PURE__*/React.createElement("li", {
        className: "".concat(prefixCls, "-show-total")
      }, showTotal(total)), /*#__PURE__*/React.createElement("li", {
        className: cls("".concat(prefixCls, "-item"), "".concat(prefixCls, "-prev"), (_cls2 = {}, _defineProperty(_cls2, "".concat(prefixCls, "-item-").concat(size), size !== sizes["default"]), _defineProperty(_cls2, "".concat(prefixCls, "-item-disabled"), isDisabledPrev), _cls2)),
        onClick: !isDisabledPrev ? this.onSimpleChange(prev) : undefined
      }, prevText), new Array(this.pageCount).fill().map(function (_, index) {
        var _cls3;

        var page = index + 1;
        return /*#__PURE__*/React.createElement("li", {
          className: cls("".concat(prefixCls, "-item"), (_cls3 = {}, _defineProperty(_cls3, "".concat(prefixCls, "-item-selected"), page === _this2.current), _defineProperty(_cls3, "".concat(prefixCls, "-item-").concat(size), size !== sizes["default"]), _cls3)),
          key: index,
          onClick: _this2.onChange(page)
        }, page);
      }), /*#__PURE__*/React.createElement("li", {
        className: cls("".concat(prefixCls, "-item"), "".concat(prefixCls, "-next"), (_cls4 = {}, _defineProperty(_cls4, "".concat(prefixCls, "-item-").concat(size), size !== sizes["default"]), _defineProperty(_cls4, "".concat(prefixCls, "-item-disabled"), isDisabledNext), _cls4)),
        onClick: !isDisabledNext ? this.onSimpleChange(next) : undefined
      }, nextText), showSizeChanger && /*#__PURE__*/React.createElement(Select, {
        className: "".concat(prefixCls, "-size-changer"),
        popupContainerClassName: cls("".concat(prefixCls, "-size-changer-container"), "".concat(prefixCls, "-size-changer-container-").concat(size)),
        size: size,
        value: {
          key: pageSize
        },
        onChange: this.onPageSizeChange,
        labelInValue: true
      }, pageSizeOptions.map(function (pageSize) {
        return /*#__PURE__*/React.createElement(Select.Option, {
          value: pageSize,
          key: pageSize
        }, pageSize, " \u6761 / \u9875");
      })), showQuickJumper && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\u8DF3\u81F3"), /*#__PURE__*/React.createElement(NumberInput, {
        className: "".concat(prefixCls, "-quick-jumper"),
        onChange: this.onQuickJumperChange,
        value: quickJumperValue,
        min: 1,
        size: size,
        onKeyUp: this.onQuickJumperKeyUp
      }), /*#__PURE__*/React.createElement("span", null, "\u9875")));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var current = _ref2.current,
          pageSize = _ref2.pageSize;

      if (current !== state.current || pageSize !== state.pageSize) {
        return {
          current: state.current,
          pageSize: state.pageSize
        };
      }

      return null;
    }
  }]);

  return Pagination;
}(PureComponent);

_defineProperty(Pagination, "defaultProps", {
  prefixCls: "ellyth-pagination",
  current: 1,
  total: 1,
  separator: "/",
  locale: {
    prevText: /*#__PURE__*/React.createElement(ArrowLeftIcon, null),
    nextText: /*#__PURE__*/React.createElement(ArrowRightIcon, null)
  },
  pageSize: 10,
  size: sizes["default"],
  simple: false,
  showSizeChanger: false,
  onChange: function onChange() {},
  onPageSizeChange: function onPageSizeChange() {},
  showTotal: function showTotal() {},
  pageSizeOptions: [10, 20, 30, 40],
  showQuickJumper: false
});

_defineProperty(Pagination, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  separator: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
  total: PropTypes.number.isRequired,
  //总数
  current: PropTypes.number,
  pageSize: PropTypes.PropTypes.number,
  defaultCurrent: PropTypes.number,
  defaultPageSize: PropTypes.number,
  locale: PropTypes.object,
  //自定义按钮
  onChange: PropTypes.func,
  //回调(type,current)
  size: PropTypes.oneOf(Object.values(sizes)),
  showSizeChanger: PropTypes.bool,
  onPageSizeChange: PropTypes.func
});

export { Pagination as default };