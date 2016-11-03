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

var _row = require('./row.css');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModificatorType = function () {
  function ModificatorType(input) {
    return input === 'xs' || input === 'sm' || input === 'md' || input === 'lg';
  }

  ;
  (0, _defineProperty2.default)(ModificatorType, _hasInstance2.default, {
    value: function value(input) {
      return ModificatorType(input);
    }
  });
  return ModificatorType;
}();

var DirectionType = function () {
  function DirectionType(input) {
    return input === 'row' || input === 'column';
  }

  ;
  (0, _defineProperty2.default)(DirectionType, _hasInstance2.default, {
    value: function value(input) {
      return DirectionType(input);
    }
  });
  return DirectionType;
}();

var Props = function () {
  function Props(input) {
    return input != null && (input.start === undefined || ModificatorType(input.start)) && (input.center === undefined || ModificatorType(input.center)) && (input.end === undefined || ModificatorType(input.end)) && (input.top === undefined || ModificatorType(input.top)) && (input.middle === undefined || ModificatorType(input.middle)) && (input.bottom === undefined || ModificatorType(input.bottom)) && (input.around === undefined || ModificatorType(input.around)) && (input.between === undefined || ModificatorType(input.between)) && (input.first === undefined || ModificatorType(input.first)) && (input.last === undefined || ModificatorType(input.last)) && (input.component === undefined || typeof input.component === 'string') && input.styles instanceof Object && (input.other === undefined || input.other instanceof Object);
  }

  ;
  (0, _defineProperty2.default)(Props, _hasInstance2.default, {
    value: function value(input) {
      return Props(input);
    }
  });
  return Props;
}();

function getClassNames(props) {
  if (!(props instanceof Object)) {
    throw new TypeError('Value of argument "props" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(props));
  }

  var modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];
  var mods = ['rows'];
  var classMap = {
    xs: 'tiny',
    sm: 'small',
    md: 'medium',
    lg: 'large'
  };

  modificatorKeys.forEach(function (key) {
    if (!(typeof key === 'string')) {
      throw new TypeError('Value of argument "key" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(key));
    }

    var value = classMap[props[key]];

    if (!(value == null || typeof value === 'string')) {
      throw new TypeError('Value of variable "value" violates contract.\n\nExpected:\n?string\n\nGot:\n' + _inspect(value));
    }

    if (value) mods.push(key + '-' + value);
  });

  if (props.reverse) mods.push('reverse');

  return mods.join(' ');
}
/**
 * Row component is used inside the Grid component only
 */
function Row(_ref) {
  var children = _ref.children;
  var Component = _ref.component;
  var styles = _ref.styles;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['children', 'component', 'styles']);

  if (!Props(arguments[0])) {
    throw new TypeError('Value of argument 0 violates contract.\n\nExpected:\nProps\n\nGot:\n' + _inspect(arguments[0]));
  }

  var styleName = getClassNames(other);

  if (!(typeof styleName === 'string')) {
    throw new TypeError('Value of variable "styleName" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(styleName));
  }

  var start = other.start;
  var center = other.center;
  var end = other.end;
  var top = other.top;
  var middle = other.middle;
  var bottom = other.bottom;
  var around = other.around;
  var between = other.between;
  var first = other.first;
  var last = other.last;
  var rest = (0, _objectWithoutProperties3.default)(other, ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: styleName }, rest),
    children
  );
}
Row.defaultProps = {
  component: 'div'
};

exports.default = (0, _reactCssModules2.default)(Row, _row2.default, { allowMultiple: true });

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