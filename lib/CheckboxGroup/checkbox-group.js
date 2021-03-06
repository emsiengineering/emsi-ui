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

    _this.handleKeyPress = function (e, value) {
      if (e.which == 32) {
        e.preventDefault();
        _this.handleClick(value);
      }
    };

    _this.populateDefaults = function () {
      var selected = [];

      _react2.default.Children.forEach(_this.props.children, function (child) {
        if (child.props.checked) selected.push(child.props.value);
      });

      return selected;
    };

    _this.handleClick = function (value) {
      var selected = _this.state.selected;

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
      }, function () {
        _this.props.onChange(selected);
      });
    };

    _this.state = {
      selected: _this.populateDefaults()
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
    value: function renderChildren(children, onChange) {
      var _this2 = this;

      var other = (0, _objectWithoutProperties3.default)(this.props, []);


      return children.map(function (child, index) {
        return _react2.default.cloneElement(child, (0, _extends3.default)({}, other, child.props, {
          checked: _this2.state.selected.includes(child.props.value),
          onClick: function onClick() {
            return _this2.handleClick(child.props.value);
          },
          onKeyDown: function onKeyDown(e) {
            return _this2.handleKeyPress(e, child.props.value);
          },
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
        this.renderChildren(this.props.children, this.props.onChange)
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