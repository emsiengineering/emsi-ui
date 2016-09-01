import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './src/components/Modal';

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
        <button onClick={this.handleOpen}>Click me</button>
        <Modal active={this.state.open} title='Sweet' onExit={this.handleExit}>
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
