import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './button.css';

type Props = {
  component?: string,
  disabled?: boolean,
  type?: string,
  active?: boolean,
  children: any
}

function Button({ component: Component = 'button', disabled, children, type = 'primary', styles: CSSStyles, active, ...other }: Props) {
  let styleName = type;
  styleName += active && !disabled ? '-active' : '';
  return (
    <Component tabIndex='0' disabled={Component === 'button' && disabled} styleName={styleName}>{children}</Component>
  );
}

export default CSSModules(Button, styles);
