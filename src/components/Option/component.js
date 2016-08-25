import cx from 'classnames';
import React from 'react';

import jss from '../../jss';
import useTheme from '../../hocs/Theme/hoc';
import hexToRGB from '../../utils';
import { MenuItem } from 'react-aria-menubutton';

// we have to use :hover, :focus and :active for accessibility reasons,
// so stylesheet is created in componentWillMount for theme access
function defaultStyleSheet(theme) {
  return {
    padding: '.75em 10rem .75em 2rem',
    cursor: 'pointer',
    border: '1px solid transparent',
    position: 'relative',
    outline: 'none',
    zIndex: 2
  };
}

function inactiveStyleSheet(theme) {
  const rgb = hexToRGB(theme.primary.link);

  return {
    '&:hover': {
      backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .1)`,
      color: theme.primary.link
    },

    '&:focus': {
      borderStyle: 'dotted',
      borderColor: theme.primary.link
    }
  };
}

function activeStyleSheet(theme) {
  return {
    borderColor: theme.primary.link,
    extend: 'option',
    backgroundColor: theme.primary.link,
    color: theme.grays.white
  };
}

// we have to create the sheet at compile time so the lifecycle functions
// have access to it
const sheet = jss.createStyleSheet({});

class Option extends React.Component {
  static propTypes = {
    theme: React.PropTypes.shape({
      primary: React.PropTypes.shape({
        link: React.PropTypes.string.isRequired
      }).isRequired,
      grays: React.PropTypes.shape({
        white: React.PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
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

  componentWillMount() {
    const { theme } = this.props;
    sheet.addRule('option', defaultStyleSheet(theme));
    sheet.addRule('inactive', inactiveStyleSheet(theme));
    sheet.addRule('active', activeStyleSheet(theme));

    sheet.attach();
  }

  componentWillUnmount() {
    sheet.detach();
  }

  render() {
    const { classes } = sheet;
    const { theme, active, onClick, children } = this.props;
    const classNames = cx({
      [classes.option]: true,
      [classes.inactive]: !active,
      [classes.active]: active
    });

    return (
      <li>
        <MenuItem className={classNames}>
          <span>{this.props.children}</span>
        </MenuItem>
      </li>
    );
  }
}

export default useTheme(Option);
