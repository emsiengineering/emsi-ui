'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('./text.css');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * All the rem sizes are based on having the html element set to 65.5% font-size
 */
function Text(_ref) {
  var Component = _ref.component;
  var color = _ref.color;
  var children = _ref.children;
  var type = _ref.type;
  var bold = _ref.bold;
  var styles = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['component', 'color', 'children', 'type', 'bold', 'styles']);


  var styleNames = bold ? 'font ' + type + ' bold' : 'font ' + type;

  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({}, other, { styleName: styleNames + ' ' + color }),
    children
  );
}

Text.defaultProps = {
  component: 'span',
  bold: false,
  color: 'inherit'
};

exports.default = (0, _reactCssModules2.default)(Text, _text2.default, { allowMultiple: true });