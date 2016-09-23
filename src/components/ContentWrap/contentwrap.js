import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './contentwrap.css';

type Props = {
  children: any,
  styles: Object,
  other?: any
}

function ContentWrap({ children, styles: CSS, ...other }: Props) {
  return (
		<div {...other} styleName='content-wrap'>{children}</div>
  );
}

export default CSSModules(ContentWrap, styles);
