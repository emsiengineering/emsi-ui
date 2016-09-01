import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './col.css';

const ModificatorType = React.PropTypes.oneOfType(
  [
    React.PropTypes.number,
    React.PropTypes.bool
  ]
);

const classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset'
};

function getClassNames(props) {
  const classes = [];

  if (props.reverse)
    classes.push('reverse');

  return Object.keys(props)
    .filter(key => classMap[key])
    .map(key => Number.isInteger(props[key]) ? `${classMap[key]}-${props[key]}` : key)
    .concat(classes)
    .join(' ');
}

const Col = ({ children, component: Component, styles: stylesNames, ...other }) => {
  const styleName = getClassNames(other);

  return (
    <div styleName={styleName}>
      {children}
    </div>
  );
};

Col.propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: React.PropTypes.number,
  smOffset: React.PropTypes.number,
  mdOffset: React.PropTypes.number,
  lgOffset: React.PropTypes.number,
  reverse: React.PropTypes.bool,
  component: React.PropTypes.string,
  styles: React.PropTypes.object
};

Col.defaultProps = {
  component: 'div'
};

export default CSSModules(Col, styles, { allowMultiple: true });
