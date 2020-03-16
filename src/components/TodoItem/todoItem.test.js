import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoItem from './index';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    todo: { id: 1, userId: 1, title: 'test title', completed: false },
  };

  const enzymeWrapper = shallow(<TodoItem {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('TodoItem', () => {
    it('should render todoItem subcomponents', () => {
      const { enzymeWrapper, props } = setup();

      expect(enzymeWrapper.find('tr').exists()).toBe(true);
      expect(enzymeWrapper.find('Link').text()).toEqual(props.todo.title);
    });
  });
});
