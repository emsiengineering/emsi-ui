'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _hasInstance = require('babel-runtime/core-js/symbol/has-instance');

var _hasInstance2 = _interopRequireDefault(_hasInstance);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _input = require('./input.css');

var _input2 = _interopRequireDefault(_input);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && (input.children === undefined || typeof input.children === 'string') && (input.component === undefined || typeof input.component === 'string') && (input.onChange === undefined || typeof input.onChange === 'function') && (input.errorMessage === undefined || typeof input.errorMessage === 'string') && (input.required === undefined || typeof input.required === 'boolean') && (input.error === undefined || typeof input.error === 'boolean') && (input.disabled === undefined || typeof input.disabled === 'boolean') && input.styles instanceof Object && (input.other === undefined || input.other instanceof Object) && (input.placeholder === undefined || typeof input.placeholder === 'string');
  }

  ;
  (0, _defineProperty2.default)(Props, _hasInstance2.default, {
    value: function value(input) {
      return Props(input);
    }
  });
  return Props;
}();

var Input = function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var _props$component = _props.component;
      var Component = _props$component === undefined ? 'input' : _props$component;
      var _props$onChange = _props.onChange;
      var onChange = _props$onChange === undefined ? function noop() {} : _props$onChange;
      var _props$handleRef = _props.handleRef;
      var handleRef = _props$handleRef === undefined ? function noop() {} : _props$handleRef;
      var disabled = _props.disabled;
      var required = _props.required;
      var invalid = _props.invalid;
      var error = _props.error;
      var errorMessage = _props.errorMessage;
      var placeholder = _props.placeholder;
      var children = _props.children;
      var ref = _props.ref;
      var other = (0, _objectWithoutProperties3.default)(_props, ['component', 'onChange', 'handleRef', 'disabled', 'required', 'invalid', 'error', 'errorMessage', 'placeholder', 'children', 'ref']);

      var styleName = error ? 'error' : 'input';

      return _react2.default.createElement(
        'label',
        { styleName: 'label' },
        _react2.default.createElement(Component, (0, _extends3.default)({
          ref: function ref(el) {
            handleRef(el);
          },
          onChange: onChange,
          disabled: disabled,
          styleName: styleName,
          'aria-disabled': disabled,
          'aria-required': required,
          'aria-invalid': error,
          placeholder: placeholder,
          defaultValue: children
        }, other)),
        error && errorMessage && _react2.default.createElement(
          'span',
          { styleName: 'message' },
          _react2.default.createElement(
            _Header2.default,
            { type: 'footnote', component: 'span' },
            errorMessage
          )
        )
      );
    }
  }]);
  return Input;
}(_react2.default.Component);

exports.default = (0, _reactCssModules2.default)(Input, _input2.default, { allowMultiple: true });