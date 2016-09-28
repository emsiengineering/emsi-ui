import CSSModules from 'react-css-modules';
import React from 'react';
import Card from '../Card';

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
    <div styleName={type}>
      <div styleName={`${type}-title`}>
        {title}:
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
Alert.defaultProps = {
  type: 'alert'
};

export default CSSModules(Alert, styles);
