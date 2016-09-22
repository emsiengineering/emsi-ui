import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './pillbox.css';

type Props = {
  children?: any,
  active?: boolean,
  styles: Object,
  other?: Object
}

function Pillbox({ children, active, styles: CSSSTyles, ...other }: Props) {
  return (
    <div styleName={active ? 'pillbox active' : 'pillbox'}>
      {children}
    </div>
  );
}

export default CSSModules(Pillbox, styles, { allowMultiple: true });
