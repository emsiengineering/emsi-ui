import CSSModules from 'react-css-modules';
import React from 'react';

import style from './card-body.css';

type Props = {
  styles: any,
  children?: any,
  component?: string,
  other?: Object
}

function CardText({ styles, children, component: Component = 'div', ...other }: Props) {
  return (
    <Component styleName='card-body' {...other}>
      {children}
    </Component>
  );
}

export default CSSModules(CardText, style);
