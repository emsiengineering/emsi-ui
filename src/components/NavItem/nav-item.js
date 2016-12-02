import cx from 'classnames';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';

import CSS from './nav-item.styl';

type Props = {
  /** adds the active class, when true */
  active?: boolean,
  /** position the active class on the bottom or top of the text */
  styles: Object,
  /** any additional props to add */
  title: string
}
/**
 * Tab can't be used outside the TabPanel Component context
 */
function NavItem({ children, active, styles, title, ...other }: Props) {
  const styleName = active ? 'nav-item active' : 'nav-item';

  return (
    <li
      styleName={styleName}
      {...other}
    >
      <div>
        {title}
      </div>
    </li>
  );
}

NavItem.defaultProps = {
  tabIndex: 0,
  top: false
};

export default CSSModules(NavItem, CSS, { allowMultiple: true });
