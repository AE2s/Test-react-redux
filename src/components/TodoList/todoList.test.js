import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from './index';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    datas: ['test redux'],
  };

  const enzymeWrapper = shallow(<TodoList {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('TodoList', () => {
    it('should render TodoList subcomponents', () => {
      const { enzymeWrapper, props } = setup();

      expect(
        enzymeWrapper
          .find('div')
          .at(1)
          .hasClass('table-responsive'),
      ).toBe(true);
      expect(enzymeWrapper.find('TodoItem').exists()).toBe(true);
    });
  });
});
