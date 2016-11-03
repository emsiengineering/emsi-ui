import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';

import CSS from './text.styl';

type Props = {
  /** One of: display, headline, title, subtitle, body, caption, footnote */
  type: 'display'|'headline'|'title'|'subtitle'|'body'|'caption'|'footnote',
  /** color primary or alternate. */
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
function Text({ component: Component, color, children, type, bold, styles, ...other }: Props) {

  let styleNames = bold ? `font ${type} bold` : `font ${type}`;

  return (
    <Component {...other} styleName={`${styleNames} ${color}`}>{children}</Component>
  );
}

Text.defaultProps = {
  component: 'span',
  bold: false,
  color: 'inherit'
};

export default CSSModules(Text, CSS, { allowMultiple: true });
