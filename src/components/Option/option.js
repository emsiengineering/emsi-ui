import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './option.css';

type Props = {
  /** sets the active class when true */
  active?: boolean,
  children?: any,
}
/**
 * Must be used in inside a Select Component
 */
function Option({ active, children }: Props) {
  const styleName: string = active ? 'active' : 'option';

  return (
    <li>
      <MenuItem styleName={styleName} tabIndex='0'>
        {children}
      </MenuItem>
    </li>
  );
}
Option.defaultProps = {
  acitve: false
};

export default CSSModules(Option, styles);
