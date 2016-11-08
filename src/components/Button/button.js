import cx from 'classnames';
import CSSModules from 'react-css-modules';
import React from 'react';

import CSS from './button.styl';

type Props = {
  /** html element, div,span,button */
  component?: string,
  /** disable the button */
  disabled?: boolean,
  type?: 'primary'|'gray'|'link'|'warning'|'danger',
  active?: boolean,
  /** text to display for the button */
  children: string,
  styles: Object
}

function Button({ component: Component, disabled, children, type, styles, active, ...other }: Props) {
  let styleName = {
    button: true,
    active
  };

  if (type !== 'primary')
    styleName[type] = true;

  return (
    <Component {...other} tabIndex='0' disabled={Component === 'button' && disabled} styleName={cx(styleName)}>{children}</Component>
  );
}

Button.defaultProps = {
  component: 'button',
  type: 'primary',
  disabled: false,
  active: false
};

export default CSSModules(Button, CSS, { allowMultiple: true });
