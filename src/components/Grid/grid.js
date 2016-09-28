import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './grid.css';

type Props = {
  fluid?: boolean,
  children: any,
  component?: string,
  styles: Object,
  other?: Object
}
/**
 * The Gird is composed of 12 flexable columns
 */
function Grid({ fluid, children, component: Component = 'div', styles: CSSStyles, ...other }: Props) {
  const styleName: string = fluid ? 'fluid' : 'grid';

  return (
    <div {...other} styleName={styleName}>
      {children}
    </div>
  );
}
Grid.defaultProps = {
  component: 'div',
  fluid: false,

};

export default CSSModules(Grid, styles, { allowMultiple: true });
