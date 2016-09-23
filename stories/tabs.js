import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Tab from '../src/components/Tab';
import TabPanel from '../src/components/TabPanel';

storiesOf('Tabs', module)
  .add('first tab selected', () => (
    <TabPanel onChange={(event) => action(event)} activeTab={0}>
      <Tab title='Interesting'>
        <br/>
        This is an interesting tab.
      </Tab>
      <Tab title='Uninteresting' onClick={linkTo('Tabs', 'second tab selected')}>
        <br/>
        <img src='https://pbs.twimg.com/profile_images/610828887614885889/OKuPj_Ms.jpg' />
      </Tab>
      <Tab title='Dark Theme' onClick={linkTo('Tabs', 'with dark theme')}>
        This theme is dark. Spooky.
      </Tab>
    </TabPanel>
  ))
  .add('second tab selected', () => (
    <TabPanel onChange={(event) => action(event)} activeTab={1}>
      <Tab title='Interesting' onClick={linkTo('Tabs', 'first tab selected')}>
        <br/>
        This is an interesting tab.
      </Tab>
      <Tab title='Uninteresting'>
        <br/>
        <img src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg' />
      </Tab>
      <Tab title='Dark Theme' onClick={linkTo('Tabs', 'with dark theme')}>
        This theme is dark. Spooky.
      </Tab>
    </TabPanel>
  )).add('with dark theme', () => (
    <TabPanel onChange={(event) => action(event)} activeTab={2} theme='dark'>
      <Tab title='Interesting' onClick={linkTo('Tabs', 'first tab selected')}>
        <br/>
        This is an interesting tab.
      </Tab>
      <Tab title='Uninteresting' onClick={linkTo('Tabs', 'second tab selected')}>
        <br/>
        <img src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg' />
      </Tab>
      <Tab title='Dark Theme'>
        <br/>
        This theme is dark. Spooky.
      </Tab>
    </TabPanel>
  ))
  .add('with padded', () => (
    <TabPanel onChange={(event) => action(event)} activeTab={1} theme='dark' padded>
      <Tab title='Interesting' onClick={linkTo('Tabs', 'first tab selected')}>
        <br/>
        This is an interesting tab.
      </Tab>
      <Tab title='Uninteresting' onClick={linkTo('Tabs', 'second tab selected')}>
        <br/>
        <img src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg' />
      </Tab>
			<Tab title='Dark Theme' onClick={linkTo('Tabs', 'dark theme')}>
				<br/>
				This theme is dark. Spooky.
			</Tab>
    </TabPanel>
  ))
  .add('with center', () => (
    <TabPanel onChange={(event) => action(event)} activeTab={1} theme='dark' center>
      <Tab title='Interesting' onClick={linkTo('Tabs', 'first tab selected')}>
        <br/>
        This is an interesting tab.
      </Tab>
      <Tab title='Uninteresting' onClick={linkTo('Tabs', 'second tab selected')}>
        <br/>
        <img src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg' />
      </Tab>
			<Tab title='Dark Theme' onClick={linkTo('Tabs', 'dark theme')}>
				<br/>
				This theme is dark. Spooky.
			</Tab>
    </TabPanel>
  ))
  .add('with center and padded', () => (
    <TabPanel onChange={(event) => action(event)} activeTab={2} theme='dark' center padded>
      <Tab title='Interesting' onClick={linkTo('Tabs', 'first tab selected')}>
        <br/>
        This is an interesting tab.
      </Tab>
      <Tab title='Uninteresting' onClick={linkTo('Tabs', 'second tab selected')}>
        <br/>
        <img src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg' />
      </Tab>
			<Tab title='Dark Theme' onClick={linkTo('Tabs', 'dark theme')}>
				<br/>
				This theme is dark. Spooky.
			</Tab>
    </TabPanel>
  ));
