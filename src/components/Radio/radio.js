import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import Checkbox from '../Checkbox';

/**
 * The Radio component is a wrapper around the Checkbox component, all the props that apply to the Checkbox, apply to this one.
 */
function Radio(props: Object) {
  return <Checkbox {...props} radio>{props.children}</Checkbox>;
}

export default Radio;
