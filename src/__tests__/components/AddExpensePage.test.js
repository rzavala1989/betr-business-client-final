import React from 'react';
import { shallow } from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../../test-data/expenses';
import {Provider} from 'react-redux';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<Provider><AddExpensePage history={history} /></Provider>);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});


