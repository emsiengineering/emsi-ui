import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './button.css';

type Props = {
  /** html element, div,span,button */
  component?: string,
  /** disable the button */
  disabled?: boolean,
  /** type of button, Oneof: primary,secondary,alternate,warning,danger */
  type?: 'primary'|'secondary'|'alternate'|'warning'|'danger',
  /** adds the active class to the button */
  active?: boolean,
  /** text to display for the button */
  children: string,
  styles: any
}

function Button({ component: Component = 'button', disabled, children, type = 'primary', styles: CSSStyles, active, ...other }: Props) {
  let styleName: string = type;
  styleName += active && !disabled ? '-active' : '';
  return (
    <Component {...other} tabIndex='0' disabled={Component === 'button' && disabled} styleName={styleName}>{children}</Component>
  );
}
Button.defaultProps = {
  component: 'button',
  type: 'primary',
  disabled: false,
  active: false
};

export default CSSModules(Button, styles);
