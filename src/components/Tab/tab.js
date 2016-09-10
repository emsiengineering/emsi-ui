import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
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
  active: PropTypes.bool,
  position: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.func
};

Tab.displayName = 'emsiUI-Tab';

export default CSSModules(Tab, styles, { allowMultiple: true });
