import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './global-header.css';

type Props = {
  component?: string,
  children: any,
  other?: any,
  styles: Object
}

function GlobalHeader({ component: Component = 'div', styles: CSS, children, ...other }: Props) {
  return (
    <Component styleName='header' {...other}>
      {children}
    </Component>
  );
}

export default CSSModules(GlobalHeader, styles);
