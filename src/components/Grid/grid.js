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
 * The Gird is composed of 12 flexable columns, it has a gutter of 2rem between columns
 * It breaks down at 1024px and 767px
 */
function Grid({ fluid, children, component: Component, styles: CSSStyles, ...other }: Props) {
  const styleName: string = fluid ? 'fluid' : 'grid';

  return (
    <div {...other} styleName={styleName}>
      {children}
    </div>
  );
}
Grid.defaultProps = {
  component: 'div',
  fluid: false
};

export default CSSModules(Grid, styles, { allowMultiple: true });
