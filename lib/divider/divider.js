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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className", "prefixCls", "type", "dashed", "children", "position"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var types = {
  horizontal: "horizontal",
  vertical: "vertical"
};
var position = {
  left: "left",
  right: "right",
  center: "center"
};

var Divider = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Divider, _PureComponent);

  var _super = _createSuper(Divider);

  function Divider(props) {
    (0, _classCallCheck2["default"])(this, Divider);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(Divider, [{
    key: "render",
    value: function render() {
      var _cls;

      var _this$props = this.props,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          type = _this$props.type,
          dashed = _this$props.dashed,
          children = _this$props.children,
          position = _this$props.position,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, "".concat(prefixCls, "-").concat(type), "".concat(prefixCls, "-horizontal-title-").concat(position), (_cls = {}, (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-dashed"), dashed), (0, _defineProperty2["default"])(_cls, "".concat(prefixCls, "-horizontal-title"), children && type === types.horizontal), _cls))
      }, attr), children && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("b", null), /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(prefixCls, "-title-text")
      }, children), /*#__PURE__*/_react["default"].createElement("b", null)));
    }
  }]);
  return Divider;
}(_react.PureComponent);

exports["default"] = Divider;
(0, _defineProperty2["default"])(Divider, "propsTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].oneOf(Object.values(types)),
  position: _propTypes["default"].oneOf(Object.values(position)),
  dashed: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Divider, "defaultProps", {
  prefixCls: "ellyth-divider",
  type: types.horizontal,
  dashed: false,
  position: position.center
});