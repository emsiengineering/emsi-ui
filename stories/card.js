import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Card from '../src/components/Card';
import CardBody from '../src/components/CardBody';
import Col from '../src/components/Col';
import Grid from '../src/components/Grid';
import Row from '../src/components/Row';

storiesOf('Card', module)
  .add('default', () => (
    <Card>I am a card</Card>
  ))
  .add('with CardBody', () => (
    <Card>
      <CardBody>I am a card</CardBody>
    </Card>
  ))
  .add('with full image', () => (
    <div style={{ width: '300px' }}>
      <Card>
        <img src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg' style={{ display: 'block' }}/>
      </Card>
    </div>
  ))
  .add('with grid', () => (
    <Card>
      <Grid fluid>
        <Row>
          <Col xs={12} md={4}>
            <img src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg'  style={{ display: 'block' }} />
          </Col>
          <Col xs={12} md={4}>
            <CardBody>
              Test
            </CardBody>
          </Col>
          <Col xs={12} md={4}>
            <CardBody>
              <div>
                <span>
                  test
                </span>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Grid>
    </Card>
  ));
