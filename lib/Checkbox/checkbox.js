'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

<<<<<<< 6487bff1a622db970525c9685b46d3c857d4ac71
var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

<<<<<<< 4d61d274940ebc2cbd39cd46e5d16735fcb9396c
=======
=======
>>>>>>> upped package version and ran final build
var _whatInput = require('what-input');

var _whatInput2 = _interopRequireDefault(_whatInput);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

>>>>>>> update build
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

<<<<<<< 4d61d274940ebc2cbd39cd46e5d16735fcb9396c
var _whatInput = require('what-input');

var _whatInput2 = _interopRequireDefault(_whatInput);

=======
>>>>>>> update build
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< 6487bff1a622db970525c9685b46d3c857d4ac71
var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox(props) {
    (0, _classCallCheck3.default)(this, Checkbox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call(this, props));

    _this.state = {
      focused: false
    };
    return _this;
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'renderRadio',
    value: function renderRadio(checked) {
      return checked ? _react2.default.createElement(_Icon2.default, { name: 'radioChecked', styleName: 'selected', size: 'medium' }) : _react2.default.createElement(_Icon2.default, { name: 'radio', size: 'medium' });
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox(checked) {
      return checked ? _react2.default.createElement(_Icon2.default, { name: 'checkboxChecked', size: 'medium' }) : _react2.default.createElement(_Icon2.default, { name: 'checkbox', size: 'medium' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var checked = _props.checked;
      var value = _props.value;
      var radio = _props.radio;
      var styles = _props.styles;
      var onChange = _props.onChange;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'checked', 'value', 'radio', 'styles', 'onChange']);

      var role = radio ? 'radio' : 'checkbox';

<<<<<<< 4d61d274940ebc2cbd39cd46e5d16735fcb9396c
=======
      console.log(value, checked);

      // tabIndex, onKeyPress and onClick come before ...other so that the user can override the behavior

>>>>>>> update build
      return _react2.default.createElement(
        _Label2.default,
        null,
        _react2.default.createElement(
          'div',
<<<<<<< 4d61d274940ebc2cbd39cd46e5d16735fcb9396c
=======
<<<<<<< 8253ebac2b07590c4dc8cc1b744529cc8b269af9
          (0, _extends3.default)({
            tabIndex: '0'
          }, other, {
            role: role,
            'aria-checked': checked,
            onClick: this.handleChange,
            onKeyPress: this.handleKeyPress,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            styleName: checked ? 'checkbox selected' : 'checkbox'
          }),
          radio ? this.renderRadio(checked) : this.renderCheckbox(checked),
          _react2.default.Children.toArray(children).length > 0 && _react2.default.createElement(
            'span',
            null,
            children
          )
=======
>>>>>>> update build
          null,
          _react2.default.createElement(
            'div',
            (0, _extends3.default)({
              tabIndex: '0'
            }, other, {
              role: role,
              'aria-checked': checked,
              styleName: checked ? 'checkbox selected' : 'checkbox'
            }),
            radio ? this.renderRadio(checked) : this.renderCheckbox(checked),
            _react2.default.Children.toArray(children).length > 0 && _react2.default.createElement(
              _Text2.default,
              { type: 'body' },
              children
            )
          ),
          _react2.default.createElement('input', { type: role, style: { display: 'none' }, onChange: function (_onChange) {
              function onChange(_x) {
                return _onChange.apply(this, arguments);
              }

              onChange.toString = function () {
                return _onChange.toString();
              };

              return onChange;
            }(function (e) {
              return onChange(e, value);
            }), defaultValue: value, defaultChecked: checked })
<<<<<<< 4d61d274940ebc2cbd39cd46e5d16735fcb9396c
=======
>>>>>>> update build
>>>>>>> update build
=======
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
  var onChange = _ref.onChange;
  var children = _ref.children;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['value', 'radio', 'checked', 'onChange', 'children']);

  var role = radio ? 'radio' : 'checkbox';

  return _react2.default.createElement(
    _Label2.default,
    null,
    _react2.default.createElement(
      'div',
      null,
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
          { type: 'body' },
          children
>>>>>>> upped package version and ran final build
        )
      ),
      _react2.default.createElement('input', { type: role, style: { display: 'none' }, onChange: function (_onChange) {
          function onChange(_x) {
            return _onChange.apply(this, arguments);
          }

          onChange.toString = function () {
            return _onChange.toString();
          };

          return onChange;
        }(function (e) {
          return onChange(e, value);
        }), defaultValue: value, defaultChecked: checked })
    )
  );
}

exports.default = (0, _reactCssModules2.default)(Checkbox, _checkbox2.default, { allowMultiple: true });