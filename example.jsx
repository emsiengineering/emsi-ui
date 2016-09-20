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
import Select from './src/components/Select';
import Option from './src/components/Option';
import Icon from './src/components/Icon';

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
    return (
			<div>
        <Checkbox>Test</Checkbox>
        <Checkbox checked />
        <Icon name='checkbox' />
        <Icon name='checkbox' color='primary' />
        <Icon name='checkbox' color='alternate' />
      </div>
    );
  }

  handleCheck = (selected, e) => {
    // console.log(selected);
  }

  handleLink = (index) => this.setState({ active: index })
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
