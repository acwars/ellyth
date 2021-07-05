import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "prefixCls", "pagination", "loading", "loadingTip", "bordered", "showHeader", "stripe", "rowSelection", "dataSource"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Pagination from "../pagination";
import Spin from "../spin";
import Empty from "../empty";
import Checkbox from "../checkbox";

var Table = /*#__PURE__*/function (_PureComponent) {
  _inherits(Table, _PureComponent);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      pageIndex: _this.props.pagination.pageIndex || 1,
      selectedRows: [],
      baseSelectedRows: [],
      isSelectAll: false
    });

    _defineProperty(_assertThisInitialized(_this), "rows", []);

    _defineProperty(_assertThisInitialized(_this), "onSelectAllChange", function (e) {
      var isSelectAll = e.target.checked;

      var selectedRows = _toConsumableArray(_this.dataSource).filter(function (_, index) {
        return !_this.rows[index];
      }); // const { pageSize } = this.props.pagination


      var baseSelectedRows = _toConsumableArray(_this.state.baseSelectedRows);

      if (isSelectAll) {
        selectedRows.unshift.apply(selectedRows, _toConsumableArray(baseSelectedRows));
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

    _defineProperty(_assertThisInitialized(_this), "onRowCheckboxChange", function (selectedRow) {
      return function (e) {
        var checked = e.target.checked;

        var selectedRows = _toConsumableArray(_this.state.baseSelectedRows);

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

    _defineProperty(_assertThisInitialized(_this), "onPageChange", function (pageIndex, pageSize) {
      var currentPageSelectedRows = _toConsumableArray(_this.state.baseSelectedRows).slice((pageIndex - 1) * pageSize, pageIndex * pageSize);

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

  _createClass(Table, [{
    key: "tableHeader",
    get: function get() {
      var isSelectAll = this.state.isSelectAll;
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          columns = _this$props.columns,
          rowSelection = _this$props.rowSelection;
      return /*#__PURE__*/React.createElement("thead", {
        className: "".concat(prefixCls, "-thead")
      }, /*#__PURE__*/React.createElement("tr", null, rowSelection && /*#__PURE__*/React.createElement("th", {
        key: "thead-checkbox"
      }, /*#__PURE__*/React.createElement(Checkbox, {
        onChange: this.onSelectAllChange,
        checked: isSelectAll,
        indeterminate: this.isIndeterminate
      })), columns.map(function (_ref3, index) {
        var title = _ref3.title;
        return /*#__PURE__*/React.createElement("th", {
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
      return /*#__PURE__*/React.createElement("tbody", {
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
        return /*#__PURE__*/React.createElement("tr", {
          key: rowKey,
          className: cls(_defineProperty({}, "".concat(prefixCls, "-stripe"), stripe && (index + 1) % 2 === 0))
        }, rowSelection && /*#__PURE__*/React.createElement("td", {
          key: "tbody-checkbox"
        }, /*#__PURE__*/React.createElement(Checkbox, _extends({
          checked: !checkboxProps.disabled && isChecked,
          onChange: _this2.onRowCheckboxChange(item)
        }, checkboxProps))), columns.map(function (column) {
          var dataIndex = column.dataIndex,
              render = column.render;
          var value = item[dataIndex];
          return /*#__PURE__*/React.createElement("td", {
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
          attr = _objectWithoutProperties(_this$props4, _excluded);

      var pageIndex = this.state.pageIndex;
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-bordered"), bordered))
      }, attr), /*#__PURE__*/React.createElement(Spin, {
        spinning: loading,
        tip: loadingTip,
        size: "large"
      }, /*#__PURE__*/React.createElement("table", {
        className: "".concat(prefixCls, "-origin-table")
      }, showHeader && this.tableHeader, this.hasData && this.tableBody), !this.hasData && /*#__PURE__*/React.createElement(Empty, null), !!pagination && this.hasData && /*#__PURE__*/React.createElement("div", {
        className: cls("".concat(prefixCls, "-pagination"))
      }, /*#__PURE__*/React.createElement(Pagination, _extends({
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
}(PureComponent);

_defineProperty(Table, "propsTypes", {
  prefixCls: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.any,
    width: PropTypes.number,
    render: PropTypes.func,
    key: PropTypes.string,
    dataIndex: PropTypes.string
  })),
  dataSource: PropTypes.array,
  loading: PropTypes.bool,
  loadingTip: PropTypes.string,
  bordered: PropTypes.bool,
  showHeader: PropTypes.bool,
  rowSelection: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    onChange: PropTypes.func,
    getCheckboxProps: PropTypes.func
  })])
});

_defineProperty(Table, "defaultProps", {
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

export { Table as default };