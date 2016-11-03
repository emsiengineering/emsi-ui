import cx from 'classnames';
import CSSModules from 'react-css-modules';
import React from 'react';

import BlockText from '../BlockText';
import Card from '../Card';
import CardBody from '../CardBody';
import CSS from './alert.styl';
import Text from '../Text';

type Props = {
  children: any,
  title: string,
  type?: string,
  styles: Object
}

function Alert({ children, title, type = 'alert', styles }: Props) {
  const classNames = cx({
    alert,
    [type]: type
  });

  return (
    <Card styleName={classNames}>
      <CardBody>
        <BlockText type='body' bold>
          {title}!
        </BlockText>
        <Text component='span' type='body'>
          {children}
        </Text>
      </CardBody>
    </Card>
  );
}

export default CSSModules(Alert, CSS, { allowMultiple: true });
