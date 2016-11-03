import cx from 'classnames';
import CSSModules from 'react-css-modules';
import React from 'react';

import CSS from './label.styl';

type Props = {
  /** html element, div,span,button */
  component?: string,
  /** type of color, Oneof: primary, alternate */
  color?: 'primary'|'link',
  children: any,
  styles: Object,
  /** add any other props to the component */
  other?: Object
}

function Label({ component: Component, color, children, styles, ...other }: Props) {
  const styleName = cx({
    label: true,
    [color]: color
  });

  return (
    <Component styleName={styleName} {...other}>{children}</Component>
  );
}
Label.defaultProps = {
  component: 'label'
};

export default CSSModules(Label, CSS, { allowMultiple: true });
