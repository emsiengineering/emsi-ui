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
      <Button type='gray'>Secondary</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button type='gray' active>Active</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button type='gray' disabled>Disabled</Button>
    </div>
  ))
  .add('link button', () => (
    <div>
      <Button type='link'>Secondary</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button type='link' active>Active</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button type='link' disabled>Disabled</Button>
    </div>
  )).add('warning button', () => (
    <div>
      <Button type='warning'>Warning</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button type='warning' active>Active</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button type='warning' disabled>Disabled</Button>
    </div>
  )).add('danger button', () => (
    <div>
      <Button type='danger'>Danger</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button type='danger' active>Active</Button>
      <div style={{ display: 'block', paddingBottom: '1rem' }} />
      <Button type='danger' disabled>Disabled</Button>
    </div>
  ));
