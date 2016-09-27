import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../src/components/Input';

storiesOf('Input', module)
  .add('default', () => (
      <Input />
  ))
  .add('with placeholder', () => (
      <Input placeholder='Something'/>
  ))
  .add('with placeholder', () => (
      <Input placeholder='Something'/>
  ))
  .add('with initial value', () => (
      <Input>Test Value</Input>
  ))
  .add('with error', () => (
      <Input error>Invalid</Input>
  ));
