import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Card from '../src/components/Card';
import CardBody from '../src/components/CardBody';
import ContentWrap from '../src/components/ContentWrap';

storiesOf('ContentWrap', module)
  .add('default', () => (
		<ContentWrap>
      <Card>
        <CardBody>
          This Card is ContentWrapped
        </CardBody>
      </Card>
    </ContentWrap>
  ));
