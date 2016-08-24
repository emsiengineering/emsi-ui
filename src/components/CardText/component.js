import cx from 'classnames';
import useSheet from 'react-jss';
import React from 'react';

import jss from '../../jss';
import BackgroundTint from '../BackgroundTint/component';

const styles = {
  text: {
    padding: '5rem'
  }
};

const Card = ({ children, sheet, ...other }) => {
  const { classes } = sheet;

  return (
    <div className={classes.text} style={other.style}>
      {children}
    </div>
  );
};

Card.propTypes = {

};

Card.defaultProps = {

};

export default useSheet(Card, styles);
