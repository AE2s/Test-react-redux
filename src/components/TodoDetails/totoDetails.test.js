import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoDetails from './index';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    todo: { id: 1, userId: 1, title: 'test title', completed: false },
  };

  const enzymeWrapper = shallow(<TodoDetails {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('TodoDetails', () => {
    it('should render Error subcomponents', () => {
      const enzymeWrapper = shallow(<TodoDetails />);
      expect(enzymeWrapper.find('Error').exists()).toBe(true);
    });

    it('should render subcomponents', () => {
      const { enzymeWrapper, props } = setup();

      expect(enzymeWrapper.find('div').exists()).toBe(true);
      expect(enzymeWrapper.find('ul').hasClass('list-group')).toBe(true);
      expect(enzymeWrapper.find('h3').text()).toEqual(' Details of : ' + props.todo.title + ' ');
    });
  });
});
