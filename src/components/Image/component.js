import cx from 'classnames';
import useSheet from 'react-jss';
import React from 'react';

import jss from '../../jss';

const styles = {
  cover: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    minHeight: '200px',
    maxHeight: '400px',
    width: '100%',
    position: 'relative'
  },
  right: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: 1,
    overflow: 'hidden'
  }
};

function renderRight(children, src, width, classes) {
  const inlineStyles = {
    height: '100%',
    right: 0,
    width: width,
    backgroundImage: `url(${src})`
  };

  return (
    <div className={classes.right} style={inlineStyles}>
      {children}
    </div>
  );
}

function renderCover(children, src, height, classes) {
  const inlineStyles = {
    minHeight: height[0],
    maxHeight: height[1],
    backgroundImage: `url(${src})`
  };

  return (
    <div className={classes.cover} style={inlineStyles}>
      {children}
    </div>
  );
}

const Image = ({ children, sheet, position, src, height, width,  ...other }) => {
  const { classes } = sheet;

  if (position === 'top')
    return renderCover(children, src, height, classes);
  else if (position === 'right')
    return renderRight(children, src, width, classes);
};

Image.propTypes = {
  position: React.PropTypes.oneOf(['normal', 'top', 'right']),
  height: React.PropTypes.array
};

Image.defaultProps = {
  position: 'normal',
  height: ['200px', '400px'],
  width: '20rem'
};

export default useSheet(Image, styles);
