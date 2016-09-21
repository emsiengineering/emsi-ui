/* @flow */

import React from 'react';
import cx from 'classnames';
import useSheet from 'react-jss';

const styles = {
  alert: {
    marginTop: '2rem',
    maxWidth: '100%',
    borderRadius: '2px',
    padding: '2rem',
    verticalAlign: 'top',
    height: '100%',
    backgroundColor: '#fbf8e4',
    color: '#000'
  },
  title: {
    fontWeight: 700,
    display: 'block',
    verticalAlign: 'top',
    width: '100%',
    height: '100%'
  },
  message: {
    display: 'block',
    height: '100%'
  },
  error: {
    backgroundColor: '#ffe3e3',
    color: '#f13a3a'
  },
  '@media (min-width: 420px)': {
    title: {
      width: '20%',
      display: 'inline-block'
    },
    message: {
      width: '80%',
      display: 'inline-block'
    }
  },
  '@media (min-width: 720px)': {
    title: {
      width: '15%',
      display: 'inline-block'
    },
    message: {
      width: '85%',
      display: 'inline-block'
    }
  },
  '@media (min-width: 1100px)': {
    title: {
      width: '10%',
      display: 'inline-block'
    },
    message: {
      width: '90%',
      display: 'inline-block'
    }
  }
};

const Alert = ({ sheet, children, title, type }) => {
  const { classes } = sheet;

  const alertClasses = cx({
    [classes.alert]: true,
    [classes.error]: type === 'error' ? true : false
  });

  const linkClasses = cx({
    [classes.link]: true,
    [classes.error]: type === 'error' ? true : false
  });

  return (
    <div className={alertClasses}>
      <div className={classes.title}>
        {title}:
      </div>
      <div className={classes.message}>
        {children}
      </div>
    </div>
  );
};

Alert.propTypes = {
  title: React.PropTypes.string,
  type: React.PropTypes.oneOf(['error', 'alert'])
};

Alert.defaultProps = {
  type: 'alert'
};

export default useSheet(Alert, styles);
