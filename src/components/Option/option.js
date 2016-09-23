import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './option.css';

type Props = {
  active?: boolean,
  children?: any,
  onClick?: Function
}

function Option({ active, children, onClick }: Props) {
  const styleName: string = active ? 'active' : 'option';

  return (
    <li>
      <MenuItem styleName={styleName} tabIndex='0'>
        {children}
      </MenuItem>
    </li>
  );
}

export default CSSModules(Option, styles);
