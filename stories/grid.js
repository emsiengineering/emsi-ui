import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Grid from '../src/components/Grid';
import Row from '../src/components/Row';
import Col from '../src/components/Col';

const styles = {
  backgroundColor: '#efeeed',
  textAlign: 'center',
  padding: '1rem',
  height: '30rem'
};

storiesOf('Grid', module)
  .add('fluid grid', () => (
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
  )).add('non-fluid grid', () => (
    <Grid>
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
  ));
