import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './option.css';

const Option = ({ active, children, onClick }) => {
  const styleName = active ? 'option active' : 'option';

  return (
    <li>
      <MenuItem styleName={styleName}>
        {children}
      </MenuItem>
    </li>
  );
};

Option.propTypes = {
  active: React.PropTypes.bool
};

export default CSSModules(Option, styles, { allowMultiple: true });
