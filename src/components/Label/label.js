import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './label.css';

type Props = {
  /** html element, div,span,button */
  component?: string,
  /** type of color, Oneof: primary, alternate */
  color?: 'primary'|'alternate',
  children: any,
  styles: Object,
  /** add any other props to the component */
  other?: Object
}

function Label({ component: Component, color, children, styles: CSS, ...other }: Props) {
  const colorStyle: string = color ? color : 'label';

  return (
    <Component styleName={colorStyle} {...other}>{children}</Component>
  );
}
Label.defaultProps = {
  component: 'label',
  color: 'primary'
};

export default CSSModules(Label, styles);
