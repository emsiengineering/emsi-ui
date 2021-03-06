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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFocusTrap = require('react-focus-trap');

var _reactFocusTrap2 = _interopRequireDefault(_reactFocusTrap);

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
      active: false,
      entered: false
    };

    _this.state = state;
    return _this;
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rootElementId = _props.rootElementId,
          title = _props.title,
          focusElementId = _props.focusElementId,
          underlayClickExits = _props.underlayClickExits,
          alert = _props.alert,
          buttonChild = _props.buttonChild,
          isCard = _props.isCard,
          buttonClass = _props.buttonClass,
          buttonProps = _props.buttonProps,
          closeModal = _props.closeModal,
          openModal = _props.openModal,
          mounted = _props.mounted;


      var extras = {
        focusDialog: !focusElementId
      };

      var underlayClass = _modal2.default['modal-underlay'];
      var dialogContentClass = 'modal modal-animated';
      var closeIconClass = 'modal-close-icon';

      if (mounted || this.state.entered) {
        dialogContentClass += ' has-entered';
        underlayClass += ' ' + _modal2.default['has-entered'];
      }

      if (isCard) {
        closeIconClass += ' has-card';
        dialogContentClass += ' modal-card';
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Button2.default,
          (0, _extends3.default)({
            type: 'primary',
            className: buttonClass,
            onClick: openModal ? openModal : this.handleActive
          }, buttonProps),
          buttonChild
        ),
        _react2.default.createElement(
          _reactAriaModal2.default,
          (0, _extends3.default)({}, extras, {
            titleText: title,
            underlayClickExits: underlayClickExits,
            mounted: mounted ? mounted : this.state.active,
            onEnter: openModal ? openModal : this.handleEnter,
            onExit: closeModal ? closeModal : this.handleExit,
            applicationNode: document.getElementById(rootElementId),
            underlayClass: underlayClass,
            underlayColor: false,
            initialFocus: '#close-modal',
            alert: alert,
            focusTrapPaused: true
          }),
          _react2.default.createElement(
            _reactFocusTrap2.default,
            null,
            _react2.default.createElement(
              'div',
              { styleName: dialogContentClass },
              _react2.default.createElement(
                'button',
                {
                  id: 'close-modal',
                  'aria-label': 'Close Dialog Box',
                  onClick: closeModal ? closeModal : this.handleExit,
                  styleName: closeIconClass
                },
                _react2.default.createElement(_Icon2.default, { name: 'close' })
              ),
              children
            )
          )
        )
      );
    }
  }]);
  return Modal;
}(_react2.default.Component);

exports.default = (0, _reactCssModules2.default)(Modal, _modal2.default, { allowMultiple: true });