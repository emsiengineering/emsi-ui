import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './card.css';

const Card = ({ children, ...other }) => {
  return (
    <div styleName='card' {...other}>
      {children}
    </div>
  );
};

export default CSSModules(Card, styles);
