'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTrueProps = getTrueProps;
exports.getFirstChildByProp = getFirstChildByProp;
exports.getChildIndexByProp = getChildIndexByProp;

var _react = require('react');

function getTrueProps(children) {
  var propName = arguments.length <= 1 || arguments[1] === undefined ? 'active' : arguments[1];
  var equals = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

  var childArray = _react.Children.toArray(children);

  return childArray.filter(function (child, index) {
    return child.props[propName] === equals;
  });
}

function getFirstChildByProp(children) {
  var propName = arguments.length <= 1 || arguments[1] === undefined ? 'active' : arguments[1];
  var equals = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

  var matchingChildren = getTrueProps(children, propName, equals);

  if (matchingChildren.length > 0) return matchingChildren[0];

  return false;
}

function getChildIndexByProp(children) {
  var propName = arguments.length <= 1 || arguments[1] === undefined ? 'active' : arguments[1];
  var equals = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

  var childArray = _react.Children.toArray(children);
  var indexes = [];

  childArray.forEach(function (child, index) {
    console.log(child.props);
    if (child.props[propName] === equals) indexes.push(index);
  });

  return indexes;
}