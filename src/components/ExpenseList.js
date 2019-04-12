import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="container">
    <div className="list-header">
      <div className="mobile">Expenses</div>
      <div className="full-screen">Expense</div>
      <div className="full-screen">Details</div>
      <div className="full-screen">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item__none">
            <span>No listed expenses</span>
          </div>
        ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
