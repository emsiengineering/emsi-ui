import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './card.css';

type Props = {
  children: any,
  other?: any,
  styles: any
}

function Card({ children, styles: CSSStyles, ...other }: Props) {
  return (
    <div styleName='card' {...other}>
      {children}
    </div>
  );
}

export default CSSModules(Card, styles);