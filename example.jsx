import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './src/components/Modal';
import Select from './src/components/Select';
import Option from './src/components/Option';
import Tab from './src/components/Tab';
import TabPanel from './src/components/TabPanel';
import Button from './src/components/Button';
import Grid from './src/components/Grid';
import Row from './src/components/Row';
import Col from './src/components/Col';

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
      open: false
    };
  }

  render() {

    return (
      <div>
        <Modal active={this.state.open} title='Sweet'>
          Test
        </Modal>
      </div>
		);
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  }

  handleExit = () => {
    this.setState({
      open: false
    });
  }

}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
