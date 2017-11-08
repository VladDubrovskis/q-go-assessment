import React from 'react';
import './styles.css';
import { toggleFilter } from '../../logic/todosFilterState';

const Filter = ({ onFilterToggle, hideComplete }) => {
  return (
    <div className="filter-toggle">
      <button onClick={() => onFilterToggle()}>{hideComplete ? 'Show all' : 'Hide complete'}</button>
    </div>
  );
};

export const mapStateToProps = state => ({
  hideComplete: state.hideComplete
});

export const mapDispatchToProps = dispatch => ({
  onFilterToggle: () => dispatch(toggleFilter())
});

export default Filter;
