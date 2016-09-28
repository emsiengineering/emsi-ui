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
import CardBody from './src/components/CardBody';
import Grid from './src/components/Grid';
import Col from './src/components/Col';
import Row from './src/components/Row';

import theme from './src/theme';

import 'reset-css/reset.css';

export class App extends React.Component {
  render() {
    const styles = {
      backgroundColor: '#efeeed',
      textAlign: 'center',
      padding: '1rem',
      height: '30rem'
    };
    return (
			<div>
        <Checkbox radio>Test</Checkbox>
        <Checkbox checked />
        <Icon name='checkbox' />
        <Icon name='checkbox' color='primary' />
        <Icon name='checkbox' color='alternate' />
        <CardBody component='span'>Test</CardBody>
        <CardBody>Test</CardBody>
          <Grid fluid>
            <Row>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
              <Col xs={12} sm={6} md={1}>
                <div style={styles} />
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#myApp'));
