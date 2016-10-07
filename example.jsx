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
import CardBody from './lib/CardBody';

import theme from './src/theme';

import 'reset-css/reset.css';

export class App extends React.Component {
  render() {
    return (
      <CardBody>
        <div>
          <span>
            test
          </span>
        </div>
      </CardBody>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
