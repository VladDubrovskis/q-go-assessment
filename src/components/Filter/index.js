import React from 'react';
import './styles.css';

const Filter = ({ onFilterToggle }) => {
  return (
    <div className="filter-toggle">
      <button onClick={() => onFilterToggle()}>Toggle done items</button>
    </div>
  );
};

export default Filter;
