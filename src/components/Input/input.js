import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './input.css';
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
  css: Object,
  /** add any other props to the component */
  other?: Object,
  /** placeholder text */
  placeholder?: string,
  /** reference funciton */
  handleRef?: Function,
  ref?: Function,
  /** used to link the label element with the input */
  id: string
}

class Input extends React.Component<void, Props, void> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { component: Component, onChange, id, handleRef, disabled, required, error, errorMessage, placeholder, children, ref, css, ...other } = this.props;
    const styleName: string = error ? 'error' : 'input';

    return (
      <label htmlFor={id} styleName='label'>
        <Component
          id={id}
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
      </label>
    );
  }
}

Input.defaultProps = {
  component: 'input',
  disabled: false,
  required: false,
  error: false,
  onChange: function noop() {},
  handleRef: function noop() {}
};

export default CSSModules(Input, styles, { allowMultiple: true });
