import { action, linkTo, storiesOf } from '@kadira/storybook';
import { boolean, number, text, withKnobs } from '@kadira/storybook-addon-knobs';

import NavItem from '../src/components/NavItem';
import NavPanel from '../src/components/NavPanel';
import React from 'react';

const stories = storiesOf('NavPanel', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories
  .add('first item selected', () => {
    const activeTab = number('Active Tab', 0);

    return (
      <NavPanel>
        <NavItem active={activeTab === 1}><span tabIndex={0}>Interesting</span></NavItem>
        <NavItem active={activeTab === 2}><span tabIndex={0}>Dark Theme</span></NavItem>
        <NavItem active={activeTab === 3}><span tabIndex={0}>Interestinger</span></NavItem>
        <NavItem active={activeTab === 4}><span tabIndex={0}>Dark Themeer</span></NavItem>
      </NavPanel>
    );
  })
  .add('first item selected, top', () => (
    <NavPanel top>
      <NavItem><span tabIndex={0}>Interesting</span></NavItem>
      <NavItem active><span tabIndex={0}>Dark Theme</span></NavItem>
      <NavItem><span tabIndex={0}>Interestinger</span></NavItem>
      <NavItem><span tabIndex={0}>DDark Themeer</span></NavItem>
    </NavPanel>
  ));
