import { action, linkTo, storiesOf } from '@kadira/storybook';

import NavItem from '../src/components/NavItem';
import NavPanel from '../src/components/NavPanel';
import React from 'react';

storiesOf('NavPanel', module)
  .add('first item selected', () => (
    <NavPanel>
      <NavItem><span tabIndex={0}>Interesting</span></NavItem>
      <NavItem><span tabIndex={0}>Dark Theme</span></NavItem>
      <NavItem><span tabIndex={0}>Interestinger</span></NavItem>
      <NavItem><span tabIndex={0}>Dark Themeer</span></NavItem>
    </NavPanel>
  ))
  .add('first item selected, top', () => (
    <NavPanel top>
      <NavItem><span tabIndex={0}>Interesting</span></NavItem>
      <NavItem active><span tabIndex={0}>Dark Theme</span></NavItem>
      <NavItem><span tabIndex={0}>Interestinger</span></NavItem>
      <NavItem><span tabIndex={0}>DDark Themeer</span></NavItem>
    </NavPanel>
  ));
