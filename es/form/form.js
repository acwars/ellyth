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

import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";

var CukeForm = /*#__PURE__*/function (_PureComponent) {
  _inherits(CukeForm, _PureComponent);

  var _super = _createSuper(CukeForm);

  function CukeForm(props) {
    var _this;

    _classCallCheck(this, CukeForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getInitialValuesOfForm", function () {
      // TODO: 收集每一个 item 的初始值 组合起来
      return {};
    });

    _defineProperty(_assertThisInitialized(_this), "getSchemaFromFormItem", function (name) {
      return function (getSchema) {
        if (!name || !getSchema) {
          return;
        }

        var newSchema = _objectSpread(_objectSpread({}, _this.schema), {}, _defineProperty({}, name, getSchema(Yup)));

        _this.schema = newSchema;
      };
    });

    _this.schema = {};
    return _this;
  }

  _createClass(CukeForm, [{
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
      return /*#__PURE__*/React.createElement(Formik, {
        initialValues: this.getInitialValuesOfForm,
        validationSchema: this.validationSchema,
        onSubmit: onSubmit
      }, function (formProps) {
        return /*#__PURE__*/React.createElement(Form, {
          className: cls(prefixCls, className),
          style: style
        }, React.Children.map(children, function (element, index) {
          return /*#__PURE__*/cloneElement(element, {
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
}(PureComponent);

_defineProperty(CukeForm, "defaultProps", {
  prefixCls: "ellyth-form"
});

_defineProperty(CukeForm, "propTypes", {
  prefixCls: PropTypes.string.isRequired
});

export { CukeForm as default };