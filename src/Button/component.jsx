import React from 'react';
import useSheet from 'react-jss';
import { elementType } from 'react-prop-types';
import cx from 'classnames';
import jss from '../jss';

import { hexToRGB } from '../helpers';

const styles = {
  button: {
    fontSize: '1em',
    fontWeight: 500,
    boxShadow: 'none',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    outline: 'none',
    padding: '17.5px 35px',
    textAlign: 'center',
    borderRadius: '2px',
    position: 'relative',
    opacity: 1,
    textDecoration: 'none'
  },

  inverse: {
    background: 'transparent',
    border: '1px solid'
  },

  light: {
    border: '1px solid',
    backgroundClip: 'padding-box' // fixes issues with rgba on both background and border
  },

  fill: {
    width: '100%'
  }
};

class Button extends React.Component {
  static propTypes = {
    component: React.PropTypes.string,
    hoverStyle: React.PropTypes.object,
    defaultStyle: React.PropTypes.shape({
      backgroundColor: React.PropTypes.string.isRequired
    }),
    fill: React.PropTypes.bool,
    type: React.PropTypes.oneOf([
      'normal',
      'inverse',
      'light'
    ])
  }

  static defaultProps = {
    component: 'button',
    defaultStyle: {
      backgroundColor: '#41d492',
      border: '1px solid #41d492'
    },
    hoverStyle: {
      border: '1px solid rgba(0,0,0,0.1)',
      boxShadow: 'inset 0 0 0 200px rgba(0,0,0,0.1)'
    },
    type: 'normal'
  }

  constructor(...props) {
    super(...props);

    this.state = {
      hover: false
    };
  }

  render() {
    const { classes } = this.props.sheet;
    const { component: Component, fill, type } = this.props;

    const classNames = cx({
      [classes.button]: true,
      [classes.fill]: fill,
      [classes[type]]: type === 'normal' ? false : true
    });

    const style = {
      ...this.getStyles()
    };

    return (
      <Component
        style={style}
        className={classNames}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        {this.props.children}
      </Component>
    );
  }

  getStyles() {
    const { type } = this.props;

    if (type === 'inverse' && !this.state.hover)
      return this.getInverseStyles();
    else if (type === 'light' && !this.state.hover)
      return this.getLightStyles();
    else
      return this.getDefaultStyles();
  }

  getLightStyles() {
    const RGB = hexToRGB(this.props.defaultStyle.backgroundColor);

    // borderColor has to be 0.02 due to how browsers apply background opacity.
    return {
      ...this.getInverseStyles(),
      borderColor: `rgba(${RGB.r}, ${RGB.g}, ${RGB.b}, 0.2)`,
      backgroundColor: `rgba(${RGB.r}, ${RGB.g}, ${RGB.b}, 0.2)`
    };
  }

  getInverseStyles() {
    return {
      color: this.props.defaultStyle.backgroundColor,
      borderColor: this.props.defaultStyle.backgroundColor
    };
  }

  getDefaultStyles() {
    return this.state.hover && this.props.type === 'normal' ? {
      ...this.props.defaultStyle,
      ...this.props.hoverStyle
    } : this.props.defaultStyle;
  }

  handleMouseEnter() {
    this.setState({
      hover: true
    });
  }

  handleMouseLeave() {
    this.setState({
      hover: false
    });
  }
}

export default useSheet(Button, styles);
