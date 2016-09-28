import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Checkbox from '../Checkbox';
import Header from '../Header';
import Icon from '../Icon';
import DataHeader from '../DataHeader';
import Td from '../Td';
import Tr from '../Tr';

import styles from './data-table.css';

/*
const columns = [
  {
    property: 'animal',
    name: 'Animals',
    sortable: true,
    sortFunction: function sort(a, b) {}
  },
  {
    property: 'number',
    name: 'Numbers',
    align: 'right'
  },
  {
    property: 'alpha',
    name: 'Alphanumeric',
    align: 'right'
  }
];

const data = [
  {
    animal: 'Zebra',
    number: 5,
    alpha: 'test1'
  }
];
*/
/**
 * TODO need documentation and examples for this component
 */
class DataTable extends React.Component {
  static propTypes = {
    styles: React.PropTypes.object,
    columns: React.PropTypes.array,
    data: React.PropTypes.array,
    selectable: React.PropTypes.bool,
    onSelect: React.PropTypes.func
  }

  constructor(...props) {
    super(...props);

    this.state = {
      selected: []
    };
  }

  renderCheckbox() {
    const { selectable, data } = this.props;

    return selectable ? (
      <Td component='th' align='center'>
        <Checkbox
          type='cell'
          checked={this.state.selected.length === data}
          onChange={this.handleSelectAll} />
      </Td>
    ) : null;
  }

  renderColumns() {
    const { children, columns, selectable, data } = this.props;
    const selector = this.renderCheckbox();

    // seperate component?
    const headers = columns.map((column, index) => {
      return (
        <Td component='th' key={`column-${index}`} align={column.align}>
          <Header component='span' color='alternate' type='caption'>
            {column.name}
          </Header>
        </Td>
      );
    });

    return (
      <thead>
        <Tr>
          {selector}
          {headers}
        </Tr>
      </thead>
    );
  }

  render() {
    const { children, data, columns, selectable, onSelect, styles: CSS, ...other } = this.props;

    return (
      <table {...other} styleName='table'>
        {this.renderColumns()}
      </table>
    );
  }
}

export default CSSModules(DataTable, styles, { allowMultiple: true });
