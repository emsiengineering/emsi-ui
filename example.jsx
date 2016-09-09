import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './src/components/Modal';
import Checkbox from './src/components/Checkbox';
import Pillbox from './src/components/Pillbox';
import Header from './src/components/Header';

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
			active: false
		};
	}
	render() {
		return (
      <div>

      </div>
		);
  }
	handlePillBox = () => this.setState({ active: !this.state.active })
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
