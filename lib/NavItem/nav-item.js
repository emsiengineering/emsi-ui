'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _navItem = require('./nav-item.css');

var _navItem2 = _interopRequireDefault(_navItem);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tab can't be used outside the TabPanel Component context
 */
function NavItem(_ref) {
  var children = _ref.children;
  var active = _ref.active;
  var styles = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['children', 'active', 'styles']);

  var styleName = active ? 'nav-item active' : 'nav-item';

  return _react2.default.createElement(
    'li',
    (0, _extends3.default)({
      styleName: styleName
    }, other),
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
}

NavItem.defaultProps = {
  tabIndex: 0
};

exports.default = (0, _reactCssModules2.default)(NavItem, _navItem2.default, { allowMultiple: true });