import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import theme from '../src/theme';
import Button from '../src/components/Button';
import ThemeProvider from '../src/components/ThemeProvider/component';

storiesOf('Button', module)
  .add('default button', () => (
    <ThemeProvider theme={theme}>
      <div>
        <Button>Default</Button>
        <div style={{ display: 'block', paddingBottom: '1rem' }} />
        <Button disabled>Disabled</Button>
      </div>
    </ThemeProvider>
  ))
  .add('gray button', () => (
    <ThemeProvider theme={theme}>
      <div>
        <Button type='gray'>Secondary</Button>
        <div style={{ display: 'block', paddingBottom: '1rem' }} />
        <Button type='gray' disabled>Disabled</Button>
      </div>
    </ThemeProvider>
  ))
  .add('secondary button', () => (
    <ThemeProvider theme={theme}>
      <div>
        <Button type='secondary'>Secondary</Button>
        <div style={{ display: 'block', paddingBottom: '1rem' }} />
        <Button type='secondary' disabled>Disabled</Button>
      </div>
    </ThemeProvider>
  )).add('warning button', () => (
    <ThemeProvider theme={theme}>
      <div>
        <Button type='warning'>Warning</Button>
        <div style={{ display: 'block', paddingBottom: '1rem' }} />
        <Button type='warning' disabled>Disabled</Button>
      </div>
    </ThemeProvider>
  )).add('danger button', () => (
    <ThemeProvider theme={theme}>
      <div>
        <Button type='danger'>Danger</Button>
        <div style={{ display: 'block', paddingBottom: '1rem' }} />
        <Button type='danger' disabled>Disabled</Button>
      </div>
    </ThemeProvider>
  ));
