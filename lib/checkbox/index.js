"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _checkbox = _interopRequireDefault(require("./checkbox"));

var _checkbox_group = _interopRequireDefault(require("./checkbox_group"));

var _checkbox_button = _interopRequireDefault(require("./checkbox_button"));

_checkbox["default"].Group = _checkbox_group["default"];
_checkbox["default"].Button = _checkbox_button["default"];
var _default = _checkbox["default"];
exports["default"] = _default;