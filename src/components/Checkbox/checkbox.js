import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';

import styles from './checkbox.css';
import Icon from '../Icon';
import Label from '../Label';

type Props = {
  styles: any,
  value?: string,
  radio?: boolean,
  checked?: boolean,
  other?: any,
  children: any,
  onChange?: Function
}

class Checkbox extends React.Component {
  static props = Props;

  static defaultProps = {
    radio: false,
    checked: false,
    onChange: function noop() {}
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  renderRadio(checked?: boolean) {
    return checked ?
      <Icon name='radioChecked' styleName='selected' /> :
      <Icon name='radio' />;
  }

  renderCheckbox(checked?: boolean) {
    return checked ?
      <Icon name='checkboxChecked' styleName='selected' /> :
      <Icon name='checkbox'  />;
  }

  render() {
    const { children, checked, value, radio, styles: CSS, ...other } = this.props;
    const role: string = radio ? 'radio' : 'checkbox';

    // tabIndex, onKeyPress and onClick come before ...other so that the user can override the behavior

    return (
      <Label>
        <div>
          <div
            tabIndex='0'
            {...other}
            role={role}
            aria-checked={checked}
            onClick={this.handleChange}
            onKeyPress={this.handleKeyPress}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            styleName={checked ? 'selected' : 'content'}
          >
            {radio ? this.renderRadio(checked) : this.renderCheckbox(checked)}
            {React.Children.toArray(children).length > 0 && <span>{children}</span>}
          </div>
        </div>
      </Label>
    );
  }

  handleKeyPress = (e: Object) => {
    e.preventDefault();
    // spacebar
    if (e.which === 32 && this.state.focused)
      this.handleChange(e);
  }

  handleChange = (e: Object) => {
    this.props.onChange(e, this.props.value);
  }

  handleFocus = () => {
    this.setState({
      focused: true
    });
  }

  handleBlur = () => {
    this.setState({
      focused: false
    });
  }
}

export default CSSModules(Checkbox, styles);
