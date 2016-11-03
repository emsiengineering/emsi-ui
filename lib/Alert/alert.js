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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _hasInstance = require('babel-runtime/core-js/symbol/has-instance');

var _hasInstance2 = _interopRequireDefault(_hasInstance);

var _defineProperty4 = require('babel-runtime/core-js/object/define-property');

var _defineProperty5 = _interopRequireDefault(_defineProperty4);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BlockText = require('../BlockText');

var _BlockText2 = _interopRequireDefault(_BlockText);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = require('../CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

var _alert = require('./alert.css');

var _alert2 = _interopRequireDefault(_alert);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && typeof input.title === 'string' && (input.type === undefined || typeof input.type === 'string') && input.styles instanceof Object;
  }

  ;
  (0, _defineProperty5.default)(Props, _hasInstance2.default, {
    value: function value(input) {
      return Props(input);
    }
  });
  return Props;
}();

function Alert(_ref) {
  var children = _ref.children;
  var title = _ref.title;
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? 'alert' : _ref$type;
  var styles = _ref.styles;

  if (!Props(arguments[0])) {
    throw new TypeError('Value of argument 0 violates contract.\n\nExpected:\nProps\n\nGot:\n' + _inspect(arguments[0]));
  }

  var classNames = (0, _classnames2.default)((0, _defineProperty3.default)({
    alert: alert
  }, type, type));

  return _react2.default.createElement(
    _Card2.default,
    { styleName: classNames },
    _react2.default.createElement(
      _CardBody2.default,
      null,
      _react2.default.createElement(
        _BlockText2.default,
        { type: 'body', bold: true },
        title,
        '!'
      ),
      _react2.default.createElement(
        _Text2.default,
        { component: 'span', type: 'body' },
        children
      )
    )
  );
}

exports.default = (0, _reactCssModules2.default)(Alert, _alert2.default, { allowMultiple: true });

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