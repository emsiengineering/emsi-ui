import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Col from '../src/components/Col';
import Grid from '../src/components/Grid';
import Row from '../src/components/Row';

const styles = {
  backgroundColor: '#efeeed'
};

// $options = start center end top middle bottom around between first last

const columns = (props, count = 12) => {
  return Array.from(Array(count).keys()).map(column => {
    return (
      <Col key={column} {...props}>
        <div style={styles}>{column + 1}</div>
      </Col>
    );
  });
};

storiesOf('Grid', module)
  .add('fluid grid', () => (
    <Grid fluid>
      <Row>
        {columns({ xs: 12, sm: 6, md: 1 })}
      </Row>
    </Grid>
  ))

  .add('fluid grid, reversed', () => (
    <Grid fluid>
      <Row reverse>
        {columns({ xs: 12, sm: 6, md: 1 })}
      </Row>
    </Grid>
  ))

  .add('fluid grid, start alignment on medium', () => (
    <Grid fluid>
      <Row start='md'>
        {columns({ xs: 12, sm: 6, md: 3 }, 3)}
      </Row>
    </Grid>
  ))

  .add('fluid grid, end alignment on medium', () => (
    <Grid fluid>
      <Row end='md'>
        {columns({ xs: 12, sm: 6, md: 3 }, 3)}
      </Row>
    </Grid>
  ))

  .add('fluid grid, center on medium', () => (
    <Grid fluid>
      <Row center='md'>
        {columns({ xs: 12, sm: 6, md: 3 }, 3)}
      </Row>
    </Grid>
  ))

  .add('fluid grid, space between on medium', () => (
    <Grid fluid>
      <Row between='md'>
        {columns({ xs: 12, sm: 6, md: 3 }, 3)}
      </Row>
    </Grid>
  ))

  .add('fluid grid, space around on medium', () => (
    <Grid fluid>
      <Row around='md'>
        {columns({ xs: 12, sm: 6, md: 3 }, 3)}
      </Row>
    </Grid>
  ))

  .add('non-fluid grid', () => (
    <Grid>
      <Row>
        {columns({ xs: 12, sm: 6, md: 1 })}
      </Row>
    </Grid>
  ));
