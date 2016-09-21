import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Checkbox from '../src/components/Checkbox';
import CheckboxGroup from '../src/components/CheckboxGroup';
import Radio from '../src/components/Radio';
import RadioGroup from '../src/components/RadioGroup';
import Label from '../src/components/Label';
import theme from '../src/theme';

storiesOf('Checkbox/Radio', module)
  .add('default', () => (
    <Checkbox value='test' />
  ))
  .add('Checkbox', () => (
    <Checkbox value='test'>Uncontrolled Checkbox</Checkbox>
  ))
  .add('Checkbox with CheckboxGroup', () => (
    <CheckboxGroup>
      <Checkbox value='test'>First item</Checkbox>
      <Checkbox value='test2'>Second item</Checkbox>
    </CheckboxGroup>
  ))
	.add('Radio', () => (
			<Radio value='test'>Animal and Aquaculture Management</Radio>
  ))
  .add('Radio with RadioGroup', () => (
    <RadioGroup>
      <Radio value='test1'>First Item</Radio>
      <Radio value='test2'>Second Item</Radio>
    </RadioGroup>
  ))
  .add('Radio with RadioGroup, custom default', () => (
    <RadioGroup>
			<Radio value='test1'>First Item</Radio>
      <Radio value='test' checked>Second Item</Radio>
    </RadioGroup>
  ))
  .add('Radio with RadioGroup, custom onChange', () => (
    <RadioGroup onChange={action('Changed option')}>
			<Radio value='test1'>First Item</Radio>
      <Radio value='test' checked>Second Item</Radio>
    </RadioGroup>
  ));
