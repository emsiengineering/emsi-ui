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

var _CheckboxGroup = require('../CheckboxGroup');

var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The RadioGroup component is a wrapper around the CheckboxGroup component, all the props that apply to the CheckboxGroup, apply to this one.
 */
function RadioGroup(props) {
  return _react2.default.createElement(
    _CheckboxGroup2.default,
    (0, _extends3.default)({}, props, { required: true, allowMultiple: false }),
    props.children
  );
}

exports.default = RadioGroup;