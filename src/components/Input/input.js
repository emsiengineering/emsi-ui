import React from 'react';
import CSSModules from 'react-css-modules';
import Header from '../Header';

import styles from './input.css';

type Props = {
  children: string,
  component?: string,
  onChange?: Function,
  errorMessage?: string,
  required?: boolean,
  value: string,
  error?: boolean,
  disabled?: boolean,
  styles: Object,
  other?: Object
}

function Input({ children, component: Component = 'input', onChange = function noop() {}, errorMessage, required, value, error, disabled, styles: CSS, ...other }: Props) {
  const styleName: string = error ? 'input error' : 'input';

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
}

export default CSSModules(Input, styles, { allowMultiple: true });
