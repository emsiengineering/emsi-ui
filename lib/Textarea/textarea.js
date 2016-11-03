'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Textarea is a wrapper around the Input component
 * All the same props apply to this component
 */
var Textarea = function Textarea(props) {
  return _react2.default.createElement(
    _Input2.default,
    (0, _extends3.default)({}, props, { component: 'textarea' }),
    props.children
  );
};

exports.default = Textarea;