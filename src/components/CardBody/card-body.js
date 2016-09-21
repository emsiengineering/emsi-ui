import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './card-body.css';

const CardText = ({ component: Component, children, styles: CSS, ...other }) => {
  return (
    <Component styleName='card-body' {...other}>
      {children}
    </Component>
  );
};

CardText.propTypes = {
  component: React.PropTypes.string,
  styles: React.PropTypes.object
};

CardText.defaultProps = {
  component: 'div'
};

export default CSSModules(CardText, styles);
