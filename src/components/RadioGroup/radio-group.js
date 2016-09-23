import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import CheckboxGroup from '../CheckboxGroup';

function RadioGroup(props: Object) {
  return <CheckboxGroup {...props} required allowMultiple={false}>{props.children}</CheckboxGroup>;
}

export default RadioGroup;
