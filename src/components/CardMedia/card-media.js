import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './card-media.css';

const CardMedia = ({ component: Component, children, ...other }) => {
  return (
    <Component styleName='card-media' {...other}>
      {children}
    </Component>
  );
};

CardMedia.propTypes = {
  component: React.PropTypes.string
};

CardMedia.defaultProps = {
  component: 'div'
};

export default CSSModules(CardMedia, styles);
