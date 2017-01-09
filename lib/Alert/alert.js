'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BlockText = require('../BlockText');

var _BlockText2 = _interopRequireDefault(_BlockText);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = require('../CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

var _alert = require('./alert.css');

var _alert2 = _interopRequireDefault(_alert);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Alert(_ref) {
  var children = _ref.children;
  var title = _ref.title;
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? 'alert' : _ref$type;
  var styles = _ref.styles;

  var classNames = (0, _classnames2.default)((0, _defineProperty3.default)({
    alert: alert
  }, type, type));

  return _react2.default.createElement(
    _Card2.default,
    { styleName: classNames },
    _react2.default.createElement(
      _CardBody2.default,
      null,
      _react2.default.createElement(
        _BlockText2.default,
        { type: 'body', bold: true },
        title,
        '!'
      ),
      _react2.default.createElement(
        _Text2.default,
        { component: 'span', type: 'body' },
        children
      )
    )
  );
}

exports.default = (0, _reactCssModules2.default)(Alert, _alert2.default, { allowMultiple: true });