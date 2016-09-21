import cx from 'classnames';
import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './label.css';

const Label = ({ component: Component, color, children, styles: CSS, ...other }) => {
  const colorStyle = color ? color : 'label';

  return (
    <Component styleName='label' {...other}>{children}</Component>
  );
};

Label.propTypes = {
  styles: React.PropTypes.object,
  color: React.PropTypes.oneOf(['primary', 'alternate'])
};

Label.defaultProps = {
  component: 'label'
};

export default CSSModules(Label, styles);
