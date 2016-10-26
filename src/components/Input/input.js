import CSSModules from 'react-css-modules';
import React from 'react';

import CSS from './input.css';
import Header from '../Header';

type Props = {
  /** default text to display inside the input */
  children?: string,
  /** html element, div,span,button */
  component?: string,
  /** function to capture the state change outside the component */
  onChange?: Function,
  /** error message to show to the user */
  errorMessage?: string,
  /** make the input required */
  required?: boolean,
  /** change state of input when true */
  error?: boolean,
  /** disable the input */
  disabled?: boolean,
  styles: Object,
  /** add any other props to the component */
  other?: Object,
  /** placeholder text */
  placeholder?: string,
  /** function to handle the ref */
  handleRef?: Function,
  /** name of the ref */
  ref?: string
}

function Input({ component: Component, onChange, handleRef, disabled, required, error, errorMessage, placeholder, children, ref, styles, ...other }: Props) {
  const styleName: string = error ? 'error' : 'input';

  return (
    <span>
      <Component
        ref={(el) => {
          handleRef(el);
        }}
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
    </span>
  );
}

Input.defaultProps = {
  component: 'input',
  disabled: false,
  required: false,
  error: false,
  onChange: function noop() {},
  handleRef: function noop() {}
};

export default CSSModules(Input, CSS, { allowMultiple: true });
