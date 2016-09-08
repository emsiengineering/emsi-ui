import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Checkbox from '../src/components/Checkbox';
import ThemeProvider from '../src/components/ThemeProvider/component';
import theme from '../src/theme';

storiesOf('Checkbox/Radio', module)
  .add('Checkbox', () => (
    <ThemeProvider theme={theme}>
      <div>
				<Checkbox value='test'>Animal and Aquaculture Management</Checkbox>
      </div>
    </ThemeProvider>
  )).add('Radio', () => (
    <ThemeProvider theme={theme}>
      <div>
				<Checkbox isRadio value='test'>Animal and Aquaculture Management</Checkbox>
      </div>
    </ThemeProvider>
  ));
