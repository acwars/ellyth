import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import Row from "../row";
import Col from "../col";

var FormItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormItem, _PureComponent);

  var _super = _createSuper(FormItem);

  function FormItem() {
    var _this;

    _classCallCheck(this, FormItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "dispatchSchemaOfFormItem", function (name) {
      return function (schema) {
        _this.props.dispatchSchemaOfFormItem(name)(schema);
      };
    });

    return _this;
  }

  _createClass(FormItem, [{
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
      return /*#__PURE__*/React.createElement(Row, {
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-has-error"), hasError)),
        style: style
      }, /*#__PURE__*/React.createElement(Col, _extends({}, labelCol, {
        className: "".concat(prefixCls, "-label")
      }), label), /*#__PURE__*/React.createElement(Col, _extends({}, wrapperCol, {
        className: "".concat(prefixCls, "-wrapper")
      }), /*#__PURE__*/React.createElement(Field, {
        name: name,
        render: function render(_ref) {
          var field = _ref.field;
          return /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread({}, field), {}, {
            key: "".concat(prefixCls, "-").concat(name)
          }));
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-error-message")
      }, /*#__PURE__*/React.createElement(ErrorMessage, {
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
}(PureComponent);

_defineProperty(FormItem, "defaultProps", {
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

_defineProperty(FormItem, "propTypes", {
  prefixCls: PropTypes.string.isRequired
});

export { FormItem as default };