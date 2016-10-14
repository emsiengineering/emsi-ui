'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _reactAriaMenubutton = require('react-aria-menubutton');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Td = require('../Td');

var _Td2 = _interopRequireDefault(_Td);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _tr = require('./tr.css');

var _tr2 = _interopRequireDefault(_tr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tr = function Tr(_ref) {
  var children = _ref.children;
  var selectable = _ref.selectable;
  var selected = _ref.selected;
  var onSelect = _ref.onSelect;
  var CSS = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['children', 'selectable', 'selected', 'onSelect', 'styles']);

  var selectTd = selectable ? _react2.default.createElement(
    _Td2.default,
    { align: 'center' },
    _react2.default.createElement(_Checkbox2.default, { type: 'cell', checked: selected, onChange: onSelect })
  ) : null;

  var styleName = selectable ? 'row selectable' : 'row';
  styleName += selected ? ' selected' : '';

  return _react2.default.createElement(
    'tr',
    (0, _extends3.default)({}, other, { styleName: styleName, onClick: onSelect }),
    selectTd,
    children
  );
};

Tr.propTypes = {
  styles: _react2.default.PropTypes.object,
  selectable: _react2.default.PropTypes.bool,
  selected: _react2.default.PropTypes.bool,
  onSelect: _react2.default.PropTypes.func
};

Tr.defaultProps = {
  onSelect: function noop() {}
};

exports.default = (0, _reactCssModules2.default)(Tr, _tr2.default, { allowMultiple: true });