'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _hasInstance = require('babel-runtime/core-js/symbol/has-instance');

var _hasInstance2 = _interopRequireDefault(_hasInstance);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _col = require('./col.css');

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && (input.xs === undefined || typeof input.xs === 'number' || typeof input.xs === 'boolean') && (input.sm === undefined || typeof input.sm === 'number' || typeof input.sm === 'boolean') && (input.md === undefined || typeof input.md === 'number' || typeof input.md === 'boolean') && (input.lg === undefined || typeof input.lg === 'number' || typeof input.lg === 'boolean') && (input.xsOffset === undefined || typeof input.xsOffset === 'number') && (input.smOffset === undefined || typeof input.smOffset === 'number') && (input.mdOffset === undefined || typeof input.mdOffset === 'number') && (input.lgOffset === undefined || typeof input.lgOffset === 'number') && (input.reverse === undefined || typeof input.reverse === 'boolean') && (input.component === undefined || typeof input.component === 'string') && (input.styles === undefined || input.styles instanceof Object) && (input.other === undefined || input.other instanceof Object);
  }

  ;
  (0, _defineProperty2.default)(Props, _hasInstance2.default, {
    value: function value(input) {
      return Props(input);
    }
  });
  return Props;
}();

var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset'
};

function getClassNames(props) {
  function _ref(_id) {
    if (!(typeof _id === 'string')) {
      throw new TypeError('Function "getClassNames" return value violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_id));
    }

    return _id;
  }

  if (!(props instanceof Object)) {
    throw new TypeError('Value of argument "props" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(props));
  }

  var classes = [];

  if (!(Array.isArray(classes) && classes.every(function (item) {
    return typeof item === 'string';
  }))) {
    throw new TypeError('Value of variable "classes" violates contract.\n\nExpected:\nArray<string>\n\nGot:\n' + _inspect(classes));
  }

  if (props.reverse) classes.push('reverse');

  return _ref((0, _keys2.default)(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return (0, _isInteger2.default)(props[key]) ? classMap[key] + '-' + props[key] : key;
  }).concat(classes).join(' '));
}

function Col(_ref2) {
  var children = _ref2.children;
  var _ref2$component = _ref2.component;
  var Component = _ref2$component === undefined ? 'div' : _ref2$component;
  var stylesNames = _ref2.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref2, ['children', 'component', 'styles']);

  if (!Props(arguments[0])) {
    throw new TypeError('Value of argument 0 violates contract.\n\nExpected:\nProps\n\nGot:\n' + _inspect(arguments[0]));
  }

  var styleName = getClassNames(other);

  return _react2.default.createElement(
    'div',
    { styleName: styleName },
    children
  );
}

exports.default = (0, _reactCssModules2.default)(Col, _col2.default, { allowMultiple: true });

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