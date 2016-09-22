import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './col.css';

type Props = {
  xs?: number|boolean,
  sm?: number|boolean,
  md?: number|boolean,
  lg?: number|boolean,
  xsOffset?: number,
  smOffset?: number,
  mdOffset?: number,
  lgOffset?: number,
  reverse?: boolean,
  component?: string,
  styles?: Object,
  other?: Object,
  children: any
}

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

function getClassNames(props: Object): string {
  const classes: Array<string> = [];

  if (props.reverse)
    classes.push('reverse');

  return Object.keys(props)
    .filter(key => classMap[key])
    .map(key => Number.isInteger(props[key]) ? `${classMap[key]}-${props[key]}` : key)
    .concat(classes)
    .join(' ');
}

function Col({ children, component: Component = 'div', styles: stylesNames, ...other }: Props) {
  const styleName: string = getClassNames(other);

  return (
    <div styleName={styleName}>
      {children}
    </div>
  );
}

export default CSSModules(Col, styles, { allowMultiple: true });
