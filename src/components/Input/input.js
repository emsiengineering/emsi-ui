import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';
import Header from '../Header';

import styles from './input.css';

const Input = ({ children, component: Component, onChange, errorMessage, required, value, error, disabled, styles: CSS, ...other }) => {
  const styleName = error ? 'input error' : 'input';

  return (
    <label styleName='label'>
      <Component
        {...other}
        onChange={onChange}
        disabled={disabled}
        styleName={styleName}
        aria-disabled={disabled}
        aria-required={required}
        aria-invalid={error}
        placeholder={children}
        value={value} />
      {error && errorMessage && <span styleName='message'><Header type='footnote' component='span'>{errorMessage}</Header></span> }
    </label>
  );
};

Input.propTypes = {
  component: React.PropTypes.string,
  required: React.PropTypes.bool,
  error: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string,
  errorMessage: React.PropTypes.string,
  styles: React.PropTypes.object,
  onChange: React.PropTypes.func
};

Input.defaultProps = {
  component: 'input',
  onChange: function noop() {}
};

export default CSSModules(Input, styles, { allowMultiple: true });
