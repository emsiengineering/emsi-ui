import cx from 'classnames';
import useSheet from 'react-jss';
import React from 'react';
import { elementType } from 'react-prop-types';

import jss from '../../jss';
import useTheme from '../../hocs/Theme/hoc';
import { hexToRGB } from '../../helpers';

const styles = {
  button: {
    borderStyle: 'none',
    fontWeight: 500,
    outline: 'none',
    borderRadius: '3px',
    boxShadow: 'inset 0 2px 0 0 rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
    padding: '.75em 2rem .75em 2rem',
    fontSize: '1em',
    textShadow: '0 -1px 0 rgba(0, 0, 0, 0.1)',
    cursor: 'pointer'
  },

  hover: {
    boxShadow: 'inset 0 2px 0 0 rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 100px 100px rgba(0,0,0,0.1)'
  },

  active: {
    boxShadow: 'inset 0 -2px 0 0 rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 100px 100px rgba(0,0,0,0.2)'
  },

  disabled: {
    opacity: .6,
    cursor: 'not-allowed !important'
  },

  secondary: {
    extend: 'button',
    boxShadow: 'inset 0 2px 0 0 rgba(255, 255, 255, 0.3), inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
    textShadow: '0 -1px 0 rgba(255, 255, 255, 0.5)'
  },

  secondaryHover: {
    boxShadow: 'inset 0 2px 0 0 rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 100px 100px rgba(0,0,0,0.05)'
  },

  secondaryActive: {
    boxShadow: 'inset 0 -2px 0 0 rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 100px 100px rgba(0,0,0,0.1)'
  }
};

class Button extends React.Component {
  static propTypes = {
    component: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    type: React.PropTypes.oneOf([
      'primary',
      'secondary',
      'alternate',
      'warning',
      'danger'
    ]),
    theme: React.PropTypes.shape({
      primary: React.PropTypes.shape({
        default: React.PropTypes.string.isRequired,
        link: React.PropTypes.string.isRequired
      }).isRequired,
      secondary: React.PropTypes.shape({
        red: React.PropTypes.string.isRequired
      }).isRequired,
      grays: React.PropTypes.shape({
        white: React.PropTypes.string.isRequired,
        gray5: React.PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  static defaultProps = {
    component: 'button',
    type: 'primary'
  }

  constructor(...props) {
    super(...props);

    this.state = {
      hover: false
    };
  }

  renderDisabled(classNames, componentStyle, spanStyle) {
    const { component: Component } = this.props;

    return (
      <Component
        className={classNames}
        style={componentStyle}
        disabled={Component === 'button'}
      >
        <span style={spanStyle}>{this.props.children}</span>
      </Component>
    );
  }

  renderEnabled(classNames, componentStyle, spanStyle) {
    const { component: Component, onClick } = this.props;

    return (
      <Component
        className={classNames}
        style={componentStyle}
        onClick={onClick}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseDown={() => this.handleMouseDown()}
        onMouseUp={() => this.handleMouseUp()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <span style={spanStyle}>{this.props.children}</span>
      </Component>
    );
  }

  render() {
    const { classes } = this.props.sheet;
    const { component: Component, type, theme, disabled, onClick } = this.props;

    const stateClasses = this.getClassNames();

    const classNames = cx({
      [stateClasses.default]: true,
      [stateClasses.hover]: (this.state.hover && !this.state.down) && !disabled,
      [stateClasses.disabled]: disabled,
      [stateClasses.active]: this.state.down && !disabled
    });

    const componentStyle = {
      backgroundColor: this.getBGColor(),
      color: this.getColor()
    };

    const spanStyle = {
      opacity: type === 'secondary' ? .4 : 1
    };

    if (disabled)
      return this.renderDisabled(classNames, componentStyle, spanStyle);
    else
      return this.renderEnabled(classNames, componentStyle, spanStyle);
  }

  getClassNames() {
    const { classes } = this.props.sheet;

    switch (this.props.type) {
    case 'secondary':
    case 'warning':
      return {
        default: [classes.secondary],
        hover: [classes.secondaryHover],
        disabled: [classes.disabled],
        active: [classes.secondaryActive]
      };
    case 'primary':
    case 'alternate':
    case 'danger':
      return {
        default: [classes.button],
        hover: [classes.hover],
        disabled: [classes.disabled],
        active: [classes.active]
      };
    }
  }

  getBGColor() {
    switch (this.props.type) {
    case 'primary':
      return this.props.theme.primary.default;

    case 'warning':
    case 'secondary':
      return this.props.theme.grays.gray5;

    case 'alternate':
      return this.props.theme.primary.link;

    case 'danger':
      return this.props.theme.secondary.red;
    }
  }

  getColor() {
    switch (this.props.type) {
    case 'primary':
    case 'alternate':
    case 'danger':
      return this.props.theme.grays.white;

    case 'secondary':
      return 'black';

    case 'warning':
      return this.props.theme.secondary.red;
    }
  }

  handleMouseEnter() {
    this.setState({
      hover: true
    });
  }

  handleMouseLeave() {
    this.setState({
      hover: false,
      down: false
    });
  }

  handleMouseDown() {
    this.setState({
      down: true
    });
  }

  handleMouseUp() {
    this.setState({
      down: false
    });
  }
}

export default useTheme(useSheet(Button, styles));
