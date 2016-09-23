import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Alert from '../src/components/Alert';
import Option from '../src/components/Option';

storiesOf('Alert', module)
  .add('default', () => (
      <Alert title='Test'>Text</Alert>
  ));
