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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require('../Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxGroup = function (_React$Component) {
  (0, _inherits3.default)(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    (0, _classCallCheck3.default)(this, CheckboxGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CheckboxGroup.__proto__ || (0, _getPrototypeOf2.default)(CheckboxGroup)).call(this, props));

    _this.handleClick = function (e, value) {
      var selected = _this.state.selected;
      var changeCallback = function changeCallback() {
        var state = _this.state.selected.length == 1 ? _this.state.selected[0] : _this.state.selected;
        _this.props.onChange(e, state);
      };

      // if the value is in the array and this doesn't force a selection
      // remove it.
      if (selected.includes(value) && !_this.props.required) {
        selected = selected.filter(function (input) {
          return input !== value;
        });

        // selection is forced, so don't remove values.
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
        if (child.props.checked) selected.push(child.props.value);

        // grab the first child
        if (index === 0) firstChild = child.props.value;
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

      return children.map(function (child, index) {
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
  required: false,
  allowMultiple: true,
  onChange: function noop() {}
};
exports.default = CheckboxGroup;