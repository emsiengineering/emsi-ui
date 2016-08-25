import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Select from '../src/components/Select/component';
import Option from '../src/components/Option/component';
import ThemeProvider from '../src/components/ThemeProvider/component';
import theme from '../src/theme';

storiesOf('Select', module)
  .add('default', () => (
    <ThemeProvider theme={theme}>
        <Select onSelect={action('Option Selected')}>
          <Option>Option 1</Option>
          <Option>Option 2</Option>
        </Select>
    </ThemeProvider>
  ))
  .add('disabled', () => (
    <ThemeProvider theme={theme}>
        <Select disabled>
          <Option>Option 1</Option>
          <Option>Option 2</Option>
        </Select>
    </ThemeProvider>
  ));
