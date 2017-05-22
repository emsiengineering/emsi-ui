import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Card from '../src/components/Card';
import CardBody from '../src/components/CardBody';
import Text from '../src/components/Text';
import Col from '../src/components/Col';
import Grid from '../src/components/Grid';
import Row from '../src/components/Row';

storiesOf('Card', module)
  .add('default', () => <Card>I am a card</Card>)
  .add('with CardBody', () => (
    <Card>
      <CardBody>
          Lorem ipsum dolor sit amet, nusquam civibus nam ne. Vis atqui altera ex. Zril putent tibique qui id, eum at reque insolens. Sed no postea numquam, id qui vocent inermis, ea habeo idque accusam usu. Eos ut natum malorum fastidii, semper accommodare ut his, pri ea porro aeterno pertinacia. Mei cu quem tollit iriure.
          Odio essent disputando vix et, cu duo dicta docendi maluisset. Ne noster possim vel, modo enim facilis nam et. Animal insolens ius ea. Velit legimus voluptua quo at, et nec assum tempor iuvaret, ex mei affert essent argumentum. Vim erant complectitur at. His cu reque iisque oblique, ne prima periculis vis.
      </CardBody>
    </Card>
  ))
  .add('with full image', () => (
    <div style={{ width: '300px' }}>
      <Card>
        <img
          src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg'
          style={{ display: 'block' }}/>
      </Card>
    </div>
  ))
  .add('with grid', () => (
    <Card>
      <Grid fluid>
        <Row>
          <Col xs={12} md={4}>
            <img
              src='https://a4-images.myspacecdn.com/images03/29/1b5a14a0230b403dacad1ebe01e5492b/300x300.jpg'
              style={{ display: 'block' }}/>
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
