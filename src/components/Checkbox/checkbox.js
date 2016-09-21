import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';

import styles from './checkbox.css';
import Icon from '../Icon';
import Label from '../Label';

class Checkbox extends React.Component {
  static propTypes = {
    styles: PropTypes.object,
    value: PropTypes.string,
    radio: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    radio: false,
    onChange: function noop() {}
  }

  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  renderRadio() {
    const { value, checked } = this.props;
    return checked ?
      <Icon name='radioChecked' styleName='selected' /> :
      <Icon name='radio' />;
  }

  renderCheckbox() {
    const { value, checked } = this.props;

    return checked ?
      <Icon name='checkboxChecked' styleName='selected' /> :
      <Icon name='checkbox'  />;
  }

  render() {
    const { children, checked, value, radio, styles: CSS, ...other } = this.props;
    const role = radio ? 'radio' : 'checkbox';

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
            {radio ? this.renderRadio() : this.renderCheckbox()}
            {React.Children.toArray(children).length > 0 && <span>{children}</span>}
          </div>
        </div>
      </Label>
    );
  }

  handleKeyPress = (e) => {
    e.preventDefault();
    // spacebar
    if (e.which === 32 && this.state.focused)
      this.handleChange(e);
  }

  handleChange = (e) => {
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
