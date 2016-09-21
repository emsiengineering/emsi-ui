import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import { MenuItem } from 'react-aria-menubutton';
import { Wrapper, TabList, Tab, TabPanel as AriaTabPanel } from 'react-aria-tabpanel';
import uniqueId from 'lodash.uniqueid';
import ContentWrap from '../ContentWrap';
import styles from './tab-panel.css';

type Props = {
  position: 'top'|'bottom',
  theme: ''|'dark'|'darker',
  onChange?: Function,
  activeTab?: number|string,
  center?: boolean,
  padded?: boolean,
  children: Array<Object>
}

class TabPanel extends React.Component {
  static displayName = 'emsiUI-TabPanel';

  static defaultProps = {
    position: 'bottom',
    activeTab: 0
  }

  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    const children: Array = React.Children.toArray(this.props.children);
    const ids: Array = children.map(child => uniqueId('emsi_ui_menu_'));

    this.setState({
      childIds: ids,
      closed: true
    });
  }

  renderPadded(tabs) {
    return (
      <ContentWrap>
        {tabs}
      </ContentWrap>
    );
  }

  render() {
    const { position, onChange, activeTab, theme, center, padded } = this.props;
    let styleName = this.state.closed ? 'closed' : 'tab-panel';

    if (center)
      styleName += '-center';

    if (theme)
      styleName += `-${theme}`;

    let menuItems = this.menuItems();

    return (
      <div styleName='container'>
					<div styleName='mobile-menu' onClick={this.handleClick} />
					<Wrapper onChange={onChange} activeTabId={this.state.childIds[this.props.activeTab] || this.props.activeTab}>
						<TabList styleName={styleName}>
							{ padded ? this.renderPadded(menuItems.tabs) : menuItems.tabs }
						</TabList>
						{menuItems.panels}
					</Wrapper>
      </div>
    );
  }

  menuItems() {
    const { position, children, center } = this.props;
    const { activeTab }: { activeTab: number } = this.props;
    const width = center ? 1 / React.Children.count(children) * 100 + '%' : 'auto';

    let tabs: Array = [];
    let panels: Array = [];

    React.Children.toArray(children).forEach((child: Object, index: number) => {
      const { title, ...other } = child.props;

      const tab: Object = React.cloneElement(
        child,
        {
          ...other,
          key: `${this.state.childIds[index]}-panel`,
          id: this.state.childIds[index],
          active: index === this.props.activeTab || this.state.childIds[index] === this.props.activeTab,
          position: this.props.position,
          open: this.state.open,
          width: width
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

  handleClick = (e: Object) => {
    this.setState({
      closed: !this.state.closed
    });
  }
}

export default CSSModules(TabPanel, styles);
