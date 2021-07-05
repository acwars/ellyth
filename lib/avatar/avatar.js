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

var _excluded = ["shape", "className", "prefixCls", "size", "src", "icon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
  (0, _inherits2["default"])(Avatar, _PureComponent);

  var _super = _createSuper(Avatar);

  function Avatar(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Avatar);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      scale: 1
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getChildren", function () {
      var _this$props = _this.props,
          src = _this$props.src,
          alt = _this$props.alt,
          icon = _this$props.icon,
          text = _this$props.text,
          prefixCls = _this$props.prefixCls;
      var children;

      if (src) {
        children = /*#__PURE__*/_react["default"].createElement("img", {
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

        children = /*#__PURE__*/_react["default"].createElement("span", {
          className: "".concat(prefixCls, "-text"),
          style: childrenStyle,
          ref: _this.avatarChildren
        }, text);
      } else {
        children = _this.props.children;
      }

      return children;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setScale", function () {
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
    _this.avatarChildren = /*#__PURE__*/(0, _react.createRef)();
    _this.avatar = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  (0, _createClass2["default"])(Avatar, [{
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
          attr = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);
      var children = this.getChildren();
      return /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-").concat(shape), shape), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-size-").concat(size), typeof size === "string"), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-image"), src), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-icon"), icon), _cls)),
        ref: this.avatar
      }, attr), children);
    }
  }]);
  return Avatar;
}(_react.PureComponent);

exports["default"] = Avatar;
(0, _defineProperty2["default"])(Avatar, "defaultProps", {
  shape: shape.circle,
  prefixCls: "ellyth-avatar",
  alt: "ellyth-avatar",
  size: sizes["default"]
});
(0, _defineProperty2["default"])(Avatar, "propTypes", {
  shape: _propTypes["default"].oneOf(Object.values(shape)),
  prefixCls: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  children: _propTypes["default"].node,
  src: _propTypes["default"].string,
  alt: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(Object.values(sizes)),
  text: _propTypes["default"].string
});