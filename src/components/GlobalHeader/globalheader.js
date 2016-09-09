import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import ContentWrap from '../ContentWrap';
import Logo from '../Logo';
import Icon from '../Icon';

import styles from './globalheader.css';

const GlobalHeader = ({ children, color }) => {

  return (
		<div styleName='globalheader' style={{ backgroundColor: color }}>
      <ContentWrap styleName='content-wrap'>
        <Logo />
        {children}
      </ContentWrap>
		</div>
  );
};

GlobalHeader.propTypes = {
  color: PropTypes.string
};

export default CSSModules(GlobalHeader, styles, { allowMultiple: true });
