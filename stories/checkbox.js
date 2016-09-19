import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Checkbox from '../src/components/Checkbox';
import Radio from '../src/components/Radio';
import ThemeProvider from '../src/components/ThemeProvider/component';
import theme from '../src/theme';

storiesOf('Checkbox/Radio', module)
  .add('Checkbox', () => (
		<Checkbox value='test' onClick={linkTo('Checkbox/Radio', 'Checkbox checked')}>Animal and Aquaculture Management</Checkbox>
  ))
  .add('Checkbox checked', () => (
		<Checkbox value='test' checked onClick={linkTo('Checkbox/Radio', 'Checkbox')}>Animal and Aquaculture Management</Checkbox>
  ))
	.add('Radio', () => (
			<Radio value='test' onClick={linkTo('Checkbox/Radio', 'Radio checked')}>Animal and Aquaculture Management</Radio>
  ))
  .add('Radio checked', () => (
			<Radio value='test' checked>Animal and Aquaculture Management</Radio>
  ));
