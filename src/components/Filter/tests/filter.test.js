import React from 'react';
import { shallow, mount } from 'enzyme';
import Filter, { mapStateToProps } from '../index';

const defaultProps = {
  onFilterToggle: f => f,
  hideComplete: false
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

  it('button should say hide complete when hideComplete is false', () => {
    const renderedItem = mount(
      <Filter {...defaultProps} hideComplete={false} />
    );
    expect(renderedItem.find('button').props().children).toContain('Hide complete')
  });

  it('button should say show all when hideComplete is true', () => {
    const renderedItem = mount(
      <Filter {...defaultProps} hideComplete={true} />
    );
    expect(renderedItem.find('button').props().children).toContain('Show all')
  });

  it('mapStateToProps should return the property from state', () => {
    const state = {
      hideComplete: true
    };

    expect(mapStateToProps(state)).toEqual({
      hideComplete: state.hideComplete
    });
  });


});
