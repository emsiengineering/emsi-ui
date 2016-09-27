import React from 'react';
import CSSModules from 'react-css-modules';
import Header from '../Header';

import styles from './input.css';

type Props = {
  children?: string,
  component?: string,
  onChange?: Function,
  errorMessage?: string,
  required?: boolean,
  error?: boolean,
  disabled?: boolean,
  styles: Object,
  other?: Object,
  placeholder?: string
}

function renderValue() {

}

function Input({ children, component: Component = 'input', onChange = function noop() {}, placeholder, errorMessage, required, error, disabled, styles: CSS, ...other }: Props) {
  const styleName: string = error ? 'error' : 'input';

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
        placeholder={placeholder}
        defaultValue={children}
        {...other} />
      {error && errorMessage && <span styleName='message'><Header type='footnote' component='span'>{errorMessage}</Header></span> }
    </label>
  );
}

export default CSSModules(Input, styles, { allowMultiple: true });
