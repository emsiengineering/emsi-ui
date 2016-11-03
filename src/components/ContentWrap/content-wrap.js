import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';

import CSS from './content-wrap.styl';

type Props = {
  children: any,
  styles: Object,
  /** add any other props to the component */
  other?: any
}

/**
 * Top level container component to wrap all other components, with max width and padding
 */
function ContentWrap({ children, styles, ...other }: Props) {
  return (
		<div {...other} styleName='content-wrap'>{children}</div>
  );
}

export default CSSModules(ContentWrap, CSS);
