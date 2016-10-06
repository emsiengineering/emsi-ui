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

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require('../Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && (input.allowMultiple === undefined || typeof input.allowMultiple === 'boolean') && (input.required === undefined || typeof input.required === 'boolean') && Array.isArray(input.children) && input.children.every(function (item) {
      return item instanceof Object;
    }) && (input.onChange === undefined || typeof input.onChange === 'function');
  }

  ;
  (0, _defineProperty2.default)(Props, _hasInstance2.default, {
    value: function value(input) {
      return Props(input);
    }
  });
  return Props;
}();

var CheckboxGroup = function (_React$Component) {
  (0, _inherits3.default)(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    (0, _classCallCheck3.default)(this, CheckboxGroup);

    if (!Props(props)) {
      throw new TypeError('Value of argument "props" violates contract.\n\nExpected:\nProps\n\nGot:\n' + _inspect(props));
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (CheckboxGroup.__proto__ || (0, _getPrototypeOf2.default)(CheckboxGroup)).call(this, props));

    _this.handleClick = function (e, value) {
      if (!(e instanceof Object)) {
        throw new TypeError('Value of argument "e" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(e));
      }

      if (!(typeof value === 'string')) {
        throw new TypeError('Value of argument "value" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(value));
      }

      var selected = _this.state.selected;

      if (!Array.isArray(selected)) {
        throw new TypeError('Value of variable "selected" violates contract.\n\nExpected:\nArray\n\nGot:\n' + _inspect(selected));
      }

      var changeCallback = function changeCallback() {
        var state = _this.state.selected.length == 1 ? _this.state.selected[0] : _this.state.selected;

        if (!(typeof state === 'string' || Array.isArray(state) && state.every(function (item) {
          return typeof item === 'string';
        }))) {
          throw new TypeError('Value of variable "state" violates contract.\n\nExpected:\nstring | Array<string>\n\nGot:\n' + _inspect(state));
        }

        _this.props.onChange(e, state);
      };

      // if the value is in the array and this doesn't force a selection
      // remove it.
      if (selected.includes(value) && !_this.props.required) {
        selected = selected.filter(function (input) {
          return input !== value;
        });

        // selection is forced, so don't remove values.

        if (!Array.isArray(selected)) {
          throw new TypeError('Value of variable "selected" violates contract.\n\nExpected:\nArray\n\nGot:\n' + _inspect(selected));
        }
      } else if (selected.includes(value) && _this.props.required) {
        return;

        // it's not already selected, so if we allow multiple push it
      } else if (_this.props.allowMultiple) {
        selected.push(value);

        // we don't allow multiples so reset it
      } else {
        selected = [];
        selected.push(value);
      }

      _this.setState({
        selected: selected
      }, changeCallback);
    };

    _this.state = {
      selected: []
    };
    return _this;
  }

  (0, _createClass3.default)(CheckboxGroup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var selected = [];
      var firstChild = '';

      // loop through children looking for default checked
      _react2.default.Children.toArray(this.props.children).forEach(function (child, index) {
        if (!(child instanceof Object)) {
          throw new TypeError('Value of argument "child" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(child));
        }

        if (!(typeof index === 'number')) {
          throw new TypeError('Value of argument "index" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(index));
        }

        if (child.props.checked) selected.push(child.props.value);

        // grab the first child
        if (index === 0) firstChild = child.props.value;

        if (!(typeof firstChild === 'string')) {
          throw new TypeError('Value of variable "firstChild" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(firstChild));
        }
      });

      // if this doesn't allow multiples, only grab the first checked
      if (selected.length > 0 && !this.props.allowMultiple) selected = [selected[0]];

      // if none are checked and required is on, grab the first child
      else if (selected.length === 0 && this.props.required) selected = [firstChild];

      if (selected.length > 0) this.setState({
        selected: selected
      });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(children) {
      var _this2 = this;

      if (!Array.isArray(children)) {
        throw new TypeError('Value of argument "children" violates contract.\n\nExpected:\nArray\n\nGot:\n' + _inspect(children));
      }

      return children.map(function (child, index) {
        if (!(child instanceof Object)) {
          throw new TypeError('Value of argument "child" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(child));
        }

        if (!(typeof index === 'number')) {
          throw new TypeError('Value of argument "index" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(index));
        }

        return _react2.default.cloneElement(child, (0, _extends3.default)({}, child.props, {
          checked: _this2.state.selected.includes(child.props.value),
          onChange: _this2.handleClick,
          key: 'checkbox-' + index
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderChildren(this.props.children)
      );
    }
  }]);
  return CheckboxGroup;
}(_react2.default.Component);

CheckboxGroup.defaultProps = {
  allowMultiple: true,
  onChange: function noop() {}
};
exports.default = CheckboxGroup;

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