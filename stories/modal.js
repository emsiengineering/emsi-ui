import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Modal from '../src/components/Modal';

storiesOf('Modal', module)
  .add('activates with button and text in button and not a card', () => (
      <Modal title='Test' buttonChild='Test'>Text</Modal>
  ))
  .add('activates with button and custom element in button and as a card', () => (
      <Modal title='Test' isCard buttonChild={<div style={{ padding: '3rem' }}>Custom element</div>}>Text</Modal>
  ));
