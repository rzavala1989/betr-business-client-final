import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './Login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h2 className="box-layout__title">Welcome to Do Betr Business!</h2>
                <br/>
                <h3>For demo purposes:</h3>
                <p>username: dbb-demo</p>
                <p>password: demopassword</p>
                <LoginForm />
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
