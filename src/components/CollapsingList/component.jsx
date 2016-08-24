import cx from 'classnames';
import useSheet from 'react-jss';
import Collapse from 'react-collapse';
import React from 'react';

import ExpandList from '../../ExpandList/component';

export default class CollapsingList extends React.Component {
  static propTypes = {
    limit: React.PropTypes.number
  }

  static defaultProps = {
    limit: 5
  }

  constructor(...props) {
    super(...props);

    this.state = {
      opened: false
    };
  }

  renderCollapse(children) {
    return (
      <Collapse isOpened={this.state.opened}>
        <ul className={this.props.className} style={{ overflow: 'hidden' }}>
          {children}
        </ul>
      </Collapse>
    );
  }

  renderChildren() {
    let children = React.Children.toArray(this.props.children);
    let collapse = null;

    if (this.props.limit > 0 && children.length > this.props.limit)
      collapse = this.renderCollapse(children.splice(this.props.limit, children.length - 1));

    return (
      <div>
        <ul className={this.props.className} style={{ overflow: 'hidden' }}>
          {children}
        </ul>
        {collapse}
        {collapse ? <ExpandList active={this.state.opened} onClick={() => this.handleExpand()}/> : null}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    );
  }

  handleExpand() {
    this.setState({
      opened: !this.state.opened
    });
  }
}
