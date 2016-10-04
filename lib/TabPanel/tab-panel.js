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

var _reactAriaMenubutton = require('react-aria-menubutton');

var _reactAriaTabpanel = require('react-aria-tabpanel');

var _lodash = require('lodash.uniqueid');

var _lodash2 = _interopRequireDefault(_lodash);

var _ContentWrap = require('../ContentWrap');

var _ContentWrap2 = _interopRequireDefault(_ContentWrap);

var _tabPanel = require('./tab-panel.css');

var _tabPanel2 = _interopRequireDefault(_tabPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function () {
  function Props(input) {
    return input != null && (input.position === 'top' || input.position === 'bottom') && (input.theme === 'dark' || input.theme === 'darker' || input.theme == null) && (input.onChange === undefined || typeof input.onChange === 'function') && (input.activeTab === undefined || typeof input.activeTab === 'number' || typeof input.activeTab === 'string') && (input.center === undefined || typeof input.center === 'boolean') && (input.padded === undefined || typeof input.padded === 'boolean');
  }

  ;
  (0, _defineProperty2.default)(Props, _hasInstance2.default, {
    value: function value(input) {
      return Props(input);
    }
  });
  return Props;
}();

var TabPanel = function (_React$Component) {
  (0, _inherits3.default)(TabPanel, _React$Component);

  function TabPanel(props) {
    (0, _classCallCheck3.default)(this, TabPanel);

    if (!Props(props)) {
      throw new TypeError('Value of argument "props" violates contract.\n\nExpected:\nProps\n\nGot:\n' + _inspect(props));
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (TabPanel.__proto__ || (0, _getPrototypeOf2.default)(TabPanel)).call(this, props));

    _this.handleClick = function (e) {
      if (!(e instanceof Object)) {
        throw new TypeError('Value of argument "e" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(e));
      }

      _this.setState({
        closed: !_this.state.closed
      });
    };

    return _this;
  }

  (0, _createClass3.default)(TabPanel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var children = _react2.default.Children.toArray(this.props.children);

      if (!Array.isArray(children)) {
        throw new TypeError('Value of variable "children" violates contract.\n\nExpected:\nArray\n\nGot:\n' + _inspect(children));
      }

      var ids = children.map(function (child) {
        return (0, _lodash2.default)('emsi_ui_menu_');
      });

      if (!Array.isArray(ids)) {
        throw new TypeError('Value of variable "ids" violates contract.\n\nExpected:\nArray\n\nGot:\n' + _inspect(ids));
      }

      this.setState({
        childIds: ids,
        closed: true
      });
    }
  }, {
    key: 'renderPadded',
    value: function renderPadded(tabs) {
      return _react2.default.createElement(
        _ContentWrap2.default,
        null,
        tabs
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var position = _props.position;
      var onChange = _props.onChange;
      var activeTab = _props.activeTab;
      var theme = _props.theme;
      var center = _props.center;
      var padded = _props.padded;
      var other = (0, _objectWithoutProperties3.default)(_props, ['position', 'onChange', 'activeTab', 'theme', 'center', 'padded']);

      var styleName = this.state.closed ? 'closed' : 'tab-panel';

      if (center) styleName += '-center';

      if (theme) styleName += '-' + theme;

      var menuItems = this.menuItems();

      return _react2.default.createElement(
        'div',
        { styleName: 'container' },
        _react2.default.createElement('div', { styleName: 'mobile-menu', onClick: this.handleClick }),
        _react2.default.createElement(
          _reactAriaTabpanel.Wrapper,
          { onChange: onChange, activeTabId: this.state.childIds[this.props.activeTab] || this.props.activeTab },
          _react2.default.createElement(
            _reactAriaTabpanel.TabList,
            (0, _extends3.default)({ styleName: styleName }, other),
            padded ? this.renderPadded(menuItems.tabs) : menuItems.tabs
          ),
          menuItems.panels
        )
      );
    }
  }, {
    key: 'menuItems',
    value: function menuItems() {
      var _this2 = this;

      var _props2 = this.props;
      var position = _props2.position;
      var children = _props2.children;
      var center = _props2.center;
      var activeTab = this.props.activeTab;

      var width = center ? 1 / _react2.default.Children.count(children) * 100 + '%' : 'auto';

      var tabs = [];
      var panels = [];

      _react2.default.Children.toArray(children).forEach(function (child, index) {
        if (!(child instanceof Object)) {
          throw new TypeError('Value of argument "child" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(child));
        }

        if (!(typeof index === 'number')) {
          throw new TypeError('Value of argument "index" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(index));
        }

        var _child$props = child.props;
        var title = _child$props.title;
        var other = (0, _objectWithoutProperties3.default)(_child$props, ['title']);


        var tab = _react2.default.cloneElement(child, (0, _extends3.default)({}, other, {
          key: _this2.state.childIds[index] + '-panel',
          id: _this2.state.childIds[index],
          active: index === _this2.props.activeTab || _this2.state.childIds[index] === _this2.props.activeTab,
          position: _this2.props.position,
          open: _this2.state.open,
          width: width
        }), title);

        if (!(tab instanceof Object)) {
          throw new TypeError('Value of variable "tab" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(tab));
        }

        tabs.push(tab);
        panels.push(_react2.default.createElement(
          _reactAriaTabpanel.TabPanel,
          { key: tab.props.id + '-panel', tabId: tab.props.id, active: tab.props.active },
          child.props.children
        ));
      });

      return {
        tabs: tabs,
        panels: panels
      };
    }
  }]);
  return TabPanel;
}(_react2.default.Component);

TabPanel.displayName = 'emsiUI-TabPanel';
TabPanel.defaultProps = {
  position: 'bottom',
  activeTab: 0
};
exports.default = (0, _reactCssModules2.default)(TabPanel, _tabPanel2.default);

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