import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './row.css';

type ModificatorType = 'xs'|'sm'|'md'|'lg';

type Props = {
  reverse?: boolean,
  start?: ModificatorType,
  center?: ModificatorType,
  end?: ModificatorType,
  top?: ModificatorType,
  middle?: ModificatorType,
  bottom?: ModificatorType,
  around?: ModificatorType,
  between?: ModificatorType,
  first?: ModificatorType,
  last?: ModificatorType,
  component?: string,
  styles: Object,
  other?: Object,
  children: any
}

const modificatorKeys: Array = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

function getClassNames(props: Object) {
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

function Row({ children, component: Component = 'div', styles: CSSSTyles, ...other }: Props) {
  const styleName: string = getClassNames(other);
  return (
    <div {...other} styleName={styleName}>
      {children}
    </div>
  );
}

export default CSSModules(Row, styles, { allowMultiple: true });
