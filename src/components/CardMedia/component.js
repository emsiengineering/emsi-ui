import cx from 'classnames';
import useSheet from 'react-jss';
import React from 'react';

import jss from '../../jss';

const styles = {
  cardMedia: {
    position: 'relative',
    width: '100%',
    height: '100%'
  }
};

const CardMedia = ({ children, sheet, overlay, ...other }) => {
  const { classes } = sheet;

  return (
    <div className={classes.cardMedia} style={other.style}>
      {children}
    </div>
  );
};

CardMedia.propTypes = {

};

CardMedia.defaultProps = {

};

export default useSheet(CardMedia, styles);
