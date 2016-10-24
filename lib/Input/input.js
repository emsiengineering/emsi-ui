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

var _input = require('./input.css');

var _input2 = _interopRequireDefault(_input);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && (input.children === undefined || typeof input.children === 'string') && (input.component === undefined || typeof input.component === 'string') && (input.onChange === undefined || typeof input.onChange === 'function') && (input.errorMessage === undefined || typeof input.errorMessage === 'string') && (input.required === undefined || typeof input.required === 'boolean') && (input.error === undefined || typeof input.error === 'boolean') && (input.disabled === undefined || typeof input.disabled === 'boolean') && input.css instanceof Object && (input.other === undefined || input.other instanceof Object) && (input.placeholder === undefined || typeof input.placeholder === 'string') && (input.handleRef === undefined || typeof input.handleRef === 'function') && (input.ref === undefined || typeof input.ref === 'function') && typeof input.id === 'string' && typeof input.label === 'string';
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

  function Input(props) {
    (0, _classCallCheck3.default)(this, Input);

    if (!Props(props)) {
      throw new TypeError('Value of argument "props" violates contract.\n\nExpected:\nProps\n\nGot:\n' + _inspect(props));
    }

    return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var Component = _props.component;
      var onChange = _props.onChange;
      var id = _props.id;
      var label = _props.label;
      var handleRef = _props.handleRef;
      var disabled = _props.disabled;
      var required = _props.required;
      var error = _props.error;
      var errorMessage = _props.errorMessage;
      var placeholder = _props.placeholder;
      var children = _props.children;
      var ref = _props.ref;
      var css = _props.css;
      var other = (0, _objectWithoutProperties3.default)(_props, ['component', 'onChange', 'id', 'label', 'handleRef', 'disabled', 'required', 'error', 'errorMessage', 'placeholder', 'children', 'ref', 'css']);

      var styleName = error ? 'error' : 'input';

      return _react2.default.createElement(
        'label',
        { htmlFor: id, styleName: 'label' },
        label,
        _react2.default.createElement(Component, (0, _extends3.default)({
          id: id,
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

Input.propTypes = {
  children: function children(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'string')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'string' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  component: function (_component) {
    function component(_x, _x2, _x3) {
      return _component.apply(this, arguments);
    }

    component.toString = function () {
      return _component.toString();
    };

    return component;
  }(function (props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'string')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'string' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  }),
  onChange: function onChange(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'function')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Function' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  errorMessage: function errorMessage(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'string')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'string' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  required: function required(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'boolean')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'bool' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  error: function error(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'boolean')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'bool' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  disabled: function disabled(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'boolean')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'bool' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  css: function css(props, name, component) {
    var prop = props[name];

    if (!(prop instanceof Object)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Object' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  other: function other(props, name, component) {
    var prop = props[name];

    if (!(prop instanceof Object)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Object' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  placeholder: function placeholder(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'string')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'string' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  handleRef: function handleRef(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'function')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Function' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  ref: function ref(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'function')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Function' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  id: function id(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'string')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'string' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  label: function label(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'string')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'string' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  }
};


Input.defaultProps = {
  component: 'input',
  disabled: false,
  required: false,
  error: false,
  onChange: function noop() {},
  handleRef: function noop() {}
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