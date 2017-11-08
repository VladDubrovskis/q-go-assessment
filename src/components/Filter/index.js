import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleFilter } from '../../logic/todosFilterState';

export const Filter = ({ onFilterToggle, hideComplete }) => {
  return (
    <div className="filter-toggle">
      <button onClick={() => onFilterToggle()}>{hideComplete ? 'Show all' : 'Hide complete'}</button>
    </div>
  );
};

Filter.propTypes = {
  onFilterToggle: PropTypes.func.isRequired,
  hideComplete: PropTypes.bool.isRequired
};

export const mapStateToProps = state => ({
  hideComplete: state.hideComplete
});

export const mapDispatchToProps = dispatch => ({
  onFilterToggle: () => dispatch(toggleFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
