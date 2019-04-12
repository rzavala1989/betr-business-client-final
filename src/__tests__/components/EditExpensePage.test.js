import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../../test-data/expenses';
import EditExpensePage from '../../components/EditExpensePage';
import {Provider} from 'react-redux';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <Provider><EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[2]}
    /></Provider>
  );
});


test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});
