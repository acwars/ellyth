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

var _checkbox = _interopRequireDefault(require("./checkbox"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["children", "prefixCls", "disabled", "className", "size", "onChange", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CheckboxGroup = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(CheckboxGroup, _PureComponent);

  var _super = _createSuper(CheckboxGroup);

  function CheckboxGroup(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CheckboxGroup);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      //默认选中的值
      value: _this.props.value || _this.props.defaultValue || _this.getCheckedValue(_this.props.children)
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCheckboxChange", function (e) {
      var currentValue = e.target.value;
      var value = _this.state.value;
      var currentIndex = value.findIndex(function (v) {
        return v === currentValue;
      }); //如果没在就加入数组 否则就是 取消选中 删除掉

      if (currentIndex < 0) {
        value.push(currentValue);
      } else {
        value.splice(currentIndex, 1);
      }

      _this.setState({
        value: value
      });

      _this.props.onChange(value);
    });
    return _this;
  }

  (0, _createClass2["default"])(CheckboxGroup, [{
    key: "getCheckedValue",
    value: function getCheckedValue(children) {
      var checkedValue = []; //遍历子节点 看是否有选中的值

      _react["default"].Children.forEach(children, function (checkbox) {
        if (checkbox.props && checkbox.props.checked || checkbox.props.defaultChecked) {
          checkedValue.push(checkbox.props.value);
        }
      });

      return checkedValue;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          className = _this$props.className,
          size = _this$props.size,
          onChange = _this$props.onChange,
          currentValue = _this$props.value,
          attr = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var value = this.state.value;
      var isChecked = value.find(function (v) {
        return v === currentValue;
      }); // 变量子节点 对比当前value 和  子节点 value 是否相同

      var items = _react["default"].Children.map(children, function (checkbox, index) {
        return /*#__PURE__*/_react["default"].createElement(_checkbox["default"], (0, _extends2["default"])({
          key: index,
          size: size,
          disabled: disabled
        }, checkbox.props, {
          onChange: _this2.onCheckboxChange,
          checked: isChecked
        }));
      });

      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className)
      }, attr), items);
    }
  }]);
  return CheckboxGroup;
}(_react.PureComponent);

exports["default"] = CheckboxGroup;
(0, _defineProperty2["default"])(CheckboxGroup, "defaultProps", {
  prefixCls: "cuke-checkbox-group",
  disabled: false,
  size: "default",
  onChange: function onChange() {}
});
(0, _defineProperty2["default"])(CheckboxGroup, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["small", "default", "large"])
});