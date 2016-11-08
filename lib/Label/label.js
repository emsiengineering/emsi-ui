'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _label = require('./label.css');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Label(_ref) {
  var Component = _ref.component;
  var color = _ref.color;
  var children = _ref.children;
  var styles = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['component', 'color', 'children', 'styles']);

  var styleName = (0, _classnames2.default)((0, _defineProperty3.default)({
    label: true
  }, color, color));

  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({ styleName: styleName }, other),
    children
  );
}
Label.defaultProps = {
  component: 'label'
};

exports.default = (0, _reactCssModules2.default)(Label, _label2.default, { allowMultiple: true });