import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './grid.css';

const Grid = ({ fluid, children, component: Component, styles: CSSStyles, ...other }) => {
  const styleName = fluid ? 'container container-fluid' : 'container';

  return (
    <div {...other} styleName={styleName}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  fluid: React.PropTypes.bool,
  component: React.PropTypes.string,
  styles: React.PropTypes.object
};

Grid.defaultProps = {
  component: 'div'
};

export default CSSModules(Grid, styles, { allowMultiple: true });
