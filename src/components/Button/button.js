import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './button.css';

const Button = ({ component: Component, disabled, children, type, styles: CSSStyles, active, ...other }) => {
  let styleName = type;

  styleName += active && !disabled ? '-active' : '';

  return (
    <Component tabIndex='0' {...other} disabled={Component === 'button' && disabled} styleName={styleName}>{children}</Component>
  );
};

Button.propTypes = {
  active: React.PropTypes.bool,
  component: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  type: React.PropTypes.oneOf([
    'primary',
    'secondary',
    'alternate',
    'warning',
    'danger'
  ])
};

Button.defaultProps = {
  component: 'button',
  type: 'primary'
};

export default CSSModules(Button, styles);
