import CSSModules from 'react-css-modules';
import React from 'react';
import Card from '../Card';
import Header from '../Header';

import styles from './alert.css';

type Props = {
  children: any,
  /** message of the alert */
  title: string,
  /** One of: alert, error */
  type: 'alert'|'error'
}

function Alert({ children, title, type }: Props) {
  return (
    <div styleName='alert-container'>
      <div styleName={type}>
        <Header type='body' styleName={`${type}-title`} bold>
          {title}:
        </Header>
        <Header component='p' type='body'>
          {children}
        </Header>
      </div>
    </div>
  );
}
Alert.defaultProps = {
  type: 'alert'
};

export default CSSModules(Alert, styles);
