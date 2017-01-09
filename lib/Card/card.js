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

var _card = require('./card.css');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(_ref) {
  var Component = _ref.component;
  var children = _ref.children;
  var styles = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['component', 'children', 'styles']);

  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({ styleName: 'card' }, other),
    children
  );
}

Card.defaultProps = {
  component: 'div'
};

exports.default = (0, _reactCssModules2.default)(Card, _card2.default);