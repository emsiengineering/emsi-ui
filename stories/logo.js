import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Logo from '../src/components/Logo';
import ThemeProvider from '../src/components/ThemeProvider/component';
import theme from '../src/theme';

storiesOf('Logo', module)
  .add('default', () => (
		<Logo width='100px' height='100px'/>
  ));
