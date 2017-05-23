import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Modal from '../src/components/Modal';

storiesOf('Modal', module)
  .add('activates with button', () => (
      <Modal title='Test' button>Text</Modal>
  ))
  .add('activates on mount', () => (
      <Modal title='Test' isOpen closeModal={() => true}>Text</Modal>
  ));
