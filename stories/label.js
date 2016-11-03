import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Label from '../src/components/Label';

storiesOf('Label', module)
  .add('default', () => (
		<Label>Test</Label>
  ))
  .add('color primary', () => (
		<Label color='primary'>Test</Label>
  ))
  .add('color link', () => (
		<Label color='link'>Test</Label>
  ));
