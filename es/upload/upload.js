import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["prefixCls", "className", "children", "multiple", "accept", "directory", "type", "typeName", "maxSize", "beforeUpload", "showUploadList", "onStart", "onComplete", "onTimeOut", "acceptType"];

var _uploadFileTypeNames;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, createRef } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import message from "../message";
import Progress from "../progress";
import Modal from "../modal";
export var getFileSuffix = function getFileSuffix(file) {
  var idx = file.lastIndexOf(".");
  return file.substr(idx + 1);
};
export var formatAcceptType = function formatAcceptType(acceptType) {
  return acceptType.map(function (n) {
    return ".".concat(n);
  }).join();
};
export var formatFileSize = function formatFileSize(fileSize) {
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
var uploadFileType = "file";
var uploadImageType = "image";
var uploadFileTypeNames = (_uploadFileTypeNames = {}, _defineProperty(_uploadFileTypeNames, uploadFileType, "文件"), _defineProperty(_uploadFileTypeNames, uploadImageType, "图片"), _uploadFileTypeNames);
var UPLOAD_STATUS = {
  ERROR: "error",
  SUCCESS: "success",
  PROGRESS: "progress",
  ABORT: "warning",
  TIMEOUT: "warning"
};
var imageReg = /\/(?:jpeg|jpg|png|gif|svg)/i;

var Upload = /*#__PURE__*/function (_PureComponent) {
  _inherits(Upload, _PureComponent);

  var _super = _createSuper(Upload);

  function Upload(props) {
    var _this;

    _classCallCheck(this, Upload);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      uploadList: []
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function () {
      var files = _toConsumableArray(_this.fileRef.current.files);

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

        var uploadList = _toConsumableArray(_this.state.uploadList);

        uploadList.push(fileInfo);

        _this.setState({
          uploadList: uploadList
        }, function () {
          _this.onUploadFile(fileInfo, index);
        });
      });

      _this.props.onSelect(_this.state.uploadList);
    });

    _defineProperty(_assertThisInitialized(_this), "changeUploadStatus", function (status, index) {
      var uploadList = _toConsumableArray(_this.state.uploadList);

      uploadList[index].status = status;

      _this.setState({
        uploadList: uploadList,
        uploading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onUploadFile", function (file, index) {
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

        var uploadList = _toConsumableArray(_this.state.uploadList);

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

    _defineProperty(_assertThisInitialized(_this), "isImage", function (type) {
      return imageReg.test(type);
    });

    _defineProperty(_assertThisInitialized(_this), "defaultBeforeUpload", function (_ref) {
      var size = _ref.size,
          type = _ref.type,
          suffix = _ref.suffix;
      var _this$props2 = _this.props,
          maxSize = _this$props2.maxSize,
          uploadType = _this$props2.type,
          acceptType = _this$props2.acceptType;
      var imageType = type.split("/").pop();

      if (uploadType === uploadImageType && !_this.isImage(type)) {
        message.error("".concat(_this.typeName, " \u4E0D\u652F\u6301 ").concat(imageType, " \u683C\u5F0F"));
        return false;
      }

      if (acceptType.length && !acceptType.includes(suffix)) {
        message.error("\u8BF7\u4E0A\u4F20 ".concat(acceptType.join(","), " \u683C\u5F0F\u7684\u6587\u4EF6"));
        return false;
      }

      if (maxSize && typeof maxSize === "number") {
        var fileSize = size / 1024;

        if (fileSize > maxSize) {
          message.error("".concat(_this.typeName, " \u6700\u5927\u652F\u6301 ").concat(formatFileSize(maxSize * 1024)));
          return false;
        }
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "_onSelect", function () {
      _this.fileRef.current.click();
    });

    _defineProperty(_assertThisInitialized(_this), "loadImage", function (src) {
      return new Promise(function (res, rej) {
        var img = new Image();
        img.src = src;

        img.onload = function () {
          return res(img);
        };

        img.onerror = rej;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPreviewCover", function (cover) {
      return function () {
        Modal.info({
          title: "预览",
          showMask: true,
          okText: "关闭",
          content: /*#__PURE__*/React.createElement("div", {
            className: "".concat(_this.props.prefixCls, "-preview")
          }, /*#__PURE__*/React.createElement("img", {
            src: cover
          }))
        });

        _this.props.onPreview(cover);
      };
    });

    _this.fileRef = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(Upload, [{
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
          attr = _objectWithoutProperties(_this$props3, _excluded);

      var uploadList = this.state.uploadList;
      var isDirectory = directory ? {
        webkitdirectory: "true"
      } : {};
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className)
      }, attr), /*#__PURE__*/React.createElement("input", _extends({
        type: "file",
        hidden: true,
        multiple: multiple,
        accept: accept || formatAcceptType(acceptType),
        ref: this.fileRef,
        onChange: this.onSelect
      }, isDirectory)), /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-inner")),
        onClick: this._onSelect
      }, children), showUploadList && /*#__PURE__*/React.createElement("ul", {
        className: cls("".concat(prefixCls, "-upload-list"))
      }, uploadList.map(function (_ref2, index) {
        var name = _ref2.name,
            size = _ref2.size,
            progress = _ref2.progress,
            status = _ref2.status,
            cover = _ref2.cover;
        var hasCover = type === uploadImageType && cover;
        return /*#__PURE__*/React.createElement("li", {
          key: index,
          className: cls("".concat(prefixCls, "-upload-item"), _defineProperty({}, "".concat(prefixCls, "-upload-item-has-cover"), hasCover))
        }, hasCover && /*#__PURE__*/React.createElement("div", {
          className: cls("".concat(prefixCls, "-upload-item-cover")),
          onClick: _this2.onPreviewCover(cover),
          style: {
            backgroundImage: "url(".concat(cover, ")")
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: cls("".concat(prefixCls, "-upload-item-content"))
        }, /*#__PURE__*/React.createElement("div", {
          className: cls("".concat(prefixCls, "-upload-item-file-info"))
        }, /*#__PURE__*/React.createElement("span", null, name), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, formatFileSize(size))), /*#__PURE__*/React.createElement(Progress, {
          percent: progress,
          type: status,
          className: "".concat(prefixCls, "-upload-item-progress")
        })));
      })));
    }
  }]);

  return Upload;
}(PureComponent);

_defineProperty(Upload, "defaultProps", {
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

_defineProperty(Upload, "propTypes", {
  prefixCls: PropTypes.string.isRequired,
  showUploadList: PropTypes.bool,
  directory: PropTypes.bool,
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  typeName: PropTypes.any,
  name: PropTypes.string,
  type: PropTypes.oneOf([uploadFileType, uploadImageType]),
  acceptType: PropTypes.array
});

export { Upload as default };