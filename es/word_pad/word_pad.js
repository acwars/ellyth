import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import propTypes from "prop-types";
import cls from "classnames";

var WordPad = /*#__PURE__*/function (_PureComponent) {
  _inherits(WordPad, _PureComponent);

  var _super = _createSuper(WordPad);

  function WordPad(props) {
    var _this;

    _classCallCheck(this, WordPad);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMouseDown: false,
      lastCoordinate: {
        x: 0,
        y: 0
      }
    });

    return _this;
  }

  _createClass(WordPad, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style;
      return /*#__PURE__*/React.createElement("canvas", {
        className: cls(prefixCls, className),
        style: style,
        ref: function ref(node) {
          return _this2.canvas = node;
        }
      }, "\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas");
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "windowToCanvas",
    value: function windowToCanvas(x, y) {
      var _this$canvas$getBound = this.canvas.getBoundingClientRect(),
          left = _this$canvas$getBound.left,
          top = _this$canvas$getBound.top;

      return {
        x: Math.round(x - left),
        y: Math.round(y - top)
      };
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this3 = this;

      this.canvas.onmousedown = function (e) {
        e.preventDefault();

        _this3.setState({
          isMouseDown: true
        });

        _this3.setState({
          lastCoordinate: _this3.windowToCanvas(e.clientX, e.clientY)
        });
      };

      this.canvas.onmouseup = function (e) {
        e.preventDefault();

        _this3.setState({
          isMouseDown: false
        });
      };

      this.canvas.onmouseout = function (e) {
        e.preventDefault();

        _this3.setState({
          isMouseDown: false
        });
      };

      this.canvas.onmousemove = function (e) {
        e.preventDefault();
        var _this3$state = _this3.state,
            isMouseDown = _this3$state.isMouseDown,
            lastCoordinate = _this3$state.lastCoordinate;
        var _this3$props = _this3.props,
            strokeColor = _this3$props.strokeColor,
            strokeWidth = _this3$props.strokeWidth,
            lineCap = _this3$props.lineCap,
            lineJoin = _this3$props.lineJoin;

        if (isMouseDown) {
          var nowCoordinate = _this3.windowToCanvas(e.clientX, e.clientY);

          _this3.ctx.beginPath();

          _this3.ctx.moveTo(lastCoordinate.x, lastCoordinate.y);

          _this3.ctx.lineTo(nowCoordinate.x, nowCoordinate.y);

          _this3.ctx.lineWidth = strokeWidth;
          _this3.ctx.strokeStyle = strokeColor;
          _this3.ctx.lineCap = lineCap;
          _this3.ctx.lineJoin = lineJoin;

          _this3.ctx.stroke();

          _this3.setState({
            lastCoordinate: nowCoordinate
          });
        }
      };
    } // eslint-disable-next-line

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.clear) {
        this.clear();

        if (nextProps.onClearComplete) {
          nextProps.onClearComplete();
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = width;
      this.canvas.height = height;
      this.bindEvents();
      this.props.getCanvasRef(this.canvas, this.ctx);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.canvas = undefined;
    }
  }]);

  return WordPad;
}(PureComponent);

_defineProperty(WordPad, "defaultProps", {
  prefixCls: "ellyth-word-pad",
  clear: false,
  width: 700,
  height: 700,
  lineCap: "round",
  lineJoin: "round",
  strokeWidth: 10,
  strokeColor: "#444",
  getCanvasRef: function getCanvasRef() {},
  onClearComplete: function onClearComplete() {}
});

_defineProperty(WordPad, "propTypes", {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  strokeColor: propTypes.string,
  strokeWidth: propTypes.number,
  lineJoin: propTypes.string,
  lineCap: propTypes.string,
  getCanvasRef: propTypes.func,
  onClearComplete: propTypes.func,
  prefixCls: propTypes.string.isRequired,
  clear: propTypes.bool
});

export { WordPad as default };