import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './card-media.css';

type Props = {
  /** html element, div,span,button */
  component?: string,
  children: any,
  /** add any other props to the component */
  other?: any,
  styles: any
}

function CardMedia({ component: Component = 'div', children, styles: CSS, ...other }: Props) {
  return (
    <Component styleName='card-media' {...other}>
      {children}
    </Component>
  );
}

export default CSSModules(CardMedia, styles);
