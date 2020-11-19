import React from 'react';
import { Route } from 'react-router-dom';
import Error from '../pages/Error';

/* Styled Components */
import styled from 'styled-components';

/* Components */
import Feed from '../pages/Feed';
import Navbar from '../components/Navbar';

const PagesRoutes = (props) => {
  const path = props.location.pathname;
  return (
    <PagesWrapper>
      {path === '/' ? <Navbar /> : <Error />}
      <Route path="/" exact component={Feed} />
    </PagesWrapper>
  );
};

export default PagesRoutes;

const PagesWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
