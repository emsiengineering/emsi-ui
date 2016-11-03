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
  // reverse?: Boolean,
  component?: string,
  styles?: Object,
  /** add additional props */
  other?: Object,
  children: any
}

function getClassNames(props: Object): string {
  const classMap: Object = {
    xs: 'tiny',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xsOffset: 'tiny-offset',
    smOffset: 'small-offset',
    mdOffset: 'medium-offset',
    lgOffset: 'large-offset'
  };

  // for some reason styleguide throws an error if you chain the join function to end of this
  let concatProps = Object.keys(props)
                        .filter(key => classMap[key])
                        .map(key => Number.isInteger(props[key]) ? `${classMap[key]}-${props[key]}` : key);

  return ['columns'].concat(concatProps).join(' ');
}
/**
 * Col component used only inside the Grid component
 */
function Col({ children, component: Component, styles, ...other }: Props) {
  let styleName: string = getClassNames(other);
  let { xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset, ...rest } = other;

  return (
    <div styleName={styleName} {...rest}>
      {children}
    </div>
  );
}

Col.defaultProps = {
  component: 'div'
};

export default CSSModules(Col, CSS, { allowMultiple: true });
