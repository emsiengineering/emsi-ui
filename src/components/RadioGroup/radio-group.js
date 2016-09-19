import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import CheckboxGroup from '../CheckboxGroup';

const RadioGroup = (props) => {
  return <CheckboxGroup {...props} required allowMultiple={false}>{props.children}</CheckboxGroup>;
};

export default RadioGroup;
