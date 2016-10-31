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
  styles: void,
  /** add any other props to the component */
  other?: void,
  handleRef?: Function
}
/**
 * All the rem sizes are based on having the html element set to 65.5% font-size
 */
class Header extends React.Component<void, Props, void> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { component: Component = 'div', handleRef, color, children, type, bold, styles: CSSStyles, ...other } = this.props;
    let styleNames = bold ? `${type} bold` : `${type}`;
    return (
      <Component
        {...other}
        ref={(el) => {
          handleRef(el);
        }}
        styleName={styleNames += ` ${color}`}
      >
        {children}
      </Component>
    );
  }
}
Header.defaultProps = {
  component: 'div',
  bold: false,
  color: 'inherit'
};

export default CSSModules(Header, styles, { allowMultiple: true });
