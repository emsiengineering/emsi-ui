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

var _grid = require('./grid.css');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Gird is composed of 12 flexable columns, it has a gutter of 2rem between columns
 * It breaks down at 1024px and 767px
 */
function Grid(_ref) {
  var fluid = _ref.fluid;
  var children = _ref.children;
  var Component = _ref.component;
  var styles = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['fluid', 'children', 'component', 'styles']);

  var styleName = fluid ? 'grid fluid' : 'grid';

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { styleName: styleName }),
    children
  );
}
Grid.defaultProps = {
  component: 'div',
  fluid: false
};

exports.default = (0, _reactCssModules2.default)(Grid, _grid2.default, { allowMultiple: true });