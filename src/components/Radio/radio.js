import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import Checkbox from '../Checkbox';

const Radio = (props) => {
  return <Checkbox {...props} radio>{props.children}</Checkbox>;
};

export default Radio;
