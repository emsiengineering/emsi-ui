import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Select from '../src/components/Select';
import Option from '../src/components/Option';

storiesOf('Select', module)
  .add('default', () => (
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
  ))
  .add('Disabled', () => (
      <Select disabled>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
      </Select>
  ))
  .add('Long Option Text', () => (
      <Select>
        <Option>Option 1 Is extremely long and should cause some clipping</Option>
        <Option>Option 2</Option>
      </Select>
  ));
