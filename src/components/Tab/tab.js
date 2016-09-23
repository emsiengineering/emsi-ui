import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { Tab as AriaTab } from 'react-aria-tabpanel';

import styles from './tab.css';

type Props = {
  active?: boolean,
  position?: string,
  width?: string,
  id?: string,
  styles: Object,
  other?: Object,
  children: any
}

function Tab({ children, active, id, position, width, styles: CSS, ...other }: Props) {
  let styleName: string = active ? `tab tab-active-${position}` : 'tab';
  let inlineStyles = {};

  if (width)
    inlineStyles.width = width;

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

Tab.displayName = 'emsiUI-Tab';

export default CSSModules(Tab, styles, { allowMultiple: true });
