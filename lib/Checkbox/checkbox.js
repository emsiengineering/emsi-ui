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

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('./checkbox.css');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox(props) {
    (0, _classCallCheck3.default)(this, Checkbox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call(this, props));

    _this.handleKeyPress = function (e) {
      e.preventDefault();
      // spacebar
      if (e.which === 32 && _this.state.focused) _this.handleChange(e);
    };

    _this.handleChange = function (e) {
      _this.props.onChange(e, _this.props.value);
    };

    _this.handleFocus = function () {
      _this.setState({
        focused: true
      });
    };

    _this.handleBlur = function () {
      _this.setState({
        focused: false
      });
    };

    _this.state = {
      focused: false
    };
    return _this;
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'renderRadio',
    value: function renderRadio(checked) {
      return checked ? _react2.default.createElement(_Icon2.default, { name: 'radioChecked', styleName: 'checkbox selected' }) : _react2.default.createElement(_Icon2.default, { name: 'radio' });
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox(checked) {
      return checked ? _react2.default.createElement(_Icon2.default, { name: 'checkboxChecked', styleName: 'checkbox' }) : _react2.default.createElement(_Icon2.default, { name: 'checkbox' });
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
      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'checked', 'value', 'radio', 'styles']);

      var role = radio ? 'radio' : 'checkbox';

      // tabIndex, onKeyPress and onClick come before ...other so that the user can override the behavior

      return _react2.default.createElement(
        _Label2.default,
        null,
        _react2.default.createElement(
          'div',
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
        )
      );
    }
  }]);
  return Checkbox;
}(_react2.default.Component);

Checkbox.defaultProps = {
  value: '',
  radio: false,
  checked: false,
  onChange: function noop() {}
};
exports.default = (0, _reactCssModules2.default)(Checkbox, _checkbox2.default, { allowMultiple: true });