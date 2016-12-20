import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';

import Text from '../Text';

type Props = {
  /** html element: div,span,button, etc */
  component?: string,
  children: any
}
/**
 * All the rem sizes are based on having the html element set to 65.5% font-size
 */
function Header({ component, children, ...other }: Props) {
  return (
    <Text {...other} component={component} header>{children}</Text>
  );
}

Header.defaultProps = {
  component: 'div'
};

export default Header;
