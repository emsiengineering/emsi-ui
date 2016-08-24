import cx from 'classnames';
import useSheet from 'react-jss';
import React from 'react';

import jss from '../../jss';
import useTheme from '../../hocs/Theme/hoc';
import clickOutside from 'react-onclickoutside';
import Transition from 'react-motion-ui-pack';

const styles = {
  container: {
    position: 'relative'
  },

  select: {
    borderRadius: '3px',
    boxShadow: 'inset 0 2px 0 0 rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
    padding: '.75em 2rem .75em 2rem',
    fontSize: '1em',
    cursor: 'pointer'
  },

  options: {
    position: 'absolute',
    zIndex: '10',
    backgroundColor: 'white',
    top: '4rem',
    width: '100%'
  },

  option: {
    padding: '.75em 2rem .75em 2rem'
  },

  disabled: {
    opacity: .6,
    cursor: 'not-allowed !important'
  }
};

class Select extends React.Component {
  static propTypes = {
    theme: React.PropTypes.object,
    disabled: React.PropTypes.bool
  }

  constructor(...props) {
    super(...props);

    this.state = {
      active: false,
      activeOption: null
    };
  }

  renderOptions() {
    return this.props.children.map((option, index) => {
      return React.cloneElement(
        option,
        {
          active: option === this.state.activeOption,
          index: index,
          key: `option${index}`,
          onClick: this.handleSelect.bind(this, option)
        }
      );
    });
  }

  renderOptionsContainer() {
    const { classes } = this.props.sheet;
    const optionsStyles = {
      borderLeft: `1px solid ${this.props.theme.grays.gray4}`,
      borderRight: `1px solid ${this.props.theme.grays.gray4}`,
      borderTop: `1px solid ${this.props.theme.grays.gray4}`
    };

    return (
      <div className={classes.options} style={optionsStyles} key='selectbox'>
        {this.renderOptions()}
      </div>
    );
  }

  render() {
    const { classes } = this.props.sheet;
    const classNames = cx({
      [classes.select]: true,
      [classes.disabled]: this.props.disabled
    });
    const style = {
      backgroundColor: this.props.theme.grays.gray5
    };

    return (
      <div className={classes.container}>
        <div className={classNames} style={style} onClick={this.handleActivate} role='listbox'>
          {this.state.activeOption === null ? 'Select Option' : this.state.activeOption.props.children}
        </div>
        {this.state.active && this.renderOptionsContainer()}
      </div>
    );
  }

  handleClickOutside() {
    this.setState({
      active: false
    });
  }

  handleSelect(option, e) {
    this.setState({
      activeOption: option,
      active: false
    });
  }

  handleActivate = () => {
    this.setState({
      active: !this.state.active
    });
  }
}


export default useTheme(useSheet(clickOutside(Select), styles));
