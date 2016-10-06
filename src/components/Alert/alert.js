import CSSModules from 'react-css-modules';
import React from 'react';
import Card from '../Card';
import Header from '../Header';

import styles from './alert.css';

type Props = {
  children: any,
  title: string,
  type?: string
}

function Alert({ children, title, type = 'alert' }: Props) {
  return (
    <div styleName='alert-container'>
      <div styleName={type}>
        <Header type='body' styleName={`${type}-title`} bold>
          {title}:
        </Header>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CSSModules(Alert, styles);
