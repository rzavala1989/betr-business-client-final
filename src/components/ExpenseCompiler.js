import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotal from '../selectors/total-expenses';

export const ExpenseCompiler = ({ expenseCount, expensesTotal }) => {
  const numberOfWords = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotal = numeral(expensesTotal/100).format('$0,0.00');
  if (expenseCount === 0) {
    return (
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">You have no expenses! Spend some money</h1>
          <div className="page-header__add">
            <Link className="button button-db" to="/create">Add Business Expense</Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title"><span>{expenseCount}</span> {numberOfWords} totalling <span>{formattedTotal}</span></h1>
          <div className="page-header__add">
            <Link className="button" to="/create">Add Another Expense</Link>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseCompiler);
