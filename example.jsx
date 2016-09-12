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
      <div>
        <Modal active={this.state.open} title='Sweet'>
          Test
        </Modal>
      </div>
		);
  }
	handleLink = (index) => this.setState({ active: index })
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
