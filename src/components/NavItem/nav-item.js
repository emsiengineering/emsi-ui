import React, { PropTypes } from 'react';

import CSS from './nav-item.styl';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

type Props = {
  /** position the active class on the bottom or top of the text */
  styles: Object,
  tabIndex: number
}
/**
 * Tab can't be used outside the TabPanel Component context
 */
function NavItem({ children, styles, ...other }: Props) {
  return (
    <li
      styleName='nav-item'
      {...other}
    >
      <div>
        {children}
      </div>
    </li>
  );
}

NavItem.defaultProps = {
  tabIndex: -1
};

export default CSSModules(NavItem, CSS, { allowMultiple: true });
