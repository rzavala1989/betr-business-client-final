import React from 'react';
import { shallow } from 'enzyme';
import HeaderBar from '../../components/Header-bar';
import {Provider} from 'react-redux';




test('should render Header correctly', () => {
  const wrapper = shallow(<Provider><HeaderBar/></Provider>);
  expect(wrapper).toMatchSnapshot();
});
  