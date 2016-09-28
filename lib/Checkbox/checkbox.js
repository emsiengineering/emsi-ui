'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _checkbox = require('./checkbox.css');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && (input.value === undefined || typeof input.value === 'string') && (input.radio === undefined || typeof input.radio === 'boolean') && (input.checked === undefined || typeof input.checked === 'boolean') && (input.onChange === undefined || typeof input.onChange === 'function');
  }

  ;
  (0, _defineProperty2.default)(Props, _hasInstance2.default, {
    value: function value(input) {
      return Props(input);
    }
  });
  return Props;
}();

var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox(props) {
    (0, _classCallCheck3.default)(this, Checkbox);

    if (!Props(props)) {
      throw new TypeError('Value of argument "props" violates contract.\n\nExpected:\nProps\n\nGot:\n' + _inspect(props));
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call(this, props));

    _this.handleKeyPress = function (e) {
      if (!(e instanceof Object)) {
        throw new TypeError('Value of argument "e" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(e));
      }

      e.preventDefault();
      // spacebar
      if (e.which === 32 && _this.state.focused) _this.handleChange(e);
    };

    _this.handleChange = function (e) {
      if (!(e instanceof Object)) {
        throw new TypeError('Value of argument "e" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(e));
      }

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
      if (!(checked === undefined || typeof checked === 'boolean')) {
        throw new TypeError('Value of optional argument "checked" violates contract.\n\nExpected:\nbool\n\nGot:\n' + _inspect(checked));
      }

      return checked ? _react2.default.createElement(_Icon2.default, { name: 'radioChecked', styleName: 'selected' }) : _react2.default.createElement(_Icon2.default, { name: 'radio' });
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox(checked) {
      if (!(checked === undefined || typeof checked === 'boolean')) {
        throw new TypeError('Value of optional argument "checked" violates contract.\n\nExpected:\nbool\n\nGot:\n' + _inspect(checked));
      }

      return checked ? _react2.default.createElement(_Icon2.default, { name: 'checkboxChecked', styleName: 'selected' }) : _react2.default.createElement(_Icon2.default, { name: 'checkbox' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var checked = _props.checked;
      var value = _props.value;
      var radio = _props.radio;
      var CSS = _props.styles;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'checked', 'value', 'radio', 'styles']);

      var role = radio ? 'radio' : 'checkbox';

      // tabIndex, onKeyPress and onClick come before ...other so that the user can override the behavior

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
              onClick: this.handleChange,
              onKeyPress: this.handleKeyPress,
              onFocus: this.handleFocus,
              onBlur: this.handleBlur,
              styleName: checked ? 'selected' : 'content'
            }),
            radio ? this.renderRadio(checked) : this.renderCheckbox(checked),
            _react2.default.Children.toArray(children).length > 0 && _react2.default.createElement(
              'span',
              null,
              children
            )
          )
        )
      );
    }
  }]);
  return Checkbox;
}(_react2.default.Component);

Checkbox.props = Props;
Checkbox.defaultProps = {
  radio: false,
  checked: false,
  onChange: function noop() {}
};
exports.default = (0, _reactCssModules2.default)(Checkbox, _checkbox2.default);

function _inspect(input, depth) {
  var maxDepth = 4;
  var maxKeys = 15;

  if (depth === undefined) {
    depth = 0;
  }

  depth += 1;

  if (input === null) {
    return 'null';
  } else if (input === undefined) {
    return 'void';
  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
  } else if (Array.isArray(input)) {
    if (input.length > 0) {
      var _ret = function () {
        if (depth > maxDepth) return {
            v: '[...]'
          };

        var first = _inspect(input[0], depth);

        if (input.every(function (item) {
          return _inspect(item, depth) === first;
        })) {
          return {
            v: first.trim() + '[]'
          };
        } else {
          return {
            v: '[' + input.slice(0, maxKeys).map(function (item) {
              return _inspect(item, depth);
            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
          };
        }
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    } else {
      return 'Array';
    }
  } else {
    var keys = (0, _keys2.default)(input);

    if (!keys.length) {
      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
        return input.constructor.name;
      } else {
        return 'Object';
      }
    }

    if (depth > maxDepth) return '{...}';
    var indent = '  '.repeat(depth - 1);
    var entries = keys.slice(0, maxKeys).map(function (key) {
      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
    }).join('\n  ' + indent);

    if (keys.length >= maxKeys) {
      entries += '\n  ' + indent + '...';
    }

    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
    } else {
      return '{\n  ' + indent + entries + '\n' + indent + '}';
    }
  }
}