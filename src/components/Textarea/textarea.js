import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import Input from '../Input';

const Textarea = (props) => {
  return <Input {...props} component='textarea'>{props.children}</Input>;
};

export default Textarea;
