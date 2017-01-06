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

var _icon = require('./icon.css');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ioIcons = {
  radioChecked: 'm19.8 11.9c4.4 0 8.1 3.6 8.1 8.1s-3.7 8.1-8.1 8.1-8.2-3.6-8.2-8.1 3.7-8.1 8.2-8.1z m0-8.1c8.9 0 16.2 7.3 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.4-16.3-16.3 7.3-16.2 16.3-16.2z m0 29.2c7.1 0 12.9-5.8 12.9-13s-5.8-13-12.9-13-13 5.8-13 13 5.8 13 13 13z',
  radio: 'm19.8 3.8c8.9 0 16.2 7.3 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.4-16.3-16.3 7.3-16.2 16.3-16.2z m0 29.2c7.1 0 12.9-5.8 12.9-13s-5.8-13-12.9-13-13 5.8-13 13 5.8 13 13 13z',
  checkboxChecked: 'm31.6 5c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z m-15 23.4l15-15-2.3-2.4-12.7 12.7-5.9-6-2.3 2.3z',
  checkbox: 'm31.6 8.4h-23.2v23.2h23.2v-23.2z m0-3.4c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z',
  dropdown: 'm10 15h20l-10 10z',
  close: 'm31.8 10.7l-9.3 9.3 9.3 9.3-2.4 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z',
  search: 'm26.4 23.8l8.6 8.6-2.6 2.6-8.5-8.6v-1.3l-0.5-0.5c-2 1.7-4.6 2.7-7.3 2.7-6.2 0-11.1-5-11.1-11.1s4.9-11.2 11-11.2c6.2 0 11.1 5 11.1 11.2 0 2.8-1 5.3-2.6 7.2l0.5 0.4h1.4z m-10.3 0c4.3 0 7.7-3.3 7.7-7.6s-3.4-7.8-7.7-7.8-7.7 3.5-7.7 7.8 3.4 7.6 7.7 7.6z'
};

function Icon(_ref) {
  var _cx;

  var _ref$component = _ref.component,
      Component = _ref$component === undefined ? 'i' : _ref$component,
      name = _ref.name,
      size = _ref.size,
      color = _ref.color,
      styles = _ref.styles,
      other = (0, _objectWithoutProperties3.default)(_ref, ['component', 'name', 'size', 'color', 'styles']);

  var colorStyle = color ? color : null;
  var sizeStyle = size ? size : 'icon';

  var styleName = (0, _classnames2.default)((_cx = {
    icon: true
  }, (0, _defineProperty3.default)(_cx, color, color), (0, _defineProperty3.default)(_cx, size, size), _cx));

  return _react2.default.createElement(
    'svg',
    (0, _extends3.default)({
      fill: 'currentColor',
      preserveAspectRatio: 'xMidYMid meet',
      viewBox: '0 0 40 40',
      styleName: styleName
    }, other),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: ioIcons[name] })
    )
  );
}

Icon.defaultProps = {
  component: 'i',
  size: 'large'
};

exports.default = (0, _reactCssModules2.default)(Icon, _icon2.default, { allowMultiple: true });