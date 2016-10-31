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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _header = require('./header.css');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && (input.type === 'display' || input.type === 'headline' || input.type === 'title' || input.type === 'subtitle' || input.type === 'body' || input.type === 'caption' || input.type === 'footnote') && (input.color === undefined || input.color === 'primary' || input.color === 'alternate' || input.color === 'inherit') && (input.bold === undefined || typeof input.bold === 'boolean') && (input.component === undefined || typeof input.component === 'string') && input.styles == null && (input.other === undefined || input.other == null) && (input.handleRef === undefined || typeof input.handleRef === 'function');
  }

  ;
  (0, _defineProperty2.default)(Props, _hasInstance2.default, {
    value: function value(input) {
      return Props(input);
    }
  });
  return Props;
}();
/**
 * All the rem sizes are based on having the html element set to 65.5% font-size
 */


var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    if (!Props(props)) {
      throw new TypeError('Value of argument "props" violates contract.\n\nExpected:\nProps\n\nGot:\n' + _inspect(props));
    }

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var _props$component = _props.component;
      var Component = _props$component === undefined ? 'div' : _props$component;
      var handleRef = _props.handleRef;
      var color = _props.color;
      var children = _props.children;
      var type = _props.type;
      var bold = _props.bold;
      var CSSStyles = _props.styles;
      var other = (0, _objectWithoutProperties3.default)(_props, ['component', 'handleRef', 'color', 'children', 'type', 'bold', 'styles']);

      var styleNames = bold ? type + ' bold' : '' + type;
      return _react2.default.createElement(
        Component,
        (0, _extends3.default)({}, other, {
          ref: function ref(el) {
            handleRef(el);
          },
          styleName: styleNames += ' ' + color
        }),
        children
      );
    }
  }]);
  return Header;
}(_react2.default.Component);

Header.propTypes = {
  type: function type(props, name, component) {
    var prop = props[name];

    if (!(prop === 'display' || prop === 'headline' || prop === 'title' || prop === 'subtitle' || prop === 'body' || prop === 'caption' || prop === 'footnote')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + '\'display\' | \'headline\' | \'title\' | \'subtitle\' | \'body\' | \'caption\' | \'footnote\'' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  color: function color(props, name, component) {
    var prop = props[name];

    if (!(prop === 'primary' || prop === 'alternate' || prop === 'inherit')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + '\'primary\' | \'alternate\' | \'inherit\'' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  bold: function bold(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'boolean')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'bool' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
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
  children: function children() {},
  styles: function styles(props, name, component) {
    var prop = props[name];

    if (!(prop == null)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'void' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  other: function other(props, name, component) {
    var prop = props[name];

    if (!(prop == null)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'void' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  handleRef: function handleRef(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'function')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Function' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  }
};

Header.defaultProps = {
  component: 'div',
  bold: false,
  color: 'inherit'
};

exports.default = (0, _reactCssModules2.default)(Header, _header2.default, { allowMultiple: true });

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