'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
exports.default = (0, _reactCssModules2.default)(NavPanel, _navPanel2.default, { allowMultiple: true });