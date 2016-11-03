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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && (input.component === undefined || typeof input.component === 'string') && (input.onChange === undefined || typeof input.onChange === 'function') && (input.message === undefined || typeof input.message === 'string') && (input.required === undefined || typeof input.required === 'boolean') && (input.error === undefined || typeof input.error === 'boolean') && (input.disabled === undefined || typeof input.disabled === 'boolean') && input.styles instanceof Object && (input.other === undefined || input.other instanceof Object) && (input.placeholder === undefined || typeof input.placeholder === 'string') && (input.handleRef === undefined || typeof input.handleRef === 'function') && typeof input.icon === 'boolean';
  }

  ;
  (0, _defineProperty2.default)(Props, _hasInstance2.default, {
    value: function value(input) {
      return Props(input);
    }
  });
  return Props;
}();

function Input(_ref) {
  var Component = _ref.component;
  var onChange = _ref.onChange;
  var handleRef = _ref.handleRef;
  var disabled = _ref.disabled;
  var required = _ref.required;
  var error = _ref.error;
  var message = _ref.message;
  var placeholder = _ref.placeholder;
  var children = _ref.children;
  var styles = _ref.styles;
  var icon = _ref.icon;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['component', 'onChange', 'handleRef', 'disabled', 'required', 'error', 'message', 'placeholder', 'children', 'styles', 'icon']);

  if (!Props(arguments[0])) {
    throw new TypeError('Value of argument 0 violates contract.\n\nExpected:\nProps\n\nGot:\n' + _inspect(arguments[0]));
  }

  var messageStyleName = error ? 'input-message error' : 'input-message';
  var styleName = error ? 'input error' : 'input';

  if (icon) styleName += ' icon';

  if (!(typeof styleName === 'string')) {
    throw new TypeError('Value of variable "styleName" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(styleName));
  }

  return _react2.default.createElement(
    'span',
    { styleName: styleName },
    children,
    _react2.default.createElement(Component, (0, _extends3.default)({
      ref: function ref(el) {
        handleRef(el);
      },
      onChange: onChange,
      disabled: disabled,
      'aria-disabled': disabled,
      'aria-required': required,
      'aria-invalid': error,
      placeholder: placeholder
    }, other)),
    message && _react2.default.createElement(
      'span',
      { styleName: messageStyleName },
      _react2.default.createElement(
        _Text2.default,
        { type: 'caption' },
        message
      )
    )
  );
}

Input.defaultProps = {
  component: 'input',
  disabled: false,
  required: false,
  error: false,
  onChange: function noop() {},
  handleRef: function noop() {},
  icon: false
};

exports.default = (0, _reactCssModules2.default)(Input, _input2.default, { allowMultiple: true });

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