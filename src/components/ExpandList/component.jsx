import React from 'react';
import cx from 'classnames';
import useSheet from 'react-jss';

const styles = {
  expandList: {
    display: 'inline-block',
    marginTop: '1rem',
    fontSize: '1.8rem',
    cursor: 'pointer'
  },
  icon: {
    marginRight: '1rem',
    fontSize: '2rem'
  }
};

const ExpandList = ({ sheet, onClick, active, activeText, inactiveText, ...other }) => {
  const { classes } = sheet;
  const text = active ? activeText : inactiveText;
  const icon = cx({
    'ion-plus': !active,
    'ion-minus': active,
    [classes.icon]: true
  });

  return (
    <span {...other} className={classes.expandList} onClick={onClick}>
      <em className={icon} />{text}
    </span>
  );
};

ExpandList.propTypes = {
  active: React.PropTypes.bool,
  activeText: React.PropTypes.string,
  inactiveText: React.PropTypes.string
};

ExpandList.defaultProps = {
  activeText: 'See Less',
  inactiveText: 'See More'
};

export default useSheet(ExpandList, styles);
