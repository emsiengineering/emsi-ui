import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './row.css';

const ModificatorType = React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];


function getClassNames(props) {
  const mods = ['row'];

  modificatorKeys.forEach(key => {
    const value = props[key];

    if (value)
      mods.push(`${key}-${value}`);
  });

  if (props.reverse)
    mods.push('row-reverse');

  return mods.join(' ');
}

const Row = ({ children, component: Component, styles: CSSSTyles, ...other }) => {
  const styleName = getClassNames(other);

  return (
    <div {...other} styleName={styleName}>
      {children}
    </div>
  );
};

Row.propTypes = {
  reverse: React.PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  component: React.PropTypes.string,
  styles: React.PropTypes.string
};

Row.defaultProps = {
  component: 'div'
};

export default CSSModules(Row, styles, { allowMultiple: true });
