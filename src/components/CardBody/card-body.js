import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './card-body.css';

type Props = {
  component?: string,
  styles: any,
  children: any,
  other?: Object
}

function CardText({ component: Component = 'div', children, styles: CSS, ...other }: Props) {
  return (
    <Component styleName='card-body' {...other}>
      {children}
    </Component>
  );
}

export default CSSModules(CardText, styles);
