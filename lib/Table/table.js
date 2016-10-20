'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

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

var _table = require('./table.css');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TODO need documentation and examples for this component
 */

var Table = function (_React$Component) {
  (0, _inherits3.default)(Table, _React$Component);

  function Table() {
    var _ref;

    (0, _classCallCheck3.default)(this, Table);

    for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call.apply(_ref, [this].concat(props)));

    _this.sortAsc = function (a, b) {
      if (a.value > b.value) return 1;else if (a.value < b.value) return -1;else return 0;
    };

    _this.sortDesc = function (a, b) {
      if (a.value < b.value) return 1;else if (a.value > b.value) return -1;else return 0;
    };

    _this.handleSort = function (index, e) {
      var nextOrder = _this.state.sorted[1] === 'asc' ? 'desc' : 'asc';

      if (index === _this.state.sorted[0]) _this.setState({
        sorted: [0, nextOrder]
      });else _this.setState({
        sorted: [index, 'asc']
      });
    };

    _this.handleSelectAll = function (e) {
      var count = _react2.default.Children.count(_this.props.children);
      var selected = _this.state.selected.slice(0);

      if (selected.length === count) selected = [];else selected = (0, _from2.default)(Array(count).keys());

      _this.setState({
        selected: selected
      }, function () {
        _this.props.onSelect(_this.state.selected, e);
      });
    };

    _this.state = {
      selected: [],
      sorted: [0, 'asc']
    };
    return _this;
  }

  (0, _createClass3.default)(Table, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      var children = _react2.default.Children.toArray(this.props.children);

      var sortedChildren = children.map(function (child, index) {
        return {
          child: child,
          index: index,
          value: child.props.children[_this2.state.sorted[0]].props.children
        };
      });

      console.log(sortedChildren);

      // sortedChildren.sort(this.state.sorted[1] === 'asc' ? this.sortAsc : this.sortDesc);

      var rows = sortedChildren.map(function (sortedChild, index) {
        var child = sortedChild.child;

        return _react2.default.cloneElement(child, (0, _extends3.default)({}, child.props, {
          key: 'tr-' + index,
          selectable: true,
          selected: _this2.state.selected.includes(index),
          onSelect: _this2.handleSelect.bind(_this2, index)
        }));
      });

      return _react2.default.createElement(
        'tbody',
        null,
        rows
      );
    }
  }, {
    key: 'renderColumns',
    value: function renderColumns() {
      var _this3 = this;

      var _props = this.props;
      var columns = _props.columns;
      var selectable = _props.selectable;

      var icon = 'IoChevronUp';

      if (this.state.sorted[1] === 'asc') icon = 'IoChevronDown';

      var cols = columns.map(function (col, index) {
        var styleName = !col.align && col.align !== 'left' ? 'column' : 'column ' + col.align;
        return _react2.default.createElement(
          'th',
          { key: 'column-' + index, styleName: styleName, onClick: _this3.handleSort.bind(_this3, index) },
          _react2.default.createElement(
            _Header2.default,
            { component: 'span', color: 'alternate', type: 'caption' },
            index === _this3.state.sorted[0] && _react2.default.createElement(_Icon2.default, { component: icon, styleName: 'icon' }),
            col.name
          )
        );
      });

      return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          selectable ? _react2.default.createElement(
            'th',
            { styleName: 'column' },
            _react2.default.createElement(_Checkbox2.default, { type: 'cell', checked: this.state.selected.length === _react2.default.Children.count(this.props.children), onChange: this.handleSelectAll })
          ) : null,
          cols
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var CSS = _props2.styles;
      var selectable = _props2.selectable;
      var columns = _props2.columns;
      var other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'styles', 'selectable', 'columns']);


      return _react2.default.createElement(
        'table',
        (0, _extends3.default)({}, other, { styleName: 'table' }),
        this.renderColumns(),
        selectable ? this.renderChildren() : children
      );
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(index, e) {
      var _this4 = this;

      var selected = this.state.selected.slice(0);
      if (selected.includes(index)) selected.splice(selected.indexOf(index), 1);else selected.push(index);

      this.setState({
        selected: selected
      }, function () {
        _this4.props.onSelect(_this4.state.selected, e);
      });
    }
  }]);
  return Table;
}(_react2.default.Component);

Table.propTypes = {
  styles: _react2.default.PropTypes.object,
  columns: _react2.default.PropTypes.array,
  selectable: _react2.default.PropTypes.bool,
  onSelect: _react2.default.PropTypes.func
};
exports.default = (0, _reactCssModules2.default)(Table, _table2.default, { allowMultiple: true });