import React from 'react';
import './styles.css';

const Filter = ({ onFilterToggle, filter }) => {
  return (
    <div className="filter-toggle">
      <button onClick={() => onFilterToggle()}>{filter ? 'Show all' : 'Hide complete'}</button>
    </div>
  );
};

export default Filter;
