import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './global-header.css';

type Props = {
  /** html element: div,span,button, etc */
  component?: string,
  children: any,
  /** add any other props to the component */
  other?: any,
  styles: Object,
  /** background color of the header, dark or light */
  theme?: 'dark'|'light'
}

function GlobalHeader({ component: Component, styles: CSS, theme, children, ...other }: Props) {
  return (
    <Component styleName={theme} {...other}>
      {children}
    </Component>
  );
}
GlobalHeader.defaultProps = {
  component: 'div',
  theme: 'dark'
};

export default CSSModules(GlobalHeader, styles);
