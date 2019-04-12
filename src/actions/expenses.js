// import uuid from 'uuid';  /* <---NOT NEEDED */

import {API_BASE_URL} from "../config";
import {normalizeResponseErrors} from './utils';

export const FETCH_EXPENSE_DATA_SUCCESS = "FETCH_EXPENSE_DATA_SUCCESS";
export const fetchExpenseDataSuccess = data => ({
  type: FETCH_EXPENSE_DATA_SUCCESS,
  data
});

export const FETCH_EXPENSE_DATA_ERROR = "FETCH_EXPENSE_DATA_ERROR";
export const fetchExpenseDataError = error => ({
  type: FETCH_EXPENSE_DATA_ERROR,
  error
});

export const fetchExpenseData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/expenses`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchExpenseDataSuccess(data)))
    .catch(err => {
      dispatch(fetchExpenseDataError(err));
    });
};

export const POST_EXPENSE_DATA_SUCCESS = "POST_EXPENSE_DATA_SUCCESS";
export const postExpenseDataSuccess = data => ({
  type: POST_EXPENSE_DATA_SUCCESS,
  data
});

export const POST_EXPENSE_DATA_ERROR = "POST_EXPENSE_DATA_ERROR";
export const postExpenseDataError = error => ({
  type: POST_EXPENSE_DATA_ERROR,
  error
});

export const postExpense = expense => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/expenses`, {
    method: "POST",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "Content-type": "application/json"
    },
    body: JSON.stringify(expense)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(postExpenseDataSuccess(data)))
    .catch(err => {
      dispatch(postExpenseDataError(err));
    });
};

export const EDIT_EXPENSE_SUCCESS = "EDIT_EXPENSE_SUCCESS";
export const editExpenseSuccess = (id, updates) => ({
  type: EDIT_EXPENSE_SUCCESS,
  id,
  updates
});

export const EDIT_EXPENSE_ERROR = "EDIT_EXPENSE_ERROR";
export const editExpenseError = error => ({
  type: EDIT_EXPENSE_ERROR,
  error
});

export const editExpense = (id, updates) => (dispatch, getState) => {
  updates.id = id;
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/expenses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(updates)
  })
    .then(res => dispatch(editExpenseSuccess(updates)))
    .catch(err => {
      dispatch(editExpenseError(err));
    });
};

export const DELETE_EXPENSE_SUCCESS =
  "DELETE_EXPENSE_SUCCESS";
export const deleteExpenseSuccess = ({id}) => ({
  type: DELETE_EXPENSE_SUCCESS,
  id
});

export const DELETE_EXPENSE_ERROR = "DELETE_EXPENSE_ERROR";
export const deleteExpenseError = error => ({
  type: DELETE_EXPENSE_ERROR,
  error
});

export const deleteExpense = ({id}) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/expenses/${id}`, {
    method: "DELETE",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => dispatch(deleteExpenseSuccess({id})));
};

// export const SET_SELECTED_EXPENSE = "SET_SELECTED_EXPENSE";
// export const setSelectedExpense = (expense, username) => ({
//   type: SET_SELECTED_EXPENSE,
//   expense,
//   username
// });

// ________________________________

// ADD_EXPENSE
// export const addExpense = (
//   {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });

// REMOVE_EXPENSE
// export const removeExpense = ({ id } = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// });

// EDIT_EXPENSE
// export const editExpense = (id, updates) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   updates
// });
