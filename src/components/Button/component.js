import cx from 'classnames';
import CSSModules from 'react-css-modules';
import React from 'react';
import { elementType } from 'react-prop-types';

import styles from './button.css';
import { hexToRGB } from '../../helpers';

const Button = ({ component: Component, disabled, children, type, onClick }) => {
  const disabledStyle = disabled ? ' button_disabled' : '';

  return (
    <Component disabled={Component === 'button' && disabled} styleName={`button button_${type}`}>{children}</Component>
  );
};

Button.propTypes = {
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
  type: 'primary',
  onClick: function() {}
};

export default CSSModules(Button, styles, { allowMultiple: true });
