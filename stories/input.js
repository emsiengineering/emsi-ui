import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Input from '../src/components/Input';
import InputIcon from '../src/components/InputIcon';

storiesOf('Input', module)
  .add('default', () => (
      <Input />
  ))
  .add('with Icon', () => (
      <Input placeholder='Search' icon>
        <InputIcon />
      </Input>
  ))
  .add('with placeholder', () => (
      <Input placeholder='Something'/>
  ))
  .add('with initial value', () => (
      <Input defaultValue='Test Value' />
  ))
  .add('with message', () => (
      <Input message='This is a message' defaultValue='Default Value' />
  ))
  .add('with error', () => (
      <Input error defaultValue='Invalid Input' />
  ))
  .add('with error and message', () => (
      <Input error message='This is an error.' defaultValue='Error' />
  ))
  .add('disabled', () => (
      <Input disabled defaultValue='Cannot edit'/>
  ));
