import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemsList } from '../index';

const defaultProps = {
  items: [],
  onDelete: f => f
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

  it('should render items as list items with button', () => {
    const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('li')).toHaveLength(2);
    expect(renderedItem.find('li').at(1).find('button')).toHaveLength(1);
  });

  it('should call onDelete with the according item id', () => {
      const onDeleteMock = jest.fn();
      const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }];
      const renderedItem = mount(
          <ItemsList {...defaultProps} items={items} onDelete={onDeleteMock} />
      );
      renderedItem.find('li').at(1).find('button').simulate('click');
      expect(onDeleteMock.mock.calls.length).toBe(1);
      expect(onDeleteMock.mock.calls[0][0]).toBe(2);
  });
});
