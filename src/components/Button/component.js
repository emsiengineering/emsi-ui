import cx from 'classnames';
import CSSModules from 'react-css-modules';
import React from 'react';
import { elementType } from 'react-prop-types';

import styles from './button.css';
import { hexToRGB } from '../../helpers';

const Button = ({ component: Component, disabled, children, type, styles: CSSStyles, active, ...other }) => {
  let styleName = `button button-${type}`;

  styleName += active ? ` button-${type}-active` : '';

  return (
    <Component {...other} disabled={Component === 'button' && disabled} styleName={styleName}>{children}</Component>
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

export default CSSModules(Button, styles, { allowMultiple: true });
