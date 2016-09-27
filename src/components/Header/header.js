import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.css';

type Props = {
  type: 'display'|'headline'|'title'|'subtitle'|'body'|'caption'|'footnote',
  color?: 'primary'|'alternate',
  bold?: boolean,
  component?: string,
  children: any,
  styles: Object,
  other?: Object
}

function Header({ component: Component = 'div', color, children, type, bold, styles: CSSStyles, ...other }: Props) {

  let styleNames: string = bold ? `bold ${type}` : `${type}`;

  switch (color) {
  case 'primary':
    styleNames += ' primary';
    break;

  case 'alternate':
    styleNames += ' alternate';
    break;
  }

  return (
    <Component {...other} styleName={styleNames}>{children}</Component>
  );
}

export default CSSModules(Header, styles, { allowMultiple: true });
