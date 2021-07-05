"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formik = require("formik");

var _row = _interopRequireDefault(require("../row"));

var _col = _interopRequireDefault(require("../col"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FormItem = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(FormItem, _PureComponent);

  var _super = _createSuper(FormItem);

  function FormItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, FormItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dispatchSchemaOfFormItem", function (name) {
      return function (schema) {
        _this.props.dispatchSchemaOfFormItem(name)(schema);
      };
    });
    return _this;
  }

  (0, _createClass2["default"])(FormItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          label = _this$props.label,
          name = _this$props.name,
          children = _this$props.children,
          labelCol = _this$props.labelCol,
          wrapperCol = _this$props.wrapperCol,
          style = _this$props.style,
          _this$props$formProps = _this$props.formProps,
          errors = _this$props$formProps.errors,
          touched = _this$props$formProps.touched;
      var hasError = errors[name] && touched[name];
      return /*#__PURE__*/_react["default"].createElement(_row["default"], {
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-has-error"), hasError)),
        style: style
      }, /*#__PURE__*/_react["default"].createElement(_col["default"], (0, _extends2["default"])({}, labelCol, {
        className: "".concat(prefixCls, "-label")
      }), label), /*#__PURE__*/_react["default"].createElement(_col["default"], (0, _extends2["default"])({}, wrapperCol, {
        className: "".concat(prefixCls, "-wrapper")
      }), /*#__PURE__*/_react["default"].createElement(_formik.Field, {
        name: name,
        render: function render(_ref) {
          var field = _ref.field;
          return /*#__PURE__*/_react["default"].cloneElement(children, _objectSpread(_objectSpread({}, field), {}, {
            key: "".concat(prefixCls, "-").concat(name)
          }));
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-error-message")
      }, /*#__PURE__*/_react["default"].createElement(_formik.ErrorMessage, {
        name: name
      }))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.dispatchSchemaOfFormItem(this.props.name)(this.props.schema);
    }
  }]);
  return FormItem;
}(_react.PureComponent);

exports["default"] = FormItem;
(0, _defineProperty2["default"])(FormItem, "defaultProps", {
  prefixCls: "ellyth-form-item",
  labelCol: {
    span: 3,
    offset: 0
  },
  wrapperCol: {
    span: 21,
    offset: 0
  },
  schema: {}
});
(0, _defineProperty2["default"])(FormItem, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired
});