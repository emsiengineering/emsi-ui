import React from 'react';
import cx from 'classnames';
import useSheet from 'react-jss';

const styles = {
  tint: {
    zIndex: 1,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.5)'
  }
};

const BackgroundTint = ({ sheet, height, children, style, ...other }) => {
  const { classes } = sheet;
  const inlineStyles = {
    ...style,
    height
  };

  return (
    <div {...other} className={classes.tint} style={inlineStyles}>
      {children}
    </div>
  );
};

BackgroundTint.propTypes = {
  height: React.PropTypes.string,
  style: React.PropTypes.object
};

BackgroundTint.defaultProps = {
  height: '100%'
};

export default useSheet(BackgroundTint, styles);
