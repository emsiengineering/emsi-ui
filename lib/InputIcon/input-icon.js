'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inputIcon = require('./input-icon.css');

var _inputIcon2 = _interopRequireDefault(_inputIcon);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputIcon(_ref) {
  var name = _ref.name;
  var styles = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['name', 'styles']);


  return _react2.default.createElement(_Icon2.default, { name: name, styleName: 'input-icon', size: 'medium' });
}

InputIcon.defaultProps = {
  name: 'search'
};

exports.default = (0, _reactCssModules2.default)(InputIcon, _inputIcon2.default, { allowMultiple: true });