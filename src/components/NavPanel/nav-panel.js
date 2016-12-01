import uniqueId from 'lodash.uniqueid';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';

import ContentWrap from '../ContentWrap';
import CSS from './nav-panel.styl';

type Props = {
  onClick?: Function|void,
  /** number of the activeTab */
  invert?: boolean|void,
  children: any
}

class NavPanel extends React.Component<void, Props, void> {
  static defaultProps = {
    activePosition: 'bottom'
  }

  render() {
    const props = { invert, children, ...other } = this.props;

    return (
      <nav
        role='navigation'
        styleName='nav-panel'
        {...other}
      >
        {this.props.children}
      </nav>
    );
  }
}

export default CSSModules(NavPanel, CSS, { allowMultiple: true });
