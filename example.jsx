import React from 'react';
import ReactDOM from 'react-dom';
import Button from './src/components/Button/component';
import Alert from './src/components/Alert/component';
import Card from './src/components/Card/component';
import CardText from './src/components/CardText/component';
import CardMedia from './src/components/CardMedia/component';
import Image from './src/components/Image/component';
import BackgroundTint from './src/components/BackgroundTint/component';
import ImageText from './src/components/ImageText/component';
import Header from './src/components/Header/component';
import Select from './src/components/Select/component';
import Option from './src/components/Option/component';

import ThemeProvider from './src/components/ThemeProvider/component';

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
      <ThemeProvider theme={theme}>
			<div>
        <Select>
          <Option>This is the first Option</Option>
          <Option>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
          <Option>Option 5</Option>
          <Option>Option 6</Option>
        </Select>
        <br/>
      </div>
      </ThemeProvider>
		);
  }
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
