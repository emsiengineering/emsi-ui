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

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _td = require('./td.css');

var _td2 = _interopRequireDefault(_td);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Td = function Td(_ref) {
  var children = _ref.children;
  var Component = _ref.component;
  var align = _ref.align;
  var CSS = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['children', 'component', 'align', 'styles']);

  var styleName = align === 'left' ? 'column' : 'column ' + align;

  if (_react2.default.Children.toArray(children)[0].type === _Checkbox2.default) return _react2.default.createElement(
    Component,
    (0, _extends3.default)({}, other, { styleName: styleName + ' checkbox' }),
    children
  );else return _react2.default.createElement(
    Component,
    (0, _extends3.default)({}, other, { styleName: styleName }),
    children
  );
};

Td.propTypes = {
  styles: _react2.default.PropTypes.object,
  align: _react2.default.PropTypes.oneOf(['left', 'center', 'right']),
  component: _react2.default.PropTypes.string
};

Td.defaultProps = {
  align: 'left',
  component: 'td'
};

exports.default = (0, _reactCssModules2.default)(Td, _td2.default, { allowMultiple: true });