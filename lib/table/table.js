"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _pagination = _interopRequireDefault(require("../pagination"));

var _spin = _interopRequireDefault(require("../spin"));

var _empty = _interopRequireDefault(require("../empty"));

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _excluded = ["className", "prefixCls", "pagination", "loading", "loadingTip", "bordered", "showHeader", "stripe", "rowSelection", "dataSource"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Table = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Table, _PureComponent);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Table);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      pageIndex: _this.props.pagination.pageIndex || 1,
      selectedRows: [],
      baseSelectedRows: [],
      isSelectAll: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rows", []);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSelectAllChange", function (e) {
      var isSelectAll = e.target.checked;
      var selectedRows = (0, _toConsumableArray2["default"])(_this.dataSource).filter(function (_, index) {
        return !_this.rows[index];
      }); // const { pageSize } = this.props.pagination

      var baseSelectedRows = (0, _toConsumableArray2["default"])(_this.state.baseSelectedRows);

      if (isSelectAll) {
        selectedRows.unshift.apply(selectedRows, (0, _toConsumableArray2["default"])(baseSelectedRows));
      } else {// TODO: 移除全选
      }

      var selectedRowKeys = selectedRows.map(function (_ref) {
        var key = _ref.key;
        return key;
      });

      _this.setState({
        isSelectAll: isSelectAll,
        selectedRows: selectedRows,
        baseSelectedRows: selectedRows
      });

      if (_this.props.rowSelection && _this.props.rowSelection.onChange) {
        _this.props.rowSelection.onChange(selectedRowKeys, selectedRows);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRowCheckboxChange", function (selectedRow) {
      return function (e) {
        var checked = e.target.checked;
        var selectedRows = (0, _toConsumableArray2["default"])(_this.state.baseSelectedRows);

        if (checked) {
          selectedRows.push(selectedRow);
        } else {
          selectedRows = selectedRows.filter(function (row) {
            return JSON.stringify(selectedRow) !== JSON.stringify(row);
          });
        }

        var selectedRowKeys = selectedRows.map(function (_ref2) {
          var key = _ref2.key;
          return key;
        });

        _this.setState({
          selectedRows: selectedRows,
          baseSelectedRows: selectedRows
        });

        if (selectedRows.length < 1) {
          _this.setState({
            isSelectAll: false
          });
        }

        if (_this.props.rowSelection && _this.props.rowSelection.onChange) {
          _this.props.rowSelection.onChange(selectedRowKeys, selectedRows);
        }
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPageChange", function (pageIndex, pageSize) {
      var currentPageSelectedRows = (0, _toConsumableArray2["default"])(_this.state.baseSelectedRows).slice((pageIndex - 1) * pageSize, pageIndex * pageSize);

      _this.setState({
        pageIndex: pageIndex,
        isSelectAll: currentPageSelectedRows.length === pageSize,
        selectedRows: currentPageSelectedRows
      }, function () {
        if (_this.props.pagination && _this.props.pagination.onChange) {
          _this.props.pagination.onChange(pageIndex, pageSize);
        }
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Table, [{
    key: "tableHeader",
    get: function get() {
      var isSelectAll = this.state.isSelectAll;
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          columns = _this$props.columns,
          rowSelection = _this$props.rowSelection;
      return /*#__PURE__*/_react["default"].createElement("thead", {
        className: "".concat(prefixCls, "-thead")
      }, /*#__PURE__*/_react["default"].createElement("tr", null, rowSelection && /*#__PURE__*/_react["default"].createElement("th", {
        key: "thead-checkbox"
      }, /*#__PURE__*/_react["default"].createElement(_checkbox["default"], {
        onChange: this.onSelectAllChange,
        checked: isSelectAll,
        indeterminate: this.isIndeterminate
      })), columns.map(function (_ref3, index) {
        var title = _ref3.title;
        return /*#__PURE__*/_react["default"].createElement("th", {
          key: "thead-".concat(index)
        }, title);
      })));
    }
  }, {
    key: "isIndeterminate",
    get: function get() {
      var selectedRows = this.state.selectedRows;
      var disabledRows = Object.values(this.rows).filter(Boolean);
      return selectedRows.length >= 1 && selectedRows.length < this.dataSource.length - disabledRows.length;
    }
  }, {
    key: "dataSource",
    get: function get() {
      var _this$props2 = this.props,
          dataSource = _this$props2.dataSource,
          pagination = _this$props2.pagination;
      var pageIndex = this.state.pageIndex;
      return dataSource.slice((pageIndex - 1) * pagination.pageSize, pageIndex * pagination.pageSize);
    }
  }, {
    key: "tableBody",
    get: function get() {
      var _this2 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          columns = _this$props3.columns,
          rowSelection = _this$props3.rowSelection,
          stripe = _this$props3.stripe;
      var selectedRows = this.state.selectedRows;
      this.rows = {};
      return /*#__PURE__*/_react["default"].createElement("tbody", {
        className: "".concat(prefixCls, "-tbody")
      }, this.dataSource.map(function (item, index) {
        var _ref4 = columns[index] || {},
            _ref4$key = _ref4.key,
            rowKey = _ref4$key === void 0 ? "tbody-".concat(index) : _ref4$key;

        var isChecked = !!selectedRows.find(function (row) {
          return JSON.stringify(row) === JSON.stringify(item);
        });
        var checkboxProps = rowSelection && rowSelection.getCheckboxProps && rowSelection.getCheckboxProps(item) || {};
        _this2.rows[index] = checkboxProps.disabled || false;
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: rowKey,
          className: (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-stripe"), stripe && (index + 1) % 2 === 0))
        }, rowSelection && /*#__PURE__*/_react["default"].createElement("td", {
          key: "tbody-checkbox"
        }, /*#__PURE__*/_react["default"].createElement(_checkbox["default"], (0, _extends2["default"])({
          checked: !checkboxProps.disabled && isChecked,
          onChange: _this2.onRowCheckboxChange(item)
        }, checkboxProps))), columns.map(function (column) {
          var dataIndex = column.dataIndex,
              render = column.render;
          var value = item[dataIndex];
          return /*#__PURE__*/_react["default"].createElement("td", {
            key: "td-".concat(dataIndex)
          }, render && render(value, item, index) || value);
        }));
      }));
    }
  }, {
    key: "total",
    get: function get() {
      return this.props.dataSource.length;
    }
  }, {
    key: "hasData",
    get: function get() {
      return this.props.dataSource.length >= 1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          prefixCls = _this$props4.prefixCls,
          pagination = _this$props4.pagination,
          loading = _this$props4.loading,
          loadingTip = _this$props4.loadingTip,
          bordered = _this$props4.bordered,
          showHeader = _this$props4.showHeader,
          stripe = _this$props4.stripe,
          rowSelection = _this$props4.rowSelection,
          dataSource = _this$props4.dataSource,
          attr = (0, _objectWithoutProperties2["default"])(_this$props4, _excluded);
      var pageIndex = this.state.pageIndex;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-bordered"), bordered))
      }, attr), /*#__PURE__*/_react["default"].createElement(_spin["default"], {
        spinning: loading,
        tip: loadingTip,
        size: "large"
      }, /*#__PURE__*/_react["default"].createElement("table", {
        className: "".concat(prefixCls, "-origin-table")
      }, showHeader && this.tableHeader, this.hasData && this.tableBody), !this.hasData && /*#__PURE__*/_react["default"].createElement(_empty["default"], null), !!pagination && this.hasData && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-pagination"))
      }, /*#__PURE__*/_react["default"].createElement(_pagination["default"], (0, _extends2["default"])({
        current: pageIndex,
        total: this.total
      }, pagination, {
        onChange: this.onPageChange
      })))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref5, _ref6) {
      var pagination = _ref5.pagination;
      var pageIndex = _ref6.pageIndex;

      if (pagination.pageIndex !== pageIndex) {
        return {
          pageIndex: pageIndex
        };
      }

      return null;
    }
  }]);
  return Table;
}(_react.PureComponent);

exports["default"] = Table;
(0, _defineProperty2["default"])(Table, "propsTypes", {
  prefixCls: _propTypes["default"].string.isRequired,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].any,
    width: _propTypes["default"].number,
    render: _propTypes["default"].func,
    key: _propTypes["default"].string,
    dataIndex: _propTypes["default"].string
  })),
  dataSource: _propTypes["default"].array,
  loading: _propTypes["default"].bool,
  loadingTip: _propTypes["default"].string,
  bordered: _propTypes["default"].bool,
  showHeader: _propTypes["default"].bool,
  rowSelection: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].shape({
    onChange: _propTypes["default"].func,
    getCheckboxProps: _propTypes["default"].func
  })])
});
(0, _defineProperty2["default"])(Table, "defaultProps", {
  prefixCls: "ellyth-table",
  dataSource: [],
  columns: [],
  pagination: {
    pageIndex: 1,
    pageSize: 10
  },
  loading: false,
  loadingTip: "",
  bordered: false,
  showHeader: true,
  // 是否显示表头
  rowSelection: false
});