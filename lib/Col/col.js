'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _col = require('./col.css');

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClassNames(props) {
  var classMap = {
    xs: 'tiny',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xsOffset: 'tiny-offset',
    smOffset: 'small-offset',
    mdOffset: 'medium-offset',
    lgOffset: 'large-offset'
  };

  // for some reason styleguide throws an error if you chain the join function to end of this
  var concatProps = (0, _keys2.default)(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return (0, _isInteger2.default)(props[key]) ? classMap[key] + '-' + props[key] : key;
  });

  return ['columns'].concat(concatProps).join(' ');
}
/**
 * Col component used only inside the Grid component
 */
function Col(_ref) {
  var children = _ref.children;
  var Component = _ref.component;
  var styles = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['children', 'component', 'styles']);

  var styleName = getClassNames(other);
  var xs = other.xs;
  var sm = other.sm;
  var md = other.md;
  var lg = other.lg;
  var xsOffset = other.xsOffset;
  var smOffset = other.smOffset;
  var mdOffset = other.mdOffset;
  var lgOffset = other.lgOffset;
  var rest = (0, _objectWithoutProperties3.default)(other, ['xs', 'sm', 'md', 'lg', 'xsOffset', 'smOffset', 'mdOffset', 'lgOffset']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: styleName }, rest),
    children
  );
}

Col.defaultProps = {
  component: 'div'
};

exports.default = (0, _reactCssModules2.default)(Col, _col2.default, { allowMultiple: true });