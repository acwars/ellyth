"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _select = _interopRequireDefault(require("../select"));

var _button = _interopRequireDefault(require("../button"));

var _icon = require("../icon");

var _number_input = _interopRequireDefault(require("../number_input"));

var _excluded = ["prefixCls", "total", "separator", "locale", "className", "size", "showTotal", "pageSize", "simple", "showSizeChanger", "pageSizeOptions", "showQuickJumper", "onPageSizeChange", "onChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var sizes = {
  small: "small",
  "default": "default",
  large: "large"
};

var Pagination = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Pagination, _PureComponent);

  var _super = _createSuper(Pagination);

  function Pagination() {
    var _this;

    (0, _classCallCheck2["default"])(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultCurrent", 1);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultPageSize", 1);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "typeConfig", {
      prev: "prev",
      next: "next"
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      current: _this.props.defaultCurrent || _this.props.current || _this.defaultCurrent,
      pageSize: _this.props.defaultPageSize || _this.props.pageSize || _this.defaultPageSize,
      quickJumperValue: ""
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSimpleChange", function (type) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (page) {
      return function () {
        _this.setState({
          current: page
        });

        _this.props.onChange(page, _this.state.pageSize);
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPageSizeChange", function (_ref) {
      var pageSize = _ref.key;

      _this.setState({
        pageSize: pageSize
      });

      _this.props.onPageSizeChange(_this.state.current, pageSize);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onQuickJumperKeyUp", function (e) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onQuickJumperChange", function (value) {
      _this.setState({
        quickJumperValue: value
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Pagination, [{
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
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
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
        return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
          className: (0, _classnames["default"])(prefixCls, className, "".concat(prefixCls, "-simple"))
        }, attr), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          type: isDisabledPrev ? "default" : "primary",
          disabled: isDisabledPrev,
          onClick: this.onSimpleChange(prev),
          size: sizes.small
        }, prevText), /*#__PURE__*/_react["default"].createElement("span", {
          className: "".concat(prefixCls, "-simple-pages")
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "".concat(prefixCls, "-simple-page-index")
        }, current), /*#__PURE__*/_react["default"].createElement("span", {
          className: "".concat(prefixCls, "-simple-page-separator")
        }, separator), /*#__PURE__*/_react["default"].createElement("span", null, total)), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          type: isDisabledNext ? "default" : "primary",
          disabled: isDisabledNext,
          size: sizes.small,
          onClick: this.onSimpleChange(next)
        }, nextText));
      }

      return /*#__PURE__*/_react["default"].createElement("ul", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(size), size))
      }, attr), /*#__PURE__*/_react["default"].createElement("li", {
        className: "".concat(prefixCls, "-show-total")
      }, showTotal(total)), /*#__PURE__*/_react["default"].createElement("li", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-item"), "".concat(prefixCls, "-prev"), (_cls2 = {}, (0, _defineProperty2["default"])(_cls2, "".concat(prefixCls, "-item-").concat(size), size !== sizes["default"]), (0, _defineProperty2["default"])(_cls2, "".concat(prefixCls, "-item-disabled"), isDisabledPrev), _cls2)),
        onClick: !isDisabledPrev ? this.onSimpleChange(prev) : undefined
      }, prevText), new Array(this.pageCount).fill().map(function (_, index) {
        var _cls3;

        var page = index + 1;
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-item"), (_cls3 = {}, (0, _defineProperty2["default"])(_cls3, "".concat(prefixCls, "-item-selected"), page === _this2.current), (0, _defineProperty2["default"])(_cls3, "".concat(prefixCls, "-item-").concat(size), size !== sizes["default"]), _cls3)),
          key: index,
          onClick: _this2.onChange(page)
        }, page);
      }), /*#__PURE__*/_react["default"].createElement("li", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-item"), "".concat(prefixCls, "-next"), (_cls4 = {}, (0, _defineProperty2["default"])(_cls4, "".concat(prefixCls, "-item-").concat(size), size !== sizes["default"]), (0, _defineProperty2["default"])(_cls4, "".concat(prefixCls, "-item-disabled"), isDisabledNext), _cls4)),
        onClick: !isDisabledNext ? this.onSimpleChange(next) : undefined
      }, nextText), showSizeChanger && /*#__PURE__*/_react["default"].createElement(_select["default"], {
        className: "".concat(prefixCls, "-size-changer"),
        popupContainerClassName: (0, _classnames["default"])("".concat(prefixCls, "-size-changer-container"), "".concat(prefixCls, "-size-changer-container-").concat(size)),
        size: size,
        value: {
          key: pageSize
        },
        onChange: this.onPageSizeChange,
        labelInValue: true
      }, pageSizeOptions.map(function (pageSize) {
        return /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
          value: pageSize,
          key: pageSize
        }, pageSize, " \u6761 / \u9875");
      })), showQuickJumper && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, "\u8DF3\u81F3"), /*#__PURE__*/_react["default"].createElement(_number_input["default"], {
        className: "".concat(prefixCls, "-quick-jumper"),
        onChange: this.onQuickJumperChange,
        value: quickJumperValue,
        min: 1,
        size: size,
        onKeyUp: this.onQuickJumperKeyUp
      }), /*#__PURE__*/_react["default"].createElement("span", null, "\u9875")));
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
}(_react.PureComponent);

exports["default"] = Pagination;
(0, _defineProperty2["default"])(Pagination, "defaultProps", {
  prefixCls: "ellyth-pagination",
  current: 1,
  total: 1,
  separator: "/",
  locale: {
    prevText: /*#__PURE__*/_react["default"].createElement(_icon.ArrowLeftIcon, null),
    nextText: /*#__PURE__*/_react["default"].createElement(_icon.ArrowRightIcon, null)
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
(0, _defineProperty2["default"])(Pagination, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  separator: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].object]),
  total: _propTypes["default"].number.isRequired,
  //总数
  current: _propTypes["default"].number,
  pageSize: _propTypes["default"].PropTypes.number,
  defaultCurrent: _propTypes["default"].number,
  defaultPageSize: _propTypes["default"].number,
  locale: _propTypes["default"].object,
  //自定义按钮
  onChange: _propTypes["default"].func,
  //回调(type,current)
  size: _propTypes["default"].oneOf(Object.values(sizes)),
  showSizeChanger: _propTypes["default"].bool,
  onPageSizeChange: _propTypes["default"].func
});