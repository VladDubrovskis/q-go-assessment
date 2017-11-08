jest.mock('../../../logic/todos');
jest.mock('../../../logic/todoFilter');

import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemsList, mapDispatchToProps, mapStateToProps } from '../index';
import { deleteItem, toggleItem } from '../../../logic/todos';
import todoFilter from '../../../logic/todoFilter';

const defaultProps = {
  items: [],
  onDelete: f => f,
  onToggle: f => f
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items with labelled checkbox and button', () => {
    const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('li')).toHaveLength(2);
    expect(renderedItem.find('li').at(1).find('button')).toHaveLength(1);
    expect(renderedItem.find('li').at(1).find('label')).toHaveLength(1);
    expect(renderedItem.find('li').at(1).find('input[type="checkbox"]')).toHaveLength(1);
  });

  it('should render complete items with strike through and checkbox ticked', () => {
    const items = [{ id: 1, content: 'Test 1', complete: false }, { id: 2, content: 'Test 2', complete: true }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('li')).toHaveLength(2);

    expect(renderedItem.find('li').at(0).find('button')).toHaveLength(1);
    expect(renderedItem.find('li').at(0).find('del')).toHaveLength(0);
    expect(renderedItem.find('li').at(0).find('input[type="checkbox"]').props().checked).toEqual(false);

    expect(renderedItem.find('li').at(1).find('button')).toHaveLength(1);
    expect(renderedItem.find('li').at(1).find('del')).toHaveLength(1);
    expect(renderedItem.find('li').at(1).find('input[type="checkbox"]').props().checked).toEqual(true);
  });

  it('should call onToggle with the according item id when label is clicked', () => {
    const onToggleMock = jest.fn();
    const items = [{ id: 1, content: 'Test 1', complete: true }, { id: 2, content: 'Test 2', complete: false }];
    const renderedItem = mount(
      <ItemsList {...defaultProps} items={items} onToggle={onToggleMock} />
    );
    renderedItem.find('li').at(1).find('input[type="checkbox"]').simulate('change');
    expect(onToggleMock.mock.calls.length).toBe(1);
    expect(onToggleMock.mock.calls[0][0]).toBe(2);
  });

  it('should call onDelete with the according item id when delete button is clicked', () => {
      const onDeleteMock = jest.fn();
      const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }];
      const renderedItem = mount(
          <ItemsList {...defaultProps} items={items} onDelete={onDeleteMock} />
      );
      renderedItem.find('li').at(1).find('button').simulate('click');
      expect(onDeleteMock.mock.calls.length).toBe(1);
      expect(onDeleteMock.mock.calls[0][0]).toBe(2);
  });

  it('mapDispatchToProps should return the expected actions', () => {
    const dispatchMock = jest.fn();
    const result = mapDispatchToProps(dispatchMock);

    const deleteTest = 'deleteTest';
    result.onDelete(deleteTest);
    expect(deleteItem).toHaveBeenCalledWith(deleteTest);
    expect(dispatchMock).toHaveBeenCalledTimes(1);

    const toggleTest = 'toggleTest';
    result.onToggle(toggleTest);
    expect(toggleItem).toHaveBeenCalledWith(toggleTest);
    expect(dispatchMock).toHaveBeenCalledTimes(2);
  });

  it('mapStateToProps should return the properties from state', () => {
    const state = {
      todos: {
        items: [1, 2, 3]
      },
      hideComplete: true
    };

    todoFilter.mockReturnValue(state.todos.items);
    expect(todoFilter).toHaveBeenCalledWith(state.todos.items, state.hideComplete);
    expect(mapStateToProps(state)).toEqual({
      items: state.todos.items
    });
  });
});
