import React from 'react';
import ReactDOM from 'react-dom';
import Button from './src/Button/component';
import Alert from './src/Alert/component';
import Card from './src/Card/component';
import CardText from './src/CardText/component';
import CardMedia from './src/CardMedia/component';
import Image from './src/Image/component';
import BackgroundTint from './src/BackgroundTint/component';
import ImageText from './src/ImageText/component';
import Header from './src/Header/component';

export class App extends React.Component {
  render() {
    return (
			<div>
        <Header size={1}>Header 1</Header>
        <Header component='h2' size={2}>Header 1</Header>
        <Button>test</Button>
        <Button type='inverse'>test</Button>
        <Button type='light'>test</Button>
        <Alert title='Test Alert' type='error'>Test Alert</Alert>
        <Alert title='Test Alert' type='alert'>Test Alert</Alert>
        <Card>
          <Image src='https://testsite.emsicc-qa.com/HowItWorks_1.png' position='top'>
            <BackgroundTint>
              <ImageText>Some Text!</ImageText>
            </BackgroundTint>
          </Image>
          <CardText>
            Test2
          </CardText>
        </Card>
        <Card>
          <Image src='https://testsite.emsicc-qa.com/HowItWorks_1.png' position='right' />
          <CardText>
            Test2
          </CardText>
        </Card>
      </div>
		);
  }
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
