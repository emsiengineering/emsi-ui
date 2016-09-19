import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';
import Checkbox from '../Checkbox';

import styles from './td.css';

const Td = ({ children, component: Component, align, styles: CSS, ...other }) => {
  const styleName = align === 'left' ? 'column' : `column ${align}`;

  if (React.Children.toArray(children)[0].type === Checkbox)
    return (
      <Component {...other} styleName={`${styleName} checkbox`}>
        {children}
      </Component>
    );
  else
    return (
      <Component {...other} styleName={styleName}>
        {children}
      </Component>
    );
};

Td.propTypes = {
  styles: React.PropTypes.object,
  align: React.PropTypes.oneOf(['left', 'center', 'right']),
  component: React.PropTypes.string
};

Td.defaultProps = {
  align: 'left',
  component: 'td'
};

export default CSSModules(Td, styles, { allowMultiple: true });
