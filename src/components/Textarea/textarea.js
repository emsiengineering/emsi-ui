import React, { PropTypes } from 'react';

import Input from '../Input';

/**
 * Textarea is a wrapper around the Input component
 * All the same props apply to this component
 */
const Textarea = (props: Object) => {
  return <Input {...props} component='textarea'>{props.children}</Input>;
};

export default Textarea;
