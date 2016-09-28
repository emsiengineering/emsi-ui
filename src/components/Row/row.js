import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './row.css';

type ModificatorType = 'xs'|'sm'|'md'|'lg';

type Props = {
  /** true sets the flex-direction to row-reverse */
  reverse?: boolean,
  /** One of: 'xs'|'sm'|'md'|'lg' */
  start?: ModificatorType,
  /** One of: 'xs'|'sm'|'md'|'lg' */
  center?: ModificatorType,
  /** One of: 'xs'|'sm'|'md'|'lg' */
  end?: ModificatorType,
  /** One of: 'xs'|'sm'|'md'|'lg' */
  top?: ModificatorType,
  /** One of: 'xs'|'sm'|'md'|'lg' */
  middle?: ModificatorType,
  /** One of: 'xs'|'sm'|'md'|'lg' */
  bottom?: ModificatorType,
  /** One of: 'xs'|'sm'|'md'|'lg' */
  around?: ModificatorType,
  /** One of: 'xs'|'sm'|'md'|'lg' */
  between?: ModificatorType,
  /** One of: 'xs'|'sm'|'md'|'lg' */
  first?: ModificatorType,
  /** One of: 'xs'|'sm'|'md'|'lg' */
  last?: ModificatorType,
  /** html element: button, div, etc */
  component?: string,
  styles: Object,
  other?: Object,
  children: any
}

function getClassNames(props: Object) {
  const modificatorKeys: Array = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];
  const mods: Array = ['row'];

  modificatorKeys.forEach((key: string) => {
    const value: ?string = props[key];

    if (value)
      mods.push(`${key}-${value}`);
  });

  if (props.reverse)
    mods.push('row-reverse');

  return mods.join(' ');
}
/**
 * Row component is used inside the Grid component only
 */
function Row({ children, component: Component, styles: CSSSTyles, ...other }: Props) {
  const styleName: string = getClassNames(other);
  return (
    <div {...other} styleName={styleName}>
      {children}
    </div>
  );
}
Row.defaultProps = {
  component: 'div'
};

export default CSSModules(Row, styles, { allowMultiple: true });
