import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
// import {fetchExpenseData} from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, note }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <div>
      <p className="list-item__subtitle">{note}</p>
    </div>
    <p className="list-item__amount">
      {numeral(amount / 100).format('$0,0.00')} 
    </p>
  </Link>
);

export default ExpenseListItem;
