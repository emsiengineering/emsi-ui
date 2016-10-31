import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './card.css';

type Props = {
  children: any,
  /** add any other props to the component */
  other?: any,
  styles: any,
  /** html element */
  component?: string
}

function Card({ component: Component = 'div', children, styles: CSSStyles, ...other }: Props) {
  return (
    <Component styleName='card' {...other}>
      {children}
    </Component>
  );
}

Card.defaultProps = {
  component: 'div'
};

export default CSSModules(Card, styles);
