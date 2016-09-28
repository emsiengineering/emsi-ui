import CSSModules from 'react-css-modules';
import React from 'react';
import Card from '../Card';

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
        <div styleName={`${type}-title`}>
          {title}:
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CSSModules(Alert, styles);
