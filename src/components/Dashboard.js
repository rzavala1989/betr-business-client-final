import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './Requires-login';
import {fetchExpenseData} from '../actions/expenses';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseCompiler from "./ExpenseCompiler";

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchExpenseData());
    }

    render() {
        return (
            <div className="dashboard">
            <div className="bg-dashboard"></div>
                <div className="dashboard-anim">
                    <div className="inline-block dashboard-name-1">Hello {this.props.name}!</div>
                    <div className="inline-block dashboard-name-2"><span>Let's do Betr Business</span></div>
                </div>
                <ExpenseCompiler/>
                <ExpenseListFilters />
                <ExpenseList />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
