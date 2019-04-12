import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, deleteExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    console.log(expense)
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.deleteExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="edit-expense-page">
      <div className="bg-edit-expense-page"></div>
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Edit Your Expense</h1>
          </div>
        </div>
        <div className="container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button--remove" onClick={this.onRemove}>Remove Expense Forever</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  deleteExpense: (data) => dispatch(deleteExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);







// const EditExpensePage = (props) => {
//   return (
//     <div className="edit-expense-page">
//       <div className="bg-edit-expense-page"></div>
//         <div className="page-header">
//           <div className="container">
//             <h1 className="page-header__title">Edit Your Expense</h1>
//           </div>
//         </div>
//         <div className="container">
//           <ExpenseForm
//             expense={props.expense}
//             onSubmit={(expense) => {
//               props.dispatch(editExpense(props.expense.id, expense));
//               props.history.push('/');
//             }}
//           />
//           <button 
//             className="button--remove" 
//             onClick={() => {
//               props.dispatch(deleteExpense({ id: props.expense.id }));
//               props.history.push('/');
//             }}>Remove Expense Forever</button>
//         </div>
//       </div>
//   )
// };

// const mapStateToProps = (state, props) => ({
//   expense: state.expenses.expenses.find((expense) => expense.id === props.match.params.id)
// });

// export default connect(mapStateToProps)(EditExpensePage);


