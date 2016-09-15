import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './src/components/Modal';
import Checkbox from './src/components/Checkbox';
import Pillbox from './src/components/Pillbox';
import Header from './src/components/Header';
import TabPanel from './src/components/TabPanel';
import Tab from './src/components/Tab';
import ContentWrap from './src/components/ContentWrap';
import GlobalHeader from './src/components/GlobalHeader';
import Select from './src/components/Select';
import Option from './src/components/Option';

import theme from './src/theme';
import jss from './src/jss';
import fonts from './assets/jss/fonts';
import body from './assets/jss/body';

import 'reset-css/reset.css';

jss.createStyleSheet(fonts, { named: false }).attach();
jss.createStyleSheet(body, { named: false }).attach();

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }
  render() {
    const subNavLinks = [
      {
        name: 'Overview',
        link: 'overview'
      },
      {
        name: 'Impact Analysis',
        link: 'impact'
      },
      {
        name: 'Supply Chain',
        link: 'supply'
      },
      {
        name: 'Business Profile',
        link: 'business'
      }
    ];
    return (
			<GlobalHeader color='#203A45'>
				<Header bold type='subtitle'>DoD Impact: Oklahoma</Header>
				<Select label='Year'>
					<Option>2016.1</Option>
					<Option>2016.2</Option>
					<Option>2016.3</Option>
					<Option>2016.4</Option>
				</Select>
				<Select>
					<Option>County</Option>
					<Option>MSA</Option>
					<Option>Zip</Option>
					<Option>State</Option>
				</Select>
				<Select>
					<Option>Oklahoma</Option>
					<Option>California</Option>
					<Option>Texas</Option>
				</Select>
			</GlobalHeader>
    );
  }
  handleLink = (index) => this.setState({ active: index })
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
