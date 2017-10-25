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

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * All the rem sizes are based on having the html element set to 65.5% font-size
 */
function Header(_ref) {
  var component = _ref.component,
      children = _ref.children,
      other = (0, _objectWithoutProperties3.default)(_ref, ['component', 'children']);

  return _react2.default.createElement(
    _Text2.default,
    (0, _extends3.default)({}, other, { component: component, header: true }),
    children
  );
}

Header.defaultProps = {
  component: 'div'
};

exports.default = Header;