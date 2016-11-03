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

var _row = require('./row.css');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClassNames(props) {
  var modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];
  var mods = ['rows'];
  var classMap = {
    xs: 'tiny',
    sm: 'small',
    md: 'medium',
    lg: 'large'
  };

  modificatorKeys.forEach(function (key) {
    var value = classMap[props[key]];

    if (value) mods.push(key + '-' + value);
  });

  if (props.reverse) mods.push('reverse');

  return mods.join(' ');
}
/**
 * Row component is used inside the Grid component only
 */
function Row(_ref) {
  var children = _ref.children;
  var Component = _ref.component;
  var styles = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['children', 'component', 'styles']);

  var styleName = getClassNames(other);
  var start = other.start;
  var center = other.center;
  var end = other.end;
  var top = other.top;
  var middle = other.middle;
  var bottom = other.bottom;
  var around = other.around;
  var between = other.between;
  var first = other.first;
  var last = other.last;
  var rest = (0, _objectWithoutProperties3.default)(other, ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: styleName }, rest),
    children
  );
}
Row.defaultProps = {
  component: 'div'
};

exports.default = (0, _reactCssModules2.default)(Row, _row2.default, { allowMultiple: true });