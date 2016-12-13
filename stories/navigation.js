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
    <NavItem to='/interesting'><span>Interesting</span></NavItem>
      <NavItem to='/dark-theme'><span>Dark Theme</span></NavItem>
      <NavItem to='/interestinger' ><span>Interestinger</span></NavItem>
      <NavItem to='/dark-themeer'><span>DDark Themeer</span></NavItem>
    </NavPanel>
  ));
