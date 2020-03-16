import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Error from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
  describe('Error', () => {
    it('should render self and subcomponents', () => {
      const enzymeWrapper = shallow(<Error />);

      expect(enzymeWrapper.find('div').hasClass('alert alert-danger')).toBe(true);

      expect(enzymeWrapper.find('strong').text()).toBe('Erreur!');
    });
  });
});
