import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Col from '../src/components/Col';
import Grid from '../src/components/Grid';
import Header from '../src/components/Header';
import Row from '../src/components/Row';

storiesOf('Header', module)
  .add('default', () => {
    const text = ['display', 'headline', 'title', 'subtitle', 'body', 'caption', 'footnote'];
    const headers = text.map((item, index) => {
      return (
        <Row key={index} style={{ marginBottom: '3rem' }}>
          <Col xs={12} md={4}>
            <div style= {{ color: 'orange' }}>
              <Header bold type={item}>{item} bold</Header> <Header type={item}>{item}</Header>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Header bold type={item} color='alternate'>{item} bold</Header> <Header type={item} color='alternate'>{item}</Header>
          </Col>
          <Col xs={12} md={4}>
            <Header bold type={item} color='primary'>{item} bold</Header> <Header type={item} color='primary'>{item}</Header>
          </Col>
        </Row>
      );
    });

    return (
      <Grid fluid>
        {headers}
      </Grid>
    );
  });
