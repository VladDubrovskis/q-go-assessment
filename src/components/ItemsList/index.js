import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../../logic/todos';
import './styles.css';

export const ItemsList = ({ items, onDelete }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map(item =>
          <li key={item.id}>
            {item.content}<button onClick={() => {onDelete(item.id)}}>Delete</button>
          </li>
        )}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { items: state.todos.items };
};

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
