import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Select from '../src/components/Select';
import Option from '../src/components/Option';
import ThemeProvider from '../src/components/ThemeProvider/component';
import theme from '../src/theme';

storiesOf('Select', module)
  .add('default', () => (
    <ThemeProvider theme={theme}>
        <Select onSelect={action('Option Selected')}>
          <Option>Option 1</Option>
          <Option>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
          <Option>Option 5</Option>
          <Option>Option 6</Option>
          <Option>Option 7</Option>
          <Option>Option 8</Option>
          <Option>Option 9</Option>
          <Option>Option 10</Option>
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
