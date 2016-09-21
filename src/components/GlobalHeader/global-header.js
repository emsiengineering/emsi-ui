import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './global-header.css';

const GlobalHeader = ({ component: Component, children, ...other }) => {

  return (
    <Component styleName='header' {...other}>
      {children}
    </Component>
  );
};

GlobalHeader.propTypes = {

};

GlobalHeader.defaultProps = {
  component: 'div'
};

export default CSSModules(GlobalHeader, styles);
