import React from 'react';
import CollapsingList from '../../CollapsingList/component';

function renderList(props) {
  return (
    <ul {...props}>
      {props.children}
    </ul>
  );
}

function renderCollapsingList(limit, props) {
  return (
    <CollapsingList {...props} limit={limit}>
      {props.children}
    </CollapsingList>
  );
}

const List = ({ collapse, ...other }) => {
  return collapse ? renderCollapsingList(collapse, other) : renderList(other);
};

List.propTypes = {
  collapse: React.PropTypes.number
};

// List.defaultProps = {};

export default List;
