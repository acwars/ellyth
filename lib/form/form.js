"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var Yup = _interopRequireWildcard(require("yup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CukeForm = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(CukeForm, _PureComponent);

  var _super = _createSuper(CukeForm);

  function CukeForm(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CukeForm);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getInitialValuesOfForm", function () {
      // TODO: 收集每一个 item 的初始值 组合起来
      return {};
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getSchemaFromFormItem", function (name) {
      return function (getSchema) {
        if (!name || !getSchema) {
          return;
        }

        var newSchema = _objectSpread(_objectSpread({}, _this.schema), {}, (0, _defineProperty2["default"])({}, name, getSchema(Yup)));

        _this.schema = newSchema;
      };
    });
    _this.schema = {};
    return _this;
  }

  (0, _createClass2["default"])(CukeForm, [{
    key: "validationSchema",
    get: function get() {
      console.log(this.schema);
      return Yup.object().shape(this.schema || {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          children = _this$props.children,
          onSubmit = _this$props.onSubmit,
          style = _this$props.style;
      console.log(this.validationSchema);
      return /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
        initialValues: this.getInitialValuesOfForm,
        validationSchema: this.validationSchema,
        onSubmit: onSubmit
      }, function (formProps) {
        return /*#__PURE__*/_react["default"].createElement(_formik.Form, {
          className: (0, _classnames["default"])(prefixCls, className),
          style: style
        }, _react["default"].Children.map(children, function (element, index) {
          return /*#__PURE__*/(0, _react.cloneElement)(element, {
            key: index,
            formProps: formProps,
            dispatchSchemaOfFormItem: _this2.getSchemaFromFormItem
          });
        }));
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.schema = undefined;
    }
  }]);
  return CukeForm;
}(_react.PureComponent);

exports["default"] = CukeForm;
(0, _defineProperty2["default"])(CukeForm, "defaultProps", {
  prefixCls: "ellyth-form"
});
(0, _defineProperty2["default"])(CukeForm, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired
});