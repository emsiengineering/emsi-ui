import React from 'react';
import ReactDOM from 'react-dom';

import theme from './src/theme';
import jss from './src/jss';
import fonts from './assets/jss/fonts';
import body from './assets/jss/body';

import Button from './src/components/Button';
import Card from './src/components/Card';
import CardBody from './src/components/CardBody';
import CardMedia from './src/components/CardMedia';
import Checkbox from './src/components/Checkbox';
import CheckboxGroup from './src/components/CheckboxGroup';
import Col from './src/components/Col';
import GlobalHeader from './src/components/GlobalHeader';
import Header from './src/components/Header';
import Input from './src/components/Input';
import Label from './src/components/Label';
import Pillbox from './src/components/Pillbox';
import Select from './src/components/Select';
import Option from './src/components/Option';
import Row from './src/components/Row';
import Tab from './src/components/Tab';
import TabPanel from './src/components/TabPanel';

import 'reset-css/reset.css';

jss.createStyleSheet(fonts, { named: false }).attach();
jss.createStyleSheet(body, { named: false }).attach();

export class App extends React.Component {
  render() {
    return (
			<div>
				<Button>test</Button>
        <Card>
          <CardBody>test</CardBody>
          <CardMedia>test</CardMedia>
          <Checkbox>test</Checkbox>
        </Card>
        <CheckboxGroup>
          <Checkbox value='test'>First item</Checkbox>
          <Checkbox value='test2'>Second item</Checkbox>
        </CheckboxGroup>
        <Col>test</Col>
        <GlobalHeader>test</GlobalHeader>
        <Header type='subtitle'>test</Header>
        <Input value='test'>test</Input>
        <Label>test</Label>
        <Pillbox>test</Pillbox>
        <Select>
          <Option>Option 1</Option>
          <Option>Option 2</Option>
        </Select>
        <Row>Test</Row>
        <TabPanel activeTab={0}>
          <Tab title='test'>test</Tab>
          <Tab title='test2'>test</Tab>
          <Tab title='test3'>test</Tab>
        </TabPanel>
			</div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
