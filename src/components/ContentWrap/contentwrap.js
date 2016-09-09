import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './contentwrap.css';

const ContentWrap = ({ children, styles: CSSStyles, ...other }) => {

  return (
		<div {...other} styleName='content-wrap'>{children}</div>
  );
};

ContentWrap.propTypes = {
	styles: PropTypes.object
};

export default CSSModules(ContentWrap, styles, { allowMultiple: true });
