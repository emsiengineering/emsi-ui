import cx from 'classnames';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';

import CSS from './icon.styl';

const ioIcons = {
  radioChecked: 'm19.8 11.9c4.4 0 8.1 3.6 8.1 8.1s-3.7 8.1-8.1 8.1-8.2-3.6-8.2-8.1 3.7-8.1 8.2-8.1z m0-8.1c8.9 0 16.2 7.3 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.4-16.3-16.3 7.3-16.2 16.3-16.2z m0 29.2c7.1 0 12.9-5.8 12.9-13s-5.8-13-12.9-13-13 5.8-13 13 5.8 13 13 13z',
  radio: 'm19.8 3.8c8.9 0 16.2 7.3 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.4-16.3-16.3 7.3-16.2 16.3-16.2z m0 29.2c7.1 0 12.9-5.8 12.9-13s-5.8-13-12.9-13-13 5.8-13 13 5.8 13 13 13z',
  checkboxChecked: 'm31.6 5c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z m-15 23.4l15-15-2.3-2.4-12.7 12.7-5.9-6-2.3 2.3z',
  checkbox: 'm31.6 8.4h-23.2v23.2h23.2v-23.2z m0-3.4c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z',
  dropdown: 'm10 15h20l-10 10z',
  close: 'm31.8 10.7l-9.3 9.3 9.3 9.3-2.4 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z',
  search: 'm26.4 23.8l8.6 8.6-2.6 2.6-8.5-8.6v-1.3l-0.5-0.5c-2 1.7-4.6 2.7-7.3 2.7-6.2 0-11.1-5-11.1-11.1s4.9-11.2 11-11.2c6.2 0 11.1 5 11.1 11.2 0 2.8-1 5.3-2.6 7.2l0.5 0.4h1.4z m-10.3 0c4.3 0 7.7-3.3 7.7-7.6s-3.4-7.8-7.7-7.8-7.7 3.5-7.7 7.8 3.4 7.6 7.7 7.6z'
};

type Props = {
  /** html element: div,span,button, etc */
  component?: string,
  /** One of: radioChecked, radio, checkboxChecked, checkbox, dropdown, close*/
  name: 'radioChecked'|'radio'|'checkboxChecked'|'checkbox'|'dropdown'|'close'|'search',
  /** One of: small*/
  size?: 'small'|'medium'|'large'|void,
  /** One of: primary, alternate*/
  color?: 'primary'|'link'|void,
  styles: Object,
  /** add any other props to the component */
  other?: Object
}

function Icon({ component: Component = 'i', name, size, color, styles, ...other }: Props) {
  const colorStyle: string|void = color ? color : null;
  const sizeStyle: string = size ? size : 'icon';

  const styleName = cx({
    icon: true,
    [color]: color,
    [size]: size
  });

  return (
    <svg
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 40 40'
      styleName={styleName}
      {...other}
    >
			<g>
        <path d={ioIcons[name]} />
      </g>
		</svg>
  );
}

Icon.defaultProps = {
  component: 'i',
  size: 'large'
};

export default CSSModules(Icon, CSS, { allowMultiple: true });
