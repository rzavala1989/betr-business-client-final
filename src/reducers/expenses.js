// Expenses Reducer
import {
  FETCH_EXPENSE_DATA_SUCCESS,
  FETCH_EXPENSE_DATA_ERROR,
  POST_EXPENSE_DATA_SUCCESS,
  POST_EXPENSE_DATA_ERROR,
  EDIT_EXPENSE_SUCCESS,
  EDIT_EXPENSE_ERROR,
  DELETE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_ERROR
} from "../actions/expenses";

const initialState = {
  expenses: []
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_EXPENSE_DATA_SUCCESS) {
    return Object.assign({}, state, { expenses: action.data, error: null });
  }
  if (action.type === FETCH_EXPENSE_DATA_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }
  if (action.type === POST_EXPENSE_DATA_SUCCESS) {
    return Object.assign({}, state, {
      expenses: [...state.expenses, action.data],
      error: null
    });
  }
  if (action.type === POST_EXPENSE_DATA_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }
  if (action.type === EDIT_EXPENSE_SUCCESS) {
    return Object.assign({}, state, {
      expenses: state.expenses.map(
        expense =>
          expense.id === action.id ? action.updates: expense
      )
    });
  }
  if (action.type === EDIT_EXPENSE_ERROR) {
    return Object.assign({}, state, { expenses: action.error });
  }
  if (action.type === DELETE_EXPENSE_SUCCESS) {
    return Object.assign({}, state, {
      ...state.expenses.slice(0, action.index),
      ...state.expenses.slice(action.index + 1)
    });
  }
  if (action.type === DELETE_EXPENSE_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }
  return state;
}

