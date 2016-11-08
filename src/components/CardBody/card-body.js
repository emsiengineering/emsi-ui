import CSSModules from 'react-css-modules';
import React from 'react';

import CSS from './card-body.styl';

type Props = {
  /** html element, div,span,button */
  component?: string,
  styles: Object,
  children?: any,
  /** add any other props to the component */
  other?: Object
}

function CardBody({ component: Component = 'div', children, styles, ...other }: Props) {
  return (
    <Component styleName='card-body' {...other}>
      {children}
    </Component>
  );
}

export default CSSModules(CardBody, CSS);
