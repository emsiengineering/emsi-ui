import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Alert from '../src/components/Alert';

storiesOf('Alert', module)
  .add('default', () => (
      <Alert title='Test'>Text</Alert>
  ))
  .add('primary', () => (
      <Alert title='Test' type='primary'>Text</Alert>
  ))
  .add('link', () => (
      <Alert title='Test' type='link'>Text</Alert>
  ))
  .add('danger', () => (
      <Alert title='Test' type='danger'>Text</Alert>
  ));
