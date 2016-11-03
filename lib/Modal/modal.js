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

var _reactAriaModal = require('react-aria-modal');

var _reactAriaModal2 = _interopRequireDefault(_reactAriaModal);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modal = require('./modal.css');

var _modal2 = _interopRequireDefault(_modal);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && typeof input.title === 'string' && typeof input.onExit === 'function' && (input.underlayClickExits === undefined || typeof input.underlayClickExits === 'boolean' || input.underlayClickExits == null) && (input.rootElementId === undefined || typeof input.rootElementId === 'string' || input.rootElementId == null) && (input.focusElementId === undefined || typeof input.focusElementId === 'string' || input.focusElementId == null) && (input.alert === undefined || typeof input.alert === 'boolean' || input.alert == null);
  }

  ;
  (0, _defineProperty2.default)(Props, _hasInstance2.default, {
    value: function value(input) {
      return Props(input);
    }
  });
  return Props;
}();

var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal(props) {
    (0, _classCallCheck3.default)(this, Modal);

    if (!Props(props)) {
      throw new TypeError('Value of argument "props" violates contract.\n\nExpected:\nProps\n\nGot:\n' + _inspect(props));
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props));

    _this.handleEnter = function () {
      _this.setState({
        entered: true
      });
    };

    _this.handleActive = function () {
      _this.setState({
        active: true
      });
    };

    _this.handleExit = function () {
      _this.setState({
        entered: false
      }, function () {
        setTimeout(function () {
          _this.setState({
            active: false
          });
        }, 300);
      });
    };

    var state = {
      active: false,
      entered: true
    };

    if (!(state != null && typeof state.active === 'boolean' && typeof state.entered === 'boolean')) {
      throw new TypeError('Value of variable "state" violates contract.\n\nExpected:\n{\n  active: bool;\n  entered: bool;\n}\n\nGot:\n' + _inspect(state));
    }

    _this.state = state;
    return _this;
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var rootElementId = _props.rootElementId;
      var onExit = _props.onExit;
      var title = _props.title;
      var focusElementId = _props.focusElementId;
      var underlayClickExits = _props.underlayClickExits;
      var alert = _props.alert;


      var extras = {
        focusDialog: !focusElementId
      };

      var underlayClass = _modal2.default['modal-underlay'];

      if (!(typeof underlayClass === 'string')) {
        throw new TypeError('Value of variable "underlayClass" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(underlayClass));
      }

      if (this.state.entered) underlayClass += ' entered';

      if (!(typeof underlayClass === 'string')) {
        throw new TypeError('Value of variable "underlayClass" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(underlayClass));
      }

      var transitionNames = {
        enter: _modal2.default['modal-enter'],
        enterActive: _modal2.default['modal-enter-active'],
        leave: _modal2.default['modal-leave'],
        leaveActive: _modal2.default['modal-leave-active'],
        appear: _modal2.default['modal-enter'],
        appearActive: _modal2.default['modal-enter-active']
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Button2.default,
          { type: 'primary', onClick: this.handleActive, active: this.state.active },
          title
        ),
        _react2.default.createElement(
          _reactAriaModal2.default,
          (0, _extends3.default)({}, extras, {
            underlayClickExits: underlayClickExits,
            mounted: this.state.active,
            titleText: title,
            onEnter: this.handleEnter,
            onExit: this.handleExit,
            applicationNode: document.getElementById(rootElementId),
            underlayClass: underlayClass,
            underlayColor: false,
            alert: alert,
            className: _modal2.default.modal
          }),
          _react2.default.createElement(
            _reactAddonsCssTransitionGroup2.default,
            {
              transitionName: transitionNames,
              transitionAppear: true,
              transitionEnterTimeout: 300,
              transitionAppearTimeout: 300,
              transitionLeaveTimeout: 300
            },
            this.state.entered && _react2.default.createElement(
              'div',
              { styleName: 'modal', key: 'animationItem' },
              _react2.default.createElement(_Icon2.default, { name: 'close', styleName: 'modal-close-icon', onClick: this.handleExit }),
              children
            )
          )
        )
      );
    }
  }]);
  return Modal;
}(_react2.default.Component);

Modal.defaultProps = {
  onExit: function noop() {}
};
Modal.propTypes = {
  title: function title(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'string')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'string' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  onExit: function onExit(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'function')) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'Function' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  children: function children() {},
  underlayClickExits: function underlayClickExits(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'boolean' || prop == null)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'bool | void' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  rootElementId: function rootElementId(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'string' || prop == null)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'string | void' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  focusElementId: function focusElementId(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'string' || prop == null)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'string | void' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  },
  alert: function alert(props, name, component) {
    var prop = props[name];

    if (!(typeof prop === 'boolean' || prop == null)) {
      return new Error("Invalid prop `" + name + "` supplied to `" + component + "`.\n\nExpected:\n" + 'bool | void' + "\n\nGot:\n" + _inspect(prop) + "\n\n");
    }
  }
};
exports.default = (0, _reactCssModules2.default)(Modal, _modal2.default);

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