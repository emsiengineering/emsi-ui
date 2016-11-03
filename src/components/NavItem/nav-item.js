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
  tabIndex: number,
  title: string,
  top: boolean
}
/**
 * Tab can't be used outside the TabPanel Component context
 */
function NavItem({ children, active, styles, title, tabIndex, top, ...other }: Props) {
  let styleName = cx({
    'nav-item': true,
    active,
    top
  });

  let styleNameBorder = cx({
    'nav-item-border': true,
    active
  });

  return (
    <div
      styleName={styleName}
      tabIndex={tabIndex}
      {...other}
    >
      <div styleName='nav-item-text'>
        {title}
      </div>
      <div styleName='nav-item-border' />
    </div>
  );
}

NavItem.defaultProps = {
  tabIndex: 0,
  top: false
};

export default CSSModules(NavItem, CSS, { allowMultiple: true });
