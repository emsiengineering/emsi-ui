import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from '../src/components/Button';

storiesOf('Button', module)
  .add('default button', () => (
    <div>
      <Button>Default</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button active>Active</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button disabled>Disabled</Button>
    </div>
  ))
  .add('gray button', () => (
    <div>
      <Button color='gray'>Secondary</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button color='gray' active>Active</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button color='gray' disabled>Disabled</Button>
    </div>
  ))
  .add('link button', () => (
    <div>
      <Button color='link'>Secondary</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button color='link' active>Active</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button color='link' disabled>Disabled</Button>
    </div>
  )).add('warning button', () => (
    <div>
      <Button color='warning'>Warning</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button color='warning' active>Active</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button color='warning' disabled>Disabled</Button>
    </div>
  )).add('danger button', () => (
    <div>
      <Button color='danger'>Danger</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button color='danger' active>Active</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button color='danger' disabled>Disabled</Button>
    </div>
  ));
