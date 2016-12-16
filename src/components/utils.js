import { Children } from 'react';

export function getTrueProps(children, propName = 'active', equals = true) {
  const childArray = Children.toArray(children);

  return childArray.filter((child, index) => {
    return child.props[propName] === equals;
  });
}

export function getFirstChildByProp(children, propName = 'active', equals = true) {
  const matchingChildren = getTrueProps(children, propName, equals);

  if (matchingChildren.length > 0)
    return matchingChildren[0];

  return false;
}

export function getChildIndexByProp(children, propName = 'active', equals = true) {
  const childArray = Children.toArray(children);
  let indexes = [];

  childArray.forEach((child, index) => {
    console.log(child.props);
    if (child.props[propName] === equals)
      indexes.push(index);
  });

  return indexes;
}
