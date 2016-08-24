import cx from 'classnames';
import useSheet from 'react-jss';
import React from 'react';

import jss from '../../jss';
import BackgroundTint from '../BackgroundTint/component';

const styles = {
  card: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    marginBottom: '2rem',
    zIndex: 1
  },
  '@media only screen and (min-width: 480px)': {
    card: {
      boxShadow: '0 20px 20px 0 rgba(0,0,0,0.05), inset 0 0 0 1px rgba(0,0,0,0.1)',
      borderRadius: '2px'
    }
  }
};

const Card = ({ children, sheet, ...other }) => {
  const { classes } = sheet;

  return (
    <div className={classes.card} style={other.style}>
      {children}
    </div>
  );
};

export default useSheet(Card, styles);
