import { action, linkTo, storiesOf } from '@kadira/storybook';

import NavItem from '../src/components/NavItem';
import NavPanel from '../src/components/NavPanel';
import React from 'react';

storiesOf('NavPanel', module)
  .add('first item selected', () => (
    <NavPanel onNavigate={action('Navigated to')}>
      <NavItem title='Interesting' to='/interesting' />
      <NavItem title='Dark Theme' to='/dark-theme' />
      <NavItem title='Interestinger' to='/interestinger' />
      <NavItem title='Dark Themeer' to='/dark-themeer'/>
    </NavPanel>
  ))
  .add('first item selected, top', () => (
    <NavPanel top onNavigate={action('Navigated to')} styleName='test'>
      <NavItem title='Interesting' to='/interesting' />
      <NavItem title='Dark Theme' to='/dark-theme' />
      <NavItem title='Interestinger' to='/interestinger' />
      <NavItem title='Dark Themeer' to='/dark-themeer'/>
    </NavPanel>
  ));
