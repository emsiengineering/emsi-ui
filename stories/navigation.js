import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import NavItem from '../src/components/NavItem';
import NavPanel from '../src/components/NavPanel';

storiesOf('NavPanel', module)
  .add('first item selected', () => (
    <NavPanel>
      <NavItem title='Interesting' active />
      <NavItem title='Dark Theme' />
      <NavItem title='Interestinger' />
      <NavItem title='Dark Themeer' />
    </NavPanel>
  ))
  .add('first item selected, top', () => (
    <NavPanel>
      <NavItem title='Interesting' active top/>
      <NavItem title='Dark Theme' top />
      <NavItem title='Interestinger' top />
      <NavItem title='Dark Themeer' top />
    </NavPanel>
  ));
