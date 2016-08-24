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

jss.createStyleSheet(fonts, { named: false }).attach();
jss.createStyleSheet(body, { named: false }).attach();

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
			<div>
        <Select>
          <Option value='option1'>Option 1</Option>
          <Option value='option1'>Option 2</Option>
          <Option value='option1'>Option 3</Option>
          <Option value='option1'>Option 4</Option>
          <Option value='option1'>Option 5</Option>
        </Select>
        <br/>
        <Select disabled />
      </div>
      </ThemeProvider>
		);
  }
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
