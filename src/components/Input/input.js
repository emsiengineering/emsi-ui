import CSSModules from 'react-css-modules';
import React from 'react';

import CSS from './input.styl';
import Icon from '../Icon';
import Text from '../Text';

type Props = {
  /** default text to display inside the input */
  children?: any,
  /** html element, div,span,button */
  component?: string,
  /** function to capture the state change outside the component */
  onChange?: Function,
  /** message to show to the user */
  message?: string,
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

  icon: boolean
}

function Input({ component: Component, onChange, handleRef, disabled, required, error, message, placeholder, children, styles, icon, ...other }: Props) {
  const messageStyleName: string = error ? 'input-message error' : 'input-message';
  let styleName: string = error ? 'input error' : 'input';

  if (icon)
    styleName += ' icon';

  return (
    <span styleName={styleName}>
      {children}
      <Component
        ref={(el) => {
          handleRef(el);
        }}
        onChange={onChange}
        disabled={disabled}
        aria-disabled={disabled}
        aria-required={required}
        aria-invalid={error}
        placeholder={placeholder}
        {...other} />
      {message && <span styleName={messageStyleName}><Text type='caption'>{message}</Text></span> }
    </span>
  );
}

Input.defaultProps = {
  component: 'input',
  disabled: false,
  required: false,
  error: false,
  onChange: function noop() {},
  handleRef: function noop() {},
  icon: false
};

export default CSSModules(Input, CSS, { allowMultiple: true });
