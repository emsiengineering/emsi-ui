import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import CheckboxGroup from '../CheckboxGroup';

/**
 * The RadioGroup component is a wrapper around the CheckboxGroup component, all the props that apply to the CheckboxGroup, apply to this one.
 */
function RadioGroup(props: Object) {
  return <CheckboxGroup {...props} required allowMultiple={false}>{props.children}</CheckboxGroup>;
}

export default RadioGroup;
