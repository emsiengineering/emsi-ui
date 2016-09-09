import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import * as icons from 'react-icons/io';

import styles from './icon.css';

const Icon = ({ component, children, value, styles: CSSStyles, ...other }) => {
  const Component = icons[component];
  return (
		<Component {...other} value={value} styleName='icon'>
			<em>{children}</em>
		</Component>
  );
};

Icon.propTypes = {
  component: PropTypes.string,
  value: PropTypes.string,
  styles: PropTypes.object
};

export default CSSModules(Icon, styles, { allowMultiple: true });
