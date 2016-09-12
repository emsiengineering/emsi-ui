import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PillBox from '../src/components/Pillbox';
import ThemeProvider from '../src/components/ThemeProvider/component';
import theme from '../src/theme';

storiesOf('PillBox', module)
  .add('Default', () => (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: '#fff' }}>
				<PillBox>Animal and Aquaculture Management</PillBox>
      </div>
    </ThemeProvider>
  ))
	.add('Selected', () => (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: '#41D492' }}>
				<PillBox active>Animal and Aquaculture Management</PillBox>
      </div>
    </ThemeProvider>
  ));
