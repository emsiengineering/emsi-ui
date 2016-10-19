Basic TabPanel
```
initialState = { activeTab: 0 };
<TabPanel activeTab={state.activeTab}>
  <Tab title='Interesting' onClick={() => setState({ activeTab: 0 })}>
    This is an interesting tab.
  </Tab>
  <Tab title='Uninteresting' onClick={() => setState({ activeTab: 1 })}>
    <img src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg' />
  </Tab>
</TabPanel>
```
Dark Theme TabPanel
```
initialState = { activeTab: 0 };
<TabPanel activeTab={state.activeTab} theme='dark'>
  <Tab title='Interesting' onClick={() => setState({ activeTab: 0 })}>
    This is an interesting tab.
  </Tab>
  <Tab title='Uninteresting' onClick={() => setState({ activeTab: 1 })}>
    <img src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg' />
  </Tab>
</TabPanel>
```
TabPanel with ContentWrap,centered text, and position set to top
```
initialState = { activeTab: 0 };
<TabPanel activeTab={state.activeTab} theme='dark' padded position='top' center>
  <Tab title='Interesting' onClick={() => setState({ activeTab: 0 })}>
    This is an interesting tab.
  </Tab>
  <Tab title='Uninteresting' onClick={() => setState({ activeTab: 1 })}>
    <img src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg' />
  </Tab>
</TabPanel>
```
