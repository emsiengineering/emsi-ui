import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './header.css';

const Header = ({ component: Component, color, children, type, bold, styles: CSSStyles, ...other }) => {

  let styleNames = bold ? `bold ${type}` : `${type}`;

  switch (color) {
  case 'primary':
    styleNames += ' primary';
    break;

  case 'alternate':
    styleNames += ' alternate';
    break;
  }

  return (
    <Component {...other} styleName={styleNames}>{children}</Component>
  );
};

Header.propTypes = {
  type: React.PropTypes.oneOf(['display', 'headline', 'title', 'subtitle', 'body', 'caption', 'footnote']),
  color: React.PropTypes.oneOf(['primary', 'alternate']),
  bold: React.PropTypes.bool,
  styles: PropTypes.object
};

Header.defaultProps = {
  type: 'display',
  component: 'div'
};

export default CSSModules(Header, styles, { allowMultiple: true });
