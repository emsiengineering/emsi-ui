'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button.css');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var Component = _ref.component;
  var disabled = _ref.disabled;
  var children = _ref.children;
  var type = _ref.type;
  var styles = _ref.styles;
  var active = _ref.active;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['component', 'disabled', 'children', 'type', 'styles', 'active']);

  var styleName = {
    button: true,
    active: active
  };

  if (type !== 'primary') styleName[type] = true;

  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({}, other, { tabIndex: '0', disabled: Component === 'button' && disabled, styleName: (0, _classnames2.default)(styleName) }),
    children
  );
}

Button.defaultProps = {
  component: 'button',
  type: 'primary',
  disabled: false,
  active: false
};

exports.default = (0, _reactCssModules2.default)(Button, _button2.default, { allowMultiple: true });