import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './index';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    counter: 0,
    increment: jest.fn(),
    decrement: jest.fn(),
    changeCounter: jest.fn(),
    initializeCounter: jest.fn(),
  };

  const enzymeWrapper = shallow(<Home {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Home', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('h1').hasClass('display-4')).toBe(true);

      expect(enzymeWrapper.find('h1').text()).toBe('Test de react redux counter');
    });

    it('should call increment when clicking on + button', () => {
      const { enzymeWrapper, props } = setup();
      const addCounterButton = enzymeWrapper.find('#addCounter');
      addCounterButton.simulate('click');
      expect(props.increment.mock.calls.length).toEqual(1);
    });

    it('should call decrment when clicking on - button', () => {
      const { enzymeWrapper, props } = setup();
      const minusCounterButton = enzymeWrapper.find('#MinusCounter');
      minusCounterButton.simulate('click');
      expect(props.decrement.mock.calls.length).toEqual(1);
    });

    it('should call initializeCounter when clicking on initialize button', () => {
      const { enzymeWrapper, props } = setup();
      const InitializeCounterButton = enzymeWrapper.find('#InitializeCounter');
      InitializeCounterButton.simulate('click');
      expect(props.initializeCounter.mock.calls.length).toEqual(1);
    });

    it('should call ChangeCounter when clicking on ChangeCounter button', () => {
      const { enzymeWrapper, props } = setup();
      const ChangeCounterButton = enzymeWrapper.find('#ChangeCounter');
      ChangeCounterButton.simulate('click');
      expect(props.changeCounter.mock.calls.length).toEqual(1);
    });
  });
});
