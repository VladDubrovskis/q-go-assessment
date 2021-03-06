import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem, toggleItem } from '../../logic/todos';
import todoFilter from '../../logic/todoFilter';
import './styles.css';

export const ItemsList = ({ items, onDelete, onToggle }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map(item =>
          <li key={item.id}>
            <label htmlFor={`task-${item.id}`}>
              <input id={`task-${item.id}`} type="checkbox" checked={item.complete} onChange={() => {onToggle(item.id)}}></input>
              { item.complete ? <del>{item.content}</del> : item.content }
            </label>
            <button onClick={() => {onDelete(item.id)}}>Delete</button>
          </li>
        )}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export const mapStateToProps = state => {
  return { items: todoFilter(state.todos.items, state.hideComplete) };
};

export const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteItem(id)),
  onToggle: id => dispatch(toggleItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
