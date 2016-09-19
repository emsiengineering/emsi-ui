import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './pillbox.css';

const Pillbox = ({ children, active, styles: CSSSTyles, ...other }) => {

  return (
    <div styleName={active ? 'pillbox active' : 'pillbox'}>
      {children}
    </div>
  );
};

Pillbox.propTypes = {
  styles: React.PropTypes.object,
  active: PropTypes.bool
};

export default CSSModules(Pillbox, styles, { allowMultiple: true });
