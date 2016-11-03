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

var _cardBody = require('./card-body.css');

var _cardBody2 = _interopRequireDefault(_cardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardBody(_ref) {
  var _ref$component = _ref.component;
  var Component = _ref$component === undefined ? 'div' : _ref$component;
  var children = _ref.children;
  var styles = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['component', 'children', 'styles']);

  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({ styleName: 'card-body' }, other),
    children
  );
}

exports.default = (0, _reactCssModules2.default)(CardBody, _cardBody2.default);