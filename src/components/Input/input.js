import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './input.css';

const Input = ({ children, required, value, error, disabled, styles: CSS, ...other }) => {
  const styleName = error ? 'input error' : 'input';

  return (
    <label>
      <input
        {...other}
        disabled={disabled}
        styleName={styleName}
        aria-disabled={disabled}
        aria-required={required}
        aria-invalid={error}
        placeholder={children}
        value={value} />
    </label>
  );
};

Input.propTypes = {
  required: React.PropTypes.bool,
  error: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string,
  styles: React.PropTypes.object
};

export default CSSModules(Input, styles, { allowMultiple: true });
