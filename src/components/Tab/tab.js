import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { Tab as AriaTab } from 'react-aria-tabpanel';

import styles from './tab.css';

type Props = {
  /** adds the active class, when true */
  active?: boolean,
  /** position the active class on the bottom or top of the text */
  position?: 'top'|'bottom',
  id?: string,
  styles: Object,
  /** any additional props to add */
  other?: Object,
  children: any
}
/**
 * Tab can't be used outside the TabPanel Component context
 */
function Tab({ children, active, id, position, styles: CSS, ...other }: Props) {
  let styleName: string = active ? `tab tab-active-${position}` : 'tab';

  return (
    <AriaTab
      {...other}
      id={id}
      styleName={styleName}
      active={active}
    >
      {children}
    </AriaTab>
  );
}

export default CSSModules(Tab, styles, { allowMultiple: true });
