import React from 'react';
import cx from 'classnames';
import useSheet from 'react-jss';

const styles = {
  display: {
    fontSize: '5rem',
    lineHeight: '7.5rem'
  },
  headline: {
    fontSize: '3.125rem',
    lineHeight: '4.375rem'
  },
  title: {
    fontSize: '2.625rem',
    lineHeight: '3.75rem'
  },
  subtitle: {
    fontSize: '2.25rem',
    lineHeight: '3.25rem'
  },
  body: {
    fontSize: '1.875rem',
    lineHeight: '3rem'
  },
  caption: {
    fontSize: '1.625rem',
    lineHeight: '2.25rem'
  },
  footnote: {
    fontSize: '1.250rem',
    lineHeight: '2rem'
  },
  bold: {
    fontWeight: 600
  }
};

const Header = ({ sheet, component: Component, children, type, bold, className, ...other }) => {
  const { classes } = sheet;

  const classNames = cx({
    ...className,
    [classes[type]]: true,
    [classes.bold]: bold
  });

  return (
    <Component {...other} className={classNames}>{children}</Component>
  );
};

Header.propTypes = {
  type: React.PropTypes.oneOf(['display', 'headline', 'title', 'subtitle', 'body', 'caption', 'footnote']),
  bold: React.PropTypes.bool
};

Header.defaultProps = {
  type: 'display',
  component: 'div'
};

export default useSheet(Header, styles);
