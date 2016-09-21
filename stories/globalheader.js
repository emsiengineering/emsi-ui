import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import GlobalHeader from '../src/components/GlobalHeader';
import ContentWrap from '../src/components/ContentWrap';
import TabPanel from '../src/components/TabPanel';
import Tab from '../src/components/Tab';

storiesOf('GlobalHeader', module)
  .add('default', () => (
		<GlobalHeader>Header</GlobalHeader>
  ))
  .add('with light theme', () => (
		<GlobalHeader theme='light'>Header</GlobalHeader>
  ))
  .add('with square logo', () => (
		<GlobalHeader theme='dark'>
      <div style={{ height: '2em' }}>
        <img style={{ position: 'absolute', top: 0, left: 0, bottom: 0, height: '100%' }} src='https://www.kfcu.org/assets/img/youtube.gif' />
      </div>
    </GlobalHeader>
  ))
  .add('with padded logo', () => (
		<GlobalHeader theme='dark'>
      <ContentWrap>
        <img style={{ height: '41px' }} src='http://www.economicmodeling.com/wp-content/uploads/2016/05/logo.png' />
      </ContentWrap>
    </GlobalHeader>
  ))
  .add('with navigation', () => (
    <div style={{ fontSize: '0rem' }}>
      <GlobalHeader>
        <ContentWrap>
          <img style={{ height: '41px' }} src='http://www.economicmodeling.com/wp-content/uploads/2016/05/logo.png' />
        </ContentWrap>
      </GlobalHeader>
        <TabPanel activeTab={0} theme='dark' center padded>
          <Tab title='Overview' />
          <Tab title='Impact Analysis' />
          <Tab title='Prime/Sub Location Analysis' />
          <Tab title='Business Profile' />
        </TabPanel>
    </div>
  ));
