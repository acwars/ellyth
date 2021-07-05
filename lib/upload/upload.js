"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.formatFileSize = exports.formatAcceptType = exports.getFileSuffix = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _message = _interopRequireDefault(require("../message"));

var _progress = _interopRequireDefault(require("../progress"));

var _modal = _interopRequireDefault(require("../modal"));

var _excluded = ["prefixCls", "className", "children", "multiple", "accept", "directory", "type", "typeName", "maxSize", "beforeUpload", "showUploadList", "onStart", "onComplete", "onTimeOut", "acceptType"];

var _uploadFileTypeNames;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var getFileSuffix = function getFileSuffix(file) {
  var idx = file.lastIndexOf(".");
  return file.substr(idx + 1);
};

exports.getFileSuffix = getFileSuffix;

var formatAcceptType = function formatAcceptType(acceptType) {
  return acceptType.map(function (n) {
    return ".".concat(n);
  }).join();
};

exports.formatAcceptType = formatAcceptType;

var formatFileSize = function formatFileSize(fileSize) {
  var sizeUnitArr = ["Byte", "KB", "MB", "GB"];

  if (fileSize === 0) {
    return "0 KB";
  }

  var i = parseInt(Math.floor(Math.log(fileSize) / Math.log(1024)));

  if (i === 0) {
    return fileSize + sizeUnitArr[i];
  }

  return (fileSize / Math.pow(1024, i)).toFixed(0) + sizeUnitArr[i];
};

exports.formatFileSize = formatFileSize;
var uploadFileType = "file";
var uploadImageType = "image";
var uploadFileTypeNames = (_uploadFileTypeNames = {}, (0, _defineProperty2["default"])(_uploadFileTypeNames, uploadFileType, "文件"), (0, _defineProperty2["default"])(_uploadFileTypeNames, uploadImageType, "图片"), _uploadFileTypeNames);
var UPLOAD_STATUS = {
  ERROR: "error",
  SUCCESS: "success",
  PROGRESS: "progress",
  ABORT: "warning",
  TIMEOUT: "warning"
};
var imageReg = /\/(?:jpeg|jpg|png|gif|svg)/i;

var Upload = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Upload, _PureComponent);

  var _super = _createSuper(Upload);

  function Upload(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Upload);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      uploadList: []
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSelect", function () {
      var files = (0, _toConsumableArray2["default"])(_this.fileRef.current.files);
      files.forEach(function (file, index) {
        var cover = _this.props.type === uploadImageType && _this.getCover(file) || "";
        var suffix = getFileSuffix(file.name);
        var fileInfo = {
          name: file.name,
          size: file.size,
          type: file.type,
          progress: 0,
          status: UPLOAD_STATUS.PROGRESS,
          cover: cover,
          suffix: suffix
        };

        if (_this.props.beforeUpload && !_this.props.beforeUpload(fileInfo) || !_this.defaultBeforeUpload(fileInfo)) {
          return;
        }

        var uploadList = (0, _toConsumableArray2["default"])(_this.state.uploadList);
        uploadList.push(fileInfo);

        _this.setState({
          uploadList: uploadList
        }, function () {
          _this.onUploadFile(fileInfo, index);
        });
      });

      _this.props.onSelect(_this.state.uploadList);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "changeUploadStatus", function (status, index) {
      var uploadList = (0, _toConsumableArray2["default"])(_this.state.uploadList);
      uploadList[index].status = status;

      _this.setState({
        uploadList: uploadList,
        uploading: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onUploadFile", function (file, index) {
      var _this$props = _this.props,
          name = _this$props.name,
          action = _this$props.action;
      var formData = new FormData();
      var xhr = new XMLHttpRequest();
      formData.append(name, file);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var res = JSON.parse(xhr.responseText);

            _this.changeUploadStatus(UPLOAD_STATUS.SUCCESS, index);

            _this.props.onComplete(res);
          } else {
            _this.changeUploadStatus(UPLOAD_STATUS.ERROR, index);

            _this.props.onError();
          }
        }
      };

      xhr.onloadstart = function () {
        _this.changeUploadStatus(UPLOAD_STATUS.PROGRESS, index);

        _this.props.onStart();
      };

      xhr.onerror = function (err) {
        _this.changeUploadStatus(UPLOAD_STATUS.ERROR, index);

        _this.props.onError(err);
      };

      xhr.onabort = function (err) {
        _this.changeUploadStatus(UPLOAD_STATUS.ABORT, index);

        _this.props.onAbort(err);
      };

      xhr.ontimeout = function (err) {
        _this.changeUploadStatus(UPLOAD_STATUS.TIMEOUT, index);

        _this.props.onTimeOut(err);
      };

      xhr.onloadend = function (e) {
        _this.setState({
          uploading: false
        });
      };

      xhr.upload.onprogress = function (e) {
        var loaded = e.loaded,
            total = e.total;
        var progress = Math.round(loaded * 100 / total);
        var uploadList = (0, _toConsumableArray2["default"])(_this.state.uploadList);
        uploadList[index].progress = progress;
        uploadList[index].status = UPLOAD_STATUS.PROGRESS;

        _this.props.onProgress(e, progress);

        _this.setState({
          uploadList: uploadList
        });
      };

      xhr.open("POST", action, true);
      xhr.send(formData);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isImage", function (type) {
      return imageReg.test(type);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultBeforeUpload", function (_ref) {
      var size = _ref.size,
          type = _ref.type,
          suffix = _ref.suffix;
      var _this$props2 = _this.props,
          maxSize = _this$props2.maxSize,
          uploadType = _this$props2.type,
          acceptType = _this$props2.acceptType;
      var imageType = type.split("/").pop();

      if (uploadType === uploadImageType && !_this.isImage(type)) {
        _message["default"].error("".concat(_this.typeName, " \u4E0D\u652F\u6301 ").concat(imageType, " \u683C\u5F0F"));

        return false;
      }

      if (acceptType.length && !acceptType.includes(suffix)) {
        _message["default"].error("\u8BF7\u4E0A\u4F20 ".concat(acceptType.join(","), " \u683C\u5F0F\u7684\u6587\u4EF6"));

        return false;
      }

      if (maxSize && typeof maxSize === "number") {
        var fileSize = size / 1024;

        if (fileSize > maxSize) {
          _message["default"].error("".concat(_this.typeName, " \u6700\u5927\u652F\u6301 ").concat(formatFileSize(maxSize * 1024)));

          return false;
        }
      }

      return true;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSelect", function () {
      _this.fileRef.current.click();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadImage", function (src) {
      return new Promise(function (res, rej) {
        var img = new Image();
        img.src = src;

        img.onload = function () {
          return res(img);
        };

        img.onerror = rej;
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPreviewCover", function (cover) {
      return function () {
        _modal["default"].info({
          title: "预览",
          showMask: true,
          okText: "关闭",
          content: /*#__PURE__*/_react["default"].createElement("div", {
            className: "".concat(_this.props.prefixCls, "-preview")
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: cover
          }))
        });

        _this.props.onPreview(cover);
      };
    });
    _this.fileRef = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  (0, _createClass2["default"])(Upload, [{
    key: "typeName",
    get: function get() {
      return this.props.typeName || uploadFileTypeNames[this.props.type];
    }
  }, {
    key: "getCover",
    value: function getCover(file) {
      return window.URL.createObjectURL(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          className = _this$props3.className,
          children = _this$props3.children,
          multiple = _this$props3.multiple,
          accept = _this$props3.accept,
          directory = _this$props3.directory,
          type = _this$props3.type,
          typeName = _this$props3.typeName,
          maxSize = _this$props3.maxSize,
          beforeUpload = _this$props3.beforeUpload,
          showUploadList = _this$props3.showUploadList,
          onStart = _this$props3.onStart,
          onComplete = _this$props3.onComplete,
          onTimeOut = _this$props3.onTimeOut,
          acceptType = _this$props3.acceptType,
          attr = (0, _objectWithoutProperties2["default"])(_this$props3, _excluded);
      var uploadList = this.state.uploadList;
      var isDirectory = directory ? {
        webkitdirectory: "true"
      } : {};
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className)
      }, attr), /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
        type: "file",
        hidden: true,
        multiple: multiple,
        accept: accept || formatAcceptType(acceptType),
        ref: this.fileRef,
        onChange: this.onSelect
      }, isDirectory)), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-inner")),
        onClick: this._onSelect
      }, children), showUploadList && /*#__PURE__*/_react["default"].createElement("ul", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-upload-list"))
      }, uploadList.map(function (_ref2, index) {
        var name = _ref2.name,
            size = _ref2.size,
            progress = _ref2.progress,
            status = _ref2.status,
            cover = _ref2.cover;
        var hasCover = type === uploadImageType && cover;
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index,
          className: (0, _classnames["default"])("".concat(prefixCls, "-upload-item"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-upload-item-has-cover"), hasCover))
        }, hasCover && /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-upload-item-cover")),
          onClick: _this2.onPreviewCover(cover),
          style: {
            backgroundImage: "url(".concat(cover, ")")
          }
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-upload-item-content"))
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-upload-item-file-info"))
        }, /*#__PURE__*/_react["default"].createElement("span", null, name), /*#__PURE__*/_react["default"].createElement("span", null, "/"), /*#__PURE__*/_react["default"].createElement("span", null, formatFileSize(size))), /*#__PURE__*/_react["default"].createElement(_progress["default"], {
          percent: progress,
          type: status,
          className: "".concat(prefixCls, "-upload-item-progress")
        })));
      })));
    }
  }]);
  return Upload;
}(_react.PureComponent);

exports["default"] = Upload;
(0, _defineProperty2["default"])(Upload, "defaultProps", {
  prefixCls: "ellyth-upload",
  showUploadList: true,
  //是否显示上传文件列表
  multiple: false,
  //是否允许多选
  maxSize: 1024,
  //上传文件大小限制
  directory: false,
  //是否上传文件夹
  type: uploadFileType,
  //上传的文件类型 图片 还是 文件
  typeName: uploadFileTypeNames[uploadFileType],
  name: "file",
  //后端接收文件字段名
  acceptType: [],
  // 限制上传类型
  onComplete: function onComplete() {},
  onError: function onError() {},
  onStart: function onStart() {},
  onTimeOut: function onTimeOut() {},
  onProgress: function onProgress() {},
  onPreview: function onPreview() {},
  onSelect: function onSelect() {}
});
(0, _defineProperty2["default"])(Upload, "propTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  showUploadList: _propTypes["default"].bool,
  directory: _propTypes["default"].bool,
  multiple: _propTypes["default"].bool,
  accept: _propTypes["default"].string,
  typeName: _propTypes["default"].any,
  name: _propTypes["default"].string,
  type: _propTypes["default"].oneOf([uploadFileType, uploadImageType]),
  acceptType: _propTypes["default"].array
});