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

var _checkbox = require('./checkbox.css');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _whatInput = require('what-input');

var _whatInput2 = _interopRequireDefault(_whatInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderRadio(checked) {
  return checked ? _react2.default.createElement(_Icon2.default, { name: 'radioChecked', styleName: 'selected', size: 'medium' }) : _react2.default.createElement(_Icon2.default, { name: 'radio', size: 'medium' });
}

function renderCheckbox(checked) {
  return checked ? _react2.default.createElement(_Icon2.default, { name: 'checkboxChecked', size: 'medium' }) : _react2.default.createElement(_Icon2.default, { name: 'checkbox', size: 'medium' });
}

function Checkbox(_ref) {
  var value = _ref.value;
  var radio = _ref.radio;
  var checked = _ref.checked;
  var children = _ref.children;
  var id = _ref.id;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['value', 'radio', 'checked', 'children', 'id']);

  var role = radio ? 'radio' : 'checkbox';

  return _react2.default.createElement(
    _Label2.default,
    { htmlFor: id },
    _react2.default.createElement(
      'div',
      { styleName: 'container' },
      _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          tabIndex: '0'
        }, other, {
          role: role,
          'aria-checked': checked,
          styleName: checked ? 'checkbox selected' : 'checkbox'
        }),
        radio ? renderRadio(checked) : renderCheckbox(checked),
        _react2.default.Children.toArray(children).length > 0 && _react2.default.createElement(
          _Text2.default,
          { type: 'caption' },
          children
        )
      ),
      _react2.default.createElement('input', {
        id: id,
        type: role,
        style: { display: 'none' },
        defaultValue: value,
        defaultChecked: checked })
    )
  );
}

exports.default = (0, _reactCssModules2.default)(Checkbox, _checkbox2.default, { allowMultiple: true });