import React from 'react';
import './styles.css';

const Filter = ({ onFilterToggle, hideComplete }) => {
  return (
    <div className="filter-toggle">
      <button onClick={() => onFilterToggle()}>{hideComplete ? 'Show all' : 'Hide complete'}</button>
    </div>
  );
};

export const mapStateToProps = () => {};

export default Filter;
