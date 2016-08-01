import React from 'react';
import cx from 'classnames';
import useSheet from 'react-jss';

const styles = {
  h1: {
    fontSize: '5rem'
  },
  h2: {
    fontSize: '4rem',
    fontWeight: 200,
    lineHeight: 1.375
  },
  h3: {
    fontSize: '2.5rem',
    lineHeight: 1.4,
    marginBottom: '2rem'
  },
  h4: {
    fontSize: '1.8rem',
    lineHeight: 1.55
  },
  h5: {
    fontSize: '1.5rem'
  },
  h6: {
    fontSize: '1.5rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.2em'
  }
};

const Header = ({ sheet, component: Component, children, size, className, ...other }) => {
  const { classes } = sheet;

  return (
    <Component {...other} className={classes[`h${size}`]}>{children}</Component>
  );
};

Header.propTypes = {
  size: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};

Header.defaultProps = {
  component: 'h1'
};

export default useSheet(Header, styles);
