import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../store/actions/loginActions';

const Navbar = ({ history, dispatch }) => {
  const logOutHandler = () => {
    history.push('/auth/login');
    return dispatch(logout());
  };

  return (
    <div>
      <h2>Navbar</h2>
      <button onClick={logOutHandler}>logout</button>
    </div>
  );
};

export default withRouter(connect()(Navbar));
