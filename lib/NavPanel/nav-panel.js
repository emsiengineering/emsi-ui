'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _navPanel = require('./nav-panel.css');

var _navPanel2 = _interopRequireDefault(_navPanel);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ContentWrap = require('../ContentWrap');

var _ContentWrap2 = _interopRequireDefault(_ContentWrap);

var _reactMeasure = require('react-measure');

var _reactMeasure2 = _interopRequireDefault(_reactMeasure);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('../utils');

var _whatInput = require('what-input');

var _whatInput2 = _interopRequireDefault(_whatInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavPanel = function (_React$Component) {
  (0, _inherits3.default)(NavPanel, _React$Component);

  function NavPanel(props) {
    (0, _classCallCheck3.default)(this, NavPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NavPanel.__proto__ || (0, _getPrototypeOf2.default)(NavPanel)).call(this, props));

    _this.state = {
      animate: false,
      hovering: false,
      widths: [],
      active: -1,
      hover: 1
    };
    return _this;
  }

  (0, _createClass3.default)(NavPanel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var active = (0, _utils.getChildIndexByProp)(this.props.children);

      this.setState({
        active: active.length > 0 ? active[0] : -1
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var active = (0, _utils.getChildIndexByProp)(nextProps.children);

      if (this.state.active !== active) this.setState({
        active: active.length > 0 ? active[0] : -1
      });
    }
  }, {
    key: 'renderSpan',
    value: function renderSpan() {
      var _state = this.state,
          widths = _state.widths,
          active = _state.active,
          hovering = _state.hovering,
          hover = _state.hover;

      var width = widths[active];
      var offset = 0;
      var by = 'active';

      if (hovering) {
        by = 'hover';
        width = widths[hover];
      }

      if (active < 0 && !hovering) {
        width = widths[0];
        offset = -widths[0];
      } else for (var i = this.state[by] - 1; i >= 0; i--) {
        offset += widths[i];
      }

      return _react2.default.createElement('span', {
        styleName: 'nav-panel-border',
        'data-theme': 'nav-panel-border',
        style: {
          left: offset + 'px',
          width: width + 'px'
        } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          animate = _state2.animate,
          hovering = _state2.hovering,
          widths = _state2.widths,
          active = _state2.active,
          hover = _state2.hover;
      var _props = this.props,
          children = _props.children,
          top = _props.top,
          className = _props.className,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'top', 'className']);


      var styleName = (0, _classnames2.default)({
        'nav-panel': true,
        top: top
      }, className);

      var menu = _react2.default.Children.toArray(this.props.children).map(function (child, index) {
        var clone = _react2.default.cloneElement(child, (0, _extends3.default)({}, child.props, {
          onMouseEnter: function onMouseEnter() {
            return !child.props.NavIgnore && _this2.handleEnter(index);
          },
          onMouseLeave: function onMouseLeave() {
            return !child.props.NavIgnore && _this2.handleLeave(index);
          }
        }));

        return _react2.default.createElement(
          _reactMeasure2.default,
          {
            key: 'navitem-' + index,
            accurate: true,
            onMeasure: function onMeasure(dimensions) {
              var childWidths = _this2.state.widths;
              childWidths[index] = dimensions.width;

              _this2.setState({
                widths: childWidths
              });
            }
          },
          clone
        );
      });

      return _react2.default.createElement(
        'ul',
        (0, _extends3.default)({ styleName: styleName }, other),
        menu,
        this.renderSpan()
      );
    }
  }, {
    key: 'handleEnter',
    value: function handleEnter(index) {
      this.setState({
        hovering: true,
        hover: index
      });
    }
  }, {
    key: 'handleLeave',
    value: function handleLeave(index) {
      this.setState({
        hovering: false,
        hover: this.state.active
      });
    }
  }]);
  return NavPanel;
}(_react2.default.Component);

NavPanel.defaultProps = {
  top: false,
  offset: 300
};
exports.default = (0, _reactCssModules2.default)(NavPanel, _navPanel2.default, { allowMultiple: true });