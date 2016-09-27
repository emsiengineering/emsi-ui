import CSSModules from 'react-css-modules';
import React from 'react';

import style from './card-body.css';

const CardText = ({ styles, children, component: Component, ...other }) => {
  return (
    <Component styleName='card-body' {...other}>
      {children}
    </Component>
  );
};

export default CSSModules(CardText, style);
