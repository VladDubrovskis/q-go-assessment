import React from 'react';
import { shallow, mount } from 'enzyme';
import Filter from '../index';

const defaultProps = {
  onFilterToggle: f => f,
  filter: false
};

describe('Filter', () => {
  it('renders without crashing', () => {
    shallow(<Filter {...defaultProps} />);
  });

  it('should call onFilterToggle when button is clicked', () => {
    const onFilterToggleMock = jest.fn();
    const renderedItem = mount(
      <Filter {...defaultProps} onFilterToggle={onFilterToggleMock} />
    );
    renderedItem.find('button').simulate('click');
    expect(onFilterToggleMock.mock.calls.length).toBe(1);
  });

  it('button should say hide complete when filter is false', () => {
    const renderedItem = mount(
      <Filter {...defaultProps} filter={false} />
    );
    expect(renderedItem.find('button').props().children).toContain('Hide complete')
  });

  it('button should say show all when filter is true', () => {
    const renderedItem = mount(
      <Filter {...defaultProps} filter={true} />
    );
    expect(renderedItem.find('button').props().children).toContain('Show all')
  });
});
