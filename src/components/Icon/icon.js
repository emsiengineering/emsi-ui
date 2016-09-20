import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './icon.css';

const ioIcons = {
  radioChecked: 'm19.8 11.9c4.4 0 8.1 3.6 8.1 8.1s-3.7 8.1-8.1 8.1-8.2-3.6-8.2-8.1 3.7-8.1 8.2-8.1z m0-8.1c8.9 0 16.2 7.3 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.4-16.3-16.3 7.3-16.2 16.3-16.2z m0 29.2c7.1 0 12.9-5.8 12.9-13s-5.8-13-12.9-13-13 5.8-13 13 5.8 13 13 13z',
  radio: 'm19.8 3.8c8.9 0 16.2 7.3 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.4-16.3-16.3 7.3-16.2 16.3-16.2z m0 29.2c7.1 0 12.9-5.8 12.9-13s-5.8-13-12.9-13-13 5.8-13 13 5.8 13 13 13z',
  checkboxChecked: 'm31.6 5c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z m-15 23.4l15-15-2.3-2.4-12.7 12.7-5.9-6-2.3 2.3z',
  checkbox: 'm31.6 8.4h-23.2v23.2h23.2v-23.2z m0-3.4c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z',
  dropdown: 'm10 15h20l-10 10z',
  close: 'm31.8 10.7l-9.3 9.3 9.3 9.3-2.4 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z'
};

const Icon = ({ component: Component, children, name, color, styles: CSSStyles, ...other }) => {
  const colorStyle = color ? color : 'icon';

  return (
    <svg
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 40 40'
      styleName={colorStyle}
      {...other}
    >
			<g>
        <path d={ioIcons[name]} />
      </g>
		</svg>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(ioIcons)).isRequired,
  styles: PropTypes.object,
  component: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'alternate'])
};

Icon.defaultProps = {
  component: 'i'
};

export default CSSModules(Icon, styles, { allowMultiple: true });
