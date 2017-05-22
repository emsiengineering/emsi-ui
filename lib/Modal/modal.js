'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal(props) {
    (0, _classCallCheck3.default)(this, Modal);

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
      active: props.isOpen ? props.isOpen : false,
      entered: true
    };

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
      var button = _props.button;
      var isOpen = _props.isOpen;


      var extras = {
        focusDialog: !focusElementId
      };

      var underlayClass = _modal2.default['modal-underlay'];

      if (this.state.entered) underlayClass += ' ' + _modal2.default.entered;

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
        button && _react2.default.createElement(
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
exports.default = (0, _reactCssModules2.default)(Modal, _modal2.default);