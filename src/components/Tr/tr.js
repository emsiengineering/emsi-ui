import { MenuItem } from 'react-aria-menubutton';
import React from 'react';
import CSSModules from 'react-css-modules';
import Td from '../Td';
import Checkbox from '../Checkbox';

import styles from './tr.css';

/**
 * TODO need documentation and examples for this component
 */
const Tr = ({ children, selectable, selected, onSelect, styles: CSS, ...other }) => {
  const selectTd = selectable ?  (
    <Td align='center'>
      <Checkbox type='cell' checked={selected} onChange={onSelect}/>
    </Td>
  ) : null;

  let styleName = selectable ? 'row selectable' : 'row';
  styleName += selected ? ' selected' : '';

  return (
    <tr {...other} styleName={styleName} onClick={onSelect}>
      {selectTd}
      {children}
    </tr>
  );
};

Tr.propTypes = {
  styles: React.PropTypes.object,
  selectable: React.PropTypes.bool,
  selected: React.PropTypes.bool,
  onSelect: React.PropTypes.func
};

Tr.defaultProps = {
  onSelect: function noop() {}
};

export default CSSModules(Tr, styles, { allowMultiple: true });
