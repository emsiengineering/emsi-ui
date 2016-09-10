import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './header.css';

const Header = ({ component: Component, children, type, bold, styles: CSSStyles, ...other }) => {

	const StyleNames = bold ? `bold ${type}` : `${type}`;

  return (
    <Component {...other} styleName={StyleNames}>{children}</Component>
  );
};

Header.propTypes = {
  type: React.PropTypes.oneOf(['display', 'headline', 'title', 'subtitle', 'body', 'caption', 'footnote']),
  bold: React.PropTypes.bool,
	styles: PropTypes.object
};

Header.defaultProps = {
  type: 'display',
  component: 'div'
};

export default CSSModules(Header, styles, { allowMultiple: true });
