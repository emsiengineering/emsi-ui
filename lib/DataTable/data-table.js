'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _DataHeader = require('../DataHeader');

var _DataHeader2 = _interopRequireDefault(_DataHeader);

var _Td = require('../Td');

var _Td2 = _interopRequireDefault(_Td);

var _Tr = require('../Tr');

var _Tr2 = _interopRequireDefault(_Tr);

var _dataTable = require('./data-table.css');

var _dataTable2 = _interopRequireDefault(_dataTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
const columns = [
  {
    property: 'animal',
    name: 'Animals',
    sortable: true,
    sortFunction: function sort(a, b) {}
  },
  {
    property: 'number',
    name: 'Numbers',
    align: 'right'
  },
  {
    property: 'alpha',
    name: 'Alphanumeric',
    align: 'right'
  }
];

const data = [
  {
    animal: 'Zebra',
    number: 5,
    alpha: 'test1'
  }
];
*/
/**
 * TODO need documentation and examples for this component
 */

var DataTable = function (_React$Component) {
  (0, _inherits3.default)(DataTable, _React$Component);

  function DataTable() {
    var _ref;

    (0, _classCallCheck3.default)(this, DataTable);

    for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = DataTable.__proto__ || (0, _getPrototypeOf2.default)(DataTable)).call.apply(_ref, [this].concat(props)));

    _this.state = {
      selected: []
    };
    return _this;
  }

  (0, _createClass3.default)(DataTable, [{
    key: 'renderCheckbox',
    value: function renderCheckbox() {
      var _props = this.props;
      var selectable = _props.selectable;
      var data = _props.data;


      return selectable ? _react2.default.createElement(
        _Td2.default,
        { component: 'th', align: 'center' },
        _react2.default.createElement(_Checkbox2.default, {
          type: 'cell',
          checked: this.state.selected.length === data,
          onChange: this.handleSelectAll })
      ) : null;
    }
  }, {
    key: 'renderColumns',
    value: function renderColumns() {
      var _props2 = this.props;
      var children = _props2.children;
      var columns = _props2.columns;
      var selectable = _props2.selectable;
      var data = _props2.data;

      var selector = this.renderCheckbox();

      // seperate component?
      var headers = columns.map(function (column, index) {
        return _react2.default.createElement(
          _Td2.default,
          { component: 'th', key: 'column-' + index, align: column.align },
          _react2.default.createElement(
            _Header2.default,
            { component: 'span', color: 'alternate', type: 'caption' },
            column.name
          )
        );
      });

      return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          _Tr2.default,
          null,
          selector,
          headers
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var children = _props3.children;
      var data = _props3.data;
      var columns = _props3.columns;
      var selectable = _props3.selectable;
      var onSelect = _props3.onSelect;
      var CSS = _props3.styles;
      var other = (0, _objectWithoutProperties3.default)(_props3, ['children', 'data', 'columns', 'selectable', 'onSelect', 'styles']);


      return _react2.default.createElement(
        'table',
        (0, _extends3.default)({}, other, { styleName: 'table' }),
        this.renderColumns()
      );
    }
  }]);
  return DataTable;
}(_react2.default.Component);

DataTable.propTypes = {
  styles: _react2.default.PropTypes.object,
  columns: _react2.default.PropTypes.array,
  data: _react2.default.PropTypes.array,
  selectable: _react2.default.PropTypes.bool,
  onSelect: _react2.default.PropTypes.func
};
exports.default = (0, _reactCssModules2.default)(DataTable, _dataTable2.default, { allowMultiple: true });