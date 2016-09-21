/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';

import theme from './src/theme';
import jss from './src/jss';
import fonts from './assets/jss/fonts';
import body from './assets/jss/body';

import Button from './src/components/Button';

import 'reset-css/reset.css';

jss.createStyleSheet(fonts, { named: false }).attach();
jss.createStyleSheet(body, { named: false }).attach();

const text = ['display', 'headline', 'title', 'subtitle', 'body', 'caption', 'footnote'];

export class App extends React.Component {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
			<div>
				<Button>test</Button>
			</div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
