import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/lib/css/_datepicker.css';


export class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div className="container">
        <div className="group">
          <div className="group__item">
            <input
              className="input--text"
              type="text"
              placeholder="Filter by Expense"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="group__item">
            <select
              className="input--select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Sort By Date</option>
              <option value="amount">Sort By Amount</option>
            </select>
          </div>
          <div className="group__item">
            <DateRangePicker
              startDatePlaceholderText= "MM/DD/YYYY"
              startDate={this.props.filters.startDate}
              endDatePlaceholderText= "MM/DD/YYYY"
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calenderFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);