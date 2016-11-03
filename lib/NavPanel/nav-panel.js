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

var _lodash = require('lodash.uniqueid');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContentWrap = require('../ContentWrap');

var _ContentWrap2 = _interopRequireDefault(_ContentWrap);

var _navPanel = require('./nav-panel.css');

var _navPanel2 = _interopRequireDefault(_navPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && (input.onClick === undefined || typeof input.onClick === 'function' || input.onClick == null) && (input.invert === undefined || typeof input.invert === 'boolean' || input.invert == null);
  }

  ;
  (0, _defineProperty2.default)(Props, _hasInstance2.default, {
    value: function value(input) {
      return Props(input);
    }
  });
  return Props;
}();

var NavPanel = function (_React$Component) {
  (0, _inherits3.default)(NavPanel, _React$Component);

  function NavPanel() {
    (0, _classCallCheck3.default)(this, NavPanel);
    return (0, _possibleConstructorReturn3.default)(this, (NavPanel.__proto__ || (0, _getPrototypeOf2.default)(NavPanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavPanel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        {
          role: 'navigation',
          styleName: 'nav-panel'
        },
        this.props.children
      );
    }
  }]);
  return NavPanel;
}(_react2.default.Component);

NavPanel.defaultProps = {
  activePosition: 'bottom'
};
NavPanel.propTypes = {
  onClick: function onClick(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'function' || prop == null)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Function | void' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  invert: function invert(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'boolean' || prop == null)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'bool | void' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  children: function children() {}
};
exports.default = (0, _reactCssModules2.default)(NavPanel, _navPanel2.default, { allowMultiple: true });

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