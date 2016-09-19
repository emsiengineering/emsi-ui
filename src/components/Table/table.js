import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Checkbox from '../Checkbox';
import Header from '../Header';
import Icon from '../Icon';

import styles from './table.css';

class Table extends React.Component {
  static propTypes = {
    styles: React.PropTypes.object,
    columns: React.PropTypes.array,
    selectable: React.PropTypes.bool,
    onSelect: React.PropTypes.func
  }

  constructor(...props) {
    super(...props);

    this.state = {
      selected: [],
      sorted: [0, 'asc']
    };
  }

  sortAsc = (a, b) => {
    if (a.value > b.value)
      return 1;
    else if (a.value < b.value)
      return -1;
    else
      return 0;
  }

  sortDesc = (a, b) => {
    if (a.value < b.value)
      return 1;
    else if (a.value > b.value)
      return -1;
    else
      return 0;
  }

  renderChildren() {
    const children = React.Children.toArray(this.props.children);

    const sortedChildren = children.map((child, index) => {
      return {
        child,
        index,
        value: child.props.children[this.state.sorted[0]].props.children
      };
    });

    console.log(sortedChildren);

    // sortedChildren.sort(this.state.sorted[1] === 'asc' ? this.sortAsc : this.sortDesc);

    const rows = sortedChildren.map((sortedChild, index) => {
      const child = sortedChild.child;

      return React.cloneElement(
        child,
        {
          ...child.props,
          key: `tr-${index}`,
          selectable: true,
          selected: this.state.selected.includes(index),
          onSelect: this.handleSelect.bind(this, index)
        }
      );
    });

    return <tbody>{rows}</tbody>;
  }

  renderColumns() {
    const { columns, selectable } = this.props;
    let icon = 'IoChevronUp';

    if (this.state.sorted[1] === 'asc')
      icon = 'IoChevronDown';

    const cols = columns.map((col, index) => {
      const styleName = !col.align && col.align !== 'left' ? 'column' : `column ${col.align}`;
      return (
        <th key={`column-${index}`} styleName={styleName} onClick={this.handleSort.bind(this, index)}>
          <Header component='span' color='alternate' type='caption'>
            {index === this.state.sorted[0] && <Icon component={icon} styleName='icon'/> }
            {col.name}
          </Header>
        </th>
      );
    });

    return (
      <thead>
        <tr>
          {selectable ?
            <th styleName='column'>
              <Checkbox type='cell' checked={this.state.selected.length === React.Children.count(this.props.children)} onChange={this.handleSelectAll}/>
            </th>
              : null}
          {cols}
        </tr>
      </thead>
    );
  }

  render() {
    const { children, styles: CSS, selectable, columns, ...other } = this.props;

    return (
      <table {...other} styleName='table'>
        {this.renderColumns()}
        {selectable ? this.renderChildren() : children}
      </table>
    );
  }

  handleSort = (index, e) => {
    const nextOrder = this.state.sorted[1] === 'asc' ? 'desc' : 'asc';

    if (index === this.state.sorted[0])
      this.setState({
        sorted: [0, nextOrder]
      });
    else
      this.setState({
        sorted: [index, 'asc']
      });
  }

  handleSelectAll = (e) => {
    const count = React.Children.count(this.props.children);
    let selected = this.state.selected.slice(0);

    if (selected.length === count)
      selected = [];
    else
      selected = Array.from(Array(count).keys());

    this.setState({
      selected
    }, () => {
      this.props.onSelect(this.state.selected, e);
    });
  }

  handleSelect(index, e) {
    const selected = this.state.selected.slice(0);
    if (selected.includes(index))
      selected.splice(selected.indexOf(index), 1);
    else
      selected.push(index);

    this.setState({
      selected
    }, () => {
      this.props.onSelect(this.state.selected, e);
    });

  }
}

export default CSSModules(Table, styles, { allowMultiple: true });
