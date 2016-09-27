import React, { PropTypes } from 'react';

import Input from '../Input';

const Textarea = (props: Object) => {
  return <Input {...props} component='textarea'>{props.children}</Input>;
};

export default Textarea;
