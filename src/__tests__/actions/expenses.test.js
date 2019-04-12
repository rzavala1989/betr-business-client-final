import { 
  FETCH_EXPENSE_DATA_SUCCESS,
  fetchExpenseDataSuccess,
  FETCH_EXPENSE_DATA_ERROR,
  fetchExpenseDataError,
  POST_EXPENSE_DATA_SUCCESS,
  postExpenseDataSuccess,
  POST_EXPENSE_DATA_ERROR,
  postExpenseDataError,
  EDIT_EXPENSE_SUCCESS,
  editExpenseSuccess,
  EDIT_EXPENSE_ERROR,
  editExpenseError,
  DELETE_EXPENSE_SUCCESS,
  deleteExpenseSuccess,
  DELETE_EXPENSE_ERROR,
  deleteExpenseError

} from '../../actions/expenses';

describe("fetchExpenseDataSuccess", () => {
  it("Should return the action", () => {
    const data = "expense data";
    const action = fetchExpenseDataSuccess(data);
    expect(action.type).toEqual(FETCH_EXPENSE_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe("fetchExpenseDataError", () => {
  it("Should return the action", () => {
    const error = "expense error";
    const action = fetchExpenseDataError(error);
    expect(action.type).toEqual(FETCH_EXPENSE_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("postExpenseDataSuccess", () => {
  it("Should return the action", () => {
    const data = "expense data";
    const action = postExpenseDataSuccess(data);
    expect(action.type).toEqual(POST_EXPENSE_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe("postExpenseDataError", () => {
  it("Should return the action", () => {
    const error = "Expense error";
    const action = postExpenseDataError(error);
    expect(action.type).toEqual(POST_EXPENSE_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("editExpenseSuccess", () => {
  it("Should return the action", () => {
    const updates = "updates";;
    const action = editExpenseSuccess(updates);
    expect(action.type).toEqual(EDIT_EXPENSE_SUCCESS);
  });
});

describe("editExpenseError", () => {
  it("Should return the action", () => {
    const error = "error";
    const action = editExpenseError(error);
    expect(action.type).toEqual(EDIT_EXPENSE_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("deleteExpenseSuccess", () => {
  it("Should return the action", () => {
    const data = "expense data";
    const action = deleteExpenseSuccess(data);
    expect(action.type).toEqual(DELETE_EXPENSE_SUCCESS);
  });
});

describe("deleteExpenseError", () => {
  it("Should return the action", () => {
    const error = "property error";
    const action = deleteExpenseError(error);
    expect(action.type).toEqual(DELETE_EXPENSE_ERROR);
    expect(action.error).toEqual(error);
  });
});



// test('should setup remove expense action object', () => {
//   const action = deleteExpense({ id: '123abc' });
//   expect(action).toEqual({
//     type: 'REMOVE_EXPENSE',
//     id: '123abc'
//   });
// });

// // test('should setup edit expense action object', () => {
// //   const action = editExpense('123abc', { note: 'New note value' });
// //   expect(action).toEqual({
// //     type: 'EDIT_EXPENSE',
// //     id: '123abc',
// //     updates: {
// //       note: 'New note value'
// //     }
// //   });
// // });

// test('should setup add expense action object with provided values', () => {
//   const expenseData = {
//     description: 'Rent',
//     amount: 109500,
//     createdAt: 1000,
//     note: 'This was last months rent'
//   };
//   const action = addExpense(expenseData);
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expenseData,
//       id: expect.any(String)
//     }
//   });
// });

// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });
