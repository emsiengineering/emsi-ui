'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Radio component is a wrapper around the Checkbox component, all the props that apply to the Checkbox, apply to this one.
 */
function Radio(props) {
  return _react2.default.createElement(
    _Checkbox2.default,
    (0, _extends3.default)({}, props, { radio: true }),
    props.children
  );
}

exports.default = Radio;