import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextArea from '../src/components/Textarea';

storiesOf('Textarea', module)
  .add('default', () => (
      <TextArea />
  ))
  .add('with placeholder', () => (
      <TextArea placeholder='Something'/>
  ))
  .add('with placeholder', () => (
      <TextArea placeholder='Something'/>
  ))
  .add('with initial value', () => (
      <TextArea>Test Value</TextArea>
  ))
  .add('with error', () => (
      <TextArea error errorMessage='This is an error.'>Invalid</TextArea>
  ));
