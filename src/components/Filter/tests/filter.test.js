import React from 'react';
import { shallow, mount } from 'enzyme';
import Filter from '../index';

const defaultProps = {
  onFilterToggle: f => f,
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
});
