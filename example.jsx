import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './src/components/Modal';
import Checkbox from './src/components/Checkbox';
import CheckboxGroup from './src/components/CheckboxGroup';
import Radio from './src/components/Radio';
import RadioGroup from './src/components/RadioGroup';
import Pillbox from './src/components/Pillbox';
import Header from './src/components/Header';
import TabPanel from './src/components/TabPanel';
import Tab from './src/components/Tab';
import ContentWrap from './src/components/ContentWrap';
import GlobalHeader from './src/components/GlobalHeader';
import Row from './src/components/Row';
import Grid from './src/components/Grid';
import Col from './src/components/Col';
import Input from './src/components/Input';
import Textarea from './src/components/Textarea';
import Button from './src/components/Button';
import DataTable from './src/components/DataTable';
import Tr from './src/components/Tr';
import Td from './src/components/Td';

import theme from './src/theme';
import jss from './src/jss';
import fonts from './assets/jss/fonts';
import body from './assets/jss/body';

import 'reset-css/reset.css';

jss.createStyleSheet(fonts, { named: false }).attach();
jss.createStyleSheet(body, { named: false }).attach();

const text = ['display', 'headline', 'title', 'subtitle', 'body', 'caption', 'footnote'];

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {

    const columns = [
      {
        property: 'animal',
        name: 'Animals',
        sortable: true
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
      },
      {
        animal: 'Aardvark',
        number: 9,
        alpha: 'test2'
      }
    ];

    return (
      <div style={{ margin: '5rem' }}>
        <DataTable
          selectable
          onSelect={this.handleCheck}
          columns={columns}
          data={data} />
        <br />
        <Button>Test</Button><br /><br />
        <Button active>Test</Button><br /><br />
        <Button disabled>Test</Button><br /><br />
        <Button type='secondary'> Test</Button><br /><br />
        <Button type='alternate'> Test</Button><br /><br />
        <Button type='warning'> Test</Button><br /><br />
        <Button type='danger'> Test</Button><br /><br />
      </div>
    );
  }

  handleCheck = (selected, e) => {
    console.log(selected);
  }

  handleLink = (index) => this.setState({ active: index })
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
