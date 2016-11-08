import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Modal from '../src/components/Modal';

storiesOf('Modal', module)
  .add('active', () => (
      <Modal title='Test'>Text</Modal>
  ));
