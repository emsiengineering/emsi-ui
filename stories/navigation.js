import { action, linkTo, storiesOf } from '@kadira/storybook';

import NavItem from '../src/components/NavItem';
import NavPanel from '../src/components/NavPanel';
import React from 'react';

storiesOf('NavPanel', module)
  .add('first item selected', () => (
    <NavPanel onNavigate={action('Navigated to')}>
      <NavItem to='/interesting'>Interesting</NavItem>
      <NavItem to='/dark-theme'>Dark Theme</NavItem>
      <NavItem to='/interestinger' >Interestinger</NavItem>
      <NavItem to='/dark-themeer'>Dark Themeer</NavItem>
    </NavPanel>
  ))
  .add('first item selected, top', () => (
    <NavPanel top onNavigate={action('Navigated to')}>
    <NavItem to='/interesting'>Interesting</NavItem>
      <NavItem to='/dark-theme'><a href="/dark-theme" style={{ color: 'inherit', textDecoration: 'none' }}>Dark Theme</a></NavItem>
      <NavItem to='/interestinger' >Interestinger</NavItem>
      <NavItem to='/dark-themeer'>Dark Themeer</NavItem>
    </NavPanel>
  ));
