import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../store/actions/loginActions';
import styled from 'styled-components';

const Navbar = ({ history, dispatch }) => {
  const logOutHandler = () => {
    history.push('/auth/login');
    return dispatch(logout());
  };

  return (
    <Wrapper>
      <h2>Navbar</h2>
      <button onClick={logOutHandler}>logout</button>
    </Wrapper>
  );
};

export default withRouter(connect()(Navbar));

const Wrapper = styled.div`
  border: solid red;
  padding-top: 80px; /* Needs to be exactly the same height as the Header, offsets content because it's fixed */
`;
