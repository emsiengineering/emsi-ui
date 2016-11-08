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
      <TextArea defaultValue='Test Value' />
  ))
  .add('with error', () => (
      <TextArea error message='This is an error.' defaultValue='Invalid' />
  ));
