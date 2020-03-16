import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
  describe('Loading', () => {
    it('should render self and subcomponents', () => {
      const enzymeWrapper = shallow(<Loading />);

      expect(
        enzymeWrapper
          .find('div')
          .at(0)
          .hasClass('d-flex justify-content-center'),
      ).toBe(true);

      expect(enzymeWrapper.find('span').text()).toBe('Loading...');
    });
  });
});
