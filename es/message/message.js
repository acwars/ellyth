import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "darkTheme", "type", "title", "className", "duration"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import cls from "classnames";
import { InfoIcon, LoadingIcon, SuccessIcon, ErrorIcon, WarningIcon } from "../icon";

var Message = /*#__PURE__*/function (_PureComponent) {
  _inherits(Message, _PureComponent);

  var _super = _createSuper(Message);

  function Message(props) {
    var _this;

    _classCallCheck(this, Message);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: true
    });

    _defineProperty(_assertThisInitialized(_this), "animationTime", 500);

    _defineProperty(_assertThisInitialized(_this), "_containerRef", null);

    _defineProperty(_assertThisInitialized(_this), "_currentNodeRef", null);

    _defineProperty(_assertThisInitialized(_this), "destroy", function () {
      if (_this._containerRef) {
        ReactDOM.unmountComponentAtNode(_this._containerRef);
      }

      if (_this._currentNodeRef) {
        _this._currentNodeRef.remove();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "disableScroll", function () {
      document.body.style.overflow = "hidden"; //滚动条的宽度 防止鬼畜

      document.body.style.paddingRight = "15px";
    });

    _defineProperty(_assertThisInitialized(_this), "enableScroll", function () {
      document.body.style.overflow = "";
      document.body.style.paddingRight = 0;
    });

    _this.typeConfig = {
      info: "info",
      success: "success",
      error: "error",
      warning: "warning",
      loading: "loading"
    };
    return _this;
  }

  _createClass(Message, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          duration = _this$props.duration,
          onClose = _this$props.onClose;
      this.timer = setTimeout(function () {
        _this2.setState({
          visible: false
        }, function () {
          setTimeout(function () {
            _this2.destroy();
          }, _this2.animationTime);
          onClose();
        });
      }, duration * 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroy();
      clearTimeout(this.timer);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.visible === true) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          darkTheme = _this$props2.darkTheme,
          type = _this$props2.type,
          title = _this$props2.title,
          className = _this$props2.className,
          duration = _this$props2.duration,
          attr = _objectWithoutProperties(_this$props2, _excluded);

      var visible = this.state.visible;
      var typeConfig = this.typeConfig;
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-theme-dark"), darkTheme), _defineProperty({}, "".concat(prefixCls, "-open"), visible && duration), _defineProperty({}, "".concat(prefixCls, "-close"), !visible))
      }, attr), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-title-custom"), "".concat(prefixCls, "-").concat(typeConfig[type]))
      }, /*#__PURE__*/React.createElement("p", {
        className: "".concat(prefixCls, "-icon")
      }, type === typeConfig["info"] ? /*#__PURE__*/React.createElement(InfoIcon, null) : undefined, type === typeConfig["success"] ? /*#__PURE__*/React.createElement(SuccessIcon, null) : undefined, type === typeConfig["error"] ? /*#__PURE__*/React.createElement(ErrorIcon, null) : undefined, type === typeConfig["warning"] ? /*#__PURE__*/React.createElement(WarningIcon, null) : undefined, type === typeConfig["loading"] ? /*#__PURE__*/React.createElement(LoadingIcon, null) : undefined), /*#__PURE__*/React.createElement("p", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/React.createElement("span", null, title))));
    }
  }], [{
    key: "error",
    value: function error(title, duration, onClose, darkTheme) {
      return this.renderElement("error", title, duration, onClose, darkTheme);
    }
  }, {
    key: "info",
    value: function info(title, duration, onClose, darkTheme) {
      return this.renderElement("info", title, duration, onClose, darkTheme);
    }
  }, {
    key: "success",
    value: function success(title, duration, onClose, darkTheme) {
      return this.renderElement("success", title, duration, onClose, darkTheme);
    }
  }, {
    key: "warning",
    value: function warning(title, duration, onClose, darkTheme) {
      return this.renderElement("warning", title, duration, onClose, darkTheme);
    }
  }, {
    key: "loading",
    value: function loading(title, duration, onClose, darkTheme) {
      return this.renderElement("loading", title, duration, onClose, darkTheme);
    }
  }]);

  return Message;
}(PureComponent);

_defineProperty(Message, "propTypes", {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]).isRequired,
  duration: PropTypes.number.isRequired,
  darkTheme: PropTypes.bool,
  onClose: PropTypes.func
});

_defineProperty(Message, "defaultProps", {
  prefixCls: "ellyth-message",
  duration: 2,
  darkTheme: false,
  onClose: function onClose() {}
});

_defineProperty(Message, "renderElement", function (type, title, duration, onClose, darkTheme) {
  var container = document.createElement("div");
  var currentNode = document.body.appendChild(container);

  var _message = ReactDOM.render( /*#__PURE__*/React.createElement(Message, {
    type: type,
    title: title,
    darkTheme: darkTheme,
    duration: duration,
    onClose: onClose
  }), container);

  if (_message) {
    _message._containerRef = container;
    _message._currentNodeRef = currentNode;
    return {
      destroy: _message.destroy
    };
  }

  return {
    destroy: function destroy() {}
  };
});

export { Message as default };