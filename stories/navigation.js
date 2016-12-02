import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import NavItem from '../src/components/NavItem';
import NavPanel from '../src/components/NavPanel2';

storiesOf('NavPanel', module)
  .add('first item selected', () => (
    <NavPanel>
      <NavItem title='Interesting' />
      <NavItem title='Dark Theme' />
      <NavItem title='Interestinger' />
      <NavItem title='Dark Themeer' />
    </NavPanel>
  ))
  .add('first item selected, top', () => (
    <NavPanel align='top'>
      <NavItem title='Interesting' />
      <NavItem title='Dark Theme' />
      <NavItem title='Interestinger' />
      <NavItem title='Dark Themeer' />
    </NavPanel>
  ));
