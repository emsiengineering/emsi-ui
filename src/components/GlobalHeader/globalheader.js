import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import ContentWrap from '../ContentWrap';
import Logo from '../Logo';
import Icon from '../Icon';

import styles from './globalheader.css';

const GlobalHeader = ({ children, color, logoUrl, logoWidth, logoHeight }) => {

  return (
		<div styleName='globalheader' style={{ backgroundColor: color }}>
      <ContentWrap styleName='content-wrap'>
        <Logo logoUrl={logoUrl} width={logoWidth} height={logoHeight}/>
        {children}
      </ContentWrap>
		</div>
  );
};

GlobalHeader.propTypes = {
  color: PropTypes.string,
	logoUrl: PropTypes.string,
  logoWidth: PropTypes.string,
  logoHeight: PropTypes.string
};

export default CSSModules(GlobalHeader, styles, { allowMultiple: true });
