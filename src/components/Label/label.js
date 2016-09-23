import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './label.css';

type Props = {
  component?: string,
  color?: 'primary'|'alternate',
  children: any,
  styles: Object,
  other?: Object
}

function Label({ component: Component = 'label', color = 'primary', children, styles: CSS, ...other }: Props) {
  const colorStyle: string = color ? color : 'label';

  return (
    <Component styleName='label' {...other}>{children}</Component>
  );
}

export default CSSModules(Label, styles);
