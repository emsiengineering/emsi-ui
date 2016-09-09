import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './logo.css';

const Logo = ({ children, logoUrl, width, height, styles: CSSStyles, ...other }) => {

  return (
		<div
			styleName='logo'
			style={{
				backgroundImage: `url(${logoUrl})`,
				width,
				height }}>
			{children}
		</div>
  );
};

Logo.propTypes = {
  logoUrl: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	styles: PropTypes.object
};

Logo.defaultProps = {
	width: '75px',
	height: '75px',
	logoUrl: 'https://s3-us-west-2.amazonaws.com/career-coach-uploads/ccc/ccc_logo.gif'
};

export default CSSModules(Logo, styles, { allowMultiple: true });
