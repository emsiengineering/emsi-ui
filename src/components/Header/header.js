import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.css';

type Props = {
  /** One of: display, headline, title, subtitle, body, caption, footnote */
  type: 'display'|'headline'|'title'|'subtitle'|'body'|'caption'|'footnote',
  /** color of the header, primary or alternate. */
  color?: 'primary'|'alternate'| 'inherit',
  /** bold the text */
  bold?: boolean,
  /** html element: div,span,button, etc */
  component?: string,
  children: any,
  styles: Object,
  /** add any other props to the component */
  other?: Object
}
/**
 * All the rem sizes are based on having the html element set to 65.5% font-size
 */
function Header({ component: Component = 'div', color, children, type, bold, styles: CSSStyles, ...other }: Props) {

  let styleNames = bold ? `${type} bold` : `${type}`;

  return (
    <Component {...other} styleName={styleNames += ` ${color}`}>{children}</Component>
  );
}
Header.defaultProps = {
  component: 'div',
  bold: false,
  color: 'inherit'
};

export default CSSModules(Header, styles, { allowMultiple: true });
