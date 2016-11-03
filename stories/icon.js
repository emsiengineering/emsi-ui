import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import theme from '../src/theme';
import Icon from '../src/components/Icon';

storiesOf('Icon', module)
  .add('dropdown', () => (
		<Icon name='dropdown' />
  ))
  .add('dropdown, size small', () => (
		<Icon name='dropdown' size='small' />
  ))
  .add('dropdown, size medium', () => (
		<Icon name='dropdown' size='medium' />
  ))
  .add('dropdown, color primary', () => (
		<Icon name='dropdown' color='primary' />
  ))
  .add('dropdown, color link', () => (
		<Icon name='dropdown' color='link' />
  ));
