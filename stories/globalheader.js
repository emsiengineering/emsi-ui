import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import GlobalHeader from '../src/components/GlobalHeader';
import ThemeProvider from '../src/components/ThemeProvider/component';
import theme from '../src/theme';

storiesOf('Global Header', module)
  .add('default', () => (
    <ThemeProvider theme={theme}>
      <div>
				<GlobalHeader color='#203A45' />
      </div>
    </ThemeProvider>
  ));
