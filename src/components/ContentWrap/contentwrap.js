import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './contentwrap.css';

const ContentWrap = ({ children, className }) => {

  return (
		<div className={className} styleName='content-wrap'>{children}</div>
  );
};

export default CSSModules(ContentWrap, styles, { allowMultiple: true });
