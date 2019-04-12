import React from 'react';
import { shallow } from 'enzyme';
import ExpenseList from '../../components/ExpenseList';
import expenses from '../../test-data/expenses';
import {Provider} from 'react-redux';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<Provider><ExpenseList expenses={expenses} /></Provider>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<Provider><ExpenseList expenses={[]} /></Provider>);
  expect(wrapper).toMatchSnapshot();
});
