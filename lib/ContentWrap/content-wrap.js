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

var _contentWrap = require('./content-wrap.css');

var _contentWrap2 = _interopRequireDefault(_contentWrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Top level container component to wrap all other components, with max width and padding
 */
function ContentWrap(_ref) {
  var children = _ref.children,
      styles = _ref.styles,
      other = (0, _objectWithoutProperties3.default)(_ref, ['children', 'styles']);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { styleName: 'content-wrap' }),
    children
  );
}

exports.default = (0, _reactCssModules2.default)(ContentWrap, _contentWrap2.default);