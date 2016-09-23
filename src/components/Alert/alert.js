import CSSModules from 'react-css-modules';
import React from 'react';
import Card from '../Card';

import styles from './alert.css';

const Alert = ({ sheet, children, title, type }) => {
  return (
    <Card>
      <div styleName={type}>
        <div styleName={`${type}-title`}>
          {title}:
        </div>
        <div>
          {children}
        </div>
      </div>
    </Card>
  );
};

Alert.propTypes = {
  title: React.PropTypes.string,
  type: React.PropTypes.oneOf(['alert'])
};

Alert.defaultProps = {
  type: 'alert'
};

export default CSSModules(Alert, styles);
