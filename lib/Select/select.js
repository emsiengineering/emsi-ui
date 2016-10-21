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

var _reactAriaMenubutton = require('react-aria-menubutton');

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _select = require('./select.css');

var _select2 = _interopRequireDefault(_select);

var _lodash = require('lodash.uniqueid');

var _lodash2 = _interopRequireDefault(_lodash);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && Array.isArray(input.children) && input.children.every(function (item) {
      return item instanceof Object;
    }) && (input.onSelect === undefined || typeof input.onSelect === 'function') && (input.disabled === undefined || typeof input.disabled === 'boolean') && (input.styles instanceof Object || input.styles == null) && (input.other === undefined || input.other instanceof Object || input.other == null);
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
 * Required to use the Option Component for a Select's children
 * The select box has a fixed width, long options will be clipped
 */


var Select = function (_React$Component) {
  (0, _inherits3.default)(Select, _React$Component);

  function Select(props) {
    (0, _classCallCheck3.default)(this, Select);

    if (!Props(props)) {
      throw new TypeError('Value of argument "props" violates contract.\n\nExpected:\nProps\n\nGot:\n' + _inspect(props));
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, props));

    _this.handleSelection = function (option, e) {
      if (!(e instanceof Object)) {
        throw new TypeError('Value of argument "e" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(e));
      }

      _this.props.onSelect(option);
      _this.setState({
        activeOption: option
      });
    };

    _this.state = {
      activeOption: null,
      id: (0, _lodash2.default)('wrapper')
    };
    return _this;
  }

  (0, _createClass3.default)(Select, [{
    key: 'renderChildren',
    value: function renderChildren(children) {
      var _this2 = this;

      if (!(Array.isArray(children) && children.every(function (item) {
        return item instanceof Object;
      }))) {
        throw new TypeError('Value of argument "children" violates contract.\n\nExpected:\nArray<Object>\n\nGot:\n' + _inspect(children));
      }

      return children.map(function (option, index) {
        if (!(option instanceof Object)) {
          throw new TypeError('Value of argument "option" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(option));
        }

        if (!(typeof index === 'number')) {
          throw new TypeError('Value of argument "index" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(index));
        }

        return _react2.default.cloneElement(option, {
          active: option.props.children === _this2.state.activeOption,
          key: 'option' + index
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var CSSStyles = _props.styles;
      var other = (0, _objectWithoutProperties3.default)(_props, ['styles']);


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactAriaMenubutton.Wrapper,
          (0, _extends3.default)({}, other, {
            onSelection: this.handleSelection,
            id: this.state.id
          }),
          _react2.default.createElement(
            _reactAriaMenubutton.Button,
            { disabled: this.props.disabled, styleName: this.props.disabled ? 'disabled' : 'wrapper' },
            _react2.default.createElement(
              'span',
              null,
              this.state.activeOption === null ? 'Select Option' : this.state.activeOption
            ),
            _react2.default.createElement(_Icon2.default, { name: 'dropdown', size: 'small' })
          ),
          !this.props.disabled && _react2.default.createElement(
            _reactAriaMenubutton.Menu,
            { styleName: 'menu' },
            _react2.default.createElement(
              'ul',
              { styleName: 'ul' },
              this.renderChildren(this.props.children)
            )
          )
        )
      );
    }
  }]);
  return Select;
}(_react2.default.Component);

Select.defaultProps = {
  onSelect: function noop() {},
  disabled: false
};
Select.propTypes = {
  children: function children(props, name, component) {
    var prop = props[name];

    if (!(Array.isArray(prop) && prop.every(function (item) {
      return item instanceof Object;
    }))) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Array<Object>' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  onSelect: function onSelect(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'function')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Function' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  disabled: function disabled(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'boolean')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'bool' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  styles: function styles(props, name, component) {
    var prop = props[name];

    if (!(prop instanceof Object || prop == null)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Object | void' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  other: function other(props, name, component) {
    var prop = props[name];

    if (!(prop instanceof Object || prop == null)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Object | void' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  }
};
exports.default = (0, _reactCssModules2.default)(Select, _select2.default);

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