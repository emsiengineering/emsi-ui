import CSSModules from 'react-css-modules';
import React from 'react';

import CSS from './col.styl';

type NumberType = 1|2|3|4|5|6|7|8|9|10|11|12;

type Props = {
  /** One of: 1 - 12 */
  xs?: NumberType,
  /** One of: 1 - 12 */
  sm?: NumberType,
  /** One of: 1 - 12 */
  md?: NumberType,
  /** One of: 1 - 12 */
  lg?: NumberType,
  /** One of: 1 - 12 */
  xsOffset?: NumberType,
  /** One of: 1 - 12 */
  smOffset?: NumberType,
  /** One of: 1 - 12 */
  mdOffset?: NumberType,
  /** One of: 1 - 12 */
  lgOffset?: NumberType,
  reverse?: Boolean,
  component?: string,
  styles?: Object,
  /** add additional props */
  other?: Object,
  children: any
}

function getClassNames(props: Object): string {
  const classMap: Object = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xsOffset: 'xs-offset',
    smOffset: 'sm-offset',
    mdOffset: 'md-offset',
    lgOffset: 'lg-offset'
  };
  // for some reason styleguide throws an error if you chain the join function to end of this
  const concatProps = Object.keys(props)
                        .filter(key => classMap[key])
                        .map(key => Number.isInteger(props[key]) ? `${classMap[key]}-${props[key]}` : key);

  return concatProps;
}
/**
 * Col component used only inside the Grid component
 */
function Col({ children, component: Component, styles, reverse, ...other }: Props) {
  const styleName: Array = getClassNames(other);

  if (reverse)
    styleName.push('reverse');


  return (
    <div styleName={styleName.join(' ')}>
      {children}
    </div>
  );
}
Col.defaultProps = {
  component: 'div'
};

export default CSSModules(Col, CSS, { allowMultiple: true });
