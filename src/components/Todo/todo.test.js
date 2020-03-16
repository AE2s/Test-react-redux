import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Todo from './index';
import { renderHook } from '@testing-library/react-hooks';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    todosProps: { todos: [], loading: false, errors: null },
    todosData: jest.fn(),
  };

  const enzymeWrapper = shallow(<Todo {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Todo', () => {
    it('should render loading subcomponents', () => {
      const props = {
        todosProps: { todos: [], loading: true, errors: null },
        todosData: jest.fn(),
      };
      const enzymeWrapper = shallow(<Todo {...props} />);

      expect(enzymeWrapper.find('Loading').exists()).toBe(true);
    });

    it('should render TodoList subcomponents', () => {
      const props = {
        todosProps: { todos: [], loading: false, errors: null },
        todosData: jest.fn(),
      };
      const enzymeWrapper = shallow(<Todo {...props} />);

      expect(enzymeWrapper.find('TodoList').exists()).toBe(true);
    });

    it('should have good props to todoList components', () => {
      const props = {
        todosProps: { todos: ['test redux'], loading: false, errors: null },
        todosData: jest.fn().mockResolvedValue(['test redux']),
      };

      const { result } = renderHook(() => Todo({ ...props }));

      expect(props.todosData).toBeCalledTimes(1);

      expect(result.current.props.datas).toEqual(['test redux']);
      expect(result.current.props.errors).toEqual(null);
    });
  });
});
