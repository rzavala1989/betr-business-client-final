import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import { Link } from 'react-router-dom';

export class HeaderBar extends React.Component {
    
    state = { show: false };
    logOut() {
      this.props.dispatch(clearAuth());
      clearAuthToken();
    }
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let helpModal;
        if (this.props.loggedIn) {
            logOutButton = (
              <button className="button button__logout" onClick={() => this.logOut()}>Log out</button>
            );
            helpModal = (
              <section className="modal-trigger">
                <Modal show={this.state.show} handleClose={this.hideModal} >
                  <h1>How to Do Betr Business</h1>
                  <ul>
                    <li>To add an expense:</li>
                      <ol>
                        <li>Choose the category of tax deductible example (Travel, Entertainment expenses, etc.)</li>
                        <li>Report the amount spent. Please verify via receipt/invoice</li>
                        <li>Record the date in which each expense applies</li>
                        <li>Please provide a detailed description (location, any pertinent details</li>
                      </ol>
                    <li>To edit or remove an expense:
                      <ol>
                          <li>Click an expense in order to update it</li>
                          <li>Edit or correct any field which may apply, or remove it altogether</li>
                      </ol>
                    </li>
                    <li>Each expense can be sorted by amount of date via the dashboard</li>
                    <li>Start date and End date filter must be entered manually in MM/DD/YYYY format</li>
                  </ul>
                </Modal>
                <button type='button' className="button-help" onClick={this.showModal}>Help!</button>
              </section>
            )
        }
        return (
            <header className="header-bar">
              <div className="container">
                <div className="header__links">
                  <img className="logo" alt="Do Betr Business website logo" src="/images/dbb-logo.png"/>
                  <Link className="header-bar__title" to="/dashboard">
                    <h1>Home Page</h1>
                  </Link>
                  <div className="header__right-links">
                    {logOutButton}
                    {helpModal}
                  </div>
                </div>
              </div>
            </header>
        );
    }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <div className="modal-content">
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
