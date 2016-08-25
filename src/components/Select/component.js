import cx from 'classnames';
import useSheet from 'react-jss';
import React from 'react';

import Option from '../Option/component';
import jss from '../../jss';
import useTheme from '../../hocs/Theme/hoc';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';
import { IoAndroidArrowDropdown } from 'react-icons/io';

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    outline: 'none',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem'
  },

  select: {
    borderRadius: '3px',
    boxShadow: 'inset 0 2px 0 0 rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
    padding: '.75em 2rem .75em 2rem',
    fontSize: '1em',
    cursor: 'pointer',
    width: '100%',
    outline: 'none'
  },

  options: {
    position: 'absolute',
    zIndex: '10',
    backgroundColor: 'white',
    top: '4.75rem',
    outline: 'none'
  },

  disabled: {
    opacity: .6,
    cursor: 'not-allowed !important'
  }
};

class Select extends React.Component {

  static propTypes = {
    theme: React.PropTypes.shape({
      grays: React.PropTypes.shape({
        gray5: React.PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    children: React.PropTypes.arrayOf(
      React.PropTypes.object.isRequired
    ).isRequired,
    onSelect: React.PropTypes.func,
    disabled: React.PropTypes.bool
  }

  static defaultProps = {
    onSelect: function noop() {}
  }

  constructor(...props) {
    super(...props);

    this.state = {
      activeOption: null
    };
  }

  renderChildren() {
    return this.props.children.map((option, index) => {
      return React.cloneElement(
        option,
        {
          active: option.props.children === this.state.activeOption,
          key: `option${index}`
        }
      );
    });
  }

  render() {
    const { classes } = this.props.sheet;
    const { theme } = this.props;

    const buttonStyle = {
      backgroundColor: theme.grays.gray5
    };

    const classNames = cx({
      [classes.select]: true,
      [classes.disabled]: this.props.disabled
    });

    const ulStyles = {
      position: 'relative',
      zIndex: 1,
      border: `1px solid ${theme.grays.gray4}`,
      borderRadius: '3px',
      overflow: 'hidden'
    };

    return (
      <Wrapper
        onSelection={this.handleSelection}
        className={classes.container}
      >
        <Button disabled={this.props.disabled} className={classNames} style={buttonStyle}>
          {this.state.activeOption === null ? 'Select Option' : this.state.activeOption}
          <IoAndroidArrowDropdown style={{ marginLeft: '1rem' }}/>
        </Button>
          {
            !this.props.disabled &&
            <Menu className={classes.options}>
              <ul style={ulStyles}>{this.renderChildren()}</ul>
            </Menu>
          }
      </Wrapper>
    );
  }

  handleSelection = (option, event) => {
    this.props.onSelect(option.props.children);
    this.setState({
      activeOption: option.props.children
    });
  }
}


export default useTheme(useSheet(Select, styles));
