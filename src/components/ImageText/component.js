import cx from 'classnames';
import useSheet from 'react-jss';
import React from 'react';

import jss from '../../jss';
import BackgroundTint from '../BackgroundTint/component';

const styles = {
  body: {
    display: 'inline-block',
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%'
  },
  text: {
    position: 'absolute',
    color: '#fff'
  }
};

const ImageText = ({ children, sheet, bottom, left, ...other }) => {
  const { classes } = sheet;
  const inlineStyles = {
    ...other.style,
    left,
    bottom
  };

  return (
    <div className={classes.body}>
      <span className={classes.text} style={inlineStyles}>
        {children}
      </span>
    </div>
  );
};

ImageText.propTypes = {
  bottom: React.PropTypes.string,
  left: React.PropTypes.string
};

ImageText.defaultProps = {
  bottom: '2rem',
  left: '1rem'
};

export default useSheet(ImageText, styles);
