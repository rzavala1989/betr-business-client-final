import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import{ postExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    console.log(expense);
    this.props.postExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="add-expense-page">
        <div className="bg-add-expense-page"></div>
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Add an Expense</h1>
          </div>
        </div>
        <div className="container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postExpense: (expense) => dispatch(postExpense(expense))
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
