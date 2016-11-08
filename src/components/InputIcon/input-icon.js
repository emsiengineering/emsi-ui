import CSSModules from 'react-css-modules';
import React from 'react';

import CSS from './input-icon.styl';
import Icon from '../Icon';

type Props = {
 name: string,
 styles?: Object
}

function InputIcon({ name, styles, ...other }: Props) {

  return (
    <Icon name={name} styleName='input-icon' size='medium' />
  );
}

InputIcon.defaultProps = {
  name: 'search'
};

export default CSSModules(InputIcon, CSS, { allowMultiple: true });
