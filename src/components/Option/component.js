import cx from 'classnames';
import useSheet from 'react-jss';
import React from 'react';

import jss from '../../jss';
import BackgroundTint from '../BackgroundTint/component';
import useTheme from '../../hocs/Theme/hoc';
import hexToRGB from '../../utils';

const styles = {
  option: {
    width: '100%',
    padding: '.75em 2rem .75em 2rem',
    cursor: 'pointer'
  }
};

class Option extends React.Component {
  static propTypes = {
    theme: React.PropTypes.object,
    hover: React.PropTypes.bool,
    select: React.PropTypes.bool,
    active: React.PropTypes.bool,
    index: React.PropTypes.number
  };

  constructor(...props) {
    super(...props);

    this.state = {
      hover: false
    };
  }

  render() {
    const { classes } = this.props.sheet;
    const { theme, active, onClick, children } = this.props;

    const componentStyles = this.getColors();

    const childStyles = {
      opacity: active ? .75 : 1
    };

    return (
      <div
        className={classes.option}
        style={componentStyles}
        onClick={onClick}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        role='option'
      >
        <span style={childStyles}>{children}</span>
      </div>
    );
  }

  getColors() {
    const { active, theme } = this.props;
    let componentStyles = {
      borderBottom: `1px solid ${theme.grays.gray4}`
    };

    const rgb = hexToRGB(theme.primary.link);

    if (active)
      return {
        ...componentStyles,
        ...{
          backgroundColor: theme.primary.link,
          color: theme.grays.white
        }
      };
    else if (this.state.hover)
      return {
        ...componentStyles,
        ...{
          backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .1)`,
          color: theme.primary.link
        }
      };
    else
      return {
        ...componentStyles,
        ...{
          backgroundColor: theme.grays.white,
          color: '#000000'
        }
      };
  }

  handleHover = () => {
    this.setState({
      hover: !this.state.hover
    });
  }
}

export default useTheme(useSheet(Option, styles));
