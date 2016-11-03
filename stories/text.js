import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import BlockText from '../src/components/BlockText';
import Col from '../src/components/Col';
import Grid from '../src/components/Grid';
import Row from '../src/components/Row';
import Text from '../src/components/Text';

storiesOf('Text', module)
  .add('default', () => {
    const text = ['display', 'headline', 'title', 'subtitle', 'body', 'caption', 'footnote'];
    const headers = text.map((item, index) => {
      return (
        <Row key={index} style={{ marginBottom: '3rem' }}>
          <Col xs={12} md={4}>
            <div style= {{ color: 'orange' }}>
              <Text bold type={item}>{item} bold</Text> <Text type={item}>{item}</Text>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Text bold type={item} color='alternate'>{item} bold</Text> <Text type={item} color='alternate'>{item}</Text>
          </Col>
          <Col xs={12} md={4}>
            <Text bold type={item} color='primary'>{item} bold</Text> <Text type={item} color='primary'>{item}</Text>
          </Col>
        </Row>
      );
    });

    return (
      <Grid fluid>
        {headers}
      </Grid>
    );
  })

  .add('using <BlockText>', () => {
    const text = ['display', 'headline', 'title', 'subtitle', 'body', 'caption', 'footnote'];
    const headers = text.map((item, index) => {
      return (
        <Row key={index} style={{ marginBottom: '3rem' }}>
          <Col xs={12} md={4}>
            <div style= {{ color: 'orange' }}>
              <BlockText bold type={item}>{item} bold</BlockText>
              <BlockText type={item}>{item}</BlockText>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <BlockText bold type={item} color='alternate'>{item} bold</BlockText>
            <BlockText type={item} color='alternate'>{item}</BlockText>
          </Col>
          <Col xs={12} md={4}>
            <BlockText bold type={item} color='primary'>{item} bold</BlockText>
            <BlockText type={item} color='primary'>{item}</BlockText>
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
