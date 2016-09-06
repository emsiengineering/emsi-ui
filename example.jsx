import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './src/components/Modal';
import Checkbox from './src/components/Checkbox';

import theme from './src/theme';
import jss from './src/jss';
import fonts from './assets/jss/fonts';
import body from './assets/jss/body';

import 'reset-css/reset.css';

jss.createStyleSheet(fonts, { named: false }).attach();
jss.createStyleSheet(body, { named: false }).attach();

export class App extends React.Component {
  constructor(props) {
    super(...props);

    this.state = {
      checked: false
    };
  }

  render() {

    return (
      <div>
				<Checkbox value='test' isChecked={this.state.checked} onClick={this.handleCheckBox}>Animal and Aquaculture Management</Checkbox>
      </div>
		);
  }

  handleCheckBox = () => {
    this.setState({
      checked: !this.state.checked
    });
  }

}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
