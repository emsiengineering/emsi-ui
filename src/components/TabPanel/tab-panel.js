import CSSModules from 'react-css-modules';
import React from 'react';
import { MenuItem } from 'react-aria-menubutton';
import { Wrapper, TabList, Tab, TabPanel as AriaTabPanel } from 'react-aria-tabpanel';
import uniqueId from 'lodash.uniqueid';

import ContentWrap from '../ContentWrap';
import styles from './tab-panel.css';

class TabPanel extends React.Component {
  static displayName = 'emsiUI-TabPanel';

  static propTypes = {
    position: React.PropTypes.oneOf(['top', 'bottom']),
    theme: React.PropTypes.oneOf(['', 'dark']),
    onChange: React.PropTypes.func,
    activeTab: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ])
  }

  static defaultProps = {
    position: 'bottom',
    activeTab: 0
  }

  componentWillMount() {
    const children = React.Children.toArray(this.props.children);
    const ids = children.map(child => uniqueId('emsi_ui_menu_'));

    this.setState({
      childIds: ids,
      closed: true
    });
  }

  render() {
    const { position, onChange, activeTab, theme } = this.props;
    let styleName = theme === 'dark' ? 'tab-panel tab-panel-dark' : 'tab-panel';
    let menuItems = this.menuItems();

    if (this.state.closed)
      styleName += ' tab-panel-closed';

    return (
      <div styleName='container'>
					<div styleName='mobile-menu' onClick={this.handleClick} />
					<Wrapper onChange={onChange} activeTabId={this.state.childIds[this.props.activeTab] || this.props.activeTab}>
						<TabList styleName={styleName}>
              <ContentWrap>
							{menuItems.tabs}
              </ContentWrap>
						</TabList>
						{menuItems.panels}
					</Wrapper>
      </div>
    );
  }

  menuItems() {
    const { position, children } = this.props;
    const { activeTab } = this.state;

    let tabs = [];
    let panels = [];

    React.Children.toArray(children).forEach((child, index) => {
      const { title, ...other } = child.props;

      const tab = React.cloneElement(
        child,
        {
          ...other,
          key: `${this.state.childIds[index]}-panel`,
          id: this.state.childIds[index],
          active: index === this.props.activeTab || this.state.childIds[index] === this.props.activeTab,
          position: this.props.position,
          open: this.state.open
        },
        title
      );

      tabs.push(tab);
      panels.push(
        <AriaTabPanel key={`${tab.props.id}-panel`} tabId={tab.props.id} active={tab.props.active}>
          {child.props.children}
        </AriaTabPanel>
      );
    });

    return {
      tabs,
      panels
    };
  }

  handleClick = (e) => {
    this.setState({
      closed: !this.state.closed
    });
  }
}

export default CSSModules(TabPanel, styles, { allowMultiple: true });
