import CSSModules from 'react-css-modules';
import React from 'react';

import CSS from './card.styl';

type Props = {
  children: any,
  /** add any other props to the component */
  other?: Object,
  styles: Object,
  /** html element */
  component?: string
}


function Card({ component: Component, children, styles, ...other }: Props) {
  return (
    <Component styleName='card' {...other}>
      {children}
    </Component>
  );
}

Card.defaultProps = {
  component: 'div'
};

export default CSSModules(Card, CSS);
