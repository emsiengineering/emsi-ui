import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';

import styles from './checkbox.css';
import Icon from '../Icon';

class Checkbox extends React.Component {
  static propTypes = {
    styles: PropTypes.object,
    value: PropTypes.string,
    radio: PropTypes.bool,
    checked: PropTypes.bool,
    inline: PropTypes.bool,
    onChange: PropTypes.func,
    type: PropTypes.oneOf(['inline', 'block', 'cell'])
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
      <Icon component='IoAndroidRadioButtonOn' styleName='selected' /> :
      <Icon component='IoAndroidRadioButtonOff'  />;
  }

  renderCheckbox() {
    const { value, checked } = this.props;

    return checked ?
      <Icon component='IoAndroidCheckbox' styleName='selected' /> :
      <Icon component='IoAndroidCheckboxOutlineBlank'  />;
  }

  render() {
    const { children, checked, type, value, radio, styles: CSS, ...other } = this.props;
    const role = radio ? 'radio' : 'checkbox';

    // tabIndex, onKeyPress and onClick come before ...other so that the user can override the behavior

    return (
      <label htmlFor={value}>
        <div styleName={type}>
          <div
            tabIndex='0'
            {...other}
            role={role}
            aria-checked={checked}
            id={value}
            onClick={this.handleChange}
            onKeyPress={this.handleKeyPress}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            styleName='content'
          >
            {radio ? this.renderRadio() : this.renderCheckbox()}
            {type !== 'cell' && <span styleName={checked ? 'selected' : null}>{children}</span>}
          </div>
        </div>
      </label>
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

export default CSSModules(Checkbox, styles, { allowMultiple: true });
