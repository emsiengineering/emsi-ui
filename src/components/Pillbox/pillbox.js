import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './pillbox.css';

type Props = {
  children?: any,
  /** adds the active class when true */
  active?: boolean,
  /** html element: button, div, span etc. */
  component?: string,
  styles: Object,
  /** add more props to the component */
  other?: Object
}

function Pillbox({ component: Component, children, active, styles: CSSSTyles, ...other }: Props) {
  return (
    <Component {...other} styleName={active ? 'pillbox active' : 'pillbox'}>
      {children}
    </Component>
  );
}
Pillbox.defaultProps = {
  component: 'div',
  active: false
};

export default CSSModules(Pillbox, styles, { allowMultiple: true });
