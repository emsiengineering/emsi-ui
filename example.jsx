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


  render() {

    return (
      <div>
				<Checkbox value='test'>Animal and Aquaculture Management</Checkbox>
				<Checkbox value='test1'>Animal and Aquaculture Management</Checkbox>
				<Checkbox value='test2'>Animal and Aquaculture Management</Checkbox>
				<Checkbox value='test3'>Animal and Aquaculture Management</Checkbox>
      </div>
		);
  }
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
