import CSSModules from 'react-css-modules';
import React from 'react';
import { Tab as AriaTab } from 'react-aria-tabpanel';

import styles from './tab.css';

const Tab = ({ children, active, id, position, styles: CSS, ...other }) => {
  let styleName = active ? `tab tab-active-${position}` : 'tab';

  return (
    <AriaTab {...other} id={id} styleName={styleName} active={active}>
      {children}
    </AriaTab>
  );
};

Tab.propTypes = {
  active: React.PropTypes.bool,
  position: React.PropTypes.string,
  id: React.PropTypes.string,
  styles: React.PropTypes.func
};

Tab.displayName = 'emsiUI-Tab';

export default CSSModules(Tab, styles, { allowMultiple: true });
