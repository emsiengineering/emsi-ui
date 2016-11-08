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

var _navItem = require('./nav-item.css');

var _navItem2 = _interopRequireDefault(_navItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tab can't be used outside the TabPanel Component context
 */
function NavItem(_ref) {
  var children = _ref.children;
  var active = _ref.active;
  var styles = _ref.styles;
  var title = _ref.title;
  var tabIndex = _ref.tabIndex;
  var top = _ref.top;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['children', 'active', 'styles', 'title', 'tabIndex', 'top']);

  var styleName = (0, _classnames2.default)({
    'nav-item': true,
    active: active,
    top: top
  });

  var styleNameBorder = (0, _classnames2.default)({
    'nav-item-border': true,
    active: active
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({
      styleName: styleName,
      tabIndex: tabIndex
    }, other),
    _react2.default.createElement(
      'div',
      { styleName: 'nav-item-text' },
      title
    ),
    _react2.default.createElement('div', { styleName: 'nav-item-border' })
  );
}

NavItem.defaultProps = {
  tabIndex: 0,
  top: false
};

exports.default = (0, _reactCssModules2.default)(NavItem, _navItem2.default, { allowMultiple: true });