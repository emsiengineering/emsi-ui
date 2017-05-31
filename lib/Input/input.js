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

var _input = require('./input.css');

var _input2 = _interopRequireDefault(_input);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Input(_ref) {
  var Component = _ref.component;
  var onChange = _ref.onChange;
  var handleRef = _ref.handleRef;
  var disabled = _ref.disabled;
  var required = _ref.required;
  var error = _ref.error;
  var message = _ref.message;
  var placeholder = _ref.placeholder;
  var children = _ref.children;
  var styles = _ref.styles;
  var icon = _ref.icon;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['component', 'onChange', 'handleRef', 'disabled', 'required', 'error', 'message', 'placeholder', 'children', 'styles', 'icon']);

  var messageStyleName = error ? 'input-message error' : 'input-message';
  var styleName = error ? 'input error' : 'input';

  if (icon) styleName += ' icon';

  return _react2.default.createElement(
    'span',
    { styleName: styleName },
    children,
    _react2.default.createElement(Component, (0, _extends3.default)({
      ref: function ref(el) {
        handleRef(el);
      },
      onChange: onChange,
      disabled: disabled,
      'aria-disabled': disabled,
      'aria-required': required,
      'aria-invalid': error,
      placeholder: placeholder
    }, other)),
    message && _react2.default.createElement(
      'span',
      { styleName: messageStyleName },
      _react2.default.createElement(
        _Text2.default,
        { type: 'caption' },
        message
      )
    )
  );
}

Input.defaultProps = {
  component: 'input',
  disabled: false,
  required: false,
  error: false,
  onChange: function noop() {},
  handleRef: function noop() {},
  icon: false
};

exports.default = (0, _reactCssModules2.default)(Input, _input2.default, { allowMultiple: true });