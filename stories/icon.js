import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Icon from '../src/components/Icon';
import theme from '../src/theme';

storiesOf('Icon', module)
  .add('dropdown', () => (
		<Icon name='dropdown' style={{ fontSize: '4rem' }} />
  ));
